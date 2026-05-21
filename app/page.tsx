"use client";

import Image from "next/image";
import { useState } from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

/* ── Tiny shared helpers ── */
const Arrow = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const Check = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const Star = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ color: "#FFB800" }} aria-hidden>
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const Stars = () => (
  <div className="flex gap-1">
    {Array.from({ length: 5 }).map((_, i) => <Star key={i} />)}
  </div>
);

/* ── Navbar ── */
function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="nav-blur fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <a href="#" className="flex-shrink-0">
            <Image src="/brand_assests/frontline_logo.png" alt="Frontline Solutions" width={140} height={56} className="h-14 w-auto" />
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="nav-link">Services</a>
            <a href="#how"      className="nav-link">How It Works</a>
            <a href="#about"    className="nav-link">About</a>
            <a href="#results"  className="nav-link">Results</a>
            <a href="#contact"  className="nav-link">Contact</a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a href="#contact" className="btn-outline" style={{ padding: "10px 20px", fontSize: "14px" }}>Book a Demo</a>
            <a href="#contact" className="btn-primary" style={{ padding: "10px 20px", fontSize: "14px" }}>
              Get Started <Arrow />
            </a>
          </div>

          <button
            aria-label="Toggle menu"
            className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg"
            onClick={() => setOpen(!open)}
          >
            <span className="w-6 h-0.5 bg-teal block" />
            <span className="w-6 h-0.5 bg-teal block" />
            <span className="w-4 h-0.5 bg-teal block ml-auto" />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden flex flex-col gap-1 px-6 pb-5 border-t border-white/5" style={{ background: "rgba(13,15,38,0.98)" }}>
          {[["#services", "Services"], ["#how", "How It Works"], ["#about", "About"], ["#results", "Results"], ["#contact", "Contact"]].map(([href, label]) => (
            <a key={href} href={href} className="nav-link block py-3 border-b border-white/5" onClick={() => setOpen(false)}>{label}</a>
          ))}
          <div className="pt-4">
            <a href="#contact" className="btn-primary w-full justify-center" onClick={() => setOpen(false)}>Get Started</a>
          </div>
        </div>
      )}
    </nav>
  );
}

/* ── Hero ── */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center hero-grid pt-24 pb-20 overflow-hidden">
      <div className="ambient-teal"   style={{ width: 700, height: 700, top: -200, right: -150, opacity: 0.6 }} />
      <div className="ambient-purple" style={{ width: 600, height: 600, bottom: -100, left: -200, opacity: 0.7 }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Copy */}
          <div>
            <div className="mb-6">
              <span className="tag-mono">AI · Automation · Digital Services</span>
            </div>

            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.05] mb-6" style={{ letterSpacing: "-0.04em" }}>
              Advanced Tech,<br />
              <span className="text-gradient">Simple for Your</span><br />
              Business.
            </h1>

            <p className="text-lg mb-10 max-w-lg" style={{ color: "rgba(232,234,246,0.6)", lineHeight: 1.75 }}>
              We help local businesses grow with AI-powered voice receptionists, smart automation,
              and modern digital tools — no large tech team or expensive infrastructure required.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <a href="#contact" className="btn-primary">
                Book a Free Demo <Arrow size={16} />
              </a>
              <a href="#services" className="btn-outline">See What We Build</a>
            </div>

            <div className="flex flex-wrap items-center gap-6">
              {[
                { icon: "phone", label: "Answers Every Call" },
                { icon: "clock", label: "Available 24/7" },
                { icon: "check", label: "No Tech Team Needed" },
              ].map(({ label }) => (
                <div key={label} className="flex items-center gap-2 text-sm" style={{ color: "rgba(232,234,246,0.4)" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--c-teal)", flexShrink: 0 }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {label}
                </div>
              ))}
            </div>
          </div>

          {/* Live call card */}
          <div className="relative hidden lg:block">
            <div className="border-gradient rounded-2xl p-6 glow-teal" style={{ background: "rgba(26,27,46,0.85)" }}>
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg,var(--c-teal),var(--c-purple))" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.64 3.5 2 2 0 0 1 3.6 1.36h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8a16 16 0 0 0 6 6l.86-.86a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 15.36v1.56z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-mono" style={{ color: "rgba(255,255,255,0.4)" }}>AI Voice Receptionist</div>
                    <div className="text-sm font-semibold text-white">Call in Progress</div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#22c55e", boxShadow: "0 0 6px #22c55e" }} />
                  <span className="text-xs font-mono" style={{ color: "#22c55e" }}>Live</span>
                </div>
              </div>

              <div className="flex items-end gap-1 justify-center mb-5" style={{ height: 40 }}>
                {Array.from({ length: 9 }).map((_, i) => (
                  <span key={i} className="wave-bar" />
                ))}
              </div>

              <div className="rounded-xl p-4 mb-3" style={{ background: "rgba(62,207,207,0.07)", border: "1px solid rgba(62,207,207,0.12)" }}>
                <div className="text-xs font-mono mb-1.5" style={{ color: "var(--c-teal)" }}>AI Receptionist</div>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.8)" }}>
                  "Thanks for calling! I&apos;d love to book your appointment. What day works best for you?"
                </p>
              </div>
              <div className="rounded-xl p-4 mb-5 ml-6" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <div className="text-xs font-mono mb-1.5" style={{ color: "rgba(255,255,255,0.3)" }}>Customer</div>
                <p className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>&ldquo;How about Thursday at 2pm?&rdquo;</p>
              </div>

              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { bg: "rgba(62,207,207,0.06)", border: "rgba(62,207,207,0.1)", icon: "📅", label: "Booked" },
                  { bg: "rgba(123,95,204,0.06)", border: "rgba(123,95,204,0.1)", icon: "📋", label: "Logged" },
                  { bg: "rgba(74,143,232,0.06)", border: "rgba(74,143,232,0.1)", icon: "🔔", label: "Notified" },
                ].map(({ bg, border, icon, label }) => (
                  <div key={label} className="rounded-xl p-3 text-center" style={{ background: bg, border: `1px solid ${border}` }}>
                    <div className="text-lg mb-0.5">{icon}</div>
                    <div className="text-xs font-mono" style={{ color: "rgba(255,255,255,0.5)" }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute -top-4 -right-4 rounded-xl px-4 py-2.5 flex items-center gap-2.5"
              style={{ background: "rgba(26,27,46,0.95)", border: "1px solid rgba(62,207,207,0.2)", boxShadow: "0 8px 32px rgba(0,0,0,0.4)" }}>
              <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: "var(--c-teal)", boxShadow: "0 0 8px var(--c-teal)" }} />
              <span className="text-xs font-mono" style={{ color: "rgba(255,255,255,0.7)" }}>0 missed calls today</span>
            </div>
            <div className="absolute -bottom-4 -left-4 rounded-xl px-4 py-2.5"
              style={{ background: "rgba(26,27,46,0.95)", border: "1px solid rgba(123,95,204,0.25)", boxShadow: "0 8px 32px rgba(0,0,0,0.4)" }}>
              <span className="text-xs font-mono" style={{ color: "rgba(255,255,255,0.7)" }}>⚡ Appointment booked automatically</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ── Product demo (ContainerScroll) ── */
function ProductDemo() {
  return (
    <section className="relative overflow-hidden" style={{ background: "var(--c-navy)" }}>
      <div className="ambient-purple" style={{ width: 500, height: 500, top: 0, right: -200, opacity: 0.35 }} />
      <ContainerScroll
        titleComponent={
          <div className="px-4">
            <span className="tag-mono mb-5 inline-block">Live Demo</span>
            <h2 className="text-4xl lg:text-5xl font-black mb-4">
              See Your AI Receptionist<br />
              <span className="text-gradient">Handle a Real Call</span>
            </h2>
            <p className="max-w-xl mx-auto mb-2" style={{ color: "rgba(232,234,246,0.5)", lineHeight: 1.7 }}>
              Watch how it greets customers, books appointments, takes orders,
              and logs everything — all while you focus on running your business.
            </p>
          </div>
        }
      >
        <Image
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1440&q=80"
          alt="AI receptionist dashboard analytics"
          width={1440}
          height={720}
          className="w-full h-full object-cover object-top rounded-xl"
          draggable={false}
        />
      </ContainerScroll>
    </section>
  );
}

/* ── Value props ── */
function ValueProps() {
  const items = [
    { icon: "📞", title: "Never Miss a Call Again", body: "Your AI receptionist answers every call — after hours, on weekends, and during your busiest rushes." },
    { icon: "⚙️", title: "Automate the Repetitive Stuff", body: "Bookings, reminders, order taking, and follow-ups handled automatically so your team focuses on what matters." },
    { icon: "🚀", title: "Look Like a Bigger Business", body: "A modern website, professional AI systems, and custom software give you a competitive edge without the overhead." },
  ];
  const colors = [
    { bg: "rgba(62,207,207,0.04)", border: "rgba(62,207,207,0.08)" },
    { bg: "rgba(123,95,204,0.04)", border: "rgba(123,95,204,0.10)" },
    { bg: "rgba(74,143,232,0.04)", border: "rgba(74,143,232,0.10)" },
  ];
  return (
    <section className="relative py-16 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        <p className="text-center text-xs font-mono uppercase tracking-widest mb-10" style={{ color: "rgba(255,255,255,0.35)" }}>
          Built for businesses that can&apos;t afford to miss a customer
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div key={item.title} className="flex items-start gap-4 p-5 rounded-xl" style={{ background: colors[i].bg, border: `1px solid ${colors[i].border}` }}>
              <div className="text-2xl flex-shrink-0">{item.icon}</div>
              <div>
                <div className="font-semibold text-white text-sm mb-1">{item.title}</div>
                <div className="text-sm" style={{ color: "rgba(255,255,255,0.45)", lineHeight: 1.65 }}>{item.body}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Services ── */
function Services() {
  const services = [
    {
      wide: true,
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--c-teal)" }}>
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.64 3.5 2 2 0 0 1 3.6 1.36h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8a16 16 0 0 0 6 6l.86-.86a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 15.36v1.56z" />
        </svg>
      ),
      title: "AI Voice Receptionist",
      badge: "Most Popular",
      body: "A human-sounding AI that answers your business phone 24/7. It greets callers, takes customer orders, books appointments, answers common questions, and passes urgent calls through to you — all without you lifting a finger.",
      tags: ["24/7 Call Answering", "Appointment Booking", "Order Taking", "Call Routing", "CRM Logging"],
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--c-teal)" }}>
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      ),
      title: "Business Automation",
      body: "Stop doing things manually. We identify your most time-consuming tasks and build automations that handle them — follow-ups, reminders, reporting, and more.",
      tags: ["Workflows", "Reminders", "Reporting"],
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--c-purple)" }}>
          <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
      title: "Website Design",
      body: "Modern, fast, and mobile-first websites that convert visitors into customers. Designed to reflect your brand and built to grow with your business.",
      tags: ["Mobile-First", "SEO Ready", "Fast"],
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--c-purple)" }}>
          <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
        </svg>
      ),
      title: "Custom Business Software",
      body: "Off-the-shelf tools don't fit every business. We build software tailored to how you operate — booking systems, inventory tools, customer portals.",
      tags: ["Booking Systems", "Dashboards", "Portals"],
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--c-teal)" }}>
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      ),
      title: "AI Chat & Messaging",
      body: "Intelligent chatbots for your website and social channels — answering customer questions, qualifying leads, and booking appointments around the clock.",
      tags: ["Website Chat", "Lead Capture", "SMS"],
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{ color: "#4A8FE8" }}>
          <circle cx="12" cy="12" r="3" /><path d="M19.07 4.93a10 10 0 0 0-14.14 0M4.93 19.07a10 10 0 0 0 14.14 0M12 2v2m0 18v-2M2 12h2m18 0h-2" />
        </svg>
      ),
      title: "Digital Strategy",
      body: "Not sure where to start? We map out a practical technology plan — identifying quick wins and long-term investments that actually pay off.",
      tags: ["Tech Audit", "Roadmap", "Consulting"],
    },
  ];

  return (
    <section id="services" className="relative py-28 overflow-hidden">
      <div className="ambient-teal" style={{ width: 500, height: 500, top: -100, left: -200, opacity: 0.4 }} />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="tag-mono mb-4 inline-block">What We Build</span>
          <h2 className="text-4xl lg:text-5xl font-black mb-4">
            Everything Your Business Needs<br /><span className="text-gradient">to Grow</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "rgba(232,234,246,0.5)", lineHeight: 1.7 }}>
            From AI receptionists that handle your phones to custom software that runs your operations —
            we make advanced technology practical for local business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className={`card p-7${s.wide ? " lg:col-span-2" : ""}`}
              style={s.wide ? { background: "linear-gradient(135deg,rgba(62,207,207,0.06),rgba(123,95,204,0.06))", borderColor: "rgba(62,207,207,0.18)" } : {}}
            >
              <div className={s.wide ? "flex flex-col md:flex-row gap-6 items-start" : ""}>
                <div className={`icon-box flex-shrink-0 ${s.wide ? "mb-0" : "mb-5"}`} style={s.wide ? { width: 60, height: 60, borderRadius: 14 } : {}}>
                  {s.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-white">{s.title}</h3>
                    {s.badge && (
                      <span className="tag-mono" style={{ fontSize: 10, color: "#22c55e", background: "rgba(34,197,94,0.08)", borderColor: "rgba(34,197,94,0.2)" }}>
                        {s.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-sm mb-5" style={{ color: "rgba(232,234,246,0.55)", lineHeight: 1.75 }}>{s.body}</p>
                  <div className="flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <span key={t} className="tag-mono" style={{ fontSize: 10 }}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── How It Works ── */
function HowItWorks() {
  const steps = [
    { n: "01", title: "Discovery Call", body: "We learn about your business, your biggest pain points, and what a win looks like for you. No jargon — just a straight conversation." },
    { n: "02", title: "We Build & Configure", body: "Our team sets up your AI system or software, trains it on your business details, and tests it thoroughly before you ever see it." },
    { n: "03", title: "Go Live", body: "We launch your solution, walk you through how it works, and make sure you're confident before we hand over the keys." },
    { n: "04", title: "Ongoing Support", body: "We don't disappear after launch. We monitor, improve, and scale your systems as your business grows." },
  ];
  return (
    <section id="how" className="relative py-28 overflow-hidden">
      <div className="ambient-purple" style={{ width: 600, height: 600, top: 0, right: -250, opacity: 0.4 }} />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="tag-mono mb-4 inline-block">How It Works</span>
          <h2 className="text-4xl lg:text-5xl font-black mb-4">
            Up and Running in<br /><span className="text-gradient">Days, Not Months</span>
          </h2>
          <p className="max-w-lg mx-auto" style={{ color: "rgba(232,234,246,0.5)", lineHeight: 1.7 }}>
            We handle everything — setup, training the AI on your business, and ongoing support.
            You just show up and watch it work.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={s.n} className="card p-7 h-full">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-full flex items-center justify-center font-mono font-bold text-sm flex-shrink-0 text-white"
                  style={{ background: "linear-gradient(135deg,var(--c-teal),var(--c-purple))" }}>
                  {s.n}
                </div>
                {i < steps.length - 1 && (
                  <div className="h-px flex-1" style={{ background: "linear-gradient(90deg,rgba(62,207,207,0.3),transparent)" }} />
                )}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{s.title}</h3>
              <p className="text-sm" style={{ color: "rgba(232,234,246,0.5)", lineHeight: 1.7 }}>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── About ── */
function About() {
  const values = [
    { label: "Practical First", sub: "Tech that solves real problems" },
    { label: "Simple to Use",   sub: "No technical skills required" },
    { label: "Scalable",        sub: "Grows as your business does" },
    { label: "Supported",       sub: "We're with you long-term" },
  ];
  return (
    <section id="about" className="relative py-28 overflow-hidden">
      <div className="ambient-teal" style={{ width: 500, height: 500, bottom: -100, left: -200, opacity: 0.35 }} />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="rounded-2xl overflow-hidden" style={{ aspectRatio: "4/3" }}>
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Frontline Solutions team"
                width={800} height={600}
                className="w-full h-full object-cover"
                style={{ filter: "saturate(0.8) brightness(0.85)" }}
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(135deg,rgba(62,207,207,0.12),rgba(123,95,204,0.20))", mixBlendMode: "multiply" }} />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)" }} />
            </div>
            <div className="absolute -bottom-6 -right-6 rounded-xl px-5 py-4"
              style={{ background: "rgba(26,27,46,0.95)", border: "1px solid rgba(62,207,207,0.18)", boxShadow: "0 12px 40px rgba(0,0,0,0.5)" }}>
              <div className="text-3xl font-black" style={{ letterSpacing: "-0.05em", background: "linear-gradient(135deg,var(--c-teal),var(--c-purple))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Local Focus</div>
              <div className="text-xs font-mono" style={{ color: "rgba(255,255,255,0.5)" }}>Built for Main Street</div>
            </div>
          </div>

          <div>
            <span className="tag-mono mb-4 inline-block">Our Mission</span>
            <h2 className="text-4xl lg:text-5xl font-black mb-6">
              Big-Business Tech,<br /><span className="text-gradient">Small-Business Prices.</span>
            </h2>
            <p className="mb-5" style={{ color: "rgba(232,234,246,0.6)", lineHeight: 1.75 }}>
              We started Frontline Solutions because we kept seeing great local businesses lose customers to
              missed calls, slow response times, and outdated tools — not because they weren&apos;t good at
              what they do, but because they didn&apos;t have the right technology.
            </p>
            <p className="mb-8" style={{ color: "rgba(232,234,246,0.6)", lineHeight: 1.75 }}>
              Our goal is simple: make the kind of AI and automation that big companies use available to
              every small business — without requiring a technical team, a big budget, or months of setup.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {values.map((v) => (
                <div key={v.label} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: "rgba(62,207,207,0.1)", border: "1px solid rgba(62,207,207,0.2)", color: "var(--c-teal)" }}>
                    <Check />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">{v.label}</div>
                    <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>{v.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Stats ── */
function Stats() {
  const stats = [
    { num: "100+",  label: "Businesses Helped" },
    { num: "24/7",  label: "Always On" },
    { num: "40%",   label: "Avg. Time Saved" },
    { num: "0",     label: "Missed Calls" },
  ];
  return (
    <section id="results" className="relative py-28 overflow-hidden">
      <div className="ambient-teal" style={{ width: 400, height: 400, bottom: -50, right: -100, opacity: 0.35 }} />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="tag-mono mb-4 inline-block">By The Numbers</span>
          <h2 className="text-4xl lg:text-5xl font-black">
            Real Results for <span className="text-gradient">Real Businesses</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="border-gradient rounded-2xl p-8 text-center" style={{ background: "rgba(26,27,46,0.5)" }}>
              <div className="stat-num">{s.num}</div>
              <div className="text-sm mt-2 font-mono" style={{ color: "rgba(255,255,255,0.5)" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Testimonials ── */
function Testimonials() {
  const reviews = [
    {
      quote: "Before Frontline, I was missing calls every evening and weekend. Now the AI picks up every call, books the appointment, and I just see it in my calendar the next morning. It's been a game-changer for my salon.",
      name: "Maria Rodriguez",
      role: "Owner — Bella Hair Studio",
      initials: "MR",
      color: "var(--c-teal)",
      highlight: true,
    },
    {
      quote: "We run a busy plumbing company. The AI receptionist handles our intake calls — collects the job details, books the slot, and even sends the customer a confirmation text. We're converting way more leads than before.",
      name: "Tom Kowalski",
      role: "Owner — Rapid Flow Plumbing",
      initials: "TK",
      color: "var(--c-purple)",
      highlight: false,
    },
    {
      quote: "They built us a custom ordering system and website in three weeks. Our online orders went up 60% in the first month. The team is incredibly responsive and they actually understand what a small restaurant needs.",
      name: "Linda Park",
      role: "Owner — Harvest Kitchen",
      initials: "LP",
      color: "#4A8FE8",
      highlight: false,
    },
  ];

  return (
    <section className="relative py-28 overflow-hidden">
      <div className="ambient-purple" style={{ width: 500, height: 500, top: -50, right: -150, opacity: 0.35 }} />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="tag-mono mb-4 inline-block">Client Stories</span>
          <h2 className="text-4xl lg:text-5xl font-black">
            What Local Business Owners <span className="text-gradient">Say</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="card p-7 flex flex-col gap-5" style={r.highlight ? { borderColor: "rgba(62,207,207,0.18)" } : {}}>
              <Stars />
              <p className="text-sm italic flex-1" style={{ color: "rgba(232,234,246,0.7)", lineHeight: 1.8 }}>
                &ldquo;{r.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-2 border-t border-white/5">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                  style={{ background: `linear-gradient(135deg,${r.color}33,${r.color}66)`, border: `1px solid ${r.color}44` }}>
                  {r.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{r.name}</div>
                  <div className="text-xs font-mono" style={{ color: "rgba(255,255,255,0.4)" }}>{r.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Contact ── */
function Contact() {
  const [fields, setFields] = useState({ name: "", phone: "", business: "", challenge: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("https://formsubmit.co/ajax/frontline.solution.team@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          Name: fields.name,
          Phone: fields.phone,
          "Business Type": fields.business,
          Challenge: fields.challenge,
          _subject: `New Demo Request from ${fields.name || "Website"}`,
        }),
      });
      const data = await res.json();
      if (data.success === "true" || data.success === true) {
        setSent(true);
      } else {
        setError("Something went wrong. Please email us directly below.");
      }
    } catch {
      setError("Something went wrong. Please email us directly below.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      <div className="ambient-teal"   style={{ width: 600, height: 600, top: -150, right: -200, opacity: 0.5 }} />
      <div className="ambient-purple" style={{ width: 500, height: 500, bottom: -100, left: -200, opacity: 0.5 }} />
      <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8">
        <div className="border-gradient rounded-3xl p-10 lg:p-14 text-center glow-teal" style={{ background: "rgba(26,27,46,0.7)" }}>
          <span className="tag-mono mb-5 inline-block">Get Started Today</span>
          <h2 className="text-4xl lg:text-5xl font-black mb-5">
            See It Working for<br /><span className="text-gradient">Your Business.</span>
          </h2>
          <p className="mb-10 max-w-lg mx-auto" style={{ color: "rgba(232,234,246,0.55)", lineHeight: 1.75 }}>
            Book a free 20-minute demo. We&apos;ll show you exactly how the AI receptionist works,
            answer your questions, and give you a clear quote — no pressure, no obligation.
          </p>

          {sent ? (
            <div className="rounded-2xl py-12 px-8" style={{ background: "rgba(62,207,207,0.07)", border: "1px solid rgba(62,207,207,0.2)" }}>
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-xl font-bold text-white mb-2">Request Received!</h3>
              <p className="text-sm" style={{ color: "rgba(232,234,246,0.6)", lineHeight: 1.7 }}>
                Thanks for reaching out. We&apos;ll be in touch within a few hours to schedule your demo.
              </p>
            </div>
          ) : (
            <form className="text-left space-y-4" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono uppercase tracking-widest mb-1.5" style={{ color: "rgba(255,255,255,0.4)" }}>Your Name</label>
                  <input id="name" type="text" placeholder="Jane Smith" className="form-input" value={fields.name} onChange={(e) => setFields(f => ({ ...f, name: e.target.value }))} required />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs font-mono uppercase tracking-widest mb-1.5" style={{ color: "rgba(255,255,255,0.4)" }}>Phone Number</label>
                  <input id="phone" type="tel" placeholder="+1 (555) 000-0000" className="form-input" value={fields.phone} onChange={(e) => setFields(f => ({ ...f, phone: e.target.value }))} required />
                </div>
              </div>
              <div>
                <label htmlFor="business" className="block text-xs font-mono uppercase tracking-widest mb-1.5" style={{ color: "rgba(255,255,255,0.4)" }}>Business Type</label>
                <input id="business" type="text" placeholder="e.g. Hair Salon, Restaurant, Plumber..." className="form-input" value={fields.business} onChange={(e) => setFields(f => ({ ...f, business: e.target.value }))} required />
              </div>
              <div>
                <label htmlFor="challenge" className="block text-xs font-mono uppercase tracking-widest mb-1.5" style={{ color: "rgba(255,255,255,0.4)" }}>What&apos;s your biggest challenge?</label>
                <textarea id="challenge" rows={3} placeholder="e.g. Missing calls after hours, too much time on the phone..." className="form-input resize-none" value={fields.challenge} onChange={(e) => setFields(f => ({ ...f, challenge: e.target.value }))} />
              </div>
              {error && (
                <p className="text-center text-sm" style={{ color: "#f87171" }}>{error}</p>
              )}
              <button type="submit" disabled={loading} className="btn-primary w-full justify-center text-base" style={{ padding: "16px 32px", opacity: loading ? 0.7 : 1 }}>
                {loading ? "Sending…" : <><span>Book My Free Demo</span> <Arrow size={16} /></>}
              </button>
              <p className="text-center text-xs font-mono" style={{ color: "rgba(255,255,255,0.25)" }}>
                No commitment. We&apos;ll respond within a few hours.
              </p>
            </form>
          )}

          {/* Direct email */}
          <div className="mt-10 pt-8" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
            <p className="text-xs font-mono uppercase tracking-widest mb-4" style={{ color: "rgba(255,255,255,0.3)" }}>Or reach us directly</p>
            <a
              href="mailto:frontline.solution.team@gmail.com"
              className="inline-flex items-center gap-3 rounded-xl px-6 py-3.5 transition-colors"
              style={{ background: "rgba(62,207,207,0.07)", border: "1px solid rgba(62,207,207,0.18)", color: "var(--c-teal)" }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M2 7l10 7 10-7" />
              </svg>
              <span className="font-mono text-sm">frontline.solution.team@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Footer ── */
function Footer() {
  const services = ["AI Voice Receptionist", "Business Automation", "Website Design", "Custom Software", "AI Chat & Messaging", "Digital Strategy"];
  const company  = [["#about", "About Us"], ["#how", "How It Works"], ["#results", "Results"], ["#contact", "Contact"], ["#", "Privacy Policy"]];

  return (
    <footer className="relative border-t py-12" style={{ borderColor: "rgba(62,207,207,0.08)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          <div className="md:col-span-2">
            <Image src="/brand_assests/frontline_logo.png" alt="Frontline Solutions" width={140} height={48} className="h-10 w-auto mb-4" />
            <p className="text-sm mb-5 max-w-xs" style={{ color: "rgba(255,255,255,0.4)", lineHeight: 1.7 }}>
              Making advanced AI and automation simple and accessible for local businesses.
            </p>
            <div className="flex gap-3 mb-5">
              <a href="#" aria-label="LinkedIn" className="social-link">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ color: "rgba(255,255,255,0.5)" }}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="#" aria-label="Twitter / X" className="social-link">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ color: "rgba(255,255,255,0.5)" }}><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
            <a href="mailto:frontline.solution.team@gmail.com" className="inline-flex items-center gap-2 text-sm font-mono transition-colors" style={{ color: "var(--c-teal)" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" /><path d="M2 7l10 7 10-7" />
              </svg>
              frontline.solution.team@gmail.com
            </a>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest mb-4" style={{ color: "rgba(255,255,255,0.3)" }}>Services</h4>
            <ul className="space-y-2.5">
              {services.map((s) => <li key={s}><a href="#services" className="footer-link">{s}</a></li>)}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest mb-4" style={{ color: "rgba(255,255,255,0.3)" }}>Company</h4>
            <ul className="space-y-2.5">
              {company.map(([href, label]) => <li key={label}><a href={href} className="footer-link">{label}</a></li>)}
            </ul>
          </div>
        </div>

        <div className="divider mb-6" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-xs font-mono" style={{ color: "rgba(255,255,255,0.25)" }}>© 2026 Frontline Solutions. All rights reserved.</p>
          <p className="text-xs font-mono" style={{ color: "rgba(255,255,255,0.25)" }}>Making technology work for your business.</p>
        </div>
      </div>
    </footer>
  );
}

/* ── Page ── */
export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <div className="divider" />
      <ProductDemo />
      <div className="divider" />
      <ValueProps />
      <div className="divider" />
      <Services />
      <div className="divider" />
      <HowItWorks />
      <div className="divider" />
      <About />
      <div className="divider" />
      <Stats />
      <div className="divider" />
      <Testimonials />
      <div className="divider" />
      <Contact />
      <Footer />
    </main>
  );
}
