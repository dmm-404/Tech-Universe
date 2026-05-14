import { motion, useInView } from "motion/react";
import { Timeline, TimelineItem } from "../components/Timeline";
import { useRef, useState, useEffect } from "react";

const TimelinePage = () => {
  const [visibleCount, setVisibleCount] = useState(3);
  const bottomRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(bottomRef, { once: false });

  // All milestones in chronological order
  const allMilestones: TimelineItem[] = [
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
      date: "2013",
      title: "React.js Released",
      description: "Facebook released React, revolutionizing frontend development.",
      status: "completed",
      category: "Development"
    },
    {
      id: "5",
      date: "2015",
      title: "React.js Popularity Surge",
      description: "React became the dominant library for building modern web applications.",
      status: "completed",
      category: "Development"
    },
    {
      id: "6",
      date: "2017",
      title: "Kubernetes Goes Mainstream",
      description: "Container orchestration became essential for cloud-native applications.",
      status: "completed",
      category: "DevOps"
    },
    {
      id: "7",
      date: "2020",
      title: "AI Assistants Evolution",
      description: "Advanced AI models began transforming how developers write code.",
      status: "completed",
      category: "AI"
    },
    {
      id: "8",
      date: "2022",
      title: "ChatGPT Launch",
      description: "OpenAI launched ChatGPT, democratizing access to powerful AI.",
      status: "completed",
      category: "AI"
    },
    {
      id: "9",
      date: "2023",
      title: "AI Revolution",
      description: "ChatGPT and large language models transformed how we interact with technology.",
      status: "current",
      category: "AI"
    },
    {
      id: "10",
      date: "2024",
      title: "Edge Computing Boom",
      description: "Processing power moves closer to data sources for faster performance.",
      status: "current",
      category: "Infrastructure"
    },
    {
      id: "11",
      date: "2025",
      title: "Quantum Computing Breakthroughs",
      description: "Practical quantum computers begin solving complex real-world problems.",
      status: "current",
      category: "Computing"
    },
    {
      id: "12",
      date: "2026",
      title: "Quantum Computing Breakthrough",
      description: "Commercial quantum computers begin solving complex problems at scale.",
      status: "upcoming",
      category: "Computing"
    },
    {
      id: "13",
      date: "2027",
      title: "AGI Development",
      description: "Steps toward artificial general intelligence reshape technology landscape.",
      status: "upcoming",
      category: "AI"
    },
    {
      id: "14",
      date: "2028",
      title: "Web 4.0 Era Begins",
      description: "The next evolution of the internet with advanced AI integration.",
      status: "upcoming",
      category: "Internet"
    },
    {
      id: "15",
      date: "2030",
      title: "Sustainable Tech",
      description: "Green computing and sustainable practices become the industry standard.",
      status: "upcoming",
      category: "Sustainability"
    }
  ];

  // Load more milestones when scrolling to bottom
  useEffect(() => {
    if (isInView && visibleCount < allMilestones.length) {
      setTimeout(() => {
        setVisibleCount(prev => Math.min(prev + 3, allMilestones.length));
      }, 300);
    }
  }, [isInView, visibleCount]);

  const visibleMilestones = allMilestones.slice(0, visibleCount);
  const milestonesConquered = visibleCount;
  const totalMilestones = allMilestones.length;

  return (
    <div className="min-h-screen bg-brand-background">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-brand-surface to-brand-background border-b border-brand-border py-16"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block p-4 bg-brand-accent/10 rounded-full mb-6"
          >
            <svg className="w-16 h-16 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-brand-text-primary">
            Tech Timeline
          </h1>
          <p className="text-xl text-brand-text-secondary max-w-2xl mx-auto mb-6">
            Explore the evolution of technology and your learning journey through interactive timelines
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-brand-accent font-medium text-lg"
          >
            <span className="text-3xl font-bold">{milestonesConquered}</span>
            <span className="text-brand-text-secondary"> / {totalMilestones} Milestones Discovered</span>
          </motion.div>
        </div>
      </motion.div>

      {/* Progressive Timeline Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-brand-text-primary mb-4">
              Milestones in Technology
            </h2>
            <p className="text-brand-text-secondary">
              From the invention of email to the AI revolution
            </p>
            <p className="text-sm text-brand-accent mt-2">
              Scroll down to discover more milestones →
            </p>
          </motion.div>

          <Timeline 
            items={visibleMilestones} 
            variant="vertical" 
            theme="default" 
          />

          {/* Loading indicator when more content is available */}
          {visibleCount < allMilestones.length && (
            <div ref={bottomRef} className="py-12 text-center">
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
                className="inline-block"
              >
                <div className="w-12 h-12 border-4 border-brand-accent border-t-transparent rounded-full animate-spin"></div>
              </motion.div>
              <p className="text-brand-text-secondary mt-4">
                Loading more milestones...
              </p>
            </div>
          )}

          {/* Completion message */}
          {visibleCount >= allMilestones.length && (
            <motion.div
              ref={bottomRef}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-12 text-center"
            >
              <div className="inline-block p-6 bg-brand-accent/10 rounded-2xl">
                <svg className="w-16 h-16 text-brand-accent mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-2xl font-bold text-brand-text-primary mb-2">
                  🎉 All Milestones Conquered!
                </h3>
                <p className="text-brand-text-secondary">
                  You've explored the complete timeline of technology evolution
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-16 bg-brand-surface"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-brand-text-primary mb-4">
            Ready to Explore More?
          </h2>
          <p className="text-brand-text-secondary mb-8 max-w-2xl mx-auto">
            Dive into detailed explanations of each technology branch and start your learning journey.
          </p>
          <motion.a
            href="/branches"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-brand-accent text-white rounded-lg font-medium hover:bg-brand-accent/90 transition-colors"
          >
            Explore Branches
          </motion.a>
        </div>
      </motion.section>
    </div>
  );
};

export default TimelinePage;
