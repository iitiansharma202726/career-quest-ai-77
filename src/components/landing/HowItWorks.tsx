import { motion } from "framer-motion";
import { UserCircle, Lightbulb, Trophy, Rocket } from "lucide-react";

const steps = [
  {
    icon: UserCircle,
    step: "01",
    title: "Create Your Profile",
    description: "Share your academic background, skills, and career aspirations. Our AI analyzes your unique position.",
  },
  {
    icon: Lightbulb,
    step: "02",
    title: "Get AI Analysis",
    description: "Receive a comprehensive skill gap analysis and personalized job role recommendations.",
  },
  {
    icon: Trophy,
    step: "03",
    title: "Follow Your Roadmap",
    description: "Complete daily AI-assigned tasks, projects, and assessments to build job-ready skills.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Ace Interviews & Land Jobs",
    description: "Practice with mock interviews, optimize your resume, and confidently apply to your dream roles.",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">How It Works</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4">
            Your Path to
            <span className="text-gradient"> Career Success</span>
          </h2>
          <p className="text-muted-foreground">
            A simple 4-step journey that transforms you from a college student to a job-ready professional.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              className="relative"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-px">
                  <div className="w-full h-px bg-gradient-to-r from-primary/50 to-transparent" />
                </div>
              )}

              {/* Card */}
              <div className="relative bg-card rounded-2xl p-6 border border-border/50 text-center h-full">
                {/* Step Number */}
                <span className="absolute -top-3 left-6 px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">
                  {step.step}
                </span>

                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-lg">
                  <step.icon className="w-8 h-8 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold mb-2 text-foreground">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
