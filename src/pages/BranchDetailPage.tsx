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
      { title: "Cryptography Basics", level: "Beginner", desc: "Symmetric, asymmetric encryption and hashing.", time: "22 min", slug: "cryptography-basics" },
      { title: "Networking Fundamentals", level: "Beginner", desc: "How devices communicate across networks.", time: "18 min", slug: "networking-fundamentals" },
      { title: "OWASP Top 10", level: "Intermediate", desc: "The most critical web application security risks.", time: "30 min", slug: "owasp-top-10" },
      { title: "Firewalls & IDS", level: "Intermediate", desc: "Network perimeter defense systems.", time: "25 min", slug: "firewalls-ids" },
      { title: "Penetration Testing", level: "Intermediate", desc: "Ethical hacking methodologies.", time: "35 min", slug: "penetration-testing" },
      { title: "Malware Analysis", level: "Advanced", desc: "Reverse engineering malicious software.", time: "40 min", slug: "malware-analysis" },
      { title: "Digital Forensics", level: "Advanced", desc: "Evidence collection and incident analysis.", time: "45 min", slug: "digital-forensics" },
      { title: "IAM", level: "Intermediate", desc: "Identity and access management systems.", time: "28 min", slug: "iam" }
    ]
  },
  "computer-networks": {
    title: "Computer Networks",
    description: "How data moves across the world.",
    topics: [
      { title: "TCP/IP Protocol Suite", level: "Beginner", desc: "The fundamental protocols of the internet.", time: "20 min", slug: "tcp-ip" },
      { title: "DNS & Domain Names", level: "Beginner", desc: "How domain names resolve to IP addresses.", time: "15 min", slug: "dns" },
      { title: "HTTP & HTTPS", level: "Beginner", desc: "The protocols powering web communication.", time: "18 min", slug: "http-https" },
      { title: "OSI Model", level: "Beginner", desc: "The 7-layer conceptual framework for networks.", time: "25 min", slug: "osi-model" },
      { title: "Routing & Switching", level: "Intermediate", desc: "How data packets find their path across networks.", time: "30 min", slug: "routing-switching" },
      { title: "Load Balancing", level: "Intermediate", desc: "Distributing traffic across multiple servers.", time: "22 min", slug: "load-balancing" },
      { title: "VPNs & Tunneling", level: "Intermediate", desc: "Creating secure connections over public networks.", time: "28 min", slug: "vpns-tunneling" },
      { title: "Network Security", level: "Advanced", desc: "Securing network infrastructure and traffic.", time: "35 min", slug: "network-security" }
    ]
  },
  hardware: {
    title: "Hardware & Electronics",
    description: "From transistors to CPUs — the physical layer of computing.",
    topics: [
      { title: "Logic Gates & Boolean Algebra", level: "Beginner", desc: "The fundamental building blocks of digital circuits.", time: "20 min", slug: "logic-gates" },
      { title: "Transistors", level: "Beginner", desc: "How transistors work and enable all digital electronics.", time: "25 min", slug: "transistors" },
      { title: "CPU Architecture", level: "Intermediate", desc: "How processors execute instructions (fetch-decode-execute).", time: "35 min", slug: "cpu-architecture" },
      { title: "Memory & Storage", level: "Intermediate", desc: "RAM, cache, SSDs, and the memory hierarchy.", time: "30 min", slug: "memory-storage" },
      { title: "ARM vs x86", level: "Intermediate", desc: "The two major CPU architectures and their tradeoffs.", time: "28 min", slug: "arm-vs-x86" },
      { title: "GPUs & Parallel Processing", level: "Intermediate", desc: "How GPUs accelerate computation for graphics and AI.", time: "32 min", slug: "gpus" },
      { title: "FPGA Programming", level: "Advanced", desc: "Field-programmable gate arrays for custom hardware logic.", time: "40 min", slug: "fpga" },
      { title: "Embedded Systems", level: "Advanced", desc: "Microcontrollers, sensors, and real-time operating systems.", time: "38 min", slug: "embedded-systems" }
    ]
  },
  programming: {
    title: "Programming Languages",
    description: "From C to Python to Rust — syntax, paradigms, and ecosystems.",
    topics: [
      { title: "Python Basics", level: "Beginner", desc: "Syntax, data structures, and the Python standard library.", time: "30 min", slug: "python-basics" },
      { title: "C Programming", level: "Beginner", desc: "The foundation of modern systems programming.", time: "35 min", slug: "c-programming" },
      { title: "JavaScript & TypeScript", level: "Beginner", desc: "The languages of the web, from vanilla JS to TS.", time: "28 min", slug: "javascript-typescript" },
      { title: "Object-Oriented Programming", level: "Intermediate", desc: "Classes, inheritance, polymorphism, and encapsulation.", time: "32 min", slug: "oop" },
      { title: "Functional Programming", level: "Intermediate", desc: "Pure functions, immutability, and higher-order functions.", time: "30 min", slug: "functional-programming" },
      { title: "Rust", level: "Intermediate", desc: "Memory safety without garbage collection.", time: "40 min", slug: "rust" },
      { title: "Go", level: "Intermediate", desc: "Concurrency, simplicity, and cloud-native systems.", time: "35 min", slug: "go" },
      { title: "Compilers & Interpreters", level: "Advanced", desc: "How programming languages are translated to machine code.", time: "45 min", slug: "compilers-interpreters" }
    ]
  },
  ai: {
    title: "AI & Machine Learning",
    description: "From Perceptrons to LLMs — building intelligent systems.",
    topics: [
      { title: "Linear Algebra for ML", level: "Beginner", desc: "Vectors, matrices, and the math behind neural networks.", time: "30 min", slug: "linear-algebra-ml" },
      { title: "Supervised Learning", level: "Beginner", desc: "Regression, classification, and training ML models.", time: "35 min", slug: "supervised-learning" },
      { title: "Neural Networks", level: "Intermediate", desc: "Perceptrons, activation functions, and backpropagation.", time: "40 min", slug: "neural-networks" },
      { title: "Convolutional Neural Networks", level: "Intermediate", desc: "Deep learning for computer vision tasks.", time: "38 min", slug: "cnns" },
      { title: "Transformers", level: "Intermediate", desc: "Attention mechanisms and the architecture behind GPT.", time: "42 min", slug: "transformers" },
      { title: "Natural Language Processing", level: "Intermediate", desc: "Text processing, embeddings, and language models.", time: "36 min", slug: "nlp" },
      { title: "RAG & Vector Databases", level: "Advanced", desc: "Retrieval-augmented generation for LLM applications.", time: "40 min", slug: "rag-vector-dbs" },
      { title: "MLOps", level: "Advanced", desc: "Deploying, monitoring, and maintaining ML systems.", time: "45 min", slug: "mlops" }
    ]
  },
  cloud: {
    title: "Cloud & DevOps",
    description: "Infrastructure, containers, and scale.",
    topics: [
      { title: "Linux Basics", level: "Beginner", desc: "Command line, file systems, and server management.", time: "28 min", slug: "linux-basics" },
      { title: "Docker", level: "Beginner", desc: "Containerization, images, and Docker Compose.", time: "32 min", slug: "docker" },
      { title: "Kubernetes", level: "Intermediate", desc: "Orchestration, pods, deployments, and services.", time: "40 min", slug: "kubernetes" },
      { title: "CI/CD Pipelines", level: "Intermediate", desc: "Automated testing, building, and deployment.", time: "35 min", slug: "cicd" },
      { title: "Infrastructure as Code", level: "Intermediate", desc: "Terraform, Ansible, and declarative infrastructure.", time: "38 min", slug: "iac" },
      { title: "AWS Fundamentals", level: "Intermediate", desc: "EC2, S3, Lambda, and core AWS services.", time: "42 min", slug: "aws-fundamentals" },
      { title: "Monitoring & Observability", level: "Advanced", desc: "Prometheus, Grafana, and distributed tracing.", time: "40 min", slug: "monitoring-observability" },
      { title: "Service Mesh", level: "Advanced", desc: "Istio, Linkerd, and microservice communication.", time: "45 min", slug: "service-mesh" }
    ]
  }
};

const levelStyles: Record<TopicLevel, string> = {
  Beginner: "bg-green-950 text-green-400 border-green-800",
  Intermediate: "bg-[#1e3a5f] text-brand-accent border-blue-900",
  Advanced: "bg-red-950 text-red-400 border-red-900",
};

export default function BranchDetailPage() {
  const { branch } = useParams<{ branch: string }>();
  const branchData = branch ? branchesData[branch] : undefined;
  const [filter, setFilter] = useState<FilterOption>("All");

  if (!branchData) {
    return (
      <div className="container-custom py-12 text-center">
        <h1 className="text-4xl text-brand-text mb-4">Branch Not Found</h1>
        <p className="text-brand-muted mb-8">We couldn't find the learning branch you're looking for.</p>
        <Link to="/branches" className="text-brand-accent hover:underline">← Back to Branches</Link>
      </div>
    );
  }

  const filteredTopics = filter === "All" ? branchData.topics : branchData.topics.filter(t => t.level === filter);
  const filters: FilterOption[] = ["All", "Beginner", "Intermediate", "Advanced"];

  return (
    <div className="container-custom py-12">
      <nav className="flex items-center gap-2 text-sm text-brand-muted mb-10">
        <Link to="/" className="hover:text-brand-accent transition-colors">Home</Link>
        <span>/</span>
        <Link to="/branches" className="hover:text-brand-accent transition-colors">Branches</Link>
        <span>/</span>
        <span className="text-brand-text">{branchData.title}</span>
      </nav>

      <div className="mb-10">
        <h1 className="text-4xl text-brand-text mb-4">{branchData.title}</h1>
        <p className="text-xl text-brand-muted">{branchData.description}</p>
      </div>

      <div className="flex flex-wrap gap-3 mb-10">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 text-sm rounded border transition-colors ${
              filter === f
                ? "bg-[#1e3a5f] text-brand-accent border-brand-accent"
                : "bg-brand-surface text-brand-muted border-brand-border hover:border-brand-accent"
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
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Link to={`/topics/${topic.slug}`}>
              <div className="h-full p-5 rounded-lg border border-brand-border bg-brand-surface hover:border-brand-accent transition-colors group">
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs px-2.5 py-1 rounded border ${levelStyles[topic.level]}`}>
                    {topic.level}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-brand-muted">
                    <Clock className="w-3.5 h-3.5" />
                    {topic.time}
                  </span>
                </div>
                <h3 className="text-brand-text font-medium mb-2 group-hover:text-brand-accent transition-colors">
                  {topic.title}
                </h3>
                <p className="text-sm text-brand-muted leading-relaxed">{topic.desc}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
