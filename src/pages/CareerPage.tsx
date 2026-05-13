import { useParams, Link } from "react-router-dom";
import { Check, Lock, Play } from "lucide-react";

interface RoadmapNode {
  id: number;
  title: string;
  status: "completed" | "in-progress" | "locked";
  desc: string;
  slug: string;
}

interface Foundation {
  title: string;
  desc: string;
}

interface CareerData {
  title: string;
  tagline: string;
  demand: string;
  description: string;
  roadmap: RoadmapNode[];
  foundations: Foundation[];
}

const careersData: Record<string, CareerData> = {
  "cybersecurity-analyst": {
    title: "Cybersecurity Analyst",
    tagline: "Protect systems, networks, and data from digital attacks.",
    demand: "Very High Demand",
    description: "Cybersecurity analysts monitor, detect, and respond to security threats. They protect an organisation's infrastructure from breaches, malware, and unauthorised access.",
    roadmap: [
      { id: 1, title: "Computer Networking", status: "completed", desc: "Understanding how data travels through the web.", slug: "networking-fundamentals" },
      { id: 2, title: "Linux Basics", status: "completed", desc: "Command line, file systems, and server management.", slug: "linux-basics" },
      { id: 3, title: "How the Internet Works", status: "in-progress", desc: "DNS, HTTP/S, and global traffic routing.", slug: "how-the-internet-works" },
      { id: 4, title: "Cryptography Basics", status: "locked", desc: "Protocols, encryption standards, and PKI.", slug: "cryptography-basics" },
      { id: 5, title: "Security Architecture", status: "locked", desc: "Designing robust and resilient systems.", slug: "security-architecture" },
      { id: 6, title: "Identity & Access Management", status: "locked", desc: "IAM frameworks and zero trust.", slug: "iam" },
      { id: 7, title: "Threat Intelligence", status: "locked", desc: "CTI frameworks and proactive threat hunting.", slug: "threat-intelligence" },
      { id: 8, title: "Incident Response", status: "locked", desc: "Detecting and responding to security breaches.", slug: "incident-response" }
    ],
    foundations: [
      { title: "Networking", desc: "Crucial for understanding how attacks traverse systems." },
      { title: "Linux", desc: "The primary OS for security tools and server infrastructure." },
      { title: "Git", desc: "Version control for scripts, configs, and documentation." },
      { title: "Python", desc: "Automation, scripting, and custom tool development." }
    ]
  },
  "cloud-devops-engineer": {
    title: "Cloud / DevOps Engineer",
    tagline: "Build, automate, and scale infrastructure in the cloud.",
    demand: "Fast Growth",
    description: "Cloud and DevOps engineers bridge development and operations. They design CI/CD pipelines, manage cloud infrastructure, and ensure systems are reliable and scalable.",
    roadmap: [
      { id: 1, title: "Linux & Bash", status: "completed", desc: "Command line, shell scripting, and server administration.", slug: "linux-basics" },
      { id: 2, title: "Networking Fundamentals", status: "completed", desc: "TCP/IP, DNS, load balancers, and VPCs.", slug: "networking-fundamentals" },
      { id: 3, title: "Git & Version Control", status: "in-progress", desc: "Git workflows, branching, and collaboration.", slug: "git" },
      { id: 4, title: "Docker & Containers", status: "locked", desc: "Containerisation, images, and Docker Compose.", slug: "docker" },
      { id: 5, title: "Kubernetes", status: "locked", desc: "Orchestration, pods, deployments, and Helm.", slug: "kubernetes" },
      { id: 6, title: "CI/CD Pipelines", status: "locked", desc: "GitHub Actions, Jenkins, and automated testing.", slug: "cicd" },
      { id: 7, title: "Infrastructure as Code", status: "locked", desc: "Terraform, Ansible, and CloudFormation.", slug: "iac" },
      { id: 8, title: "Cloud Platforms", status: "locked", desc: "AWS, GCP, or Azure services and architecture.", slug: "cloud-platforms" }
    ],
    foundations: [
      { title: "Linux", desc: "Mandatory foundation for all cloud and DevOps work." },
      { title: "Python", desc: "Scripting, automation, and infrastructure tooling." },
      { title: "Git", desc: "Essential for managing infrastructure and application code." },
      { title: "Networking", desc: "VPCs, load balancers, DNS — all require network fundamentals." }
    ]
  },
  "ai-ml-engineer": {
    title: "AI / ML Engineer",
    tagline: "Build intelligent systems that learn from data.",
    demand: "Highest Entry Salaries",
    description: "AI and ML engineers design, build, and deploy machine learning models and intelligent systems. They work across the full pipeline from data to production model serving.",
    roadmap: [
      { id: 1, title: "Python for ML", status: "completed", desc: "NumPy, Pandas, and Python ML ecosystem basics.", slug: "python-basics" },
      { id: 2, title: "Mathematics for ML", status: "completed", desc: "Linear algebra, calculus, probability, and statistics.", slug: "ml-mathematics" },
      { id: 3, title: "Machine Learning Fundamentals", status: "in-progress", desc: "Supervised, unsupervised learning, and evaluation metrics.", slug: "ml-fundamentals" },
      { id: 4, title: "Deep Learning", status: "locked", desc: "Neural networks, CNNs, RNNs, and Transformers.", slug: "deep-learning" },
      { id: 5, title: "Natural Language Processing", status: "locked", desc: "Text processing, embeddings, and LLMs.", slug: "nlp" },
      { id: 6, title: "MLOps & Deployment", status: "locked", desc: "Model serving, versioning, and monitoring.", slug: "mlops" },
      { id: 7, title: "Computer Vision", status: "locked", desc: "Image classification, detection, and segmentation.", slug: "computer-vision" },
      { id: 8, title: "LLMs & Generative AI", status: "locked", desc: "Prompt engineering, RAG, and fine-tuning.", slug: "llms" }
    ],
    foundations: [
      { title: "Python", desc: "The primary language for all ML and AI work." },
      { title: "Mathematics", desc: "Linear algebra and statistics underpin every algorithm." },
      { title: "Git", desc: "Version control for models, experiments, and code." },
      { title: "SQL", desc: "Data querying and manipulation for training datasets." }
    ]
  },
  "data-scientist": {
    title: "Data Scientist",
    tagline: "Extract insights and drive decisions through data analysis.",
    demand: "Rising Demand",
    description: "Data scientists collect, process, and analyse large datasets to uncover patterns and insights. They use statistics, machine learning, and visualisation to inform business decisions.",
    roadmap: [
      { id: 1, title: "Python & R Basics", status: "completed", desc: "Data manipulation with Pandas, NumPy, and tidyverse.", slug: "python-basics" },
      { id: 2, title: "Statistics & Probability", status: "completed", desc: "Descriptive, inferential statistics, and distributions.", slug: "statistics" },
      { id: 3, title: "SQL & Databases", status: "in-progress", desc: "Querying, joins, aggregations, and data warehouses.", slug: "sql" },
      { id: 4, title: "Data Visualisation", status: "locked", desc: "Matplotlib, Seaborn, Plotly, and Tableau.", slug: "data-visualisation" },
      { id: 5, title: "Machine Learning", status: "locked", desc: "Regression, classification, clustering, and ensembles.", slug: "ml-fundamentals" },
      { id: 6, title: "A/B Testing", status: "locked", desc: "Experiment design, hypothesis testing, and significance.", slug: "ab-testing" },
      { id: 7, title: "Big Data Tools", status: "locked", desc: "Spark, Kafka, and distributed data processing.", slug: "big-data" },
      { id: 8, title: "Feature Engineering", status: "locked", desc: "Transforming raw data into meaningful ML features.", slug: "feature-engineering" }
    ],
    foundations: [
      { title: "Python", desc: "Core language for data manipulation and modelling." },
      { title: "SQL", desc: "Essential for extracting and querying datasets." },
      { title: "Statistics", desc: "The theoretical backbone of all data science work." },
      { title: "Git", desc: "Versioning notebooks, scripts, and analysis pipelines." }
    ]
  }
};

const statusConfig = {
  completed: { icon: Check, label: "Completed", color: "text-green-400", border: "border-green-800", bg: "bg-green-950" },
  "in-progress": { icon: Play, label: "In Progress", color: "text-brand-accent", border: "border-brand-accent", bg: "bg-[#1e3a5f]" },
  locked: { icon: Lock, label: "Locked", color: "text-brand-muted", border: "border-brand-border", bg: "bg-brand-surface" },
};

export default function CareerPage() {
  const { career } = useParams<{ career: string }>();
  const data = career ? careersData[career] : undefined;

  if (!data) {
    return (
      <div className="container-custom py-12 text-center">
        <h1 className="text-4xl text-brand-text mb-4">Career Not Found</h1>
        <p className="text-brand-muted mb-8">We couldn't find the career path you're looking for.</p>
        <Link to="/" className="text-brand-accent hover:underline">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="container-custom py-12">
      <nav className="flex items-center gap-2 text-sm text-brand-muted mb-10">
        <Link to="/" className="hover:text-brand-accent transition-colors">Home</Link>
        <span>/</span>
        <span className="text-brand-text">{data.title}</span>
      </nav>

      <div className="max-w-3xl mb-14">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-medium px-3 py-1 rounded-full bg-[#1e3a5f] text-brand-accent border border-blue-900">
            {data.demand}
          </span>
        </div>
        <h1 className="text-4xl text-brand-text mb-4">{data.title}</h1>
        <p className="text-xl text-brand-muted mb-4">{data.tagline}</p>
        <p className="text-brand-muted leading-relaxed">{data.description}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <h2 className="text-2xl text-brand-text mb-8">Learning Roadmap</h2>
          <div className="space-y-3">
            {data.roadmap.map((node) => {
              const cfg = statusConfig[node.status];
              const Icon = cfg.icon;
              return (
                <div
                  key={node.id}
                  className={`flex items-start gap-4 p-5 rounded-lg border ${cfg.border} ${cfg.bg} transition-colors`}
                >
                  <div className={`mt-0.5 shrink-0 w-8 h-8 rounded-full border ${cfg.border} flex items-center justify-center`}>
                    <Icon className={`w-4 h-4 ${cfg.color}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-brand-text font-medium">{node.title}</h3>
                      <span className={`text-xs ${cfg.color} shrink-0`}>{cfg.label}</span>
                    </div>
                    <p className="text-brand-muted text-sm mt-1">{node.desc}</p>
                    {node.status !== "locked" && (
                      <Link
                        to={`/topics/${node.slug}`}
                        className="inline-block mt-2 text-xs text-brand-accent hover:underline"
                      >
                        View topic &rarr;
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <h2 className="text-2xl text-brand-text mb-8">Shared Foundations</h2>
          <div className="space-y-4">
            {data.foundations.map((f, idx) => (
              <div key={idx} className="p-5 rounded-lg border border-brand-border bg-brand-surface hover:border-brand-accent transition-colors">
                <h3 className="text-brand-text font-medium mb-2">{f.title}</h3>
                <p className="text-brand-muted text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
