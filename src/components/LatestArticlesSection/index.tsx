import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { useTheme } from "@/provider/theme-provider";
import { AMO } from "@/core";

const LatestArticlesSection = () => {
  const { actualTheme } = useTheme();
  const { data } = AMO.portfolio.medium.useGetMediumPosts();

  return (
    <section
      id="blog"
      className={cn(
        "py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300",
        actualTheme === "dark" ? "bg-slate-900" : "bg-slate-50"
      )}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className={cn(
              "text-4xl font-bold mb-4 transition-colors duration-300",
              actualTheme === "dark" ? "text-white" : "text-slate-800"
            )}
          >
            Latest Articles
          </h2>
          <p
            className={cn(
              "text-lg transition-colors duration-300",
              actualTheme === "dark" ? "text-slate-300" : "text-slate-600"
            )}
          >
            Thoughts, tutorials, and insights about web development
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {data?.data?.map((post, index) => (
            <Card
              key={index}
              className={cn(
                "group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden",
                actualTheme === "dark"
                  ? "bg-slate-700 border-slate-600"
                  : "bg-white"
              )}
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.coverImage || "https://picsum.photos/800/600"}
                  alt={post.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
              </div>
              <CardHeader>
                <div
                  className={cn(
                    "text-sm mb-2 transition-colors duration-300",
                    actualTheme === "dark" ? "text-slate-400" : "text-slate-500"
                  )}
                >
                  {post.pubDate}
                </div>
                <CardTitle
                  className={cn(
                    "text-xl transition-colors duration-300",
                    actualTheme === "dark" ? "text-white" : "text-slate-800"
                  )}
                >
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p
                  className={cn(
                    "mb-4 transition-colors duration-300",
                    actualTheme === "dark" ? "text-slate-300" : "text-slate-600"
                  )}
                >
                  {post.description}
                </p>
                <Button
                  variant="link"
                  className={cn(
                    "p-0 h-auto transition-colors duration-300 cursor-pointer",
                    actualTheme === "dark"
                      ? "text-blue-400 hover:text-blue-300"
                      : "text-blue-600 hover:text-blue-800"
                  )}
                  onClick={() => window.open(post.link, "_blank")}
                >
                  Read More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-1 h-4 w-4"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestArticlesSection;
