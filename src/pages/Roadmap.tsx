import { motion } from "framer-motion";
import { 
  CheckCircle2, 
  Circle, 
  Lock,
  ChevronRight,
  BookOpen,
  Code,
  Database,
  Briefcase,
  Target,
  Trophy
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";

const weeks = [
  {
    week: 1,
    title: "Python Fundamentals",
    icon: Code,
    status: "completed",
    tasks: [
      { title: "Variables & Data Types", completed: true },
      { title: "Control Flow & Loops", completed: true },
      { title: "Functions & Modules", completed: true },
      { title: "Mini Project: Calculator", completed: true },
    ],
  },
  {
    week: 2,
    title: "Data Structures",
    icon: Database,
    status: "completed",
    tasks: [
      { title: "Lists & Tuples", completed: true },
      { title: "Dictionaries & Sets", completed: true },
      { title: "Strings & Operations", completed: true },
      { title: "Mini Project: Contact Book", completed: true },
    ],
  },
  {
    week: 3,
    title: "SQL Essentials",
    icon: Database,
    status: "completed",
    tasks: [
      { title: "Database Basics", completed: true },
      { title: "SELECT & Filtering", completed: true },
      { title: "JOINs & Aggregations", completed: true },
      { title: "Mini Project: Sales Analysis", completed: true },
    ],
  },
  {
    week: 4,
    title: "Advanced SQL & Python",
    icon: Code,
    status: "current",
    tasks: [
      { title: "Subqueries & CTEs", completed: true },
      { title: "Window Functions", completed: false },
      { title: "Python + SQL Integration", completed: false },
      { title: "Project: Data Pipeline", completed: false },
    ],
  },
  {
    week: 5,
    title: "Data Analysis with Pandas",
    icon: BookOpen,
    status: "locked",
    tasks: [
      { title: "DataFrames Basics", completed: false },
      { title: "Data Cleaning", completed: false },
      { title: "Aggregations & Grouping", completed: false },
      { title: "Project: Customer Analysis", completed: false },
    ],
  },
  {
    week: 6,
    title: "Data Visualization",
    icon: Target,
    status: "locked",
    tasks: [
      { title: "Matplotlib Fundamentals", completed: false },
      { title: "Seaborn for Statistics", completed: false },
      { title: "Interactive Charts", completed: false },
      { title: "Project: Sales Dashboard", completed: false },
    ],
  },
  {
    week: 7,
    title: "Excel for Analysts",
    icon: Briefcase,
    status: "locked",
    tasks: [
      { title: "Advanced Formulas", completed: false },
      { title: "Pivot Tables", completed: false },
      { title: "Data Modeling", completed: false },
      { title: "Project: Financial Report", completed: false },
    ],
  },
  {
    week: 8,
    title: "Statistics for Data",
    icon: Target,
    status: "locked",
    tasks: [
      { title: "Descriptive Statistics", completed: false },
      { title: "Probability Basics", completed: false },
      { title: "Hypothesis Testing", completed: false },
      { title: "Project: A/B Test Analysis", completed: false },
    ],
  },
  {
    week: 9,
    title: "Business Intelligence",
    icon: Briefcase,
    status: "locked",
    tasks: [
      { title: "BI Tools Overview", completed: false },
      { title: "Tableau Basics", completed: false },
      { title: "Power BI Essentials", completed: false },
      { title: "Project: Interactive Dashboard", completed: false },
    ],
  },
  {
    week: 10,
    title: "Portfolio & Projects",
    icon: Code,
    status: "locked",
    tasks: [
      { title: "End-to-End Project", completed: false },
      { title: "Portfolio Website", completed: false },
      { title: "GitHub Setup", completed: false },
      { title: "Project Documentation", completed: false },
    ],
  },
  {
    week: 11,
    title: "Resume & LinkedIn",
    icon: Briefcase,
    status: "locked",
    tasks: [
      { title: "ATS-Optimized Resume", completed: false },
      { title: "LinkedIn Profile", completed: false },
      { title: "Portfolio Review", completed: false },
      { title: "Mock Applications", completed: false },
    ],
  },
  {
    week: 12,
    title: "Interview Prep",
    icon: Trophy,
    status: "locked",
    tasks: [
      { title: "Technical Interview Prep", completed: false },
      { title: "Behavioral Questions", completed: false },
      { title: "Case Studies", completed: false },
      { title: "Mock Interviews", completed: false },
    ],
  },
];

const getStatusStyles = (status: string) => {
  switch (status) {
    case "completed":
      return {
        bg: "bg-primary/10",
        border: "border-primary",
        icon: "text-primary",
        badge: "bg-primary text-primary-foreground",
      };
    case "current":
      return {
        bg: "bg-accent/10",
        border: "border-accent",
        icon: "text-accent",
        badge: "bg-accent text-accent-foreground",
      };
    case "locked":
    default:
      return {
        bg: "bg-muted/50",
        border: "border-border",
        icon: "text-muted-foreground",
        badge: "bg-muted text-muted-foreground",
      };
  }
};

const RoadmapPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-20 pb-12 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Your 12-Week Journey</span>
            <h1 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Data Analyst <span className="text-gradient">Roadmap</span>
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              A personalized learning path designed by AI to take you from beginner to job-ready.
            </p>
          </motion.div>

          {/* Progress Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-card rounded-2xl border border-border p-6 mb-8"
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="font-semibold text-foreground">Overall Progress</h2>
                <p className="text-sm text-muted-foreground">Week 4 of 12</p>
              </div>
              <div className="text-right">
                <span className="text-2xl font-bold text-primary">33%</span>
                <p className="text-sm text-muted-foreground">Complete</p>
              </div>
            </div>
            <div className="h-3 bg-muted rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "33%" }}
                transition={{ duration: 0.8 }}
                className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
              />
            </div>
          </motion.div>

          {/* Roadmap Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-[27px] top-0 bottom-0 w-0.5 bg-border" />

            {/* Weeks */}
            <div className="space-y-4">
              {weeks.map((week, index) => {
                const styles = getStatusStyles(week.status);
                const Icon = week.icon;

                return (
                  <motion.div
                    key={week.week}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                    className={`relative pl-16 ${week.status === "locked" ? "opacity-60" : ""}`}
                  >
                    {/* Timeline Node */}
                    <div className={`absolute left-0 w-14 h-14 rounded-xl ${styles.bg} border-2 ${styles.border} flex items-center justify-center`}>
                      {week.status === "completed" ? (
                        <CheckCircle2 className={`w-6 h-6 ${styles.icon}`} />
                      ) : week.status === "locked" ? (
                        <Lock className={`w-5 h-5 ${styles.icon}`} />
                      ) : (
                        <Icon className={`w-6 h-6 ${styles.icon}`} />
                      )}
                    </div>

                    {/* Content Card */}
                    <div className={`bg-card rounded-xl border ${week.status === "current" ? "border-accent" : "border-border"} p-5`}>
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${styles.badge} mb-2`}>
                            Week {week.week}
                          </span>
                          <h3 className="text-lg font-semibold text-foreground">{week.title}</h3>
                        </div>
                        {week.status === "current" && (
                          <Button variant="hero" size="sm">
                            Continue <ChevronRight className="w-4 h-4" />
                          </Button>
                        )}
                      </div>

                      {/* Tasks */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {week.tasks.map((task, taskIndex) => (
                          <div
                            key={taskIndex}
                            className="flex items-center gap-2 text-sm"
                          >
                            {task.completed ? (
                              <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                            ) : (
                              <Circle className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                            )}
                            <span className={task.completed ? "text-muted-foreground" : "text-foreground"}>
                              {task.title}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RoadmapPage;
