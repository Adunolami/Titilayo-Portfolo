'use client'

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import { ArrowRight, Github, Globe, Linkedin, Mail, Phone, MapPin, Star, Sparkles, Briefcase, Code2, Award, ChevronRight } from "lucide-react";

// Single-file, client-ready portfolio
// TailwindCSS required in the preview environment

const projects = [
  {
    title: "Novac Website",
    description: "Modern corporate landing with crisp grid, animations, and mobile-first layout.",
    link: "https://novac-website-fb3k.vercel.app/novacpayment",
    image: '/5.png',
    tags: ["Next.js", "Tailwind", "Animations"],
  },
  {
    title: "Fame Website",
    description: "Elegant brand site with typography-led design and responsive components.",
    link: "https://fame-website-iota.vercel.app/",
    image: '/4.png',
    tags: ["Next.js", "Tailwind", "Design"],
  },
  {
    title: "Capstone Task Manager",
    description: "Kanban board with drag-and-drop, React Query, and stateful modals.",
    link: "https://capstone-task-manager-project.vercel.app/log-in",
    image: '/capstone.png',
    tags: ["React", "dnd-kit", "React Query"],
  },
  {
    title: "E‑Commerce Project",
    description: "Product grid, filtering, cart, and share flow designed for conversions.",
    link: "https://e-commerce-project-oq1j8j4uc-adunolammis-projects.vercel.app",
    image: '/bozad.png',
    tags: ["Next.js", "UX", "Payments"],
  },
  {
    title: "Fintech App",
    description: "Clean dashboard UI with cards, charts, and real-time components.",
    link: "https://fintechapp-seven.vercel.app/",
    image: '/3.png',
    tags: ["Next.js", "Charts", "Dashboard"],
  },
  {
    title: "Health Tracking Dashboard",
    description: "Data-rich dashboard with metrics, trends, and goal tracking.",
    link: "https://health-tracking-dashboard-kohl.vercel.app/",
    image: '/2.png',
    tags: ["Next.js", "Data Viz", "Analytics"],
  },
];

const skills = [
  "React / Next.js",
  "TypeScript",
  "Expo (React Native)",
  "Tailwind / NativeWind",
  "Framer Motion",
  "Shadcn UI",
  "dnd-kit",
  "React Query",
  "REST APIs",
  "UX Engineering",
  "Chakra ui",
];

const testimonials = [
  {
    quote:
      "Titilayo blends pixel-perfect UI craft with pragmatic engineering. Our stakeholders were impressed from day one.",
    author: "Head of Product, FMCG (Client)",
  },
  {
    quote:
      "A calm problem-solver. Turns ambiguous briefs into delightful, performant interfaces.",
    author: "Engineering Manager, Fintech",
  },
];

const experiences = [
  {
    role: "Frontend Engineer",
    company: "Freelance ",
    period: "2024 — Present",
    bullets: [
      "Built high-conversion sites and dashboards for fintech, health, and retail.",
      "frontend architecture in React/Next.js with design systems and CI/CD.",
      // "Men teams on accessibility, performance, and code quality.",
    ],
  },
  // {
  //   role: "Facilitator & Presenter",
  //   company: "Workshops & Strategy Sessions",
  //   period: "2015 — Present",
  //   bullets: [
  //     "Delivered award‑winning sessions on ESG, governance, and resilient risk.",
  //     "Created executive‑ready decks with data storytelling and visuals.",
  //   ],
  // },
];

const SectionTitle: React.FC<{ icon: React.ReactNode; title: string; subtitle?: string }> = ({ icon, title, subtitle }) => (
  <div className="flex items-end justify-between gap-4 mb-6">
    <div>
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-xl bg-gradient-to-tr from-indigo-500/20 via-fuchsia-500/20 to-emerald-500/20">
          {icon}
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{title}</h2>
      </div>
      {subtitle && <p className="text-sm text-muted-foreground mt-2 max-w-2xl">{subtitle}</p>}
    </div>
    <div className="hidden md:block text-xs text-muted-foreground">Last updated: Aug 21, 2025</div>
  </div>
);

const Chip: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="text-xs px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">{children}</span>
);

const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <div className={`rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm shadow-sm ${className || ""}`}>{children}</div>
);

export default function Portfolio() {
  return (
    <div className="min-h-screen w-full text-white bg-[#0B0B12]">
      {/* Ambient gradient background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 opacity-60" style={{
          background:
            "radial-gradient(45rem 30rem at 20% 10%, rgba(79,70,229,.15), transparent 60%)," +
            "radial-gradient(35rem 25rem at 80% 0%, rgba(236,72,153,.15), transparent 60%)," +
            "radial-gradient(40rem 20rem at 50% 80%, rgba(16,185,129,.08), transparent 60%)",
        }} />
      </div>

      {/* Nav */}
      <nav className="sticky top-0 z-30 border-b border-white/10 backdrop-blur-md bg-[#0B0B12]/60">
        <div className="mx-auto max-w-7xl px-4 md:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5" />
            <span className="font-semibold tracking-tight">Titilayo Deborah Abina</span>
          </div>
          <div className="hidden md:flex items-center gap-1 text-sm">
            <a href="#projects" className="px-3 py-2 hover:opacity-80">Projects</a>
            <a href="#experience" className="px-3 py-2 hover:opacity-80">Experience</a>
            <a href="#skills" className="px-3 py-2 hover:opacity-80">Skills</a>
            <a href="#testimonials" className="px-3 py-2 hover:opacity-80">Testimonials</a>
            <a href="#contact" className="px-3 py-2 hover:opacity-80">Contact</a>
          </div>
          <a
            href="mailto:abinatitilayo1998@gmail.com?subject=Interview%20with%20Titilayo%20Deborah%20Abina"
            className="inline-flex items-center gap-2 rounded-xl px-4 py-2 border border-white/10 bg-white/10 hover:bg-white/20 transition"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </nav>


      {/* Hero */}
      <header className="relative">
        <div className="mx-auto max-w-7xl px-4 md:px-8 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            {/* Left: Text */}
            <div>
              <div className="inline-flex items-center gap-2 text-xs text-white/80 border border-white/10 rounded-full px-3 py-1 mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Available for Frontend roles & contracts
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
                Building delightful, performant interfaces
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-emerald-400">
                  that drive real business results.
                </span>
              </h1>
              <p className="mt-5 text-white/80 max-w-2xl">
                I’m a Frontend Developer  I ship production-ready web & mobile apps with React,
                Next.js, and React Native, React Native — balancing UI polish, accessibility, and
                performance.
              </p>
              {/* <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-xl px-5 py-3 bg-white text-black hover:bg-white/90 transition shadow"
                >
                  View projects <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="/ABINATITILAYODEBORAHTech.pdf"
                  className="inline-flex items-center gap-2 rounded-xl px-5 py-3 border border-white/10 bg-white/10 hover:bg-white/20 transition"
                >
                  Download résumé
                </a>
              </div> */}

              <div className="mt-8 flex flex-row gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-xl px-5 py-3 bg-white text-black hover:bg-white/90 transition shadow"
                >
                  View projects <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="/ABINATITILAYODEBORAHTech.pdf"
                  className="inline-flex items-center gap-2 rounded-xl px-5 py-3 border border-white/10 bg-white/10 hover:bg-white/20 transition"
                >
                  Download résumé
                </a>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-6 text-white/80">
                <span className="inline-flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4" />
                  Lagos, Nigeria
                </span>
                <span className="inline-flex items-center gap-2 text-sm">
                  <Mail className="w-4 h-4" />
                  abinatitilayo2@gmail.com
                </span>
                <span className="inline-flex items-center gap-2 text-sm">
                  <Phone className="w-4 h-4" />
                  O8168357761
                </span>
              </div>
              <div className="mt-6 flex items-center gap-4 text-sm">
                <a
                  href="https://github.com/Adunolami/"
                  target="_blank"
                  className="inline-flex items-center gap-2 hover:opacity-80"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
                <a
                  href="hwww.linkedin.com/in/titilayo-abina-865451138"
                  target="_blank"
                  className="inline-flex items-center gap-2 hover:opacity-80"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
                <a
                  href="/"
                  target="_blank"
                  className="inline-flex items-center gap-2 hover:opacity-80"
                >
                  <Globe className="w-4 h-4" />
                  Website
                </a>
              </div>
            </div>

            {/* Right: Image */}
            <div className="flex justify-center md:justify-end">
              <img
                src="/titilayo.jpg"
                alt="Titilayo Deborah Abina"
                //className="w-94 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-white/20 shadow-lg"
                className="w-96 h-96 md:w-[28rem] md:h-[28rem] rounded-full object-cover border-4 border-white/20 shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </header>


      {/* Projects */}
      <section id="projects" className="mx-auto max-w-7xl px-4 md:px-8 py-12 md:py-16">
        <SectionTitle
          icon={<Code2 className="w-5 h-5" />}
          title="Selected Projects"
          subtitle="A few recent builds that showcase craft, performance, and UX thinking."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              target="_blank"
              className="group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              {/* <Card className="h-full">
                <div className="p-5">
                  <div className="aspect-video w-full rounded-xl bg-gradient-to-br from-indigo-500/20 via-fuchsia-500/20 to-emerald-500/20 border border-white/10 mb-4 group-hover:scale-[1.02] transition will-change-transform" />
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold">{p.title}</h3>
                      <p className="mt-1 text-sm text-white/80">{p.description}</p>
                    </div>
                    <ChevronRight className="w-5 h-5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition" />
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags.map((t) => (<Chip key={t}>{t}</Chip>))}
                  </div>
                </div>
              </Card> */}

              <Card className="h-full">
                <div className="p-5">
                  <div className="aspect-video w-full rounded-xl overflow-hidden border border-white/10 mb-4 group-hover:scale-[1.02] transition will-change-transform">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold">{p.title}</h3>
                      <p className="mt-1 text-sm text-white/80">{p.description}</p>
                    </div>
                    <ChevronRight className="w-5 h-5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition" />
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <Chip key={t}>{t}</Chip>
                    ))}
                  </div>
                </div>
              </Card>

            </motion.a>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="mx-auto max-w-7xl px-4 md:px-8 py-12 md:py-16">
        <SectionTitle
          icon={<Briefcase className="w-5 h-5" />}
          title="Experience"
          subtitle="Blending frontend engineering with facilitation and executive presentation."
        />
        <div className="grid md:grid-cols-2 gap-6">
          {experiences.map((exp) => (
            <Card key={exp.role} className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold">{exp.role}</h3>
                  <p className="text-sm text-white/80">{exp.company}</p>
                </div>
                <span className="text-xs text-white/60">{exp.period}</span>
              </div>
              <ul className="mt-4 space-y-2 list-disc list-inside text-sm text-white/85">
                {exp.bullets.map((b) => (<li key={b}>{b}</li>))}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="mx-auto max-w-7xl px-4 md:px-8 py-12 md:py-16">
        <SectionTitle
          icon={<Star className="w-5 h-5" />}
          title="Core Skills"
          subtitle="Technologies and capabilities I use to deliver reliable, beautiful products."
        />
        <Card className="p-6">
          <div className="flex flex-wrap gap-2">
            {skills.map((s) => (<Chip key={s}>{s}</Chip>))}
          </div>
        </Card>
      </section>

      {/* Testimonials */}
      {/* <section id="testimonials" className="mx-auto max-w-7xl px-4 md:px-8 py-12 md:py-16">
        <SectionTitle
          icon={<Award className="w-5 h-5" />}
          title="Testimonials"
          subtitle="A few words from leaders I’ve worked with."
        />
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <Card className="p-6 h-full">
                <p className="text-white/90 italic">“{t.quote}”</p>
                <div className="mt-4 text-sm text-white/70">— {t.author}</div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section> */}

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-7xl px-4 md:px-8 py-12 md:py-20">
        <SectionTitle
          icon={<Mail className="w-5 h-5" />}
          title="Let’s build something great"
          subtitle="I’m available for frontend roles, consulting, and short sprints to ship critical features."
        />
        <Card className="p-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-4">
              <a href="mailto:abinatitilayo2@gmail.com" className="flex items-center gap-3 hover:opacity-80">
                <Mail className="w-5 h-5" /> abinatitilayo2@gmail.com
              </a>
              <div className="flex items-center gap-3 text-white/80">
                <MapPin className="w-5 h-5" /> Lagos, Nigeria (Remote‑friendly)
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <Globe className="w-5 h-5" /> Portfolio & live demos above
              </div>
            </div>
            <form className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <input placeholder="Name" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-white/20" />
              <input placeholder="Email" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-white/20" />
              <textarea placeholder="Project details" rows={4} className="md:col-span-2 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-white/20" />
              <button type="button" onClick={() => window.location.href = 'mailto:abinatitilayo1998@gmail.com?subject=Project%20Inquiry'} className="md:col-span-2 inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 bg-white text-black hover:bg-white/90 transition shadow">
                Send email <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 md:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/70">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4" /> <span>© {new Date().getFullYear()} Titilayo Deborah Abina</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#projects" className="hover:opacity-80">Projects</a>
            <a href="#experience" className="hover:opacity-80">Experience</a>
            <a href="#skills" className="hover:opacity-80">Skills</a>
            <a href="#contact" className="hover:opacity-80">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}