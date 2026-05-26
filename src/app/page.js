import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen relative text-white overflow-hidden bg-black">
  
  <div className="absolute inset-0 bg-gradient-to-br from-[#da1608] via-[#631010] to-black opacity-95"></div>

  <div className="relative z-10"></div>
      
      <header className="relative z-20 flex items-center justify-between px-10 py-6">
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

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-10 lg:px-20 pt-10">

        {/* Left Text */}
        <div className="max-w-xl z-20">
          <p className="text-orange-400 text-lg mb-6 tracking-wide">
            Beyond Creativity Into Digital Excellence
          </p>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-none uppercase">
            Creative <br />
            Developer
          </h1>

          <p className="text-gray-400 mt-6 text-lg leading-relaxed">
            I design modern digital experiences that help brands grow,
            stand out and dominate online.
          </p>

          <div className="flex gap-5 mt-10">
            <button className="bg-orange-500 hover:bg-orange-600 transition px-8 py-4 rounded-full font-semibold shadow-xl">
              Hire Me
            </button>

            <button className="border border-gray-600 hover:border-orange-500 transition px-8 py-4 rounded-full">
              View Work
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative mt-16 lg:mt-0">
          
          {/* Glow */}
          <div className="absolute inset-0 bg-red-500 blur-[120px] opacity-30 rounded-full"></div>

          <Image
            src="/Ani Juice wrld.jpg"
            alt="Hero"
            width={400}
            height={400}
            className="relative z-10 object-cover rounded-3xl"
            priority
          />
        </div>
      </section>

      <div className="absolute bottom-10 left-10 text-[30px] md:text-[80px] font-extrabold text-white/10 uppercase pointer-events-none">
        Ryan Walker
      </div>

    </main>
  );
}