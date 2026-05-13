import { Link, useParams } from "react-router-dom";
import { Check, ChevronDown, ChevronRight, ArrowRight } from "lucide-react";
import { useState } from "react";

// Topic data structure
interface TopicData {
  id: string;
  title: string;
  branch: string;
  tags: string[];
  readTime: string;
  difficulty: string;
  story: {
    why: string;
    who: string;
    where: string;
    when: string;
    what: string;
  };
  howItWorks: string[];
  codeExample?: {
    filename: string;
    code: string;
  };
  resources: Array<{
    title: string;
    type: string;
    url: string;
  }>;
}

// Topics database
const topicsData: Record<string, TopicData> = {
  "networking-fundamentals": {
    id: "networking-fundamentals",
    title: "Networking Fundamentals",
    branch: "computer-networks",
    tags: ["Networking", "TCP/IP", "OSI Model"],
    readTime: "18 min read",
    difficulty: "Beginner",
    story: {
      why: "To enable devices to communicate, share resources, and form the backbone of the modern internet.",
      who: "Pioneered by ARPA researchers including Vint Cerf and Bob Kahn in the 1970s.",
      where: "Initially across US research institutions, now spanning globally via fiber, copper, and wireless.",
      when: "TCP/IP adopted as standard in 1983, establishing the foundation of the modern network.",
      what: "A collection of interconnected devices capable of exchanging data through defined protocols and physical connections."
    },
    howItWorks: [
      "At its core, networking is about language and address. Every device on a network needs a unique identifier (IP address) and a common set of rules (protocols) to communicate effectively.",
      "Information is broken down into smaller chunks called packets. These packets travel across various routes, potentially arriving out of order, and are reassembled at their destination."
    ],
    codeExample: {
      filename: "example.py",
      code: `import socket

def connect_to_server():
    host = 'example.com'
    port = 80
    
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        s.connect((host, port))
        s.sendall(b'GET / HTTP/1.1\\r\\nHost: example.com\\r\\n\\r\\n')
        data = s.recv(1024)
    
    print(f'Received {len(data)} bytes')`
    },
    resources: [
      { title: "Computer Networking: A Top-Down Approach", type: "Book", url: "#" },
      { title: "TCP/IP Illustrated", type: "Book", url: "#" },
      { title: "Cisco Networking Basics", type: "Course", url: "#" }
    ]
  },
  "http-protocol": {
    id: "http-protocol",
    title: "HTTP Protocol",
    branch: "computer-networks",
    tags: ["HTTP", "Web", "REST"],
    readTime: "12 min read",
    difficulty: "Beginner",
    story: {
      why: "To enable web browsers and servers to communicate and transfer web content across the internet.",
      who: "Created by Tim Berners-Lee at CERN as part of the World Wide Web project.",
      where: "Deployed globally across all web servers and browsers, forming the foundation of the web.",
      when: "First version (HTTP/0.9) released in 1991, with HTTP/1.1 standardized in 1997.",
      what: "An application-layer protocol for transmitting hypermedia documents between clients and servers."
    },
    howItWorks: [
      "HTTP follows a request-response model where clients send requests to servers, and servers respond with the requested resource or an error code.",
      "The protocol is stateless, meaning each request is independent. State is maintained using cookies, sessions, or tokens."
    ],
    resources: [
      { title: "MDN HTTP Documentation", type: "Docs", url: "#" },
      { title: "HTTP: The Definitive Guide", type: "Book", url: "#" }
    ]
  },
  "machine-learning-basics": {
    id: "machine-learning-basics",
    title: "Machine Learning Basics",
    branch: "ai",
    tags: ["ML", "AI", "Algorithms"],
    readTime: "20 min read",
    difficulty: "Intermediate",
    story: {
      why: "To enable computers to learn from data and make predictions without being explicitly programmed.",
      who: "Field pioneered by Arthur Samuel, with contributions from Geoffrey Hinton, Yann LeCun, and others.",
      where: "Applied globally in tech companies, research institutions, and industries from healthcare to finance.",
      when: "Term coined in 1959, with modern deep learning renaissance beginning in 2012.",
      what: "A subset of AI focused on algorithms that improve automatically through experience and data."
    },
    howItWorks: [
      "ML models learn patterns from training data by adjusting internal parameters to minimize prediction errors.",
      "The process involves data preprocessing, model selection, training, validation, and deployment."
    ],
    resources: [
      { title: "Pattern Recognition and Machine Learning", type: "Book", url: "#" },
      { title: "Coursera ML Course", type: "Course", url: "#" }
    ]
  },
  "cloud-computing-intro": {
    id: "cloud-computing-intro",
    title: "Cloud Computing Introduction",
    branch: "cloud",
    tags: ["Cloud", "AWS", "Azure"],
    readTime: "15 min read",
    difficulty: "Beginner",
    story: {
      why: "To provide on-demand access to computing resources without direct management by users.",
      who: "Popularized by Amazon Web Services (AWS) in 2006, followed by Microsoft Azure and Google Cloud.",
      where: "Data centers distributed globally, providing services to businesses and individuals worldwide.",
      when: "Concept emerged in the 1960s, modern cloud computing began in early 2000s.",
      what: "Delivery of computing services including servers, storage, databases, networking, and software over the internet."
    },
    howItWorks: [
      "Cloud providers maintain massive data centers with virtualized resources that can be allocated dynamically.",
      "Users access resources through APIs and web interfaces, paying only for what they use."
    ],
    resources: [
      { title: "AWS Documentation", type: "Docs", url: "#" },
      { title: "Cloud Computing Fundamentals", type: "Course", url: "#" }
    ]
  }
};

export default function TopicPage() {
  const { topic } = useParams();
  const [expandedMode, setExpandedMode] = useState<number | null>(1);

  // Get topic data or show not found
  const topicData = topic ? topicsData[topic] : null;

  if (!topicData) {
    return (
      <div className="container-custom py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-brand-text mb-4">Topic Not Found</h1>
          <p className="text-brand-muted mb-8">The topic you're looking for doesn't exist.</p>
          <Link to="/branches" className="text-brand-accent hover:underline">
            Return to Branches
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container-custom py-12">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-brand-muted mb-8">
        <Link to="/" className="hover:text-brand-accent transition-colors">Home</Link>
        <span>/</span>
        <Link to="/branches/networks" className="hover:text-brand-accent transition-colors">
          Computer Networks
        </Link>
        <span>/</span>
        <span className="text-brand-text">{topicData.title}</span>
      </nav>

      {/* Main Content */}
      <div className="lg:w-[65%]">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl text-brand-text">{topicData.title}</h1>
          <div className="mt-6 flex flex-wrap gap-2">
            {topicData.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-[#1e3a5f] text-brand-accent text-xs font-medium px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="bg-[#1e3a5f] text-brand-text text-[12px] text-brand-muted">
              {topicData.readTime}
            </span>
            <span className="bg-[#1e3a5f] text-brand-text text-[12px] text-brand-muted">
              {topicData.difficulty}
            </span>
          </div>
        </header>

        {/* The Story Section */}
        <section id="story" className="mb-16">
          <h2 className="text-2xl mb-8">The Story</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-brand-surface border border-brand-border rounded-lg p-5">
              <span className="text-[11px] uppercase tracking-wider text-brand-muted">Why</span>
              <p className="mt-3 text-sm text-brand-text">{topicData.story.why}</p>
            </div>
            <div className="bg-brand-surface border border-brand-border rounded-lg p-5">
              <span className="text-[11px] uppercase tracking-wider text-brand-muted">Who</span>
              <p className="mt-3 text-sm text-brand-text">{topicData.story.who}</p>
            </div>
            <div className="bg-brand-surface border border-brand-border rounded-lg p-5">
              <span className="text-[11px] uppercase tracking-wider text-brand-muted">Where</span>
              <p className="mt-3 text-sm text-brand-text">{topicData.story.where}</p>
            </div>
            <div className="bg-brand-surface border border-brand-border rounded-lg p-5">
              <span className="text-[11px] uppercase tracking-wider text-brand-muted">When</span>
              <p className="mt-3 text-sm text-brand-text">{topicData.story.when}</p>
            </div>
            <div className="bg-brand-surface border border-brand-border rounded-lg p-5 md:col-span-2">
              <span className="text-[11px] uppercase tracking-wider text-brand-muted">What</span>
              <p className="mt-3 text-sm text-brand-text">{topicData.story.what}</p>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="mb-16">
          <h2 className="text-2xl mb-8">How It Works</h2>
          <div className="space-y-6 text-brand-muted leading-relaxed">
            {topicData.howItWorks.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {topicData.codeExample && (
            <div className="mt-8 overflow-hidden bg-[#0d0d0d] border border-brand-border rounded-lg font-mono text-sm">
              <div className="flex justify-between items-center px-4 py-2 border-b border-brand-border bg-brand-surface/30">
                <span className="text-xs text-brand-muted">{topicData.codeExample.filename}</span>
                <button className="text-xs text-brand-muted hover:text-brand-text transition-colors">
                  Copy
                </button>
              </div>
              <pre className="p-4 overflow-x-auto text-brand-text">
                <code>{topicData.codeExample.code}</code>
              </pre>
            </div>
          )}
        </section>

        {/* Learn It Section */}
        <section id="learn-it" className="mb-16">
          <h2 className="text-2xl mb-8">Learn It</h2>
          <div className="space-y-3">
            {topicData.resources.map((resource, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-brand-surface border border-brand-border rounded-lg p-4 hover:border-brand-accent transition-colors"
              >
                <div>
                  <h3 className="text-brand-text font-medium">{resource.title}</h3>
                  <span className="text-xs text-brand-muted">{resource.type}</span>
                </div>
                <ArrowRight className="w-5 h-5 text-brand-accent" />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
