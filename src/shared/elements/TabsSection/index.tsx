import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { useTheme } from "@/provider/theme-provider";
import { ProjectCards } from "@/shared/base";

const categoryMap: Record<string, string[]> = {
  backend: ["backend", "database"],
  frontend: ["frontend"],
};

export interface TabItem {
  value: string;
  label: string;
}

export interface CardItem {
  title: string;
  description: string;
  image?: string;
  technologies?: string[];
  github?: string;
  live?: string;
  category?: string;
  featured?: boolean;
}

export interface BarItem {
  name: string;
  level: number;
  category?: string;
}

export type TabDataItem = CardItem | BarItem;

export interface TabsSectionProps {
  tabs: TabItem[];
  data: TabDataItem[];
  type: "cards" | "bars";
}

function TabsSection({ tabs, data, type }: TabsSectionProps) {
  const { theme: actualTheme } = useTheme();

  const renderCards = (items: CardItem[]) =>
    items.map((project, index) => (
      <ProjectCards key={index} project={project} />
    ));

  const renderBars = (items: BarItem[]) =>
    items.map((skill, index) => (
      <div key={index} className="space-y-2">
        <div className="flex justify-between">
          <span
            className={cn(
              "font-medium",
              actualTheme === "dark" ? "text-white" : "text-slate-800"
            )}
          >
            {skill.name}
          </span>
          <span
            className={cn(
              actualTheme === "dark" ? "text-slate-400" : "text-slate-600"
            )}
          >
            {skill.level}%
          </span>
        </div>
        <div
          className={cn(
            "w-full rounded-full h-2",
            actualTheme === "dark" ? "bg-slate-700" : "bg-slate-200"
          )}
        >
          <div
            className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000"
            style={{ width: `${skill.level}%` }}
          />
        </div>
      </div>
    ));

  return (
    <Tabs defaultValue="all" className="w-full mb-8">
      <div className="flex justify-center">
        <TabsList
          className={cn(
            "transition-colors duration-300",
            actualTheme === "dark" || actualTheme === "system"
              ? type === "bars"
                ? "!bg-slate-800"
                : "!bg-slate-700"
              : type === "bars"
              ? "!bg-slate-300"
              : "!bg-slate-200"
          )}
        >
          {tabs.map(({ value, label }) => (
            <TabsTrigger
              key={value}
              value={value}
              className={cn(
                "rounded-md px-4 py-2",
                actualTheme === "dark"
                  ? "data-[state=active]:bg-slate-500 data-[state=active]:text-slate-50"
                  : "data-[state=active]:bg-white data-[state=active]:text-black"
              )}
            >
              {label}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>

      {tabs.map(({ value }) => {
        let items: TabDataItem[];

        if (value === "all") {
          items = data;
        } else if (value === "other") {
          // Exclude all items in known mapped categories
          const allMappedCategories = Object.values(categoryMap).flat();
          items = data.filter(
            (item) =>
              !allMappedCategories.includes(
                (item as CardItem | BarItem).category ?? ""
              )
          );
        } else {
          const categoriesToMatch = categoryMap[value] ?? [value];

          items = data.filter((item) => {
            const category = (item as CardItem | BarItem).category;
            if (Array.isArray(category)) {
              return category.some((c) => categoriesToMatch.includes(c));
            }
            return category ? categoriesToMatch.includes(category) : false;
          });
        }

        return (
          <TabsContent key={value} value={value} className="mt-8">
            <div
              className={
                type === "cards"
                  ? "grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                  : "grid md:grid-cols-2 gap-8"
              }
            >
              {type === "cards"
                ? renderCards(items as CardItem[])
                : renderBars(items as BarItem[])}
            </div>
          </TabsContent>
        );
      })}
    </Tabs>
  );
}

export default TabsSection;
