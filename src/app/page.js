import {
  FaWhatsapp,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import { SiSnapchat } from "react-icons/si";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen relative text-white overflow-hidden bg-black">

      {/* BACKGROUND GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#da1608] via-[#631010] to-black opacity-80"></div>

  

      {/* CONTENT WRAPPER */}
      <div className="relative z-10">

        {/* HEADER */}
        <header className="flex items-center justify-between px-10 py-6">
          <h1 className="text-3xl font-bold tracking-wide">
           Ryan Walker
          </h1>

          <nav className="hidden md:flex gap-10 text-sm text-gray-300">
            <Link href="/about" className="hover:text-orange-400 transition">About</Link>
            <Link href="/services" className="hover:text-orange-400 transition">Services</Link>
            <Link href="/portfolio" className="hover:text-orange-400 transition">Portfolio</Link>
            <Link href="/insights" className="hover:text-orange-400 transition">Insights</Link>
          </nav>

          <button className="bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-full text-sm font-medium shadow-lg">
            Start Project ↗
          </button>
        </header>

        {/* HERO SECTION */}
        <section className="flex flex-col lg:flex-row items-center justify-between px-10 lg:px-20 pt-10 pb-10">

          {/* LEFT TEXT */}
          <div className="max-w-xl">
            <p className="text-orange-400 text-lg mb-6">
              Beyond Creativity Into Digital Excellence
            </p>

            <h1 className="text-4xl md:text-5xl font-extrabold uppercase leading-none">
              Creative <br /> Developer
            </h1>

            <p className="text-gray-300 mt-6 text-lg">
              I design modern digital experiences that help brands grow,
              stand out and dominate online.
            </p>
<section className="flex flex-col gap-3 mb-4 mt-4">
  <p className="text-2xl font-bold">
    Let’s build something great
  </p>

  <p className="text-gray-300 text-lg ">
    Open to freelance work & collaborations
  </p>
</section>
            <div className="flex gap-5 mt-10">
              <button className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-full font-semibold">
                Hire Me
              </button>

              <button className="border border-gray-500 hover:border-orange-400 px-8 py-4 rounded-full">
                View Work
              </button>
            </div>
            
          </div>
          {/* IMAGE */}
          <div className="relative mt-16 lg:mt-0">

            <div className="absolute inset-0 bg-red-500 blur-[120px] opacity-30 rounded-full"></div>

            <Image
              src="/Ani Juice wrld.jpg"
              alt="Hero"
              width={300}
              height={300}
              className="relative z-10 rounded-3xl object-cover"
              priority
            />
          </div>

        </section>
        
<footer className="relative z-10 mt-2 border-t border-gray-800 py-2 text-center">

  <p className="text-gray-400 mb-8 tracking-widest uppercase text-sm">
    Connect with me
  </p>

  <div className="flex justify-center gap-8">

    
    <a href="https://wa.me/233550266075" target="_blank" rel="noopener noreferrer">
      <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        className="w-10 h-10 hover:scale-110 transition"
      />
    </a>

    
    <a href="https://instagram.com/xenos_syd" target="_blank" rel="noopener noreferrer">
      <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
        alt="Instagram"
        className="w-10 h-10 hover:scale-110 transition"
      />
    </a>

    
    <a href="https://github.com/Xenos-sydney" target="_blank" rel="noopener noreferrer">
      <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
        alt="GitHub"
        className="w-10 h-10 hover:scale-110 transition"
      />
    </a>

    
    <a href="https://www.linkedin.com/in/bright-boglo-992a2339a/" target="_blank" rel="noopener noreferrer">
      <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
        alt="LinkedIn"
        className="w-10 h-10 hover:scale-110 transition"
      />
    </a>

   <a href="https://snapchat.com/add/sydney_xenos" target="_blank" rel="noopener noreferrer">
  <img
    src="https://cdn.simpleicons.org/snapchat/FFFC00"
    alt="Snapchat"
    className="w-10 h-10 hover:scale-110 transition"
  />
</a>
  </div>

  <p className="text-gray-600 mt-10 text-sm">
    © {new Date().getFullYear()} Ryan Walker
  </p>

</footer>
      </div>
    </main>
  );
}