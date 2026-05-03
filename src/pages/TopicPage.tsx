import { Link, useParams } from "react-router-dom";
import { Check, ChevronDown, ChevronRight, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function TopicPage() {
  const { topic } = useParams();
  const [expandedNode, setExpandedNode] = useState<number | null>(1);

  return (
    <div className="container-custom py-12">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-brand-muted mb-8">
        <Link to="/" className="hover:text-brand-accent transition-colors">Home</Link>
        <span>/</span>
        <Link to="/branches/networks" className="hover:text-brand-accent transition-colors">Computer Networks</Link>
        <span>/</span>
        <span className="text-brand-text">Networking Fundamentals</span>
      </nav>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Main Content */}
        <div className="lg:w-[65%]">
          <header className="mb-12">
            <h1 className="text-4xl">Networking Fundamentals</h1>
            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-brand-muted">
              <span>Beginner</span>
              <span>&middot;</span>
              <span>Computer Networks</span>
              <span>&middot;</span>
              <span>18 min read</span>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="bg-[#0f2a1a] text-[#22c55e] text-xs font-medium px-2 py-1 rounded">Beginner</span>
              <span className="bg-[#1e3a5f] text-brand-accent text-xs font-medium px-2 py-1 rounded">Networking</span>
              <span className="bg-[#1e3a5f] text-brand-accent text-xs font-medium px-2 py-1 rounded">TCP/IP</span>
              <span className="bg-[#1e3a5f] text-brand-accent text-xs font-medium px-2 py-1 rounded">OSI Model</span>
            </div>
          </header>

          {/* The Story Section */}
          <section id="story" className="mb-16">
            <h2 className="text-2xl mb-8">The Story</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-brand-surface border border-brand-border rounded-lg p-5">
                <span className="text-[11px] uppercase tracking-wider text-brand-muted">Why</span>
                <p className="mt-3 text-sm text-brand-text">
                  To enable devices to communicate, share resources, and form the backbone of the modern internet.
                </p>
              </div>
              <div className="bg-brand-surface border border-brand-border rounded-lg p-5">
                <span className="text-[11px] uppercase tracking-wider text-brand-muted">Who</span>
                <p className="mt-3 text-sm text-brand-text">
                  Pioneered by ARPA researchers including Vint Cerf and Bob Kahn in the 1970s.
                </p>
              </div>
              <div className="bg-brand-surface border border-brand-border rounded-lg p-5">
                <span className="text-[11px] uppercase tracking-wider text-brand-muted">Where</span>
                <p className="mt-3 text-sm text-brand-text">
                  Initially across US research institutions, now spanning globally via fiber, copper, and wireless.
                </p>
              </div>
              <div className="bg-brand-surface border border-brand-border rounded-lg p-5">
                <span className="text-[11px] uppercase tracking-wider text-brand-muted">When</span>
                <p className="mt-3 text-sm text-brand-text">
                  TCP/IP adopted as standard in 1983, establishing the foundation of the modern network.
                </p>
              </div>
              <div className="bg-brand-surface border border-brand-border rounded-lg p-5 md:col-span-2">
                <span className="text-[11px] uppercase tracking-wider text-brand-muted">What</span>
                <p className="mt-3 text-sm text-brand-text">
                  A collection of interconnected devices capable of exchanging data through defined protocols and physical or logical links.
                </p>
              </div>
            </div>
          </section>

          {/* How It Works Section */}
          <section id="how-it-works" className="mb-16">
            <h2 className="text-2xl mb-8">How It Works</h2>
            <div className="space-y-6 text-brand-muted leading-relaxed">
              <p>
                At its core, networking is about language and address. Every device on a network needs a unique identifier (IP Address) and must agree on a set of rules (Protocols) to exchange information.
              </p>
              <p>
                Information is broken down into smaller chunks called packets. These packets travel across various routers and switches, each making a decision on the best path to reach the destination based on the headers attached to each packet.
              </p>
            </div>

            <div className="mt-8 overflow-hidden bg-[#0d0d0d] border border-brand-border rounded-lg font-mono text-sm">
              <div className="flex justify-between items-center px-4 py-2 border-b border-brand-border bg-brand-surface/30">
                <span className="text-xs text-brand-muted">example.py</span>
                <button className="text-xs text-brand-muted hover:text-brand-text transition-colors">Copy</button>
              </div>
              <pre className="p-4 overflow-x-auto text-brand-text">
{`import socket

def connect_to_server():
    host = 'example.com'
    port = 80
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        s.connect((host, port))
        s.sendall(b'GET / HTTP/1.1\\r\\nHost: example.com\\r\\n\\r\\n')
        data = s.recv(1024)
    print(f'Received {len(data)} bytes')`}
              </pre>
            </div>
          </section>

          {/* Learn It Section */}
          <section id="learn-it" className="mb-16">
            <h2 className="text-2xl mb-8">Learn It</h2>
            <div className="space-y-4 relative">
              {/* Vertical line connector */}
              <div className="absolute left-[31px] top-6 bottom-6 w-px bg-brand-border" />
              
              {[
                { id: 1, title: "The OSI Model", level: "Beginner", desc: "Understand the 7 layers of network communication", subItems: [
                  { label: "Layer 1: Physical", checked: true },
                  { label: "Layer 2: Data Link", checked: true },
                  { label: "Layer 3: Network", checked: false },
                ]},
                { id: 2, title: "IP Addressing & Subnetting", level: "Beginner", desc: "IPv4 vs IPv6 and how logic addressing works", collapsed: true },
                { id: 3, title: "TCP vs UDP", level: "Intermediate", desc: "Reliability vs speed in transport layer protocols", collapsed: true },
                { id: 4, title: "DNS & HTTP", level: "Intermediate", desc: "How the web actually works on top of networking", collapsed: true },
              ].map((node) => (
                <div key={node.id} className="relative pl-16">
                  {/* Circle decorator */}
                  <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 bg-brand-bg z-10 ${expandedNode === node.id ? 'border-brand-accent' : 'border-brand-border'}`} />
                  
                  <div className="bg-brand-surface border border-brand-border rounded-lg p-5">
                    <button 
                      onClick={() => setExpandedNode(expandedNode === node.id ? null : node.id)}
                      className="w-full text-left"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-medium">{node.title}</h3>
                          <p className="mt-1 text-sm text-brand-muted">{node.desc}</p>
                        </div>
                        {expandedNode === node.id ? <ChevronDown className="w-5 h-5 text-brand-muted" /> : <ChevronRight className="w-5 h-5 text-brand-muted" />}
                      </div>
                    </button>
                    
                    {expandedNode === node.id && node.subItems && (
                      <div className="mt-6 space-y-3 pt-6 border-t border-brand-border">
                        {node.subItems.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${item.checked ? 'bg-brand-accent border-brand-accent' : 'border-brand-border'}`}>
                              {item.checked && <Check className="w-2.5 h-2.5 text-white" strokeWidth={4} />}
                            </div>
                            <span className="text-sm text-brand-muted">{item.label}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="lg:w-[32%] space-y-12">
          <div className="sticky top-20 space-y-12">
            <div>
              <span className="text-[11px] font-medium uppercase tracking-widest text-brand-muted">On This Page</span>
              <ul className="mt-6 space-y-4">
                <li><a href="#story" className="text-sm text-brand-accent font-medium">The Story</a></li>
                <li><a href="#how-it-works" className="text-sm text-brand-muted hover:text-brand-text transition-colors">How It Works</a></li>
                <li><a href="#learn-it" className="text-sm text-brand-muted hover:text-brand-text transition-colors">Learn It</a></li>
              </ul>
            </div>

            <div>
              <span className="text-[11px] font-medium uppercase tracking-widest text-brand-muted">Quick Facts</span>
              <div className="mt-6 space-y-4">
                <div className="flex justify-between items-center text-sm py-2 border-b border-brand-border/50">
                  <span className="text-brand-muted">Protocols</span>
                  <span className="text-brand-text">TCP, UDP, IP</span>
                </div>
                <div className="flex justify-between items-center text-sm py-2 border-b border-brand-border/50">
                  <span className="text-brand-muted">Models</span>
                  <span className="text-brand-text">OSI, TCP/IP</span>
                </div>
                <div className="flex justify-between items-center text-sm py-2 border-b border-brand-border/50">
                  <span className="text-brand-muted">Prerequisites</span>
                  <span className="text-brand-text">Basic IT</span>
                </div>
              </div>
            </div>

            <div>
              <span className="text-[11px] font-medium uppercase tracking-widest text-brand-muted">Related Topics</span>
              <div className="mt-6 space-y-3">
                <Link to="/topics/cloud-computing" className="block p-4 bg-brand-surface border border-brand-border rounded-lg hover:border-brand-accent transition-colors group">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Cloud Computing</span>
                    <ArrowRight className="w-4 h-4 text-brand-muted group-hover:text-brand-accent transition-colors" />
                  </div>
                </Link>
                <Link to="/topics/cybersecurity" className="block p-4 bg-brand-surface border border-brand-border rounded-lg hover:border-brand-accent transition-colors group">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Cybersecurity</span>
                    <ArrowRight className="w-4 h-4 text-brand-muted group-hover:text-brand-accent transition-colors" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
