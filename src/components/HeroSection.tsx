import React from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { ArrowDownToLine, Mail } from "lucide-react";

interface HeroSectionProps {
  name?: string;
  title?: string;
  description?: string;
  imageUrl?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  name = "Sumit Khobragade",
  title = "Data Scientist & Software Developer",
  description = "Analytical Data Scientist proficient in Python, pandas, NumPy, Matplotlib, and machine learning techniques. Experienced in building intelligent automation systems and predictive models for finance and decision support.",
  imageUrl = "./assets/sumit_img.jpeg",
}) => {
  return (
    <section className="relative min-h-[500px] md:min-h-[700px] w-full flex items-center justify-center bg-background py-10 md:py-20 px-4 md:px-8 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <motion.div
          className="absolute top-10 left-10 w-64 h-64 rounded-full bg-primary"
          animate={{
            x: [0, 30, 0],
            y: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 15,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-secondary"
          animate={{
            x: [0, -40, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 18,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-40 h-40 rounded-full bg-accent"
          animate={{
            x: [0, 50, 0],
            y: [0, -40, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto max-w-6xl z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          {/* Text content */}
          <motion.div
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-lg font-medium text-primary mb-2">
              Hello, I'm
            </h2>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4">
              {name}
            </h1>
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-muted-foreground">
              {title}
            </h3>
            <p className="text-sm sm:text-base md:text-lg mb-6 md:mb-8 max-w-xl mx-auto md:mx-0">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button
                size="sm"
                className="gap-1 text-xs sm:text-sm md:gap-2 md:text-base md:size-lg"
                onClick={() =>
                  (window.location.href = "mailto:sumit@example.com")
                }
              >
                <Mail className="h-4 w-4 md:h-5 md:w-5" />
                 Contact Me
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="gap-1 text-xs sm:text-sm md:gap-2 md:text-base md:size-lg"
                onClick={() => {
                  const link = document.createElement("a"); // Create an <a> element
                  link.href = "assets/resume.pdf"; // Path to the resume file
                  link.download = "Sumit_Khobragade_Resume.pdf"; // File name for the download
                  document.body.appendChild(link); // Append the link to the document
                  link.click(); // Programmatically click the link
                  document.body.removeChild(link); // Remove the link after triggering the download
                }}
              >
                <ArrowDownToLine className="h-4 w-4 md:h-5 md:w-5" />
                Download Resume
              </Button>
            </div>
          </motion.div>

          {/* Profile image */}
          <motion.div
            className="flex-1 flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
              <img
                src={imageUrl}
                alt={`${name} profile`}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator - Fixed positioning for mobile */}
        <motion.div
          className="hidden sm:flex flex-col items-center absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <span className="text-sm text-muted-foreground mb-2">
            Scroll to explore
          </span>
          <motion.div
            className="w-6 h-10 border-2 border-primary rounded-full flex justify-center pt-2"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-primary"
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            />
          </motion.div>
        </motion.div>
        
        {/* Mobile-specific scroll indicator */}
        <motion.div
          className="sm:hidden flex flex-col items-center mt-12 pt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <span className="text-xs text-muted-foreground mb-2">
            Scroll to explore
          </span>
          <motion.div
            className="w-5 h-8 border-2 border-primary rounded-full flex justify-center pt-1"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <motion.div
              className="w-1 h-1 rounded-full bg-primary"
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;