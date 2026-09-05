import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { ArrowUpRight, GitBranch } from "lucide-react";
import { Badge } from "../ui/badge";

interface ProjectCardProps {
  title: string;
  desc: string;
  technologies: string[];
  git?: string;
  live: string;
}

const ProjectCard = ({
  title,
  desc,
  technologies,
  git,
  live,
}: ProjectCardProps) => {
  return (
    <Card className="group flex h-full flex-col border-primary/15 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10">
      <CardHeader>
        <CardTitle className="font-heading text-2xl font-semibold text-primary">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent className="flex flex-1 flex-col">
        <p className="leading-7 text-foreground/75">{desc}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <Badge
              key={technology}
              className="bg-primary/10 text-primary transition-colors duration-200 hover:bg-primary hover:text-white"
            >
              {technology}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="mt-4 flex items-center justify-end gap-3 border-t border-primary/10 pt-4">
        {git && (
          <Link
            href={git}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${title} source code`}
            className="rounded-md p-2 text-foreground/70 transition-colors duration-200 hover:bg-primary/10 hover:text-primary"
          >
            <GitBranch className="size-5" />
          </Link>
        )}

        <Link
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${title} live website`}
          className="rounded-md p-2 text-foreground/70 transition-colors duration-200 hover:bg-primary/10 hover:text-primary"
        >
          <ArrowUpRight className="size-5" />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
