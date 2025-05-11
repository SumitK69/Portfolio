import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ExternalLink, Github, ChevronDown, ChevronUp } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  techStack: string[];
  demoLink?: string;
  repoLink?: string;
  category?: string;
}

const ProjectCard = ({
  title = "Project Title",
  description = "A short description of the project showcasing key features and technologies used.",
  longDescription = "This is a more detailed description of the project that explains the problem it solves, the approach taken, and the technologies used in more detail. It provides context about why the project was built and what makes it interesting or challenging.",
  image = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
  techStack = ["React", "TypeScript", "Tailwind CSS"],
  demoLink = "https://example.com",
  repoLink = "https://github.com",
  category = "Software Development",
}: ProjectCardProps) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="w-full bg-background"
    >
      <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg">
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute top-2 right-2">
            <Badge
              variant="secondary"
              className="bg-primary/80 text-primary-foreground"
            >
              {category}
            </Badge>
          </div>
        </div>

        <CardHeader className="pb-2">
          <CardTitle className="text-xl">{title}</CardTitle>
          <CardDescription className="line-clamp-2">
            {description}
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="flex flex-wrap gap-2 mb-4">
            {techStack.map((tech, index) => (
              <Badge key={index} variant="outline" className="bg-muted">
                {tech}
              </Badge>
            ))}
          </div>

          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 text-sm text-muted-foreground"
            >
              <p>{longDescription}</p>
            </motion.div>
          )}
        </CardContent>

        <CardFooter className="flex justify-between pt-2">
          <div className="flex gap-2">
            {demoLink && (
              <Button size="sm" variant="outline" asChild>
                <a
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1"
                >
                  <ExternalLink size={14} />
                  Demo
                </a>
              </Button>
            )}
            {repoLink && (
              <Button size="sm" variant="outline" asChild>
                <a
                  href={repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1"
                >
                  <Github size={14} />
                  Code
                </a>
              </Button>
            )}
          </div>
          <Button
            size="sm"
            variant="ghost"
            onClick={toggleExpand}
            className="flex items-center gap-1"
          >
            {expanded ? (
              <>
                Less <ChevronUp size={14} />
              </>
            ) : (
              <>
                More <ChevronDown size={14} />
              </>
            )}
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
