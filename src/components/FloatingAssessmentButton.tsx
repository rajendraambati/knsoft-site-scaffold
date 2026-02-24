import { motion } from "framer-motion";
import { ClipboardCheck } from "lucide-react";

const ASSESSMENT_URL = "https://knsofttech.com/psychometric-test";

const FloatingAssessmentButton = () => {
  return (
    <motion.a
      href={ASSESSMENT_URL}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 2, duration: 0.5 }}
      className="fixed right-6 bottom-28 z-40 group"
      aria-label="Take career guidance assessment"
    >
      <div className="relative flex items-center">
        {/* Label that appears on hover */}
        <span className="absolute right-full mr-3 whitespace-nowrap rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none">
          Take a Career Assessment
        </span>

        {/* Button */}
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-elegant transition-all duration-300 hover:scale-110 hover:shadow-glow">
          <ClipboardCheck className="h-6 w-6" />
        </div>
      </div>
    </motion.a>
  );
};

export default FloatingAssessmentButton;
