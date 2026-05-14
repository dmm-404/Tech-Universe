import { motion, useInView } from "motion/react";
import { Timeline, TimelineItem } from "../components/Timeline";
import { useRef, useState, useEffect } from "react";

const TimelinePage = () => {
  const [visibleCount, setVisibleCount] = useState(5);
  const bottomRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(bottomRef, { once: false });

  // All 71 milestones from the comprehensive tech timeline
  const allMilestones: TimelineItem[] = [
    {
      id: "1",
      date: "1674",
      title: "The Stepped Reckoner",
      description: "Gottfried Wilhelm Leibniz designed a mechanical calculator using a stepped cylindrical gear mechanism, capable of performing all four basic arithmetic operations.",
      status: "completed",
      category: "Mechanical Computation"
    },
    {
      id: "2",
      date: "1820",
      title: "The Thomas Arithmometer",
      description: "The first mass-produced calculator, moving mechanical computation from laboratory prototypes into commercial use.",
      status: "completed",
      category: "Mechanical Computation"
    },
    {
      id: "3",
      date: "1822",
      title: "Difference Engine & Analytical Engine",
      description: "Charles Babbage designed the first computer to incorporate an ALU, integrated memory, and control flow, with Ada Lovelace's early algorithmic theories.",
      status: "completed",
      category: "Mechanical Computation"
    },
    {
      id: "4",
      date: "1934",
      title: "The Mundaneum",
      description: "Paul Otlet created a system combining card catalogs, microfilm, and telegraphy to organize the world's knowledge, pioneering associative knowledge retrieval.",
      status: "completed",
      category: "Information Systems"
    },
    {
      id: "5",
      date: "1936",
      title: "The Turing Machine",
      description: "Alan Turing mathematically formalized the concepts of algorithm and computation, establishing theoretical boundaries of what computers can do.",
      status: "completed",
      category: "Theoretical Computing"
    },
    {
      id: "6",
      date: "1937",
      title: "The Model K Adder",
      description: "George Stibitz proved that Boolean algebra could be directly mapped onto electronic circuits, establishing that computers would process information in binary.",
      status: "completed",
      category: "Electronic Logic"
    },
    {
      id: "7",
      date: "1939",
      title: "Complex Number Calculator (CNC)",
      description: "First demonstration of remote computing via Teletype terminal connected via telephone lines, birthing telecomputing.",
      status: "completed",
      category: "Electromechanical Computing"
    },
    {
      id: "8",
      date: "1939-1942",
      title: "The Atanasoff-Berry Computer",
      description: "First computer to implement binary arithmetic using electronic vacuum tubes, pioneering electronic logic and regenerative capacitor memory.",
      status: "completed",
      category: "Electronic Computing"
    },
    {
      id: "9",
      date: "1941",
      title: "The Zuse Z3",
      description: "World's first fully functional, programmable, automatic digital computer, featuring floating-point binary arithmetic.",
      status: "completed",
      category: "Electromechanical Computing"
    },
    {
      id: "10",
      date: "1944",
      title: "Colossus",
      description: "First programmable electronic digital computer, built to break Nazi ciphers, significantly shortening World War II.",
      status: "completed",
      category: "Electronic Computing"
    },
    {
      id: "11",
      date: "1945",
      title: "The Memex Concept",
      description: "Vannevar Bush envisioned an associative tool to build logical trails through knowledge, conceptual ancestor to hypertext and Web links.",
      status: "completed",
      category: "Information Systems"
    },
    {
      id: "12",
      date: "1945",
      title: "von Neumann Architecture",
      description: "Outlined the stored-program computer architecture, becoming the universal blueprint for nearly all general-purpose computers.",
      status: "completed",
      category: "Computer Architecture"
    },
    {
      id: "13",
      date: "1945",
      title: "Plankalkül",
      description: "World's first algorithmic programming language by Konrad Zuse, elevating programming from hardware manipulation to abstract problem-solving.",
      status: "completed",
      category: "Programming Languages"
    },
    {
      id: "14",
      date: "1946",
      title: "ENIAC",
      description: "First general-purpose, Turing-complete electronic computer, operating 1,000 times faster than any prior electromechanical machine.",
      status: "completed",
      category: "Electronic Computing"
    },
    {
      id: "15",
      date: "1947",
      title: "The Point-Contact Transistor",
      description: "Bell Labs invented the transistor, enabling exponential miniaturization of computers and birthing the solid-state electronics industry.",
      status: "completed",
      category: "Semiconductors"
    },
    {
      id: "16",
      date: "1948",
      title: "Information Theory",
      description: "Claude Shannon defined the bit as the fundamental unit of information, serving as the mathematical bedrock for modern digital communications.",
      status: "completed",
      category: "Mathematics"
    },
    {
      id: "17",
      date: "1948",
      title: "The Manchester Baby (SSEM)",
      description: "First machine to implement stored-program architecture, confirming von Neumann's conceptual model and birthing software engineering.",
      status: "completed",
      category: "Computer Architecture"
    },
    {
      id: "18",
      date: "1949",
      title: "The Modem",
      description: "Allowed computers to communicate over telephone lines by modulating digital data into analog signals, democratizing remote computing.",
      status: "completed",
      category: "Hardware"
    },
    {
      id: "19",
      date: "1952",
      title: "The A-0 System",
      description: "Grace Hopper's compiler enabled programming using English-like words instead of raw machine code, lowering barriers to software development.",
      status: "completed",
      category: "Programming Languages"
    },
    {
      id: "20",
      date: "1954",
      title: "Magnetic Core Memory",
      description: "Non-volatile, fast, and reliable storage solution that dominated as primary RAM for two decades.",
      status: "completed",
      category: "Hardware"
    },
    {
      id: "21",
      date: "1957",
      title: "FORTRAN",
      description: "First widely adopted high-level language with an optimizing compiler, grandfather of modern scientific computing.",
      status: "completed",
      category: "Programming Languages"
    },
    {
      id: "22",
      date: "1958",
      title: "The Integrated Circuit",
      description: "Jack Kilby and Robert Noyce integrated multiple semiconductor elements onto a single chip, enabling Moore's Law and massively lowering production costs.",
      status: "completed",
      category: "Semiconductors"
    },
    {
      id: "23",
      date: "1959",
      title: "COBOL",
      description: "Business-oriented language forcing cross-platform compatibility, became backbone of global commerce and still powers enterprise systems today.",
      status: "completed",
      category: "Programming Languages"
    },
    {
      id: "24",
      date: "1961",
      title: "Compatible Time-Sharing System (CTSS)",
      description: "Proved that interactive, multi-user computing was viable, pioneering features like file sharing and early inter-user messaging.",
      status: "completed",
      category: "Operating Systems"
    },
    {
      id: "25",
      date: "1963",
      title: "Sketchpad",
      description: "Ivan Sutherland's interactive drawing system laid foundations for graphical user interfaces and object-oriented design.",
      status: "completed",
      category: "Computer Graphics"
    },
    {
      id: "26",
      date: "1964",
      title: "BASIC",
      description: "Easy-to-learn language designed for students, democratizing software creation and shipped with early personal computers.",
      status: "completed",
      category: "Programming Languages"
    },
    {
      id: "27",
      date: "1964",
      title: "SABRE Reservation System",
      description: "Commercial debut of online transaction processing, linking 2,000 terminals across 65 cities, modernizing global travel industry.",
      status: "completed",
      category: "Enterprise Networking"
    },
    {
      id: "28",
      date: "1965",
      title: "Moore's Law",
      description: "Observation that transistor count doubles every two years, becoming self-fulfilling benchmark driving relentless semiconductor innovation.",
      status: "completed",
      category: "Semiconductor Manufacturing"
    },
    {
      id: "29",
      date: "1968",
      title: "The Mother of All Demos",
      description: "Douglas Engelbart unveiled the mouse, hypertext, graphical windows, and real-time collaboration, fundamentally shifting perspective of computers.",
      status: "completed",
      category: "Human-Computer Interaction"
    },
    {
      id: "30",
      date: "1968",
      title: "Time-Division Multiplexers",
      description: "Allowed multiple terminal connections on a single telephone wire, drastically lowering online connection costs.",
      status: "completed",
      category: "Network Hardware"
    },
    {
      id: "31",
      date: "1969",
      title: "ARPANET",
      description: "First large-scale packet-switching network, serving as direct technical foundation and precursor to the global Internet.",
      status: "completed",
      category: "Networking Infrastructure"
    },
    {
      id: "32",
      date: "1969",
      title: "UNIX",
      description: "Multi-tasking, multi-user OS introducing hierarchical file systems and modular tools, foundational architecture for Linux, macOS, and Android.",
      status: "completed",
      category: "Operating Systems"
    },
    {
      id: "33",
      date: "1970",
      title: "The Relational Database Model",
      description: "Edgar Codd's relational model separated logical data organization from physical storage, serving as bedrock for modern transaction-processing systems.",
      status: "completed",
      category: "Databases"
    },
    {
      id: "34",
      date: "1971",
      title: "Networked Email",
      description: "Ray Tomlinson invented the @ symbol for cross-network messaging, creating the first killer app for networks and altering global correspondence.",
      status: "completed",
      category: "Communications"
    },
    {
      id: "35",
      date: "1972",
      title: "The C Programming Language",
      description: "Perfect abstraction between human readability and hardware efficiency, liberating operating systems from specific hardware architectures.",
      status: "completed",
      category: "Programming Languages"
    },
    {
      id: "36",
      date: "1973",
      title: "TCP/IP Protocol Suite",
      description: "Universal communication standard allowing completely different networks to interconnect seamlessly, fundamental language of the global Internet.",
      status: "completed",
      category: "Internet Protocols"
    },
    {
      id: "37",
      date: "1974",
      title: "Xerox PARC Alto",
      description: "First computer designed around a Graphical User Interface with windows, icons, and mouse, inspiring Apple Lisa and Macintosh.",
      status: "completed",
      category: "Personal Computing"
    },
    {
      id: "38",
      date: "1976",
      title: "CP/M Operating System",
      description: "First commercially successful microcomputer OS, creating the first massive third-party software ecosystem for personal computers.",
      status: "completed",
      category: "Operating Systems"
    },
    {
      id: "39",
      date: "1976-1977",
      title: "Diffie-Hellman & RSA",
      description: "Public-key cryptography solved key distribution problem, enabling secure web browsing and trillions of dollars in e-commerce.",
      status: "completed",
      category: "Cryptography"
    },
    {
      id: "40",
      date: "1981",
      title: "IBM Personal Computer",
      description: "Open architecture using standard components legitimized microcomputers for enterprise adoption, establishing x86 and DOS paradigm.",
      status: "completed",
      category: "Hardware"
    },
    {
      id: "41",
      date: "1984",
      title: "Apple Macintosh",
      description: "First commercially successful computer with mouse and GUI, cementing mouse-and-window interface as permanent standard for consumer computing.",
      status: "completed",
      category: "Personal Computing"
    },
    {
      id: "42",
      date: "1989",
      title: "Paxos Consensus Algorithm",
      description: "First rigorously proven approach to state machine replication, foundational bedrock for modern distributed databases and cluster management.",
      status: "completed",
      category: "Distributed Systems"
    },
    {
      id: "43",
      date: "1990",
      title: "The World Wide Web",
      description: "Tim Berners-Lee created HTML, URLs, and HTTP, providing intuitive navigation layer that fundamentally reshaped global commerce and communication.",
      status: "completed",
      category: "Internet"
    },
    {
      id: "44",
      date: "1991",
      title: "The Linux Kernel",
      description: "Linus Torvalds proved enterprise-grade software could be developed using decentralized open-source model, now underpinning most modern infrastructure.",
      status: "completed",
      category: "Operating Systems"
    },
    {
      id: "45",
      date: "1991",
      title: "Pretty Good Privacy (PGP)",
      description: "Phil Zimmermann democratized data privacy, packaging military-grade encryption into accessible tool for private citizens.",
      status: "completed",
      category: "Cryptography"
    },
    {
      id: "46",
      date: "1993",
      title: "Mosaic Browser",
      description: "First widely distributed graphical web browser seamlessly integrating text and multimedia, triggering the rapid internet boom of the 1990s.",
      status: "completed",
      category: "Web Browsers"
    },
    {
      id: "47",
      date: "1993",
      title: "FreeBSD",
      description: "Complete open-source Unix-like OS providing highly stable alternative, serving as foundational code base for macOS and iOS.",
      status: "completed",
      category: "Operating Systems"
    },
    {
      id: "48",
      date: "1994",
      title: "Shor's Algorithm",
      description: "Quantum algorithm demonstrating quantum computers could break RSA cryptography, catalyzing global investment in quantum computing and post-quantum cryptography.",
      status: "completed",
      category: "Quantum Computing"
    },
    {
      id: "49",
      date: "1995",
      title: "Java and JavaScript",
      description: "Java standardized enterprise backend with portable virtual machine, while JavaScript transformed Web into dynamic, interactive platform.",
      status: "completed",
      category: "Programming Languages"
    },
    {
      id: "50",
      date: "1998",
      title: "The CAP Theorem",
      description: "Eric Brewer proved distributed data stores can guarantee at most two of Consistency, Availability, and Partition Tolerance, influencing NoSQL databases.",
      status: "completed",
      category: "Distributed Systems"
    },
    {
      id: "51",
      date: "1999",
      title: "NVIDIA GeForce 256",
      description: "Introduced Graphics Processing Unit, eventually providing massive parallel computing architecture enabling modern AI and deep learning.",
      status: "completed",
      category: "Graphics Hardware"
    },
    {
      id: "52",
      date: "2004",
      title: "MapReduce & Google File System",
      description: "Abstracted parallel computing complexities, directly inspiring Apache Hadoop and fundamentally changing large-scale data analytics.",
      status: "completed",
      category: "Big Data"
    },
    {
      id: "53",
      date: "2004",
      title: "Web 2.0",
      description: "Marked shift from passive static pages to interactive platforms driven by user-generated content, proliferating social media and collaborative tools.",
      status: "completed",
      category: "Web Architecture"
    },
    {
      id: "54",
      date: "2005",
      title: "Git",
      description: "Linus Torvalds created distributed version control system, standardizing source code management and birthing GitHub collaboration platforms.",
      status: "completed",
      category: "Developer Tooling"
    },
    {
      id: "55",
      date: "2006",
      title: "NVIDIA CUDA",
      description: "Parallel computing platform allowing general-purpose algorithms on GPU cores, laying hardware foundation for deep learning revolution.",
      status: "completed",
      category: "Parallel Processing"
    },
    {
      id: "56",
      date: "2006",
      title: "Amazon Web Services (EC2 & S3)",
      description: "Shifted computing from capital expense to operational expense, inaugurating modern cloud computing era and enabling startups to scale infinitely.",
      status: "completed",
      category: "Cloud Computing"
    },
    {
      id: "57",
      date: "2007",
      title: "The Apple iPhone",
      description: "Integrated multi-touch screen with desktop-class browsing, igniting mobile computing revolution and keeping billions permanently connected.",
      status: "completed",
      category: "Mobile Computing"
    },
    {
      id: "58",
      date: "2009",
      title: "Node.js",
      description: "Ryan Dahl's JavaScript runtime enabled full-stack JavaScript development, unifying web development around a single language.",
      status: "completed",
      category: "Web Development"
    },
    {
      id: "59",
      date: "2010",
      title: "Zero Trust Security Model",
      description: "John Kindervag formalized 'never trust, always verify' philosophy, becoming governing principle of modern cybersecurity architecture.",
      status: "completed",
      category: "Cybersecurity"
    },
    {
      id: "60",
      date: "2012",
      title: "AlexNet",
      description: "Deep convolutional neural network won ImageNet, convincing global tech industry to abandon traditional approaches in favor of deep learning.",
      status: "completed",
      category: "Deep Learning"
    },
    {
      id: "61",
      date: "2012",
      title: "Google Spanner",
      description: "First globally distributed database maintaining strict ACID transactions using atomic clocks, birthing NewSQL category.",
      status: "completed",
      category: "Databases"
    },
    {
      id: "62",
      date: "2013",
      title: "Docker",
      description: "Standardized software containerization, transforming software delivery and catalyzing explosive rise of microservices architecture.",
      status: "completed",
      category: "Virtualization"
    },
    {
      id: "63",
      date: "2014",
      title: "Raft Consensus Algorithm",
      description: "Understandable alternative to Paxos, became core consensus engine for modern distributed tools like etcd and Kubernetes.",
      status: "completed",
      category: "Distributed Systems"
    },
    {
      id: "64",
      date: "2014",
      title: "Kubernetes",
      description: "Google open-sourced container orchestration platform, becoming absolute industry standard for cloud-native ecosystem.",
      status: "completed",
      category: "Cloud Computing"
    },
    {
      id: "65",
      date: "2016",
      title: "AlphaGo",
      description: "DeepMind's AI defeated world Go champion using deep neural networks and reinforcement learning, proving AI could master highly complex intuitive tasks.",
      status: "completed",
      category: "Reinforcement Learning"
    },
    {
      id: "66",
      date: "2017",
      title: "The Transformer Architecture",
      description: "Google's 'Attention Is All You Need' paper introduced self-attention mechanisms, enabling Large Language Models like GPT and BERT.",
      status: "completed",
      category: "Neural Networks"
    },
    {
      id: "67",
      date: "2017",
      title: "Extreme Ultraviolet (EUV) Lithography",
      description: "ASML commercialized EUV lithography, saving Moore's Law and enabling 5nm, 3nm, and beyond transistor shrinking.",
      status: "completed",
      category: "Semiconductor Manufacturing"
    },
    {
      id: "68",
      date: "2019",
      title: "Sycamore Quantum Processor",
      description: "Google's 53-qubit processor achieved quantum supremacy, proving quantum systems can execute computationally impossible classical workloads.",
      status: "completed",
      category: "Quantum Computing"
    },
    {
      id: "69",
      date: "2020",
      title: "SolarWinds Supply Chain Attack",
      description: "Nation-state actors weaponized trusted software supply chain, accelerating adoption of Zero Trust and Software Bill of Materials requirements.",
      status: "completed",
      category: "Cybersecurity"
    },
    {
      id: "70",
      date: "2022",
      title: "InstructGPT and RLHF",
      description: "OpenAI's Reinforcement Learning from Human Feedback aligned models with human intent, enabling successful ChatGPT launch and global AI arms race.",
      status: "completed",
      category: "AI Alignment"
    },
    {
      id: "71",
      date: "2023",
      title: "GPT-4 & Open-Source AI Boom",
      description: "OpenAI's GPT-4 and Meta's LLaMA models democratized access to frontier-class AI, cementing generative AI as profound general-purpose technology.",
      status: "completed",
      category: "Generative AI"
    }
  ];

  // Load more milestones when scrolling to bottom
  useEffect(() => {
    if (isInView && visibleCount < allMilestones.length) {
      setTimeout(() => {
        setVisibleCount(prev => Math.min(prev + 5, allMilestones.length));
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
              From mechanical calculators to artificial intelligence
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
