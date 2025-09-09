import { useEffect, useState } from "react";
import { ExternalLink, Star, RefreshCw } from "lucide-react";

const FEEDBACK_API = "https://feedback-io-beta.vercel.app/api/67f160900029347056e0/wall-of-fame";
const FALLBACK_AVATAR = "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png";

function formatDate(dateString) {
  if (!dateString) return "";
  const d = new Date(dateString);
  return d.toLocaleString("en-GB", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function StarRow({ value = 0 }) {
  return (
    <div className="flex items-center space-x-1" aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < value ? "text-yellow-400" : "text-muted-foreground"}`}
        />
      ))}
    </div>
  );
}

function LoadingCard() {
  return <div className="animate-pulse rounded-xl border border-border bg-card p-4 h-36" />;
}

function FeedbackCard({ item }) {
  return (
    <article
      className="group rounded-xl border border-border bg-card p-4 shadow-sm hover:shadow-md transition-shadow"
      aria-labelledby={`feedback-${item.id}`}>
      <div className="flex items-start gap-3">
        <img
          src={item.avatar || FALLBACK_AVATAR}
          alt={`${item.name || "User"} avatar`}
          className="h-12 w-12 rounded-md object-cover flex-shrink-0"
        />

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between">
            <div className="truncate">
              <h4 id={`feedback-${item.id}`} className="font-medium truncate">
                {item.name || item.tag || "Anonymous"}
                {item.wall_of_fame && (
                  <span className="ml-2 inline-block rounded px-2 py-0.5 text-xs font-semibold bg-primary/10 text-primary">
                    Wall of Fame
                  </span>
                )}
              </h4>
              <div className="text-xs text-muted-foreground mt-0.5">
                {item.isTwitter ? item.tag || item.url : formatDate(item.date)}
              </div>
            </div>

            {item.url ? (
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-3 inline-flex items-center gap-1 text-sm text-primary hover:underline"
                aria-label="Open original feedback">
                <ExternalLink className="h-4 w-4" />
              </a>
            ) : null}
          </div>

          <div className="mt-3 text-sm text-foreground whitespace-pre-wrap">{item.content || item.feedback || "—"}</div>

          {item.contentImage ? (
            <div className="mt-3">
              <img src={item.contentImage} alt="feedback attachment" className="max-h-40 w-full rounded-md object-cover border" />
            </div>
          ) : null}

          {typeof item.stars === "number" ? (
            <div className="mt-3 flex items-center justify-between">
              <StarRow value={item.stars} />
              <div className="text-xs text-muted-foreground">{formatDate(item.date)}</div>
            </div>
          ) : (
            <div className="mt-3 text-xs text-muted-foreground">{item.isTwitter ? formatDate(item.date) : ""}</div>
          )}
        </div>
      </div>
    </article>
  );
}

export default function FeedbackWall() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refreshingToggle, setRefreshingToggle] = useState(false);

  useEffect(() => {
    let mounted = true;
    async function fetchFeedback() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(FEEDBACK_API, { method: "GET" });
        if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);
        const json = await res.json();
        const raw = Array.isArray(json.feedbacks) ? json.feedbacks : [];

        const normalized = raw.map((f) => {
          const isTwitter = !!(f.type === "twitter" || f.userProfilePicture || f.tag || f.url);
          return {
            id: f.$id || f.id || Math.random().toString(36).slice(2, 9),
            name: f.name || f.tag || "Anonymous",
            avatar: f.userProfilePicture || f.avatar || null,
            date: f.$createdAt || f.createdAt || f.created_at || null,
            content: f.content || f.feedback || "",
            feedback: f.feedback || f.content || "",
            stars: typeof f.stars === "number" ? f.stars : typeof f.rating === "number" ? f.rating : undefined,
            url: f.url || null,
            isTwitter,
            tag: f.tag || null,
            contentImage: f.contentImage || f.image || "",
            wall_of_fame: !!f.wall_of_fame,
          };
        });

        normalized.sort((a, b) => {
          const da = a.date ? new Date(a.date).getTime() : 0;
          const db = b.date ? new Date(b.date).getTime() : 0;
          return db - da;
        });

        if (!mounted) return;
        setData(normalized);
      } catch (err) {
        console.error("Feedback fetch error:", err);
        setError("Failed to load feedback. Try again later.");
      } finally {
        if (mounted) setLoading(false);
      }
    }

    fetchFeedback();
    return () => (mounted = false);
  }, [refreshingToggle]);

  return (
    <section className="bg-secondary/50 py-14 w-full">
      <div className="container px-4 md:px-6">
        <div className="flex items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter">User Reviews</h2>
            <p className="text-muted-foreground mt-1">All feedback — social posts and direct reviews, shown below.</p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setRefreshingToggle((p) => !p)}
              className="inline-flex items-center gap-2 rounded-md border border-input bg-background px-3 py-2 text-sm hover:bg-accent transition"
              title="Refresh feedback">
              <RefreshCw className="h-4 w-4" />
              Refresh
            </button>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => <LoadingCard key={i} />)
            : data.length === 0
            ? (
              <div className="col-span-full rounded-xl border border-border bg-card p-6 text-center text-muted-foreground">No feedback to show yet.</div>
            )
            : data.map((item) => <FeedbackCard key={item.id} item={item} />)}
        </div>

        {error && (
          <div className="mt-4 rounded-md bg-red-50 border border-red-200 p-3 text-red-700">
            <strong>Error:</strong> {error}
          </div>
        )}
      </div>
    </section>
  );
}
