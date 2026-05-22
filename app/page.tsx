"use client";

import Image from "next/image";
import React, { useState } from "react";

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
            <a href="#pricing"  className="nav-link">Pricing</a>
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
          {[["#services", "Services"], ["#how", "How It Works"], ["#about", "About"], ["#pricing", "Pricing"], ["#contact", "Contact"]].map(([href, label]) => (
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
              <span className="tag-mono">Small Businesses · AI Receptionist · Free Website Included</span>
            </div>

            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.05] mb-6" style={{ letterSpacing: "-0.04em" }}>
              Advanced Tech,<br />
              <span className="text-gradient">Simple for Your</span><br />
              Business.
            </h1>

            <p className="text-lg mb-3 max-w-lg" style={{ color: "rgba(232,234,246,0.6)", lineHeight: 1.75 }}>
              Frontline gives your business a 24/7 AI receptionist that answers calls, takes reservations,
              and handles order taking, even during your busiest hours. And every plan includes a{" "}
              <strong style={{ color: "rgba(232,234,246,0.8)" }}>free professional website build</strong>.
            </p>

            <div className="flex flex-wrap gap-4 mb-4">
              <a href="#contact" className="btn-primary">
                Book a Free Demo <Arrow size={16} />
              </a>
              <a href="#services" className="btn-outline">See What We Build</a>
            </div>

            <div className="flex flex-wrap items-center gap-6">
              {[
                "Answers Every Call",
                "Available 24/7",
                "Free Website Included",
              ].map((label) => (
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
                  &ldquo;Thanks for calling! Are you looking to make an appointment or place an order?&rdquo;
                </p>
              </div>
              <div className="rounded-xl p-4 mb-3 ml-6" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <div className="text-xs font-mono mb-1.5" style={{ color: "rgba(255,255,255,0.3)" }}>Customer</div>
                <p className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>&ldquo;I&apos;d like a table for 4 — this Friday at 7pm.&rdquo;</p>
              </div>
              <div className="rounded-xl p-4 mb-5" style={{ background: "rgba(62,207,207,0.07)", border: "1px solid rgba(62,207,207,0.12)" }}>
                <div className="text-xs font-mono mb-1.5" style={{ color: "var(--c-teal)" }}>AI Receptionist</div>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.8)" }}>
                  &ldquo;Perfect! I&apos;ve got you down for Friday at 7pm, party of 4. Can I get a name for the reservation?&rdquo;
                </p>
              </div>

              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { bg: "rgba(62,207,207,0.06)", border: "rgba(62,207,207,0.1)", icon: "🍽️", label: "Reserved" },
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
              <span className="text-xs font-mono" style={{ color: "rgba(255,255,255,0.7)" }}>⚡ Appointment confirmed automatically</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}


/* ── Value props ── */
function ValueProps() {
  const items = [
    { icon: "📞", title: "Never Miss a Call Again", body: "Your AI receptionist answers every call — after hours, on weekends, and during your busiest rushes." },
    { icon: "⚙️", title: "Automate Repetitive Tasks", body: "Bookings, reminders, order taking, and follow-ups handled automatically so your team focuses on what matters." },
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
            From a 24/7 AI receptionist to a professional website — we make advanced technology
            practical and affordable for business owners.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">

          {/* AI Voice Receptionist */}
          <div className="card p-8" style={{ background: "linear-gradient(135deg,rgba(62,207,207,0.06),rgba(123,95,204,0.06))", borderColor: "rgba(62,207,207,0.18)" }}>
            <div className="icon-box mb-5" style={{ width: 60, height: 60, borderRadius: 14 }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--c-teal)" }}>
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.64 3.5 2 2 0 0 1 3.6 1.36h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8a16 16 0 0 0 6 6l.86-.86a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 15.36v1.56z" />
              </svg>
            </div>
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <h3 className="text-xl font-bold text-white">AI Voice Receptionist</h3>
              <span className="tag-mono" style={{ fontSize: 10, color: "#22c55e", background: "rgba(34,197,94,0.08)", borderColor: "rgba(34,197,94,0.2)" }}>Most Popular</span>
            </div>
            <p className="text-sm mb-4" style={{ color: "rgba(232,234,246,0.55)", lineHeight: 1.75 }}>
              A human-sounding AI that answers your business phone 24/7. It takes reservations,
              handles order taking, answers common questions, and routes urgent calls to you. No lifting a finger required.
            </p>
            <div className="flex items-center gap-3 mb-5 px-4 py-3 rounded-xl" style={{ background: "rgba(62,207,207,0.07)", border: "1px solid rgba(62,207,207,0.2)" }}>
              <Check />
              <span className="text-sm font-semibold" style={{ color: "var(--c-teal)" }}>Includes a free professional website build at no extra charge.</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {["24/7 Call Answering", "Reservation Booking", "Order Taking", "Call Routing", "CRM Logging"].map((t) => (
                <span key={t} className="tag-mono" style={{ fontSize: 10 }}>{t}</span>
              ))}
            </div>
          </div>

          {/* Website Design */}
          <div className="card p-8">
            <div className="icon-box mb-5">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--c-purple)" }}>
                <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Website Design</h3>
            <p className="text-sm mb-5" style={{ color: "rgba(232,234,246,0.5)", lineHeight: 1.7 }}>
              Modern, fast, mobile-first business websites that turn visitors into customers.
              Showcases your services, hours, and story. Built to rank on Google.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Mobile-First", "SEO Ready", "Fast"].map((t) => (
                <span key={t} className="tag-mono" style={{ fontSize: 10 }}>{t}</span>
              ))}
            </div>
          </div>

          {/* Online Ad Creation */}
          <div className="card p-8">
            <div className="icon-box mb-5">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{ color: "#4A8FE8" }}>
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </div>
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <h3 className="text-xl font-bold text-white">Online Ad Creation</h3>
              <span className="tag-mono" style={{ fontSize: 10, color: "rgba(232,234,246,0.45)", background: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.1)" }}>Coming Soon</span>
            </div>
            <p className="text-sm mb-5" style={{ color: "rgba(232,234,246,0.5)", lineHeight: 1.7 }}>
              Eye-catching ads for Google, Instagram, and Facebook designed to bring new customers
              through your door. Coming soon. We&apos;ll point you to trusted partners in the meantime.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Google Ads", "Social Media", "Meta Ads"].map((t) => (
                <span key={t} className="tag-mono" style={{ fontSize: 10 }}>{t}</span>
              ))}
            </div>
          </div>

          {/* AI Chat & Messaging */}
          <div className="card p-8">
            <div className="icon-box mb-5">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--c-teal)" }}>
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <h3 className="text-xl font-bold text-white">AI Chat &amp; Messaging</h3>
            </div>
            <p className="text-sm mb-5" style={{ color: "rgba(232,234,246,0.5)", lineHeight: 1.7 }}>
              Intelligent chatbots for your website and social channels that answer customer questions,
              take bookings via chat, and capture leads around the clock. Ask us about availability.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Website Chat", "Lead Capture", "SMS"].map((t) => (
                <span key={t} className="tag-mono" style={{ fontSize: 10 }}>{t}</span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ── How It Works ── */
function HowItWorks() {
  const steps = [
    { n: "01", title: "Discovery Call", body: "We learn about your business, your biggest pain points, and what a win looks like for you. No jargon, just a straight conversation." },
    { n: "02", title: "We Build & Configure", body: "Our team sets up your AI system or software, trains it on your business details, and tests it thoroughly before you ever see it." },
    { n: "03", title: "Go Live", body: "We launch your solution, walk you through how it works, and make sure you're confident before handing over the keys." },
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
            We handle everything: setup, training the AI on your business, and ongoing support.
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
              Based in the Bay Area, we started Frontline Solutions because we kept seeing great local businesses lose customers to
              missed calls, slow response times, and outdated tools. Not because they weren&apos;t good at
              what they do, but because they didn&apos;t have the right technology.
            </p>
            <p className="mb-8" style={{ color: "rgba(232,234,246,0.6)", lineHeight: 1.75 }}>
              Our goal is simple: make the kind of AI and automation that big companies use available to
              every small business, without requiring a technical team, a big budget, or months of setup.
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


/* ── Pain Points ── */
function PainPoints() {
  const points = [
    { icon: "📞", text: "\"The phone rings during the busy hours and nobody can pick up.\"" },
    { icon: "🌙", text: "\"Customers call after hours and get no answer at all.\"" },
    { icon: "📅", text: "\"Reservations get missed, double-booked, or scrawled on a sticky note.\"" },
    { icon: "🌐", text: "\"No time or budget to build or update a proper website.\"" },
    { icon: "📉", text: "\"Losing orders and regulars to competitors who are easier to reach online.\"", wide: true },
  ];
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="ambient-purple" style={{ width: 500, height: 500, top: -100, right: -200, opacity: 0.35 }} />
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="tag-mono mb-4 inline-block">Sound Familiar?</span>
          <h2 className="text-4xl lg:text-5xl font-black mb-4">
            Running a Business Is Hard Enough<br /><span className="text-gradient">Without These Problems.</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {points.map(({ icon, text, wide }) => (
            <div key={text} className={`flex items-start gap-4 p-5 rounded-2xl${wide ? " md:col-span-2 lg:col-span-2" : ""}`}
              style={{ background: "rgba(26,27,46,0.7)", border: "1px solid rgba(255,255,255,0.06)" }}>
              <div className="text-2xl flex-shrink-0 mt-0.5">{icon}</div>
              <p className="text-sm" style={{ color: "rgba(232,234,246,0.65)", lineHeight: 1.7 }}>{text}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center text-2xl lg:text-3xl font-black" style={{ color: "rgba(232,234,246,0.85)", letterSpacing: "-0.02em" }}>
          Frontline fixes all of this — starting day one.
        </p>
      </div>
    </section>
  );
}

/* ── What's Included ── */
function WhatsIncluded() {
  const items = [
    { color: "teal",   title: "AI Receptionist answering calls 24/7",       sub: "Handles your phones around the clock, every day" },
    { color: "teal",   title: "Reservation & order taking over the phone",   sub: "Tables booked and orders taken automatically" },
    { color: "purple", title: "Free professional website build",             sub: "Custom-designed for your business — included in your plan" },
    { color: "purple", title: "Mobile-first, SEO-ready website",             sub: "Shows up on Google and looks great on every device" },
    { color: "blue",   title: "Full setup & AI training included",           sub: "We configure everything and train the AI on your services and hours" },
    { color: "blue",   title: "Ongoing support & monitoring",                sub: "We don't disappear after launch. We're with you for the long haul." },
  ];
  const palette: Record<string, { bg: string; border: string; check: string }> = {
    teal:   { bg: "rgba(62,207,207,0.05)",  border: "rgba(62,207,207,0.12)",  check: "var(--c-teal)" },
    purple: { bg: "rgba(123,95,204,0.05)",  border: "rgba(123,95,204,0.12)",  check: "var(--c-purple)" },
    blue:   { bg: "rgba(74,143,232,0.05)",  border: "rgba(74,143,232,0.10)",  check: "#4A8FE8" },
  };
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="ambient-teal" style={{ width: 500, height: 500, top: -100, right: -150, opacity: 0.35 }} />
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="tag-mono mb-4 inline-block">No Surprises</span>
          <h2 className="text-4xl lg:text-5xl font-black mb-4">
            Everything You Need.<br /><span className="text-gradient">All Included.</span>
          </h2>
          <p className="max-w-lg mx-auto" style={{ color: "rgba(232,234,246,0.5)", lineHeight: 1.7 }}>
            When you sign up with Frontline, this is exactly what your business gets — fully set up and ready to go.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {items.map(({ color, title, sub }) => {
            const p = palette[color];
            return (
              <div key={title} className="flex items-center gap-4 p-5 rounded-2xl" style={{ background: p.bg, border: `1px solid ${p.border}` }}>
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: p.bg, border: `1px solid ${p.border}`, color: p.check }}>
                  <Check />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{title}</div>
                  <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>{sub}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ── Pricing ── */
function Pricing() {
  const features = [
    "AI Receptionist answering calls 24/7",
    "Reservation & order taking",
    "Free professional website build",
    "Full setup & AI training included",
    "Ongoing support & monitoring",
  ];
  return (
    <section id="pricing" className="relative py-28 overflow-hidden">
      <div className="ambient-purple" style={{ width: 500, height: 500, top: -50, right: -150, opacity: 0.35 }} />
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="tag-mono mb-4 inline-block">Simple Pricing</span>
          <h2 className="text-4xl lg:text-5xl font-black mb-4">
            Less Than a Part-Time Employee.<br /><span className="text-gradient">Way More Value.</span>
          </h2>
          <p className="max-w-lg mx-auto" style={{ color: "rgba(232,234,246,0.5)", lineHeight: 1.7 }}>
            No setup fees. No long-term lock-ins. Everything included from day one.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">

          {/* Monthly */}
          <div className="card p-8" style={{ background: "rgba(26,27,46,0.5)" }}>
            <div className="mb-6">
              <h3 className="text-lg font-bold text-white mb-1">Monthly</h3>
              <p className="text-xs font-mono" style={{ color: "rgba(255,255,255,0.4)" }}>Flexible, cancel anytime</p>
              <div className="mt-4 flex items-end gap-1">
                <span className="text-5xl font-black text-white" style={{ letterSpacing: "-0.04em" }}>$500</span>
                <span className="text-lg font-semibold mb-1" style={{ color: "rgba(255,255,255,0.5)" }}>/month</span>
              </div>
            </div>
            <ul className="space-y-3 mb-8">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm" style={{ color: "rgba(232,234,246,0.6)" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--c-teal)", flexShrink: 0 }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
            <a href="#contact" className="btn-outline w-full justify-center">Get Started</a>
          </div>

          {/* 6-Month — best value */}
          <div className="card p-8 relative" style={{ background: "linear-gradient(135deg,rgba(62,207,207,0.07),rgba(123,95,204,0.07))", borderColor: "rgba(62,207,207,0.3)" }}>
            {/* Best value badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
              <span className="px-4 py-1.5 rounded-full text-xs font-bold" style={{ background: "linear-gradient(135deg,var(--c-teal),var(--c-purple))", color: "#fff", letterSpacing: "0.04em" }}>BEST VALUE</span>
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-bold text-white mb-1">6-Month Plan</h3>
              <p className="text-xs font-mono" style={{ color: "rgba(255,255,255,0.4)" }}>Commit for 6 months, save $500</p>
              <div className="mt-4 flex items-end gap-1">
                <span className="text-5xl font-black" style={{ letterSpacing: "-0.04em", background: "linear-gradient(135deg,var(--c-teal),var(--c-purple))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>$2,500</span>
                <span className="text-lg font-semibold mb-1" style={{ color: "rgba(255,255,255,0.5)" }}>/6 mo</span>
              </div>
              <p className="text-xs font-mono mt-2" style={{ color: "rgba(62,207,207,0.7)" }}>
                vs. $3,000 monthly. You save <strong style={{ color: "var(--c-teal)" }}>$500</strong>.
              </p>
            </div>
            <ul className="space-y-3 mb-8">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm" style={{ color: "rgba(232,234,246,0.7)" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--c-teal)", flexShrink: 0 }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
            <a href="#contact" className="btn-primary w-full justify-center">Get Started <Arrow size={14} /></a>
          </div>

        </div>

        <p className="text-center text-xs font-mono" style={{ color: "rgba(255,255,255,0.3)" }}>
          We only onboard a limited number of businesses per month to ensure quality.
        </p>
      </div>
    </section>
  );
}

/* ── Contact ── */
const CHALLENGE_OPTIONS = [
  "Missing calls during busy hours",
  "No professional website yet",
  "Losing customers after hours",
  "Want to automate reservations or orders",
  "Looking to grow with online ads",
  "Just exploring my options",
  "Other",
];

const CONTACT_TIME_OPTIONS = [
  "Morning (9am – 12pm)",
  "Afternoon (12pm – 4pm)",
  "Evening (4pm – 7pm)",
  "Anytime",
];

const CONTACT_METHOD_OPTIONS = ["Phone call", "Text message", "Email"];

function Contact() {
  const [fields, setFields] = useState({ name: "", phone: "", business: "" });
  const [challenges, setChallenges] = useState<string[]>([]);
  const [contactTime, setContactTime] = useState("");
  const [contactMethod, setContactMethod] = useState("");
  const [comments, setComments] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const toggleChallenge = (option: string) => {
    setChallenges(prev =>
      prev.includes(option) ? prev.filter(c => c !== option) : [...prev, option]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "26083a6e-690b-4966-a7ec-4fe441d165fe",
          subject: `New Demo Request from ${fields.name || "Website Visitor"}`,
          Name: fields.name,
          Phone: fields.phone,
          "Business Type": fields.business,
          Challenges: challenges.join(", ") || "Not specified",
          "Best Time to Reach": contactTime || "Not specified",
          "Preferred Contact Method": contactMethod || "Not specified",
          "Additional Comments": comments || "None",
        }),
      });
      const data = await res.json();
      if (data.success) {
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

  const inputBase: React.CSSProperties = {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(62,207,207,0.12)",
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
            Book a free 20-minute demo. We&apos;ll walk you through exactly how the AI receptionist works
            and answer any questions you have. No pressure, no obligation.
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
            <form className="text-left space-y-5" onSubmit={handleSubmit}>

              {/* Name + Phone */}
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

              {/* Business Type */}
              <div>
                <label htmlFor="business" className="block text-xs font-mono uppercase tracking-widest mb-1.5" style={{ color: "rgba(255,255,255,0.4)" }}>Business Type</label>
                <input id="business" type="text" placeholder="e.g. Hair Salon, Restaurant, Plumber..." className="form-input" value={fields.business} onChange={(e) => setFields(f => ({ ...f, business: e.target.value }))} required />
              </div>

              {/* Challenges — checkboxes */}
              <div>
                <p className="block text-xs font-mono uppercase tracking-widest mb-3" style={{ color: "rgba(255,255,255,0.4)" }}>What brings you here? (select all that apply)</p>
                <div className="grid sm:grid-cols-2 gap-2">
                  {CHALLENGE_OPTIONS.map((option) => {
                    const checked = challenges.includes(option);
                    return (
                      <label key={option} className="flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-colors"
                        style={{
                          background: checked ? "rgba(62,207,207,0.10)" : "rgba(255,255,255,0.03)",
                          border: `1px solid ${checked ? "rgba(62,207,207,0.35)" : "rgba(255,255,255,0.07)"}`,
                        }}>
                        <div className="flex-shrink-0 w-4 h-4 rounded flex items-center justify-center transition-colors"
                          style={{ background: checked ? "var(--c-teal)" : "rgba(255,255,255,0.06)", border: `1px solid ${checked ? "var(--c-teal)" : "rgba(255,255,255,0.15)"}` }}>
                          {checked && (
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#0A0B1E" strokeWidth={3.5} strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          )}
                        </div>
                        <input type="checkbox" className="sr-only" checked={checked} onChange={() => toggleChallenge(option)} />
                        <span className="text-sm" style={{ color: checked ? "rgba(232,234,246,0.9)" : "rgba(232,234,246,0.5)" }}>{option}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Best time to reach + Preferred contact method */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contactTime" className="block text-xs font-mono uppercase tracking-widest mb-1.5" style={{ color: "rgba(255,255,255,0.4)" }}>Best time to reach you</label>
                  <select
                    id="contactTime"
                    className="form-input w-full"
                    style={{ ...inputBase, appearance: "none", cursor: "pointer" }}
                    value={contactTime}
                    onChange={(e) => setContactTime(e.target.value)}
                    required
                  >
                    <option value="" disabled>Select a time...</option>
                    {CONTACT_TIME_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
                  </select>
                </div>
                <div>
                  <p className="block text-xs font-mono uppercase tracking-widest mb-1.5" style={{ color: "rgba(255,255,255,0.4)" }}>Preferred contact method</p>
                  <div className="flex gap-2 flex-wrap">
                    {CONTACT_METHOD_OPTIONS.map((method) => {
                      const active = contactMethod === method;
                      return (
                        <button key={method} type="button"
                          onClick={() => setContactMethod(method)}
                          className="flex-1 px-3 py-3 rounded-xl text-sm font-medium transition-colors text-center"
                          style={{
                            background: active ? "rgba(62,207,207,0.12)" : "rgba(255,255,255,0.03)",
                            border: `1px solid ${active ? "rgba(62,207,207,0.4)" : "rgba(255,255,255,0.07)"}`,
                            color: active ? "var(--c-teal)" : "rgba(232,234,246,0.5)",
                          }}>
                          {method}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Optional comments */}
              <div>
                <label htmlFor="comments" className="block text-xs font-mono uppercase tracking-widest mb-1.5" style={{ color: "rgba(255,255,255,0.4)" }}>
                  Anything else you&apos;d like us to know? <span style={{ color: "rgba(255,255,255,0.25)", textTransform: "none", letterSpacing: 0 }}>(optional)</span>
                </label>
                <textarea
                  id="comments"
                  rows={4}
                  placeholder="Tell us about your business, ask us anything, or just say hi."
                  className="form-input resize-none w-full"
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                />
              </div>

              {error && (
                <p className="text-center text-sm" style={{ color: "#f87171" }}>{error}</p>
              )}

              <button type="submit" disabled={loading} className="btn-primary w-full justify-center text-base" style={{ padding: "16px 32px", opacity: loading ? 0.7 : 1 }}>
                {loading ? "Sending…" : <><span>Request My Free Demo</span> <Arrow size={16} /></>}
              </button>

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
  const services = ["AI Voice Receptionist", "Website Design", "Online Ad Creation", "AI Chat & Messaging"];
  const company  = [["#about", "About Us"], ["#how", "How It Works"], ["#contact", "Contact"], ["#", "Privacy Policy"]];

  return (
    <footer className="relative border-t py-12" style={{ borderColor: "rgba(62,207,207,0.08)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          <div className="md:col-span-2">
            <Image src="/brand_assests/frontline_logo.png" alt="Frontline Solutions" width={140} height={48} className="h-10 w-auto mb-4" />
            <p className="text-sm mb-4 max-w-xs" style={{ color: "rgba(255,255,255,0.4)", lineHeight: 1.7 }}>
              Making advanced AI and automation simple and accessible for local businesses.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono mb-5" style={{ color: "rgba(255,255,255,0.3)" }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--c-teal)", flexShrink: 0 }}>
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
              </svg>
              Bay Area, CA — Locally owned &amp; operated
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
          <p className="text-xs font-mono" style={{ color: "rgba(255,255,255,0.25)" }}>Bay Area, CA · Locally owned &amp; operated · Built for local businesses</p>
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
      <ValueProps />
      <div className="divider" />
      <PainPoints />
      <div className="divider" />
      <Services />
      <div className="divider" />
      <WhatsIncluded />
      <div className="divider" />
      <HowItWorks />
      <div className="divider" />
      <About />
      <div className="divider" />
      <Pricing />
      <div className="divider" />
      <Contact />
      <Footer />
    </main>
  );
}
