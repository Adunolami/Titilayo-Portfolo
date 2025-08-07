"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  const projects = [
    {
      name: "Novac Website",
      url: "https://novac-website-qqqcuz4gk-adunolammis-projects.vercel.app",
    },
    {
      name: "Fame Website",
      url: "https://fame-website-hmkm1ygkq-adunolammis-projects.vercel.app",
    },
    {
      name: "Health Tracking Dashboard",
      url: "https://health-tracking-dashboard-iwb0gdqye-adunolammis-projects.vercel.app",
    },
    {
      name: "Fintech App",
      url: "https://fintech-mx0ezuy99-adunolammis-projects.vercel.app",
    },
    {
      name: "Capstone Task Manager",
      url: "https://capstone-task-manager-project-c54tqflwn-adunolammis-projects.vercel.app",
    },
  ];

  return (
    <main className="min-h-screen bg-[#0F172A] text-white px-6 py-12 md:px-24">
      {/* Navbar */}
      <header className="flex justify-between items-center mb-20">
        <h1 className="text-lg font-bold">Titilayo Deborah Abina</h1>
        <nav className="space-x-6 hidden md:flex">
          <a href="#home" className="hover:text-orange-500">Home</a>
          <a href="#about" className="hover:text-orange-500">About</a>
          <a href="#projects" className="hover:text-orange-500">Projects</a>
          <a href="#contact" className="hover:text-orange-500">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 mb-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1"
        >
          <p className="text-orange-500 font-medium">Hello, I&apos;m </p>
          <h2 className="text-4xl font-bold mb-2">Titilayo Abina</h2>
          <h3 className="text-2xl font-light mb-6">Frontend Developer</h3>
          <p className="text-gray-300 mb-6">
            I design and build fast, responsive websites and user interfaces with React, Next.js, and Tailwind CSS. Passionate about user experience and performance.
          </p>
          <div className="flex gap-4 mb-6">
            <Button variant="default">Let&apos;s work together</Button>
            <a href="/Titilayo_Abina_CV.pdf" download>
              <Button variant="outline" className="border-white text-white">Download CV</Button>
            </a>
          </div>
          <div className="flex gap-3 flex-wrap">
            {["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "GitHub"].map((tech) => (
              <span key={tech} className="px-4 py-1 bg-slate-800 rounded-full text-sm">{tech}</span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 flex justify-center"
        >
          <div className="relative w-64 h-64 rounded-full border-8 border-orange-500 shadow-orange-500 shadow-lg">
            <Image
              src="/titilayo.jpg"
              alt="Titilayo Abina"
              fill
              className="rounded-full object-cover"
            />
          </div>
        </motion.div>
      </section>

      {/* Services */}
      <section className="grid md:grid-cols-3 gap-6 mb-20 text-center">
        {["Frontend Development", "UI/UX Design", "Performance Optimization"].map((service, index) => (
          <Card key={index} className="bg-slate-800 border-none text-white">
            <CardContent className="p-6 space-y-4">
              <div className="text-orange-500 text-3xl">⬤</div>
              <h4 className="text-lg font-semibold">{service}</h4>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* About Me */}
      <section id="about" className="mb-20">
        <h3 className="text-2xl font-bold mb-4">About Me</h3>
        <p className="text-gray-400 max-w-xl mb-6">
          I’m a frontend developer with over 3 years of experience building scalable, high-performing web interfaces using modern frameworks like React and Next.js. I have worked on a variety of products—from dashboards and task managers to fintech and ecommerce platforms.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-slate-800 border-none text-center py-6">
            <CardContent>
              <p className="text-3xl font-bold text-orange-500">20+</p>
              <p className="text-sm text-amber-100">Completed Projects</p>
            </CardContent>
          </Card>
          <Card className="bg-amber-600 border-none text-center py-6">
            <CardContent>
              <p className="text-3xl font-bold  text-slate-900">100%</p>
              <p className="text-sm">Client Satisfaction</p>
            </CardContent>
          </Card>
          <Card className="bg-slate-800 border-none text-center py-6">
            <CardContent>
              <p className="text-3xl font-bold text-orange-500">3+</p>
              <p className="text-sm text-amber-100">Years of Experience</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mb-20">
        <h3 className="text-2xl font-bold mb-4">Projects</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="bg-slate-800 border-none text-white hover:shadow-lg hover:shadow-orange-500 transition">
              <CardContent className="p-6 space-y-2">
                <h4 className="text-lg font-semibold">{project.name}</h4>
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-sm text-orange-500 underline">
                  Visit Site
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
