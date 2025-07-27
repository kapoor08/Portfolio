import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { useTheme } from "@/provider/theme-provider";
import { AMO } from "@/core";
import { ArrowRight } from "lucide-react";
import { AppButton } from "@/shared/elements";
import { SectionHeader } from "@/shared/base";

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
        <SectionHeader
          title="Latest Articles"
          titleClassName={cn(
            "text-4xl font-bold mb-4 transition-colors duration-300",
            actualTheme === "dark" ? "text-white" : "text-slate-800"
          )}
          subtitle="Thoughts, tutorials, and insights about web development"
          subtitleClassName={cn(
            "text-lg transition-colors duration-300",
            actualTheme === "dark" ? "text-slate-300" : "text-slate-600"
          )}
        />

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
                <AppButton
                  variant="link"
                  className={cn(
                    "p-0 h-auto transition-colors duration-300 cursor-pointer bg-transparent text-sm",
                    actualTheme === "dark"
                      ? "text-blue-400 hover:text-blue-300"
                      : "text-blue-600 hover:text-blue-800"
                  )}
                  onClick={() => window.open(post.link, "_blank")}
                  icon={<ArrowRight />}
                  iconPosition="right"
                >
                  Read More
                </AppButton>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestArticlesSection;
