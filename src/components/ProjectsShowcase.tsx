import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import ProjectCard from "./ProjectCard";

interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  techStack: string[];
  category: string;
  liveUrl?: string;
  repoUrl?: string;
}

interface ProjectsShowcaseProps {
  projects?: Project[];
}

const ProjectsShowcase = ({ projects = [] }: ProjectsShowcaseProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  // Default projects if none are provided
  // Make sure both Mail Spam Detection and Movie Recommendation System are always shown first
  const defaultProjects: Project[] = [
    {
      id: "1",
      title: "Mail Spam Detection",
      description:
        "A comprehensive solution for detecting spam emails, integrating machine learning with a user-friendly web interface. Performed data modelling, cleaning, refining, and classification to ensure high model accuracy.",
      thumbnail:
        "https://plus.unsplash.com/premium_photo-1682310147148-b3d6ae674965?q=80&w=1812&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      techStack: [
        "Python",
        "Streamlit",
        "TensorFlow",
        "Pandas",
        "Matplotlib",
        "Seaborn",
      ],
      category: "data-science",
      liveUrl: "https://streamlit.io/",
      repoUrl: "https://github.com/",
    },
    {
      id: "2",
      title: "Movie Recommendation System",
      description:
        "A movie recommendation model using collaborative filtering and content-based algorithms. Implemented feature engineering techniques to enhance recommendation accuracy and achieved high user satisfaction with personalized recommendations.",
      thumbnail:
        "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&q=80",
      techStack: ["Python", "Streamlit", "TensorFlow", "Pandas"],
      category: "data-science",
      liveUrl: "https://streamlit.io/",
      repoUrl: "https://github.com/",
    },
    {
      id: "3",
      title: "RESTful APIs & Socket.IO Services",
      description:
        "Developed and deployed RESTful APIs and Socket.IO-based services for OUR BROKING SERVICES LLP, improving system communication efficiency by 40%.",
      thumbnail:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
      techStack: ["JavaScript", "Node.js", "Socket.IO", "REST API"],
      category: "software-development",
    },
    {
      id: "4",
      title: "Internal Dashboards & Workflow Automation",
      description:
        "Automated repetitive workflows and built internal dashboards for financial data visualization, reducing manual effort by over 30% and enhancing decision-making processes.",
      thumbnail:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      techStack: ["JavaScript", "TypeScript", "React", "Data Visualization"],
      category: "full-stack",
    },
    {
      id: "5",
      title: "Real-time Stock Market Analysis Tools",
      description:
        "Worked with live stock market data to develop order placement systems, comparison logic, and real-time decision support tools for financial analysis.",
      thumbnail:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
      techStack: [
        "Python",
        "JavaScript",
        "Data Analysis",
        "Real-time Processing",
      ],
      category: "data-science",
    },
    {
      id: "6",
      title: "Documentation & Ticketing System",
      description:
        "Designed documentation and ticketing systems to streamline onboarding and issue resolution, enhancing team productivity and improving knowledge management.",
      thumbnail:
        "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80",
      techStack: ["JavaScript", "HTML/CSS", "Database Design"],
      category: "software-development",
    },
  ];

  const displayProjects = projects.length > 0 ? projects : defaultProjects;

  // Filter projects based on search query and active category
  const filteredProjects = displayProjects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.techStack.some((tech) =>
        tech.toLowerCase().includes(searchQuery.toLowerCase()),
      );

    const matchesCategory =
      activeCategory === "all" || project.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <section
      id="projects"
      className="py-10 md:py-16 px-4 md:px-8 bg-background"
    >
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-3 md:mb-4">
          Projects
        </h2>
        <p className="text-sm md:text-base text-muted-foreground text-center mb-6 md:mb-8 max-w-2xl mx-auto">
          Explore my portfolio of software development and data science
          projects. Each project demonstrates different skills and technologies.
        </p>

        {/* Improved mobile layout with vertical stacking */}
        <div className="flex flex-col gap-6 mb-8">
          {/* Search bar moved to top for mobile */}
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search projects..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          {/* Modified tabs with better mobile support */}
          <Tabs
            defaultValue="all"
            className="w-full"
            onValueChange={setActiveCategory}
          >
            <TabsList className="w-full h-auto flex flex-wrap bg-muted p-1">
              <TabsTrigger value="all" className="text-xs md:text-sm h-8 flex-1 data-[state=active]:bg-background">
                All
              </TabsTrigger>
              <TabsTrigger
                value="software-development"
                className="text-xs md:text-sm h-8 flex-1 data-[state=active]:bg-background"
              >
                Software Dev
              </TabsTrigger>
              <TabsTrigger value="data-science" className="text-xs md:text-sm h-8 flex-1 data-[state=active]:bg-background">
                Data Science
              </TabsTrigger>
              <TabsTrigger value="full-stack" className="text-xs md:text-sm h-8 flex-1 data-[state=active]:bg-background">
                Full Stack
              </TabsTrigger>
              <TabsTrigger value="other" className="text-xs md:text-sm h-8 flex-1 data-[state=active]:bg-background">
                Other
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No projects found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsShowcase;