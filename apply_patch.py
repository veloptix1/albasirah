import re, os, sys

PATCH = "boutique-securite-design.patch"

with open(PATCH, "r", encoding="utf-8", errors="replace") as f:
    lines = f.readlines()

# Parse sections
files = {}          # path -> list of new lines
deleted = set()     # paths to delete
current = None
in_body = False
skip_file = False

i = 0
while i < len(lines):
    line = lines[i]
    if line.startswith("diff --git "):
        in_body = False
        skip_file = False
        # extract b/ path
        m = re.match(r"diff --git a/(\S+) b/(\S+)", line)
        if m:
            current = m.group(2)
        else:
            current = None
        files[current] = []
    elif line.startswith("new file mode"):
        pass
    elif line.startswith("deleted file mode"):
        if current:
            deleted.add(current)
        skip_file = True
    elif line.startswith("GIT binary patch") or line.startswith("Binary files"):
        if current:
            skip_file = True
            # remove any captured content
            files.pop(current, None)
    elif line.startswith("@@"):
        in_body = True
    elif in_body and current and not skip_file:
        if line.startswith("+") and not line.startswith("+++"):
            files[current].append(line[1:])
    i += 1

# Apply
def target_path(p):
    if p.startswith("src/"):
        return p[4:]
    return p

applied = 0
for path, content in files.items():
    if path is None:
        continue
    tp = target_path(path)
    if path in deleted:
        if os.path.exists(tp):
            os.remove(tp)
            print(f"DELETED {tp}")
        continue
    os.makedirs(os.path.dirname(tp) or ".", exist_ok=True)
    with open(tp, "w", encoding="utf-8") as f:
        f.writelines(content)
    print(f"WRITTEN {tp}")
    applied += 1

print(f"\n{applied} fichiers écrits.")
