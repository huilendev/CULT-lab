import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function Services() {
  return (
    <main className="bg-black">
      <Navigation />

      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-black mb-8 text-white uppercase">WHAT WE DO</h1>
          <p className="text-xl text-gray-300 mb-16">
            We collaborate with startups, creatives, and small organizations to bring ideas to life with elegance and
            accuracy.
          </p>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-black mb-8 text-white uppercase">DESIGN & UX ADVISORY</h2>
              <ul className="space-y-4 text-gray-300">
                <li className="flex gap-3">
                  <span className="text-white font-bold">→</span>
                  <span>Branding & Visual Identity</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-white font-bold">→</span>
                  <span>UI/UX Design Systems</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-white font-bold">→</span>
                  <span>Layout Optimization</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-white font-bold">→</span>
                  <span>Creative Direction</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-white font-bold">→</span>
                  <span>User Research & Testing</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-black mb-8 text-white uppercase">DEVELOPMENT</h2>
              <ul className="space-y-4 text-gray-300">
                <li className="flex gap-3">
                  <span className="text-white font-bold">→</span>
                  <span>Custom Websites & Web Apps</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-white font-bold">→</span>
                  <span>E-commerce Solutions</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-white font-bold">→</span>
                  <span>Interactive Experiences</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-white font-bold">→</span>
                  <span>Performance Optimization</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-white font-bold">→</span>
                  <span>API Integration & Backend</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-black mb-8 text-white uppercase">OUR APPROACH</h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            We don't just build websites—we craft digital rituals. Every project begins with deep understanding of your
            vision, followed by strategic planning, meticulous design, and precise development. We believe in
            collaboration, transparency, and delivering work that exceeds expectations.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
