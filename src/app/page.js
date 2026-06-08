"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import {
  FaWhatsapp,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import { SiSnapchat } from "react-icons/si";
import { Menu, X, User, Briefcase, Brain, Mail, Lightbulb, Radio, Rocket, Code } from "lucide-react";

const SectionHeader = ({ icon, title, subtitle }) => (
  <div className="text-center mb-10">
    <div className="flex justify-center mb-4">
      <div className="p-3 rounded-full bg-white/10 border border-white/10 text-xl">
        {icon}
      </div>
    </div>

    <h2 className="text-4xl md:text-5xl font-bold">{title}</h2>

    {subtitle && (
      <p className="text-gray-400 mt-3 max-w-xl mx-auto">
        {subtitle}
      </p>
    )}
  </div>
);

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Insights", id: "insights" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <main className="min-h-screen bg-black text-white scroll-smooth scroll-snap-y scroll-snap-mandatory">

      
      <div className="fixed inset-0 bg-gradient-to-br from-[#da1608] via-[#631010] to-black opacity-90 z-0"></div>

     
      <div className="fixed top-0 right-0 w-[400px] h-[400px] bg-red-500/10 blur-[120px] rounded-full z-0"></div>

      
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
        <div className="flex items-center justify-between px-6 md:px-10 py-5">

          <Link href="#home" className="text-xl md:text-2xl font-bold tracking-wide hover:text-orange-400 transition">
            Bright Edem Boglo
          </Link>

          <nav className="hidden md:flex gap-8 text-sm text-gray-300">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={`#${item.id}`}
                className="hover:text-orange-400 transition"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <button className="hidden md:block bg-orange-500 hover:bg-orange-600 px-5 py-2 rounded-full">
            Start Project  ↗
          </button>

          <button className="md:hidden z-[60]" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>
      </header>

      
      {menuOpen && (
        <div className="fixed inset-0 z-[55] bg-black/95 backdrop-blur-lg flex flex-col px-8 pt-24 pb-10 md:hidden">

          
          <p className="text-2xl font-bold text-white mb-10">Bright Edem Boglo</p>

          
          <nav className="flex flex-col gap-2 flex-1">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMenuOpen(false)}
                className="text-2xl font-medium text-white hover:text-orange-400 transition py-3 border-b border-white/10"
              >
                {item.name}
              </Link>
            ))}
          </nav>

                    <button
            onClick={() => setMenuOpen(false)}
            className="w-full bg-orange-500 hover:bg-orange-600 transition py-4 rounded-full text-white font-semibold text-lg mt-8"
          >
            Let's Talk 💬
          </button>

        </div>
      )}

      <div className="h-[90px]" />

      <section
        id="home"
        className="relative z-10 min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center gap-14 px-6 md:px-20"
      >

        <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} className="max-w-xl">
  <p className="text-orange-400 mb-4 text-2sm font-medium">
    Beyond Creativity Into Digital Excellence
  </p>
  <h1 className="font-black leading-tight uppercase tracking-normal md:tracking-tighter select-none">
  <span className="block text-4xl md:text-6xl text-white">
    Frontend
  </span>

  <span
  className="block text-4xl md:text-6xl md:[-webkit-text-stroke:2px_white] md:text-transparent text-white"
>
  Developer
</span>
</h1>
  <p className="text-gray-300 mt-6 text-lg">
    I design modern digital experiences that help brands grow, stand out and dominate online.
  </p>
  <div className="mt-4">
    <p className="text-white font-bold text-xl">Let's build something great</p>
    <p className="text-gray-300 mt-1">Open to freelance work &amp; collaborations</p>
  </div>
  <div className="mt-8 flex gap-4 flex-wrap">
   <a
  href="mailto:walkerryan235@gmail.com?subject=Hire%20Request%20-%20Portfolio%20Visitor&body=Hi%20Bright,%0A%0AI%20came%20across%20your%20portfolio%20and%20I%20would%20like%20to%20work%20with%20you.%0A%0AProject%20details:%0A-%0A-%0A%0ABudget:%0A%0ADeadline:%0A%0ALooking%20forward%20to%20your%20response.%0A"
  className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 active:scale-95 transition px-8 py-4 rounded-full font-semibold text-white"
>
  Hire Me
</a>
    <a
  href="/work"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="px-6 py-3 rounded-full text-white hover:scale-105 transition border border-orange-500">
    View Work
  </button>
</a>
  </div>
</motion.div>

        <div className="relative">
          <div className="absolute inset-0 bg-red-500 blur-[120px] opacity-40 rounded-full"></div>
          <Image
            src="/Juice wrld.jpg"
            alt="profile"
            width={350}
            height={350}
            className="relative rounded-3xl shadow-2xl"
          />
        </div>

      </section>

      
      <section
        id="about"
        className="relative z-10 min-h-screen flex items-center justify-center px-6 md:px-20 py-24"
      >
        <div className="max-w-6xl w-full">

          <SectionHeader
            icon={<User size={34} strokeWidth={2.2} />}
            title="About Me"
            subtitle="My education and practical experience"
          />

          <div className="grid md:grid-cols-2 gap-12 mt-10">

            <div>
              <h3 className="text-xl font-bold mb-8 text-white">My Education</h3>

              <div className="relative border-l-2 border-orange-500/40 pl-8 flex flex-col gap-10">

                <div className="relative">
                  <div className="absolute -left-[41px] w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white text-xs">🎓</div>
                  <span className="text-xs bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full">2025 – 2028</span>
                  <h4 className="text-white font-bold mt-2">BSc. Telecommunication Engineering</h4>
                  <p className="text-orange-300 text-sm">KNUST, Kumasi</p>
                  <p className="text-gray-400 text-sm mt-1">Studing core telecommunications principles including network systems, signal processing, and broadband infrastructure..</p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[41px] w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white text-xs">🎓</div>
                  <span className="text-xs bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full">2025 </span>
                  <h4 className="text-white font-bold mt-2">Zaptek Web Development Bootcamp</h4>
                  <p className="text-orange-300 text-sm">Online Bootcamp / Self-paced Learning</p>
                  <p className="text-gray-400 text-sm mt-1">Trained through structured online lessons with hands-on coding assignments and real-world tasks, covering HTML, CSS, JavaScript, React and modern frontend development practices.</p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[41px] w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white text-xs">🎓</div>
                  <span className="text-xs bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full">2026</span>
                  <h4 className="text-white font-bold mt-2">Google Data Analytics </h4>
                  <p className="text-orange-300 text-sm">Coursera in corporation with TechXtramile</p>
                  <p className="text-gray-400 text-sm mt-1">Currently completing Google's professional data analytics program, covering data cleaning, analysis and visualization using tools like Python, Excel, Machine Learning and Tableau.</p>
                </div>

              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-8 text-white">Work Experience</h3>

              <div className="relative border-l-2 border-orange-500/40 pl-8 flex flex-col gap-10">

                <div className="relative">
                  <div className="absolute -left-[41px] w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white text-xs">🎓</div>
                  <span className="text-xs bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full">2026</span>
                  <h4 className="text-white font-bold mt-2">Broadband Engineer Intern</h4>
                  <p className="text-orange-300 text-sm">Telecel Ghana</p>
                  <p className="text-gray-400 text-sm mt-1">Gained hands-on experience in telecommunications infrastructure, broadband deployment, and network operations within a leading telecom environment.</p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[41px] w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white text-xs">🎓</div>
                  <span className="text-xs bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full">2025</span>
                  <h4 className="text-white font-bold mt-2">Radar & Defence Systems Engineering Intern</h4>
                  <p className="text-orange-300 text-sm">Zaptek Ghana</p>
                  <p className="text-gray-400 text-sm mt-1">Worked on radar and defence systems, developed simulation code, and gained practical exposure to Electronic Warfare (EW) systems and drone technology.</p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[41px] w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white text-xs">🎓</div>
                  <span className="text-xs bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full">2025</span>
                  <h4 className="text-white font-bold mt-2">Smart Shuttle & Bike Tracking System</h4>
                  <p className="text-orange-300 text-sm">Group Project</p>
                  <p className="text-gray-400 text-sm mt-1">Collaborated with a team to address campus transportation challenges by building a web platform that integrates a shuttle system with real-time bike tracking, improving mobility and accessibility for users.</p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
{/* ================= SKILLS SECTION ================= */}
<section
  id="skills"
  className="relative z-10 min-h-screen flex items-center justify-center px-6 md:px-20 py-24"
>
  <div className="max-w-6xl w-full">

    {/* SECTION HEADER */}
    <SectionHeader
  icon={<Code size={34} strokeWidth={2.2} />}
  title="My Skills"
  subtitle="Technologies I use to build fast, modern and scalable web experiences"
/>

    {/* SKILLS GRID */}
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

      {[
        "HTML",
        "CSS",
        "JavaScript",
        "Git",
        "React",
        "Next.js",
        "Tailwind CSS",
        "Framer Motion",
        "GitHub",
        "Node.js",
        "Matlab",
        "Python",
      ].map((skill, index) => (
        <div
          key={index}
          className="group p-5 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-orange-500/50 transition duration-300 text-center"
        >
          <p className="text-white font-medium group-hover:text-orange-400 transition">
            {skill}
          </p>
        </div>
      ))}

    </div>

  </div>
</section>
      <section
        id="portfolio"
        className="relative z-10 min-h-screen flex items-center justify-center px-6 md:px-20 py-24"
      >
        <div className="max-w-6xl w-full">

          <SectionHeader
            icon={<Briefcase size={34} strokeWidth={2.2} />}
            title="Portfolio"
            subtitle="Turning complex problems into simple designs"
          />

          <div className="max-w-6xl w-full px-2 sm:px-0">
            <div className="p-6 bg-white/10 border border-white/20 rounded-xl text-center">
              <p className="text-4xl font-black text-orange-400">1+</p>
              <p className="text-gray-300 text-sm mt-1">Happy clients</p>
            </div>
            <div className="max-w-6xl w-full px-2 sm:px-0">
              <p className="text-4xl font-black text-orange-400">1+</p>
              <p className="text-gray-300 text-sm mt-1">Years of experience</p>
            </div>
            <div className="max-w-6xl w-full px-2 sm:px-0">
              <p className="text-4xl font-black text-orange-400">2+</p>
              <p className="text-gray-300 text-sm mt-1">Projects done</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mt-14">

    <div className="flex flex-col justify-between gap-8">
              <div className="flex flex-col gap-4">
                <p className="text-gray-300 leading-relaxed">
                  I'm a creative developer and engineer passionate about building digital experiences that are clean, fast, and impactful. I combine technical engineering knowledge with modern frontend skills to deliver products that truly stand out.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Whether it's a business website, a web app, or a full digital solution — I approach every project with precision, creativity, and a drive to exceed expectations.
                </p>
              </div>
              <a
                href="/cv.pdf"
                download
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-full font-semibold w-fit"
              >
                Download CV ↓
              </a>
            </div>

           <div className="flex flex-col gap-6">
              <div>
                <p className="text-gray-500 text-sm uppercase tracking-widest">Name</p>
                <p className="text-white font-semibold text-lg">Bright Edem Boglo</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm uppercase tracking-widest">Phone</p>
                <p className="text-white font-semibold text-lg">+233 550 266 075</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm uppercase tracking-widest">Email</p>
                <p className="text-white font-semibold text-lg">walkerryan235@gmail.com</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm uppercase tracking-widest">Location</p>
                <p className="text-white font-semibold text-lg">Kumasi, Ghana</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      
<section
  id="insights"
  className="relative z-10 min-h-screen flex items-center justify-center px-6 md:px-20 py-24"
>
  <div className="max-w-6xl w-full">

    <SectionHeader
      icon={<Brain size={34} strokeWidth={2.2} />}
      title="Insights"
      subtitle="Thoughts, ideas and lessons from the field"
    />

    <div className="mt-10 relative rounded-3xl overflow-hidden border border-orange-500/30 bg-white/5 p-10">
      <div className="absolute top-0 left-0 w-1 h-full bg-orange-500 rounded-full"></div>
      <p className="text-orange-400 text-xs uppercase tracking-[4px] mb-6 ml-4">My Philosophy</p>
      <div className="flex flex-col gap-4 ml-4">
        <p className="text-gray-200 leading-relaxed text-lg">
          Technology hits different when it actually solves something real. As a developer and engineering student,
          I gravitate toward projects that close the gap between innovation and everyday life — whether that's
          a web app, a network solution, or a system that just makes things work better for people.
        </p>
        <p className="text-gray-300 leading-relaxed">
          I mix technical precision with creativity. I like questioning the obvious, breaking down messy problems,
          and building experiences that feel natural to use. Every project teaches me something — and that's the part
          I never get tired of.
        </p>
        <p className="text-gray-300 leading-relaxed">
          Outside the code, I'm deeply interested in the future of connectivity, digital experiences, and how
          technology can make communities smarter and more accessible. I'm not just here to build software —
          I'm here to build things that actually matter.
        </p>
      </div>
    </div>

    
    <div className="grid md:grid-cols-3 gap-6 mt-10">

      
      <div className="group relative flex flex-col gap-4 p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-orange-500/50 hover:bg-white/10 transition-all duration-300">
        <Image
  src="/Images/react-dev.jpg"
  alt="React Development"
  width={600}
  height={600}
  className="w-full h-52 object-cover rounded-t-2xl"
/>
        <h4 className="text-white font-bold text-lg leading-snug">5 Things I Wish I Knew Before Learning React</h4>
        <p className="text-gray-400 text-sm flex-1 leading-relaxed">Hard lessons from building real projects — from state management headaches to why component structure matters more than you think.</p>
        <div className="flex items-center gap-2 text-orange-400 text-sm font-medium mt-2 group-hover:gap-3 transition-all">
          <span>Read more</span>
          <span>→</span>
        </div>
      </div>

      
      <div className="group relative flex flex-col gap-4 p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-orange-500/50 hover:bg-white/10 transition-all duration-300">
        <Image
  src="/Images/telecom.png"
  alt="Telecommunications"
  width={600}
  height={600}
  className="w-full h-52 object-cover rounded-t-2xl"
/>
        <p className="text-orange-400 text-xs uppercase tracking-widest">Experience</p>
        <h4 className="text-white font-bold text-lg leading-snug">What Interning at a Telecom Company Taught Me</h4>
        <p className="text-gray-400 text-sm flex-1 leading-relaxed">From broadband infrastructure to network operations — how my time at Telecel shaped the way I think about systems and connectivity.</p>
        <div className="flex items-center gap-2 text-orange-400 text-sm font-medium mt-2 group-hover:gap-3 transition-all">
          <span>Read more</span>
          <span>→</span>
        </div>
      </div>

      
      <div className="group relative flex flex-col gap-4 p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-orange-500/50 hover:bg-white/10 transition-all duration-300">
       <Image
  src="/Images/engineer.jpg"
  alt="Engineering"
  width={600}
  height={600}
  className="w-full h-52 object-cover rounded-t-2xl"
/>
        <p className="text-orange-400 text-xs uppercase tracking-widest">Tech Opinion</p>
        <h4 className="text-white font-bold text-lg leading-snug">Why Every Engineer Should Learn to Code</h4>
        <p className="text-gray-400 text-sm flex-1 leading-relaxed">Engineering and software are no longer separate worlds. Here's why picking up coding as an engineer is one of the best moves you can make.</p>
        <div className="flex items-center gap-2 text-orange-400 text-sm font-medium mt-2 group-hover:gap-3 transition-all">
          <span>Read more</span>
          <span>→</span>
        </div>
      </div>

    </div>
  </div>
</section>

      
      <section
        id="contact"
        className="relative z-10 min-h-screen flex items-center justify-center px-6 md:px-20"
      >

        <div className="max-w-2xl w-full">

          <SectionHeader
            icon={<Mail size={34} strokeWidth={2.2} />}
            title="Contact"
            subtitle="Send me a message"
          />

          <form
            className="flex flex-col gap-4 mt-8"
            onSubmit={(e) => {
              e.preventDefault();

              const form = e.target;
              const name = form.name.value;
              const email = form.email.value;
              const message = form.message.value;

              window.location.href =
                `mailto:walkerryan235@gmail.com?subject=Message from ${name}&body=` +
                `Name: ${name}%0AEmail: ${email}%0A%0A${message}`;
            }}
          >

            <input name="name" placeholder="Name" className="p-4 bg-white/5 border border-white/10 rounded-lg" />
            <input name="email" placeholder="Email" className="p-4 bg-white/5 border border-white/10 rounded-lg" />
            <textarea name="message" rows="5" placeholder="Message" className="p-4 bg-white/5 border border-white/10 rounded-lg" />

            <button className="bg-orange-500 py-4 rounded-full">
              Send Message
            </button>

          </form>

        </div>

      </section>

      
      <footer className="relative z-10 py-10 text-center border-t border-white/10">

        <p className="text-gray-400 mb-6 tracking-widest uppercase text-sm">Connect with me</p>

        <div className="flex justify-center gap-8 mb-6">
          <a href="https://wa.me/233550266075" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-10 h-10 hover:scale-110 transition" />
          </a>
          <a href="https://instagram.com/xenos_syd/?__pwa=1#agram.com/" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" className="w-10 h-10 hover:scale-110 transition" />
          </a>
          <a href="https://github.com/Xenos-sydney" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="GitHub" className="w-10 h-10 hover:scale-110 transition" />
          </a>
          <a href="https://www.linkedin.com/in/bright-boglo-992a2339a/" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" className="w-10 h-10 hover:scale-110 transition" />
          </a>
          <a href="https://snapchat.com/" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.simpleicons.org/snapchat/FFFC00" alt="Snapchat" className="w-10 h-10 hover:scale-110 transition" />
          </a>
        </div>

        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Ryan Walker
        </p>

      </footer>

    </main>
  );
}