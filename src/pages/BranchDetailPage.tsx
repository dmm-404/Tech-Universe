import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "motion/react";
import { Clock } from "lucide-react";

export default function BranchDetailPage() {
  const { branch } = useParams();
  const [filter, setFilter] = useState("All");

  const branchTitle = branch === "cybersecurity" ? "Cybersecurity" : "Computer Networks"; // Mock dynamic bit
  const branchDescription = "Threats, defenses, and the mathematics of cryptography.";

  const filters = ["All", "Beginner", "Intermediate", "Advanced"];

  const topics = [
    { title: "Networking Fundamentals", level: "Beginner", desc: "How devices communicate across networks", time: "18 min", slug: "networking-fundamentals" },
    { title: "Cryptography Basics", level: "Beginner", desc: "Symmetric, asymmetric encryption and hashing", time: "22 min", slug: "cryptography-basics" },
    { title: "OWASP Top 10", level: "Intermediate", desc: "The most critical web application security risks", time: "30 min", slug: "owasp-top-10" },
    { title: "Firewalls & IDS", level: "Intermediate", desc: "Network perimeter defense systems", time: "25 min", slug: "firewalls-ids" },
    { title: "Penetration Testing", level: "Intermediate", desc: "Ethical hacking methodologies", time: "35 min", slug: "penetration-testing" },
    { title: "Malware Analysis", level: "Advanced", desc: "Reverse engineering malicious software", time: "40 min", slug: "malware-analysis" },
    { title: "Digital Forensics", level: "Advanced", desc: "Evidence collection and incident analysis", time: "45 min", slug: "digital-forensics" },
    { title: "IAM", level: "Intermediate", desc: "Identity and access management systems", time: "28 min", slug: "iam" },
    { title: "Threat Intelligence", level: "Advanced", desc: "CTI frameworks and threat modeling", time: "38 min", slug: "threat-intelligence" },
  ];

  const filteredTopics = filter === "All" ? topics : topics.filter(t => t.level === filter);

  const levelStyles: any = {
    Beginner: "text-brand-success bg-brand-success-bg",
    Intermediate: "text-brand-warning bg-brand-warning-bg",
    Advanced: "text-brand-danger bg-brand-danger-bg"
  };

  return (
    <div className="container-custom py-12">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-brand-muted mb-8">
        <Link to="/" className="hover:text-brand-accent transition-colors">Home</Link>
        <span>/</span>
        <Link to="/branches" className="hover:text-brand-accent transition-colors">Branches</Link>
        <span>/</span>
        <span className="text-brand-text capitalize">{branch?.split('-').join(' ')}</span>
      </nav>

      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl text-brand-text capitalize">{branch?.split('-').join(' ')}</h1>
        <p className="mt-2 text-brand-muted text-lg">{branchDescription}</p>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-wrap gap-3 mb-10">
        {filters.map(f => (
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

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredTopics.map((topic) => (
          <motion.div
            key={topic.slug}
            whileHover={{ borderColor: "var(--color-brand-accent)" }}
            className="group block bg-brand-surface border border-brand-border rounded-lg p-5 transition-colors cursor-pointer"
          >
            <Link to={`/topics/${topic.slug}`}>
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
                  <Clock className="w-3.5 h-3.5" />
                  <span>{topic.time}</span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
