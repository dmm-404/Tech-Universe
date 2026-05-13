import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "motion/react";
import { Clock } from "lucide-react";

export type TopicLevel = "Beginner" | "Intermediate" | "Advanced";
type FilterOption = "All" | TopicLevel;

export interface Topic {
  title: string;
  level: TopicLevel;
  desc: string;
  time: string;
  slug: string;
}

export interface BranchData {
  title: string;
  description: string;
  topics: Topic[];
}

const branchesData: Record<string, BranchData> = {
  cybersecurity: {
    title: "Cybersecurity",
    description: "Threats, defenses, and the mathematics of cryptography.",
    topics: [
      { title: "Cryptography Basics", level: "Beginner", desc: "Symmetric, asymmetric encryption and hashing", time: "22 min", slug: "cryptography-basics" },
      { title: "OWASP Top 10", level: "Intermediate", desc: "The most critical web application security risks", time: "30 min", slug: "owasp-top-10" },
      { title: "Firewalls & IDS", level: "Intermediate", desc: "Network perimeter defense systems", time: "25 min", slug: "firewalls-ids" },
      { title: "Penetration Testing", level: "Intermediate", desc: "Ethical hacking methodologies", time: "35 min", slug: "penetration-testing" },
      { title: "Malware Analysis", level: "Advanced", desc: "Reverse engineering malicious software", time: "40 min", slug: "malware-analysis" },
      { title: "Digital Forensics", level: "Advanced", desc: "Evidence collection and incident analysis", time: "45 min", slug: "digital-forensics" },
      { title: "IAM", level: "Intermediate", desc: "Identity and access management systems", time: "28 min", slug: "iam" },
      { title: "Threat Intelligence", level: "Advanced", desc: "CTI frameworks and threat modeling", time: "38 min", slug: "threat-intelligence" },
    ],
  },
  "computer-networks": {
    title: "Computer Networks",
    description: "The foundations of digital communication, protocols, and network architecture.",
    topics: [
      { title: "Networking Fundamentals", level: "Beginner", desc: "How devices communicate across networks", time: "18 min", slug: "networking-fundamentals" },
      { title: "OSI Model", level: "Beginner", desc: "Understanding the 7 layers of networking", time: "20 min", slug: "osi-model" },
      { title: "TCP/IP Suite", level: "Intermediate", desc: "Core internet protocols explained", time: "25 min", slug: "tcp-ip-suite" },
    ],
  },
};

const levelStyles: Record<TopicLevel, string> = {
  Beginner: "text-brand-success bg-brand-success-bg",
  Intermediate: "text-brand-warning bg-brand-warning-bg",
  Advanced: "text-brand-danger bg-brand-danger-bg",
};

const filters: FilterOption[] = ["All", "Beginner", "Intermediate", "Advanced"];

export default function BranchDetailPage() {
  const { branch } = useParams<{ branch: string }>();
  const [filter, setFilter] = useState<FilterOption>("All");

  const branchData = branch ? branchesData[branch] : undefined;

  if (!branchData) {
    return (
      <div className="container-custom py-12 text-center">
        <h1 className="text-4xl text-brand-text mb-4">Branch Not Found</h1>
        <p className="text-brand-muted mb-8">
          We couldn't find the learning branch you're looking for.
        </p>
        <Link to="/branches" className="text-brand-accent hover:underline">
          &larr; Back to Branches
        </Link>
      </div>
    );
  }

  const filteredTopics =
    filter === "All"
      ? branchData.topics
      : branchData.topics.filter((t) => t.level === filter);

  return (
    <div className="container-custom py-12">
      <nav className="flex items-center gap-2 text-sm text-brand-muted mb-8">
        <Link to="/" className="hover:text-brand-accent transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link to="/branches" className="hover:text-brand-accent transition-colors">
          Branches
        </Link>
        <span>/</span>
        <span className="text-brand-text">{branchData.title}</span>
      </nav>

      <div className="mb-12">
        <h1 className="text-4xl text-brand-text">{branchData.title}</h1>
        <p className="mt-2 text-brand-muted text-lg">{branchData.description}</p>
      </div>

      <div className="flex flex-wrap gap-3 mb-10">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-1.5 rounded-lg text-sm transition-all border ${
              filter === f
                ? "border-brand-accent text-brand-accent"
                : "border-brand-border text-brand-muted hover:border-brand-muted"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredTopics.map((topic) => (
          <motion.div
            key={topic.slug}
            whileHover={{ borderColor: "var(--color-brand-accent)" }}
            className="group bg-brand-surface border border-brand-border rounded-lg p-5 transition-colors"
          >
            <Link to={`/topics/${topic.slug}`} className="block h-full">
              <h3 className="text-brand-text font-medium text-lg leading-tight group-hover:text-brand-accent transition-colors">
                {topic.title}
              </h3>
              <p className="mt-2 text-brand-muted text-sm line-clamp-2">
                {topic.desc}
              </p>
              <div className="mt-6 flex items-center justify-between">
                <span className={`text-[11px] font-medium px-2 py-0.5 rounded ${levelStyles[topic.level]}`}>
                  {topic.level}
                </span>
                <div className="flex items-center gap-1.5 text-brand-muted text-xs">
                  <Clock className="w-3.5 
