# 🌌 Tech Universe

**Every Technology, Explained**

A comprehensive educational platform exploring the complete universe of computer science and technology. From hardware to cloud computing, from programming languages to AI — understand the origin, evolution, and inner workings of every tech concept.

![Tech Universe Banner](https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6c31a0763ed6)

## 🚀 Overview

Tech Universe is built as a modern, interactive learning platform that makes complex technology topics accessible and engaging. Each topic follows a consistent structure:

- **The Story** (Why, Who, Where, When, What)
- **How It Works** (Technical deep-dive)
- **Learn It** (Curated resources)

## 📚 Branches

The Tech Universe is organized into 6 main branches:

### 🔒 Cybersecurity
Threats, defenses, and the mathematics of cryptography.
- 8 topics covering: Cryptography Basics, OWASP Top 10, Penetration Testing, Network Security, and more
- Tags: AES, OWASP, Pen Testing, Firewalls

### 🌐 Computer Networks
How data moves across the world.
- 8 topics covering: TCP/IP, DNS, HTTP/HTTPS, OSI Model, Routing, and more
- Tags: TCP/IP, DNS, HTTP, OSI Model

### 🔧 Hardware & Electronics
From transistors to CPUs — the physical layer of computing.
- 8 topics covering: Logic Gates, Transistors, CPU Architecture, Memory, and more
- Tags: Logic Gates, ARM, FPGA, Transistors

### 💻 Programming Languages
From C to Python to Rust — syntax, paradigms, and ecosystems.
- 8 topics covering: Python Basics, C Programming, JavaScript/TypeScript, Functional Programming, and more
- Tags: Python, Rust, JavaScript, C++

### 🤖 AI & Machine Learning
From Perceptrons to LLMs — building intelligent systems.
- 8 topics covering: Linear Algebra, Supervised Learning, Neural Networks, Transformers, and more
- Tags: Neural Networks, Transformers, RAG, MLOps

### ☁️ Cloud & DevOps
Infrastructure, containers, and scale.
- 8 topics covering: Linux Basics, Docker, Kubernetes, CI/CD, Infrastructure as Code, and more
- Tags: Docker, Kubernetes, CI/CD, Terraform

## 🎯 Features

- **6 Comprehensive Branches** with 48+ topics across all major tech domains
- **Dynamic Topic Pages** with consistent structure (Story, How It Works, Learn It)
- **Interactive UI** with smooth animations and transitions
- **Dark Mode Design** optimized for comfortable reading
- **Responsive Layout** works beautifully on all devices
- **Topic Filtering** by difficulty level (Beginner, Intermediate, Advanced)
- **Search Functionality** to quickly find topics
- **Career Paths** linking topics to real-world career opportunities
- **Tech Legends** profiles of influential figures in computing history

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Routing**: React Router v6
- **Styling**: TailwindCSS with custom design system
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: Inter (primary), JetBrains Mono (code)

## 🎨 Design System

### Color Palette
- **Primary Background**: `#0a0a0a`
- **Surface**: `#0f0f0f`
- **Accent**: `#3b82f6` (blue)
- **Accent Hover**: `#2563eb`
- **Text**: `#f5f5f5`
- **Muted Text**: `#8e8e93`
- **Border**: `#1f1f1f`

### Typography
- **Headings**: Inter (400-700 weight)
- **Body**: Inter (400 weight)
- **Code**: JetBrains Mono

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/dmm-404/Tech-Universe.git
cd Tech-Universe
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables (optional):
```bash
cp .env.example .env.local
```

4. Run the development server:
```bash
npm run dev
```

5. Open your browser and navigate to:
```
http://localhost:5173
```

### Build for Production

```bash
npm run build
```

The build output will be in the `dist` directory.

## 📂 Project Structure

```
Tech-Universe/
├── src/
│   ├── components/        # Reusable UI components
│   │   └── Layout.tsx     # Main layout with navigation
│   ├── pages/             # Route components
│   │   ├── HomePage.tsx           # Landing page
│   │   ├── BranchesPage.tsx       # All branches overview
│   │   ├── BranchDetailPage.tsx   # Single branch with topics
│   │   ├── TopicPage.tsx          # Individual topic detail
│   │   ├── CareerPage.tsx         # Career paths
│   │   ├── LegendsPage.tsx        # Tech pioneers
│   │   ├── LegendDetailPage.tsx   # Individual legend profile
│   │   ├── AboutPage.tsx          # About the project
│   │   └── NotFoundPage.tsx       # 404 page
│   ├── App.tsx            # Main app component with routing
│   ├── main.tsx           # Entry point
│   └── index.css          # Global styles and Tailwind
├── public/                # Static assets
├── index.html             # HTML template
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite configuration
└── README.md              # This file
```

## 🎓 Content Structure

### Topics
Each topic in TopicPage.tsx follows this data structure:

```typescript
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
```

### Branches
Each branch in BranchDetailPage.tsx includes:
- Title and description
- 8 topics with varying difficulty levels
- Filterable by topic level (Beginner, Intermediate, Advanced)

## 🌟 Current Topics

**Computer Networks:**
- Networking Fundamentals
- HTTP Protocol

**AI & Machine Learning:**
- Machine Learning Basics

**Cloud & DevOps:**
- Cloud Computing Introduction

*More topics coming soon across all branches!*

## 🚧 Roadmap

- [ ] Add remaining 44 topics across all 6 branches
- [ ] Implement interactive code playgrounds
- [ ] Add visual diagrams and animations for complex concepts
- [ ] Create learning paths and progress tracking
- [ ] Add quiz/assessment features
- [ ] Implement full-text search
- [ ] Add community features (discussions, notes)
- [ ] Create mobile app versions
- [ ] Add multilingual support

## 🤝 Contributing

Contributions are welcome! Whether it's:
- Adding new topics
- Improving existing content
- Fixing bugs
- Enhancing UI/UX
- Adding features

Please feel free to:
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Content Guidelines

When adding new topics:
1. Follow the established structure (Story, How It Works, Learn It)
2. Keep explanations clear and accessible
3. Include practical code examples where applicable
4. Cite reliable sources and resources
5. Maintain consistent tone and style

## 📄 License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **Mandar Malkhede** ([@dmm-404](https://github.com/dmm-404)) - Creator & Maintainer

## 🙏 Acknowledgments

- Inspired by the need for accessible, comprehensive tech education
- Built with modern web technologies and best practices
- Special thanks to the open-source community

## 📞 Contact

- GitHub: [@dmm-404](https://github.com/dmm-404)
- Repository: [Tech-Universe](https://github.com/dmm-404/Tech-Universe)

---

**Tech Universe** - *A Place for those who want to know everything about TECH* 🌌
