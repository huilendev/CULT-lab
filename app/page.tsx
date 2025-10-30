// app/page.tsx
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import HeroCanvas from "@/components/hero-canvas"
import Link from "next/link"

export default function Home() {
  return (
    <main className="bg-black">
      <Navigation />
      <HeroCanvas />

      <div className="aurora-bg">
        <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-black/40">
          <div className="max-w-4xl mx-auto text-center fade-in-up">
            <h2 className="text-5xl md:text-7xl font-black mb-8 text-white uppercase">
              DIGITAL LAB FOR DESIGN, CODE & INTELLIGENCE
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
              We design and develop digital experiences with precision and character. CULT is where ideas evolve into
              digital rituals — a lab where code meets design, and precision becomes art.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="px-8 py-3 bg-white hover:bg-gray-200 text-black font-semibold rounded-lg transition-colors">
                  Start a Project
                </button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-32 px-4 sm:px-6 lg:px-8 border-t border-white/10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="glow-border p-12 rounded-lg">
                <h3 className="text-2xl font-black text-white mb-6 uppercase">DESIGN & UX</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Branding, UI systems, layout optimization, and creative direction that elevates your vision.
                </p>
              </div>
              <div className="glow-border p-12 rounded-lg">
                <h3 className="text-2xl font-black text-white mb-6 uppercase">DEVELOPMENT</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Custom websites, e-commerce, portfolios, and interactive digital experiences built with precision.
                </p>
              </div>
              <div className="glow-border p-12 rounded-lg">
                <h3 className="text-2xl font-black text-white mb-6 uppercase">STRATEGY</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Collaborative approach to understand your vision and craft the perfect digital roadmap.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  )
}
