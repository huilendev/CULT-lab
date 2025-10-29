import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import HeroCanvas from "@/components/hero-canvas"

export default function Home() {
  return (
    <main className="bg-black">
      <Navigation />
      <HeroCanvas />

      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-4xl mx-auto text-center fade-in-up">
          <h2 className="text-3xl md:text-4xl font-black mb-6 text-white uppercase">
            DIGITAL LAB FOR DESIGN, CODE & INTELLIGENCE
          </h2>
          <p className="text-lg text-gray-400 mb-8 leading-relaxed">
            We design and develop digital experiences with precision and character. CULT is where ideas evolve into
            digital rituals — a lab where code meets design, and precision becomes art.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white hover:bg-gray-200 text-black font-semibold rounded-lg transition-colors">
              Start a Project
            </button>
            <button className="px-8 py-3 border border-white/50 text-white hover:bg-white/10 font-semibold rounded-lg transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glow-border p-8 rounded-lg">
              <h3 className="text-xl font-black text-white mb-4 uppercase">DESIGN & UX</h3>
              <p className="text-gray-400">
                Branding, UI systems, layout optimization, and creative direction that elevates your vision.
              </p>
            </div>
            <div className="glow-border p-8 rounded-lg">
              <h3 className="text-xl font-black text-white mb-4 uppercase">DEVELOPMENT</h3>
              <p className="text-gray-400">
                Custom websites, e-commerce, portfolios, and interactive digital experiences built with precision.
              </p>
            </div>
            <div className="glow-border p-8 rounded-lg">
              <h3 className="text-xl font-black text-white mb-4 uppercase">STRATEGY</h3>
              <p className="text-gray-400">
                Collaborative approach to understand your vision and craft the perfect digital roadmap.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
