import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { 
  Target, 
  CheckCircle2, 
  Clock, 
  TrendingUp,
  Calendar,
  BookOpen,
  Sparkles,
  ArrowRight,
  Play
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/Navbar";
import { Link } from "react-router-dom";
import { getUserProfile, UserProfile } from "@/lib/userProfile";

const DashboardPage = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  
  useEffect(() => {
    const storedProfile = getUserProfile();
    setProfile(storedProfile);
  }, []);

  const readinessScore = 67;
  const weekNumber = 4;
  const completedTasks = 18;
  const totalTasks = 28;

  const userName = profile?.name || "Student";
  const careerGoal = profile?.careerGoal || "Data Analyst";

  const todayTasks = [
    { id: 1, title: "Complete SQL Basics Module", type: "Learning", duration: "45 min", completed: false },
    { id: 2, title: "Practice 5 LeetCode Easy Problems", type: "Practice", duration: "60 min", completed: false },
    { id: 3, title: "Read about REST API Design", type: "Reading", duration: "20 min", completed: true },
  ];

  const upcomingMilestones = [
    { title: "Week 4 Project: Build CRUD API", dueIn: "3 days", progress: 40 },
    { title: "Mock Interview #1", dueIn: "5 days", progress: 0 },
  ];

  const skillProgress = [
    { name: "Python", progress: 75, color: "from-primary to-secondary" },
    { name: "SQL", progress: 45, color: "from-secondary to-primary" },
    { name: "Data Structures", progress: 60, color: "from-accent to-primary" },
    { name: "Problem Solving", progress: 55, color: "from-primary to-accent" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20 pb-12 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Welcome back, <span className="text-gradient">{userName}</span> 👋
            </h1>
            <p className="text-muted-foreground">
              You're on Week {weekNumber} of your journey to becoming a {careerGoal}.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-6">
              {/* Stats Row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4"
              >
                <div className="bg-card rounded-xl border border-border p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Target className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">{readinessScore}%</p>
                      <p className="text-xs text-muted-foreground">Readiness</p>
                    </div>
                  </div>
                </div>
                <div className="bg-card rounded-xl border border-border p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">Week {weekNumber}</p>
                      <p className="text-xs text-muted-foreground">of 12</p>
                    </div>
                  </div>
                </div>
                <div className="bg-card rounded-xl border border-border p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">{completedTasks}</p>
                      <p className="text-xs text-muted-foreground">Tasks Done</p>
                    </div>
                  </div>
                </div>
                <div className="bg-card rounded-xl border border-border p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">+12%</p>
                      <p className="text-xs text-muted-foreground">This Week</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Today's Tasks */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-card rounded-2xl border border-border p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-primary" />
                    <h2 className="text-lg font-semibold text-foreground">Today's AI Tasks</h2>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {todayTasks.filter(t => t.completed).length}/{todayTasks.length} completed
                  </span>
                </div>

                <div className="space-y-3">
                  {todayTasks.map((task, index) => (
                    <motion.div
                      key={task.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className={`flex items-center gap-4 p-4 rounded-xl border transition-all ${
                        task.completed
                          ? "bg-muted/50 border-border"
                          : "bg-background border-border hover:border-primary/50"
                      }`}
                    >
                      <button
                        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                          task.completed
                            ? "bg-primary border-primary"
                            : "border-muted-foreground hover:border-primary"
                        }`}
                      >
                        {task.completed && <CheckCircle2 className="w-4 h-4 text-primary-foreground" />}
                      </button>
                      <div className="flex-1">
                        <p className={`font-medium ${task.completed ? "text-muted-foreground line-through" : "text-foreground"}`}>
                          {task.title}
                        </p>
                        <div className="flex items-center gap-3 mt-1">
                          <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                            {task.type}
                          </span>
                          <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {task.duration}
                          </span>
                        </div>
                      </div>
                      {!task.completed && (
                        <Button variant="ghost" size="sm" className="gap-1">
                          Start <Play className="w-3 h-3" />
                        </Button>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Skill Progress */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-card rounded-2xl border border-border p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-primary" />
                    <h2 className="text-lg font-semibold text-foreground">Skill Progress</h2>
                  </div>
                  <Link to="/roadmap" className="text-sm text-primary hover:underline flex items-center gap-1">
                    View Roadmap <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                <div className="space-y-4">
                  {skillProgress.map((skill, index) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.progress}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.progress}%` }}
                          transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                          className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Readiness Score Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-6 text-primary-foreground"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Target className="w-5 h-5" />
                  <h2 className="font-semibold">Job Readiness Score</h2>
                </div>

                {/* Circular Progress */}
                <div className="relative w-36 h-36 mx-auto mb-4">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="rgba(255,255,255,0.2)"
                      strokeWidth="8"
                      fill="none"
                    />
                    <motion.circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="white"
                      strokeWidth="8"
                      fill="none"
                      strokeLinecap="round"
                      initial={{ strokeDashoffset: 251.2 }}
                      animate={{ strokeDashoffset: 251.2 - (251.2 * readinessScore) / 100 }}
                      transition={{ duration: 1, delay: 0.3 }}
                      style={{ strokeDasharray: 251.2 }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <span className="text-4xl font-bold">{readinessScore}</span>
                      <span className="text-lg">%</span>
                    </div>
                  </div>
                </div>

                <p className="text-center text-sm opacity-90">
                  You're making great progress! Keep up the momentum.
                </p>
              </motion.div>

              {/* Upcoming Milestones */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-card rounded-2xl border border-border p-6"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Calendar className="w-5 h-5 text-primary" />
                  <h2 className="font-semibold text-foreground">Upcoming Milestones</h2>
                </div>

                <div className="space-y-4">
                  {upcomingMilestones.map((milestone, index) => (
                    <div key={index} className="p-4 rounded-xl bg-muted/50">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-foreground">{milestone.title}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">Due in {milestone.dueIn}</span>
                        <span className="text-xs text-primary">{milestone.progress}%</span>
                      </div>
                      <div className="h-1.5 bg-muted rounded-full mt-2 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                          style={{ width: `${milestone.progress}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Quick Actions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-card rounded-2xl border border-border p-6"
              >
                <h2 className="font-semibold text-foreground mb-4">Quick Actions</h2>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start gap-2">
                    <BookOpen className="w-4 h-4" />
                    Resume Mock Interview
                  </Button>
                  <Button variant="outline" className="w-full justify-start gap-2">
                    <Target className="w-4 h-4" />
                    Update Resume
                  </Button>
                  <Button variant="outline" className="w-full justify-start gap-2">
                    <Sparkles className="w-4 h-4" />
                    Talk to AI Coach
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
