import { motion } from "framer-motion";
import { 
  BookOpen, 
  Video, 
  FileText, 
  ExternalLink,
  Star,
  Clock,
  Filter
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const categories = ["All", "Python", "SQL", "Data Analysis", "Interview Prep", "Career"];

const resources = [
  {
    id: 1,
    title: "Python for Data Analysis - Complete Guide",
    description: "Master Python fundamentals with hands-on projects designed for data analysts.",
    category: "Python",
    type: "course",
    duration: "8 hours",
    rating: 4.8,
    source: "freeCodeCamp",
    free: true,
  },
  {
    id: 2,
    title: "SQL Tutorial for Beginners",
    description: "Learn SQL from scratch with real-world database examples and practice problems.",
    category: "SQL",
    type: "course",
    duration: "5 hours",
    rating: 4.9,
    source: "YouTube",
    free: true,
  },
  {
    id: 3,
    title: "Pandas Documentation",
    description: "Official Pandas documentation with tutorials, API reference, and best practices.",
    category: "Data Analysis",
    type: "documentation",
    duration: "Reference",
    rating: 4.7,
    source: "Official",
    free: true,
  },
  {
    id: 4,
    title: "100 Data Analyst Interview Questions",
    description: "Comprehensive list of commonly asked interview questions with detailed answers.",
    category: "Interview Prep",
    type: "article",
    duration: "30 min read",
    rating: 4.6,
    source: "Medium",
    free: true,
  },
  {
    id: 5,
    title: "How to Build a Data Analyst Portfolio",
    description: "Step-by-step guide to creating a portfolio that gets you hired.",
    category: "Career",
    type: "article",
    duration: "15 min read",
    rating: 4.5,
    source: "Towards Data Science",
    free: true,
  },
  {
    id: 6,
    title: "Data Visualization with Matplotlib",
    description: "Create stunning visualizations and learn best practices for data presentation.",
    category: "Data Analysis",
    type: "video",
    duration: "3 hours",
    rating: 4.7,
    source: "YouTube",
    free: true,
  },
  {
    id: 7,
    title: "LeetCode SQL Practice",
    description: "Practice SQL problems with increasing difficulty to prepare for interviews.",
    category: "SQL",
    type: "practice",
    duration: "Ongoing",
    rating: 4.8,
    source: "LeetCode",
    free: true,
  },
  {
    id: 8,
    title: "Resume Tips for Data Analysts",
    description: "Expert tips on crafting an ATS-friendly resume that stands out.",
    category: "Career",
    type: "article",
    duration: "10 min read",
    rating: 4.4,
    source: "LinkedIn",
    free: true,
  },
];

const getTypeIcon = (type: string) => {
  switch (type) {
    case "course":
    case "video":
      return Video;
    case "article":
      return FileText;
    case "documentation":
    case "practice":
    default:
      return BookOpen;
  }
};

const getTypeColor = (type: string) => {
  switch (type) {
    case "course":
      return "bg-primary/10 text-primary";
    case "video":
      return "bg-secondary/10 text-secondary";
    case "article":
      return "bg-accent/10 text-accent";
    default:
      return "bg-muted text-muted-foreground";
  }
};

const ResourcesPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredResources = activeCategory === "All"
    ? resources
    : resources.filter(r => r.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-20 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Learning Resources</span>
            <h1 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Curated <span className="text-gradient">Resources</span> for You
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Hand-picked tutorials, courses, and articles to accelerate your learning journey.
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-2 overflow-x-auto pb-4 mb-8"
          >
            <Filter className="w-5 h-5 text-muted-foreground flex-shrink-0" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Resources Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource, index) => {
              const Icon = getTypeIcon(resource.type);
              
              return (
                <motion.div
                  key={resource.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                  className="bg-card rounded-2xl border border-border p-5 hover:border-primary/30 hover:shadow-lg transition-all group"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${getTypeColor(resource.type)}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    {resource.free && (
                      <span className="px-2 py-0.5 rounded-full bg-secondary/10 text-secondary text-xs font-medium">
                        Free
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {resource.description}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-accent" />
                      {resource.rating}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {resource.duration}
                    </span>
                    <span>{resource.source}</span>
                  </div>

                  {/* CTA */}
                  <Button variant="outline" size="sm" className="w-full gap-2 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    Open Resource
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ResourcesPage;
