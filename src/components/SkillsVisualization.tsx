import React, { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface Skill {
  name: string;
  proficiency: number;
  years: number;
  category: string;
}

const SkillsVisualization = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const skills: Skill[] = [
    // Programming Languages
    { name: "Python", proficiency: 90, years: 3, category: "languages" },
    { name: "JavaScript", proficiency: 85, years: 2, category: "languages" },
    { name: "TypeScript", proficiency: 80, years: 1, category: "languages" },
    { name: "Java", proficiency: 85, years: 3, category: "languages" },
    { name: "SQL", proficiency: 85, years: 2, category: "languages" },
    { name: "R", proficiency: 80, years: 2, category: "languages" },
    { name: "C/C++", proficiency: 75, years: 3, category: "languages" },
    { name: "HTML/CSS", proficiency: 85, years: 3, category: "languages" },

    // Frameworks & Libraries
    { name: "Pandas", proficiency: 90, years: 3, category: "frameworks" },
    { name: "NumPy", proficiency: 90, years: 3, category: "frameworks" },
    { name: "Matplotlib", proficiency: 85, years: 3, category: "frameworks" },
    { name: "Seaborn", proficiency: 85, years: 2, category: "frameworks" },
    { name: "TensorFlow", proficiency: 80, years: 2, category: "frameworks" },
    { name: "PyTorch", proficiency: 75, years: 1, category: "frameworks" },
    { name: "Scikit-Learn", proficiency: 85, years: 2, category: "frameworks" },
    { name: "NLTK", proficiency: 80, years: 1, category: "frameworks" },
    {
      name: "BeautifulSoup",
      proficiency: 80,
      years: 2,
      category: "frameworks",
    },
    { name: "SciPy", proficiency: 80, years: 2, category: "frameworks" },

    // Data Science
    {
      name: "Data Modeling",
      proficiency: 85,
      years: 2,
      category: "data-science",
    },
    {
      name: "Data Cleaning",
      proficiency: 90,
      years: 3,
      category: "data-science",
    },
    {
      name: "Data Refinery",
      proficiency: 85,
      years: 2,
      category: "data-science",
    },
    {
      name: "Data Classification",
      proficiency: 85,
      years: 2,
      category: "data-science",
    },
    {
      name: "Data Visualization",
      proficiency: 90,
      years: 3,
      category: "data-science",
    },
    {
      name: "Machine Learning",
      proficiency: 85,
      years: 2,
      category: "data-science",
    },
    {
      name: "Predictive Modeling",
      proficiency: 80,
      years: 2,
      category: "data-science",
    },

    // Tools
    { name: "Git", proficiency: 85, years: 3, category: "tools" },
    { name: "Jupyter Notebook", proficiency: 90, years: 3, category: "tools" },
    { name: "Docker", proficiency: 75, years: 1, category: "tools" },
    { name: "Postman", proficiency: 80, years: 2, category: "tools" },
    { name: "Insomnia.rest", proficiency: 80, years: 1, category: "tools" },
    { name: "Tableau", proficiency: 75, years: 1, category: "tools" },
    { name: "Power BI", proficiency: 75, years: 1, category: "tools" },
    { name: "RStudio", proficiency: 80, years: 2, category: "tools" },
    { name: "VS Code", proficiency: 90, years: 3, category: "tools" },
    { name: "PyCharm", proficiency: 85, years: 2, category: "tools" },
    { name: "IntelliJ", proficiency: 80, years: 2, category: "tools" },
    { name: "Streamlit", proficiency: 85, years: 1, category: "tools" },
  ];

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  const getProficiencyColor = (proficiency: number) => {
    if (proficiency >= 90) return "bg-green-500";
    if (proficiency >= 80) return "bg-blue-500";
    if (proficiency >= 70) return "bg-yellow-500";
    return "bg-orange-500";
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="py-10 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Technical Skills
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My technical expertise spans both software development and data
            science domains, with a focus on building scalable applications and
            deriving insights from data.
          </p>
        </div>

        <Tabs
          defaultValue="all"
          className="w-full max-w-4xl mx-auto px-2 md:px-0"
        >
          <TabsList className="grid grid-cols-3 md:grid-cols-5 mb-6 md:mb-8 gap-1 md:gap-0">
            <TabsTrigger
              value="all"
              onClick={() => setActiveCategory("all")}
              className="text-xs md:text-sm"
            >
              All
            </TabsTrigger>
            <TabsTrigger
              value="languages"
              onClick={() => setActiveCategory("languages")}
              className="text-xs md:text-sm"
            >
              Languages
            </TabsTrigger>
            <TabsTrigger
              value="frameworks"
              onClick={() => setActiveCategory("frameworks")}
              className="text-xs md:text-sm"
            >
              Frameworks
            </TabsTrigger>
            <TabsTrigger
              value="data-science"
              onClick={() => setActiveCategory("data-science")}
              className="text-xs md:text-sm col-span-2 md:col-span-1"
            >
              Data Science
            </TabsTrigger>
            <TabsTrigger
              value="tools"
              onClick={() => setActiveCategory("tools")}
              className="text-xs md:text-sm col-span-1"
            >
              Tools
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {filteredSkills.map((skill) => (
                <SkillCard
                  key={skill.name}
                  skill={skill}
                  getProficiencyColor={getProficiencyColor}
                />
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="languages" className="space-y-4">
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {filteredSkills.map((skill) => (
                <SkillCard
                  key={skill.name}
                  skill={skill}
                  getProficiencyColor={getProficiencyColor}
                />
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="frameworks" className="space-y-4">
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {filteredSkills.map((skill) => (
                <SkillCard
                  key={skill.name}
                  skill={skill}
                  getProficiencyColor={getProficiencyColor}
                />
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="data-science" className="space-y-4">
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {filteredSkills.map((skill) => (
                <SkillCard
                  key={skill.name}
                  skill={skill}
                  getProficiencyColor={getProficiencyColor}
                />
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="tools" className="space-y-4">
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {filteredSkills.map((skill) => (
                <SkillCard
                  key={skill.name}
                  skill={skill}
                  getProficiencyColor={getProficiencyColor}
                />
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

interface SkillCardProps {
  skill: Skill;
  getProficiencyColor: (proficiency: number) => string;
}

const SkillCard = ({ skill, getProficiencyColor }: SkillCardProps) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
      }}
    >
      <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <CardContent className="p-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-medium text-lg">{skill.name}</h3>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Badge variant="outline">
                    {skill.years} {skill.years === 1 ? "year" : "years"}
                  </Badge>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Years of experience</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm">
              <span>Proficiency</span>
              <span>{skill.proficiency}%</span>
            </div>
            <Progress
              value={skill.proficiency}
              className="h-2"
              indicatorClassName={getProficiencyColor(skill.proficiency)}
            />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default SkillsVisualization;
