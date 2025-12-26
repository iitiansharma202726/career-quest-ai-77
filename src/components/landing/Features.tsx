import { motion } from "framer-motion";
import { 
  Brain, 
  Route, 
  Target, 
  MessageSquare, 
  FileText, 
  BarChart3 
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Profile Analysis",
    description: "Intelligent assessment of your skills, experience, and career goals to create your personalized baseline.",
    color: "primary",
  },
  {
    icon: Route,
    title: "12-Week Roadmap",
    description: "Custom learning path with daily tasks, weekly milestones, and project-based learning tailored to your target role.",
    color: "secondary",
  },
  {
    icon: Target,
    title: "Job Readiness Score",
    description: "Real-time tracking of your preparation level with actionable insights to boost your employability.",
    color: "accent",
  },
  {
    icon: MessageSquare,
    title: "Mock Interview AI",
    description: "Practice with AI interviewers that simulate real technical and behavioral interviews for your target role.",
    color: "primary",
  },
  {
    icon: FileText,
    title: "Resume ATS Analyzer",
    description: "Optimize your resume for Applicant Tracking Systems with keyword analysis and improvement suggestions.",
    color: "secondary",
  },
  {
    icon: BarChart3,
    title: "Market Insights",
    description: "Stay updated with real-time job market trends, in-demand skills, and salary benchmarks in India.",
    color: "accent",
  },
];

const getColorClasses = (color: string) => {
  switch (color) {
    case "primary":
      return "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground";
    case "secondary":
      return "bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground";
    case "accent":
      return "bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground";
    default:
      return "bg-primary/10 text-primary";
  }
};

export const Features = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Features</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4">
            Everything You Need to
            <span className="text-gradient"> Land Your Dream Job</span>
          </h2>
          <p className="text-muted-foreground">
            Our AI-powered platform provides comprehensive tools designed specifically for Indian college students.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${getColorClasses(feature.color)}`}>
                <feature.icon className="w-6 h-6" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold mb-2 text-foreground">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>

              {/* Hover Gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
