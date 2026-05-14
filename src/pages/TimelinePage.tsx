import { motion } from "motion/react";
import { Timeline, TimelineItem } from "../components/Timeline";
import { History, Code, Rocket, Trophy } from "lucide-react";

const TimelinePage = () => {
  // Tech History Timeline Data
  const techHistoryTimeline: TimelineItem[] = [
    {
      id: "1",
      date: "1971",
      title: "Email Invented",
      description: "Ray Tomlinson sent the first network email, revolutionizing communication.",
      status: "completed",
      category: "Communication"
    },
    {
      id: "2",
      date: "1989",
      title: "World Wide Web",
      description: "Tim Berners-Lee invented the World Wide Web at CERN, changing how we access information.",
      status: "completed",
      category: "Internet"
    },
    {
      id: "3",
      date: "2007",
      title: "First iPhone Released",
      description: "Apple launched the iPhone, ushering in the smartphone era.",
      status: "completed",
      category: "Mobile"
    },
    {
      id: "4",
      date: "2015",
      title: "React.js Popularity Surge",
      description: "React became the dominant library for building modern web applications.",
      status: "completed",
      category: "Development"
    },
    {
      id: "5",
      date: "2023",
      title: "AI Revolution",
      description: "ChatGPT and large language models transformed how we interact with technology.",
      status: "current",
      category: "AI"
    },
    {
      id: "6",
      date: "2026",
      title: "Quantum Computing Breakthrough",
      description: "Commercial quantum computers begin solving complex problems at scale.",
      status: "upcoming",
      category: "Computing"
    }
  ];

  // Learning Roadmap Timeline
  const learningRoadmap: TimelineItem[] = [
    {
      id: "1",
      date: "Month 1-2",
      title: "HTML & CSS Fundamentals",
      description: "Master the basics of web structure and styling.",
      status: "completed",
      category: "Frontend"
    },
    {
      id: "2",
      date: "Month 3-4",
      title: "JavaScript Essentials",
      description: "Learn programming fundamentals and DOM manipulation.",
      status: "completed",
      category: "Frontend"
    },
    {
      id: "3",
      date: "Month 5-6",
      title: "React.js & Modern Frontend",
      description: "Build interactive UIs with React, hooks, and state management.",
      status: "current",
      category: "Frontend"
    },
    {
      id: "4",
      date: "Month 7-8",
      title: "Backend Development",
      description: "Learn Node.js, Express, and database integration.",
      status: "upcoming",
      category: "Backend"
    },
    {
      id: "5",
      date: "Month 9-12",
      title: "Full Stack Projects",
      description: "Build complete applications from frontend to backend.",
      status: "upcoming",
      category: "Full Stack"
    }
  ];

  return (
    <div className="min-h-screen bg-brand-background">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-brand-surface to-brand-background border-b border-brand-border"
      >
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-accent/20 mb-6"
            >
              <History className="w-8 h-8 text-brand-accent" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold text-brand-foreground mb-4">
              Tech Timeline
            </h1>
            <p className="text-xl text-brand-muted max-w-2xl mx-auto">
              Explore the evolution of technology and your learning journey through interactive timelines
            </p>
          </div>
        </div>
      </motion.div>

      {/* Tech History Timeline Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-accent/10 border border-brand-accent/20 mb-4">
              <Code className="w-5 h-5 text-brand-accent" />
              <span className="text-sm font-semibold text-brand-accent">Tech History</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-foreground mb-4">
              Milestones in Technology
            </h2>
            <p className="text-lg text-brand-muted max-w-2xl mx-auto">
              From the invention of email to the AI revolution
            </p>
          </motion.div>

          <Timeline 
            items={techHistoryTimeline} 
            variant="vertical"
            theme="default"
          />
        </div>
      </section>

      {/* Learning Roadmap Section */}
      <section className="py-16 bg-brand-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-accent/10 border border-brand-accent/20 mb-4">
              <Rocket className="w-5 h-5 text-brand-accent" />
              <span className="text-sm font-semibold text-brand-accent">Learning Path</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-foreground mb-4">
              Your Development Roadmap
            </h2>
            <p className="text-lg text-brand-muted max-w-2xl mx-auto">
              A structured path from beginner to full-stack developer
            </p>
          </motion.div>

          <Timeline 
            items={learningRoadmap} 
            variant="horizontal"
            theme="default"
          />
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-16"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-brand-accent/10 to-brand-accent/5 border border-brand-accent/20 rounded-2xl p-12">
            <Trophy className="w-12 h-12 text-brand-accent mx-auto mb-6" />
            <h3 className="text-2xl md:text-3xl font-bold text-brand-foreground mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-lg text-brand-muted mb-8">
              Join thousands of learners mastering technology one step at a time
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-brand-accent text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              Explore Learning Paths
            </motion.button>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default TimelinePage;
