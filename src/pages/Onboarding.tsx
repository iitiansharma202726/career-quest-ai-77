import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  GraduationCap, 
  ArrowRight, 
  ArrowLeft, 
  Briefcase, 
  Code, 
  Target,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import { saveUserProfile } from "@/lib/userProfile";

const degrees = [
  "B.Tech / B.E.",
  "B.Sc",
  "BCA / MCA",
  "B.Com",
  "B.A.",
  "MBA",
  "Other",
];

const branches = [
  "Computer Science",
  "Information Technology",
  "Electronics & Communication",
  "Mechanical Engineering",
  "Electrical Engineering",
  "Civil Engineering",
  "Data Science",
  "Other",
];

const years = ["1st Year", "2nd Year", "3rd Year", "4th Year", "Graduated"];

const careerGoals = [
  { title: "Software Developer", icon: "💻" },
  { title: "Data Analyst", icon: "📊" },
  { title: "Frontend Developer", icon: "🎨" },
  { title: "Backend Developer", icon: "⚙️" },
  { title: "Data Scientist", icon: "🧠" },
  { title: "Product Manager", icon: "📦" },
  { title: "DevOps Engineer", icon: "🔧" },
  { title: "UI/UX Designer", icon: "✨" },
];

const skillsList = [
  "Python", "JavaScript", "Java", "C++", "SQL", "HTML/CSS", 
  "React", "Node.js", "Machine Learning", "Data Analysis",
  "Excel", "Git", "Communication", "Problem Solving"
];

const Onboarding = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    degree: "",
    branch: "",
    year: "",
    careerGoal: "",
    skills: [] as string[],
    experience: "",
  });

  const totalSteps = 5;

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      // Save profile to localStorage before navigating
      saveUserProfile(formData);
      navigate("/dashboard");
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const toggleSkill = (skill: string) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter(s => s !== skill)
        : [...prev.skills, skill]
    }));
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Full Name</label>
              <Input
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="h-12"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Degree</label>
              <div className="grid grid-cols-2 gap-3">
                {degrees.map((degree) => (
                  <button
                    key={degree}
                    onClick={() => setFormData({ ...formData, degree })}
                    className={`p-3 rounded-xl border text-sm font-medium transition-all ${
                      formData.degree === degree
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border bg-card text-muted-foreground hover:border-primary/50"
                    }`}
                  >
                    {degree}
                  </button>
                ))}
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Branch / Major</label>
              <div className="grid grid-cols-2 gap-3">
                {branches.map((branch) => (
                  <button
                    key={branch}
                    onClick={() => setFormData({ ...formData, branch })}
                    className={`p-3 rounded-xl border text-sm font-medium transition-all ${
                      formData.branch === branch
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border bg-card text-muted-foreground hover:border-primary/50"
                    }`}
                  >
                    {branch}
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Current Year</label>
              <div className="grid grid-cols-3 gap-3">
                {years.map((year) => (
                  <button
                    key={year}
                    onClick={() => setFormData({ ...formData, year })}
                    className={`p-3 rounded-xl border text-sm font-medium transition-all ${
                      formData.year === year
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border bg-card text-muted-foreground hover:border-primary/50"
                    }`}
                  >
                    {year}
                  </button>
                ))}
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-4">
            <label className="text-sm font-medium text-foreground">What's your dream role?</label>
            <div className="grid grid-cols-2 gap-3">
              {careerGoals.map((goal) => (
                <button
                  key={goal.title}
                  onClick={() => setFormData({ ...formData, careerGoal: goal.title })}
                  className={`p-4 rounded-xl border text-left transition-all ${
                    formData.careerGoal === goal.title
                      ? "border-primary bg-primary/10"
                      : "border-border bg-card hover:border-primary/50"
                  }`}
                >
                  <span className="text-2xl mb-2 block">{goal.icon}</span>
                  <span className={`text-sm font-medium ${
                    formData.careerGoal === goal.title ? "text-primary" : "text-foreground"
                  }`}>
                    {goal.title}
                  </span>
                </button>
              ))}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-4">
            <label className="text-sm font-medium text-foreground">Select your current skills</label>
            <p className="text-xs text-muted-foreground">Select all that apply</p>
            <div className="flex flex-wrap gap-2">
              {skillsList.map((skill) => (
                <button
                  key={skill}
                  onClick={() => toggleSkill(skill)}
                  className={`px-4 py-2 rounded-full border text-sm font-medium transition-all ${
                    formData.skills.includes(skill)
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-card text-muted-foreground hover:border-primary/50"
                  }`}
                >
                  {formData.skills.includes(skill) && <CheckCircle2 className="w-4 h-4 inline mr-1" />}
                  {skill}
                </button>
              ))}
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <label className="text-sm font-medium text-foreground">Any prior work experience?</label>
            <div className="space-y-3">
              {["No experience", "Internship (1-3 months)", "Internship (3-6 months)", "Full-time experience"].map((exp) => (
                <button
                  key={exp}
                  onClick={() => setFormData({ ...formData, experience: exp })}
                  className={`w-full p-4 rounded-xl border text-left text-sm font-medium transition-all ${
                    formData.experience === exp
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border bg-card text-muted-foreground hover:border-primary/50"
                  }`}
                >
                  {exp}
                </button>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const stepTitles = [
    "Let's get to know you",
    "Your academic background",
    "Your career aspirations",
    "Your current skillset",
    "Your experience level",
  ];

  const stepIcons = [GraduationCap, Code, Target, Briefcase, CheckCircle2];
  const StepIcon = stepIcons[step - 1];

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-lg">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">
              Career<span className="text-gradient">AI</span>
            </span>
          </Link>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Step {step} of {totalSteps}</span>
            <span className="text-sm font-medium text-primary">{Math.round((step / totalSteps) * 100)}%</span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${(step / totalSteps) * 100}%` }}
              className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
            />
          </div>
        </div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-card rounded-2xl border border-border p-6 shadow-lg"
        >
          {/* Step Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <StepIcon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-foreground">{stepTitles[step - 1]}</h2>
              <p className="text-sm text-muted-foreground">Help us personalize your journey</p>
            </div>
          </div>

          {/* Step Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {renderStep()}
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
            <Button
              variant="ghost"
              onClick={handleBack}
              disabled={step === 1}
              className="gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>
            <Button
              variant="hero"
              onClick={handleNext}
              className="gap-2"
            >
              {step === totalSteps ? "Complete" : "Continue"}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Onboarding;
