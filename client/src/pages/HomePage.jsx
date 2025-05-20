
import { Link } from "react-router-dom";
import { ExternalLink, Calendar, ChevronRight, Filter, BookmarkCheck, Code } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { getUpcomingContests } from "../services/api";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";

export default function HomePage() {
  const [recentContests, setRecentContests] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const feedbackContainerRef = useRef(null);

  useEffect(() => {
    const fetchContests = async () => {
      try {
        setIsLoading(true);
        const data = await getUpcomingContests();
        const sorted = data.sort((a, b) => {
          return new Date(a.startTime) - new Date(b.startTime);
        }).slice(0, 3);
        
        setRecentContests(sorted);
        setIsLoading(false);
      } catch (err) {
        console.error("Failed to fetch upcoming contests:", err);
        setError("Failed to load upcoming contests.");
        setIsLoading(false);
      }
    };

    fetchContests();
  }, []);

  // Create a separate effect for the feedback wall to isolate it
  useEffect(() => {
    if (!feedbackContainerRef.current) return;
    
    // Create an iframe to isolate the feedback widget
    const iframe = document.createElement('iframe');
    iframe.style.width = '100%';
    iframe.style.height = '600px';
    iframe.style.border = 'none';
    iframe.title = "User Feedback";
    
    feedbackContainerRef.current.appendChild(iframe);
    
    // Write the feedback wall HTML to the iframe
    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    iframeDoc.open();
    iframeDoc.write(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Feedback</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ArnabChatterjee20k/feedbackio-widget@master/wall-of-fame-cdn/wall-style.css">
      </head>
      <body>
        <div id="feedbackio-wall-of-fame" data-spaceid="67f160900029347056e0"></div>
        <script type="module" src="https://cdn.jsdelivr.net/gh/ArnabChatterjee20k/feedbackio-widget@latest/wall-of-fame-cdn/wall-bundle.js"></script>
      </body>
      </html>
    `);
    iframeDoc.close();
    
    return () => {
      if (feedbackContainerRef.current && feedbackContainerRef.current.contains(iframe)) {
        feedbackContainerRef.current.removeChild(iframe);
      }
    };
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="animate-fade-in">
      <section className="py-14 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                No. #1 DSA/CP Contest Tracker
              </div>
              <br /> <br />
              <div>
                <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl'>Algo<span className='text-[#F83002]'>Sprint</span></h1>
              </div>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Track upcoming and past coding contests from Codeforces, CodeChef, and LeetCode. 
                <br /> <br />
                <i>Never miss a contest again!</i>
                <br /> <br /> <br />
              </p>
              <div className="flex flex-col gap-4 w-full sm:flex-row sm:gap-4">
                <Link
                  to="/upcoming"
                  className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Upcoming Contests
                </Link>
                <Link
                  to="/past"
                  className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-md border border-input bg-background px-6 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Browse Past Contests
                </Link>
              </div>
            </div>
            <div className="mx-auto max-w-[500px] lg:mx-28 w-full h-full lg:flex-1">
              <div className="rounded-xl bg-card border border-border p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Next Contests</h3>
                  <Link to="/upcoming" className="text-sm text-primary inline-flex items-center">
                    View all <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
                
                {isLoading ? (
                  <LoadingSpinner />
                ) : error ? (
                  <ErrorMessage message={error} />
                ) : (
                  <div className="space-y-3">
                    {recentContests.map((contest) => (
                      <a 
                        key={`${contest.platform}-${contest.id || contest.code || Date.now()}`} 
                        href={contest.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <div className="flex items-start space-x-3 p-3 rounded-lg bg-background hover:bg-accent/50 transition-colors">
                          <div className={`p-2 rounded-lg ${
                            contest.platform.toLowerCase() === 'codeforces' ? 'bg-platforms-codeforces/10 text-platforms-codeforces' :
                            contest.platform.toLowerCase() === 'codechef' ? 'bg-platforms-codechef/10 text-platforms-codechef' :
                            'bg-platforms-leetcode/10 text-platforms-leetcode'
                          }`}>
                            <Code className="h-5 w-5" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-medium truncate">{contest.name}</p>
                            <div className="flex items-center mt-1 text-xs text-muted-foreground">
                              <Calendar className="h-3 w-3 mr-1" />
                              <span>{formatDate(contest.startTime)}</span>
                            </div>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS SECTION - Now using an iframe to isolate the widget */}
      <section className="bg-secondary/50 py-14 w-full mt-10">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter mb-6 text-center">User Reviews</h2>
          <div 
            ref={feedbackContainerRef}
            className="feedback-container rounded-xl overflow-hidden"
          ></div>
        </div>
      </section>
      



      <section className="py-12 mt-16 mb-24 md:py-20">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter mb-2">
            Review Us Now !!
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            It takes just 10 secs...
          </p>
          <div className="mt-8 justify-center flex flex-col gap-4 w-full max-w-md mx-auto sm:flex-row sm:gap-4">
            <Link
              to="https://feedback-io-beta.vercel.app//67f160900029347056e0/landing-page"
              target="_blank"
              className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Review ❤️
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-secondary/50 py-14 w-full">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl bg-card p-6 shadow-sm">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-4">
                <Calendar className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium mb-2">Contest Calendar</h3>
              <p className="text-muted-foreground">
                Keep track of all upcoming competitive programming contests from major platforms.
              </p>
            </div>
            
            <div className="rounded-xl bg-card p-6 shadow-sm">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-4">
                <Filter className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium mb-2">Filter Contests</h3>
              <p className="text-muted-foreground">
                Focus on specific platforms with our easy-to-use filtering system.
              </p>
            </div>
            
            <div className="rounded-xl bg-card p-6 shadow-sm">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-4">
                <BookmarkCheck className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium mb-2">Bookmark Contests</h3>
              <p className="text-muted-foreground">
                Save contests you're interested in and access them easily later.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12 md:py-20">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
            <br /> <br />
            Get Started Today
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            <br />
            Improve your competitive programming skills by participating in contests regularly.
            <br /> <br />
          </p>
          <div className="mt-8 justify-center flex flex-col gap-4 w-full max-w-md mx-auto sm:flex-row sm:gap-4">
            <Link
              to="/upcoming"
              className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Browse Contests
            </Link>
            <a
              href="https://github.com/adityasharmawork/algosprint"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-md border border-input bg-background px-6 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              <span className="mr-2">View on GitHub</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
          <br />
        </div>
      </section>
    </div>
  );
}