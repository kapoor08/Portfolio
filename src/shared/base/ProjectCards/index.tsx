import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useTheme } from "@/provider/theme-provider";
import { AppButton } from "@/shared/elements";
import { ExternalLink, Github } from "lucide-react";

export interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    image?: string;
    technologies?: string[];
    github?: string;
    live?: string;
    category?: string;
    featured?: boolean;
  };
}

const ProjectCards = ({ project }: ProjectCardProps) => {
  const { actualTheme } = useTheme();
  return (
    <Card
      className={cn(
        "group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden",
        actualTheme === "dark" ? "bg-slate-700 border-slate-600" : "bg-white"
      )}
    >
      <div className="relative overflow-hidden">
        <img
          src={project.image ?? "https://picsum.photos/800/600"}
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
      </div>
      <CardHeader>
        <CardTitle
          className={cn(
            "text-xl",
            actualTheme === "dark" ? "text-white" : "text-slate-800"
          )}
        >
          {project.title}
        </CardTitle>
        <CardDescription
          className={
            actualTheme === "dark" ? "text-slate-300" : "text-slate-600"
          }
        >
          {project.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies?.map((tech: string, idx: number) => (
            <Badge
              key={idx}
              variant={actualTheme === "dark" ? "outline" : "secondary"}
              className={cn(
                "text-xs",
                actualTheme === "dark" && "border-slate-500 text-slate-300"
              )}
            >
              {tech}
            </Badge>
          ))}
        </div>
        <div className="flex gap-2">
          <AppButton
            variant="outline"
            size="sm"
            className="flex-1"
            icon={<Github className="mr-2 h-4 w-4" />}
          >
            Code
          </AppButton>
          <AppButton
            size="sm"
            className={cn(
              "flex-1",
              actualTheme === "dark" && "bg-blue-600 hover:bg-blue-700"
            )}
            icon={<ExternalLink className="mr-2 h-4 w-4" />}
          >
            Live Demo
          </AppButton>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCards;
