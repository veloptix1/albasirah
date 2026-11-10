        const { data: { user } } = await supabase.auth.getUser();
        if (user) {
          await supabase.from("push_subscriptions").delete()
            .eq("endpoint", sub.endpoint).eq("user_id", user.id);
        }
    <div className="bg-white rounded-2xl p-6 border border-line">
          <div className="text-xs text-muted">
            ? "bg-white text-terracotta border border-terracotta/20 hover:bg-terracotta/5"
