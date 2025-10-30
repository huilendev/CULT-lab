import Image from "next/image";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function About() {
  return (
    <main className="bg-black">
      <Navigation />

      <section className="pt-40 pb-32 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="max-w-4xl mx-auto w-full">
          <h1 className="text-6xl md:text-7xl font-black mb-12 text-white uppercase">
            ABOUT CULT
          </h1>
          <div className="space-y-8 text-gray-300 leading-relaxed">
            <p className="text-xl md:text-2xl">
              CULT is where ideas evolve into digital rituals — a lab where code
              meets design, and precision becomes art. We are a New York-based
              creative collective blending the aesthetic of cyberpunk with the
              logic of engineering.
            </p>
            <p className="text-lg md:text-xl">
              We represent rebellion, precision, and collaboration. Our team
              consists of creative developers and designers with strong
              technical expertise and an uncompromising vision for digital
              excellence. We don't follow trends; we create them.
            </p>
            <p className="text-lg md:text-xl">
              Every project is a ritual. Every line of code is intentional.
              Every design decision is deliberate. We co-create with our clients
              to shape the future of the web, one digital experience at a time.
            </p>
          </div>
        </div>
      </section>

      <section className="py-32 px-4 sm:px-6 lg:px-8 border-t border-white/10 min-h-screen flex items-center">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-6xl md:text-7xl font-black mb-20 text-white uppercase">
            THE MINDS BEHIND CULT
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {[
              {
                name: "Macarena Escalante",
                role: "UX/UI & Graphic Designer",
                bio: "Designer blending visuals and usability into thoughtful digital experiences.",
                portfolio:
                  "https://portfolio-macarena-escalante.framer.website/",
                image: "/team/maca.png",
              },
              {
                name: "Dayren Anderson",
                role: "Back-end & Infrastructure",
                bio: "Engineer blending logic and structure to make digital experiences feel effortless.",
                portfolio: "",
                image: "/team/day.jpeg",
              },
              {
                name: "Huilen Vilches",
                role: "Full-stack Developer",
                bio: "Developer bridging design and technology to bring ideas to life.",
                portfolio: "https://www.huilen.dev/",
                image: "/team/hui.jpeg",
              },
            ].map((member) => (
              <div
                key={member.name}
                className="glow-border p-10 rounded-2xl bg-zinc-950/50 hover:bg-zinc-900/50 transition-all duration-300"
              >
                <div className="relative w-24 h-24 mb-6 overflow-hidden rounded-xl border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.08)]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                </div>

                <h3 className="text-2xl font-black text-white mb-3 uppercase">
                  {member.name}
                </h3>
                <p className="text-white text-base font-semibold mb-4">
                  {member.role}
                </p>
                <p className="text-gray-400 text-base mb-6 leading-relaxed">
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
