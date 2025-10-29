import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function About() {
  return (
    <main className="bg-black">
      <Navigation />

      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-black mb-8 text-white uppercase">ABOUT CULT</h1>
          <div className="space-y-8 text-gray-300 leading-relaxed">
            <p className="text-xl">
              CULT is where ideas evolve into digital rituals — a lab where code meets design, and precision becomes
              art. We are a New York-based creative collective blending the aesthetic of cyberpunk with the logic of
              engineering.
            </p>
            <p>
              We represent rebellion, precision, and collaboration. Our team consists of creative developers and
              designers with strong technical expertise and an uncompromising vision for digital excellence. We don't
              follow trends; we create them.
            </p>
            <p>
              Every project is a ritual. Every line of code is intentional. Every design decision is deliberate. We
              co-create with our clients to shape the future of the web, one digital experience at a time.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-16 text-white uppercase">THE MINDS BEHIND CULT</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                name: "Alex Chen",
                role: "Creative Director",
                bio: "Visionary designer with 10+ years crafting digital experiences.",
              },
              {
                name: "Jordan Smith",
                role: "Lead Developer",
                bio: "Full-stack engineer obsessed with performance and precision.",
              },
              {
                name: "Casey Rivera",
                role: "Brand Strategist",
                bio: "Strategic thinker transforming visions into cohesive identities.",
              },
              {
                name: "Morgan Lee",
                role: "UX Researcher",
                bio: "Human-centered designer focused on meaningful interactions.",
              },
            ].map((member) => (
              <div key={member.name} className="glow-border p-8 rounded-lg">
                <div className="w-16 h-16 bg-white rounded-lg mb-4"></div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-white text-sm font-semibold mb-3">{member.role}</p>
                <p className="text-gray-400 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
