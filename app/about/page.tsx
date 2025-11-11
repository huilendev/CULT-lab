"use client";

import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Image from "next/image";

export default function About() {
  return (
    <main className="bg-black">
      <Navigation />

      {/* ABOUT CULT */}
      <section className="pt-24 sm:pt-32 md:pt-40 pb-16 sm:pb-24 md:pb-32 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="max-w-4xl mx-auto w-full">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 sm:mb-12 text-white uppercase leading-tight">
            ABOUT CULT
          </h1>
          <div className="space-y-6 sm:space-y-8 text-gray-300 leading-relaxed">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl">
              CULT is where ideas evolve into digital rituals — a lab where code
              meets design, and precision becomes art. We are a New York-based
              creative collective blending the aesthetic of cyberpunk with the
              logic of engineering.
            </p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl">
              We represent rebellion, precision, and collaboration. Our team
              consists of creative developers and designers with strong
              technical expertise and an uncompromising vision for digital
              excellence. We don't follow trends; we create them.
            </p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl">
              Every project is a ritual. Every line of code is intentional.
              Every design decision is deliberate. We co-create with our clients
              to shape the future of the web, one digital experience at a time.
            </p>
          </div>
        </div>
      </section>

      {/* THE MINDS BEHIND CULT */}
      <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 border-t border-white/10 min-h-screen flex items-center">
        <div className="max-w-5xl mx-auto w-full">
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-12 sm:mb-16 md:mb-20 text-white uppercase leading-tight text-center">
            THE MINDS BEHIND CULT
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-12 md:gap-16">
            {[
              {
                name: "Macarena Escalante",
                role: "UX/UI & Graphic Designer",
                bio: "Designer blending visuals and usability into thoughtful digital experiences.",
                portfolio:
                  "https://portfolio-macarena-escalante.framer.website/",
                image: "/maca.png",
              },
              {
                name: "Dayren Anderson",
                role: "Back-end & Infrastructure",
                bio: "Engineer blending logic and structure to make digital experiences feel effortless.",
                portfolio: "https://dayrenanderson.com",
                image: "/day.jpeg",
              },
              {
                name: "Huilen Vilches",
                role: "Full-stack Developer",
                bio: "Developer bridging design and technology to bring ideas to life.",
                portfolio: "https://huilen.dev",
                image: "/hui.jpeg",
              },
            ].map((member) => (
              <div
                key={member.name}
                className="glow-border p-8 sm:p-10 md:p-12 rounded-2xl text-center bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all"
              >
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 mx-auto mb-6 rounded-full overflow-hidden ring-2 ring-white/20">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 200px"
                  />
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-white mb-2 uppercase">
                  {member.name}
                </h3>
                <p className="text-white/90 text-sm sm:text-base font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-gray-400 text-sm sm:text-base mb-6 leading-relaxed">
                  {member.bio}
                </p>
                <a
                  href={member.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300 transition-colors font-semibold text-sm"
                >
                  View Portfolio →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
