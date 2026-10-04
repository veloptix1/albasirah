export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <div style={{ padding: 40, fontFamily: "sans-serif" }}>
      <h1>Page savant : {slug}</h1>
      <a href="/audio/savants">← Retour</a>
    </div>
  );
}