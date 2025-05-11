import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ChevronDown, ChevronUp, ExternalLink, Briefcase } from "lucide-react";

interface Experience {
  id: string;
  company: string;
  logo: string;
  role: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
  current: boolean;
}

interface ExperienceTimelineProps {
  experiences?: Experience[];
}

const ExperienceTimeline = ({
  experiences = defaultExperiences,
}: ExperienceTimelineProps) => {
  const [expandedId, setExpandedId] = React.useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="w-full py-10 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 md:mb-3">
            Professional Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey in software development and data science
            roles.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-border" />

          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative mb-12 ${index % 2 === 0 ? "md:pr-12 md:ml-0 md:mr-auto md:text-right" : "md:pl-12 md:ml-auto md:mr-0"} md:w-1/2 w-full`}
            >
              {/* Timeline dot */}
              <div className="absolute top-5 md:top-7 left-0 md:left-auto md:right-0 w-4 md:w-5 h-4 md:h-5 rounded-full bg-primary border-4 border-background z-10 md:-translate-x-1/2 md:-translate-y-1/2">
                {experience.current && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                )}
              </div>

              <Card
                className={`relative ${expandedId === experience.id ? "border-primary/50" : ""} hover:border-primary/30 transition-all duration-300`}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4 mb-3 md:mb-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-md overflow-hidden bg-muted flex items-center justify-center">
                      {experience.logo ? (
                        <img
                          src={experience.logo}
                          alt={`${experience.company} logo`}
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        <Briefcase className="w-6 h-6 text-muted-foreground" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                        <h3 className="text-lg md:text-xl font-semibold">
                          {experience.company}
                        </h3>
                        <span className="text-sm text-muted-foreground">
                          {experience.period}
                        </span>
                      </div>
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-1 mt-1">
                        <h4 className="text-sm md:text-base font-medium">
                          {experience.role}
                        </h4>
                        <span className="text-sm text-muted-foreground">
                          {experience.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4">
                    {experience.description}
                  </p>

                  <button
                    onClick={() => toggleExpand(experience.id)}
                    className="flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                  >
                    {expandedId === experience.id ? (
                      <>
                        Show less <ChevronUp className="w-4 h-4" />
                      </>
                    ) : (
                      <>
                        Show more <ChevronDown className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  {expandedId === experience.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4"
                    >
                      <Separator className="my-4" />

                      <div className="mb-4">
                        <h5 className="font-medium mb-2">Key Achievements</h5>
                        <ul className="list-disc pl-5 space-y-1 text-left">
                          {experience.achievements.map((achievement, i) => (
                            <li key={i} className="text-sm">
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h5 className="font-medium mb-2">Technologies Used</h5>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech, i) => (
                            <Badge key={i} variant="secondary">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const defaultExperiences: Experience[] = [
  {
    id: "1",
    company: "OUR BROKING SERVICES LLP",
    logo: "https://api.dicebear.com/7.x/avataaars/svg?seed=OurBrokingServices",
    role: "Software Developer",
    period: "Aug 2023 - Feb 2024",
    location: "Ludhiana, India",
    description:
      "Developed and deployed RESTful APIs and Socket.IO-based services, improving system communication efficiency by 40%.",
    achievements: [
      "Automated repetitive workflows and built internal dashboards, reducing manual effort by over 30%",
      "Designed documentation and ticketing systems to streamline onboarding and issue resolution",
      "Worked with live stock market data for order placement, comparison logic, and real-time decision support tools",
      "Debugged and maintained applications hosted on Windows IIS Server, minimizing downtime",
    ],
    technologies: [
      "JavaScript",
      "TypeScript",
      "REST API",
      "Socket.IO",
      "Windows IIS Server",
      "Data Analysis",
    ],
    current: false,
  },
  {
    id: "2",
    company: "Gondwana University",
    logo: "https://api.dicebear.com/7.x/avataaars/svg?seed=GondwanaUniversity",
    role: "Bachelor of Computer Application",
    period: "Sep 2021 - June 2024",
    location: "Gadchiroli, MH, India",
    description:
      "Pursuing a Bachelor's degree in Computer Application with focus on software development and data science.",
    achievements: [
      "Developed multiple projects including Mail Spam Detection and Movie Recommendation System",
      "Gained proficiency in various programming languages and data science techniques",
      "Participated in hackathons and coding competitions",
    ],
    technologies: [
      "Python",
      "Java",
      "Data Science",
      "Machine Learning",
      "Web Development",
    ],
    current: true,
  },
  {
    id: "3",
    company: "INTELLIPAAT",
    logo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Intellipaat",
    role: "Professional Certification",
    period: "Sep 2022 - June 2024",
    location: "Online",
    description:
      "Completed professional certifications in Data Science, MS SQL, and Artificial Intelligence.",
    achievements: [
      "Data Science Architect Course",
      "MS SQL Developer Course",
      "Artificial Intelligence Course",
    ],
    technologies: [
      "Data Science",
      "SQL",
      "Artificial Intelligence",
      "Machine Learning",
      "Data Analysis",
    ],
    current: false,
  },
  {
    id: "4",
    company: "Guru Nanak College of Science",
    logo: "https://api.dicebear.com/7.x/avataaars/svg?seed=GuruNanakCollege",
    role: "Computer Science",
    period: "June 2019 - Aug 2021",
    location: "Ballarpur, MH, India",
    description:
      "Completed foundational education in Computer Science, building core programming and analytical skills.",
    achievements: [
      "Learned fundamentals of computer science and programming",
      "Developed strong analytical and problem-solving skills",
      "Built foundation for further education in technology",
    ],
    technologies: [
      "Programming Fundamentals",
      "Computer Science",
      "Data Structures",
      "Algorithms",
    ],
    current: false,
  },
];

export default ExperienceTimeline;
