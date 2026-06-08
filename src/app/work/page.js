"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const initialProjects = [
  { title: "Madrid", image: "/project/Madrid.jpg" },
  { title: "Nairobi", image: "/project/Nairobi.jpg" },
  { title: "Prague", image: "/project/Prague.jpg" },
  { title: "Tokyo", image: "/project/Tokyo.jpg" },
  { title: "Berlin", image: "/project/Berlin.jpg" },
];

export default function WorkPage() {
  const [projects, setProjects] = useState(initialProjects);

  // auto switch like Fava
  useEffect(() => {
    const interval = setInterval(() => {
      setProjects((prev) => {
        const copy = [...prev];
        const first = copy.shift();
        copy.push(first);
        return copy;
      });
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen text-white relative overflow-hidden">

      {/* 🔥 BACKGROUND GRADIENT */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#da1608] via-[#631010] to-black opacity-90 z-0" />
      <div className="absolute inset-0 bg-black/40" />

      <section className="relative min-h-screen flex flex-col lg:flex-row items-center px-6 md:px-12 lg:px-16">

        {/* LEFT TEXT */}
        <div className="w-full lg:w-1/2 py-16 lg:py-0 z-10">

          <p className="uppercase tracking-[0.3em] text-white/70 mb-4">
            Featured Projects
          </p>

          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            My Work
          </h1>

          <p className="max-w-md text-white/70 text-lg">
            A collection of projects crafted with clean code, modern design and attention to detail.
          </p>

        </div>

        {/* ========================= */}
        {/* DESKTOP STACK (FIXED) */}
        {/* ========================= */}
        <div className="hidden lg:flex relative w-1/2 h-[650px] items-center justify-center overflow-visible">

          {projects.map((project, index) => (
            <div
              key={project.title}
              className="absolute w-[380px] h-[520px] rounded-[30px] overflow-hidden shadow-2xl border border-white/10 transition-all duration-700"
              style={{
                transform: `
                  translateX(${index * 50}px)
                  translateY(${index * 20}px)
                  scale(${1 - index * 0.04})
                `,
                zIndex: 10 - index,
              }}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />

              {/* overlay so image always visible + readable */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

              <div className="absolute bottom-4 left-4 text-white font-semibold">
                {project.title}
              </div>
            </div>
          ))}

        </div>

        {/* ========================= */}
        {/* MOBILE VERSION (FIXED) */}
        {/* ========================= */}
        <div className="lg:hidden w-full mt-10 z-10">

          {/* MAIN IMAGE */}
          <div className="relative w-full h-[420px] rounded-3xl overflow-hidden shadow-2xl border border-white/10">

            <Image
              src={projects[0].image}
              alt={projects[0].title}
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

            <div className="absolute bottom-6 left-6">
              <h2 className="text-2xl font-bold">
                {projects[0].title}
              </h2>
            </div>

          </div>

          {/* THUMBNAILS */}
          <div className="flex gap-3 mt-4 overflow-x-auto pb-2">

            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`relative w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden border ${
                  index === 0 ? "border-white" : "border-white/20"
                }`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
            ))}

          </div>

        </div>

      </section>
    </main>
  );
}