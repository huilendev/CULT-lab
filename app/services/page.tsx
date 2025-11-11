import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function Services() {
  return (
    <main className="bg-black">
      <Navigation />

      <section className="pt-24 sm:pt-32 md:pt-40 pb-16 sm:pb-24 md:pb-32 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="max-w-4xl mx-auto w-full">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 sm:mb-12 text-white uppercase leading-tight">
            WHAT WE DO
          </h1>
          <p className="text-base sm:text-lg md:text-2xl lg:text-3xl text-gray-300 leading-relaxed">
            We collaborate with startups, creatives, and small organizations to bring ideas to life with elegance and
            accuracy. Our approach combines strategic thinking, meticulous design, and precise development to create
            digital experiences that resonate and endure.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-6 sm:space-y-8 md:space-y-8">
            {[
              {
                title: "DESIGN & UX ADVISORY",
                items: [
                  {
                    name: "Branding & Visual Identity",
                    description: "Crafting distinctive visual languages that define your brand.",
                  },
                  {
                    name: "UI/UX Design Systems",
                    description: "Building scalable, consistent design systems for seamless experiences.",
                  },
                  {
                    name: "Layout Optimization",
                    description: "Maximizing usability and visual hierarchy for optimal engagement.",
                  },
                  {
                    name: "Creative Direction",
                    description: "Guiding visual and conceptual direction across all touchpoints.",
                  },
                  {
                    name: "User Research & Testing",
                    description: "Data-driven insights to validate and refine design decisions.",
                  },
                ],
              },
              {
                title: "DEVELOPMENT",
                items: [
                  {
                    name: "Custom Websites & Web Apps",
                    description: "Bespoke digital solutions tailored to your unique requirements.",
                  },
                  {
                    name: "E-commerce Solutions",
                    description: "Powerful platforms designed to convert and delight customers.",
                  },
                  {
                    name: "Interactive Experiences",
                    description: "Engaging, dynamic interfaces that captivate and inspire.",
                  },
                  {
                    name: "Performance Optimization",
                    description: "Lightning-fast load times and smooth interactions across all devices.",
                  },
                  {
                    name: "API Integration & Backend",
                    description: "Robust backend systems and seamless third-party integrations.",
                  },
                ],
              },
              {
                title: "STRATEGY",
                items: [
                  {
                    name: "Digital Strategy",
                    description: "Comprehensive roadmaps that align technology with business goals.",
                  },
                  {
                    name: "Market Research",
                    description: "Deep insights into your audience and competitive landscape.",
                  },
                  {
                    name: "Product Planning",
                    description: "Strategic vision and execution plans for digital products.",
                  },
                  {
                    name: "Growth Optimization",
                    description: "Data-driven strategies to scale and improve your digital presence.",
                  },
                  {
                    name: "Consulting",
                    description: "Expert guidance on technology choices and digital transformation.",
                  },
                ],
              },
            ].map((service, index) => (
              <div key={index} className="glow-border p-6 sm:p-8 md:p-12 rounded-lg">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black mb-6 sm:mb-8 text-white uppercase">
                  {service.title}
                </h2>
                <div className="space-y-4 sm:space-y-6">
                  {service.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex gap-3 sm:gap-4">
                      <span className="text-white font-bold text-lg sm:text-xl flex-shrink-0">→</span>
                      <div className="min-w-0">
                        <span className="text-base sm:text-lg font-semibold text-white break-words">{item.name}</span>
                        <p className="text-gray-400 text-xs sm:text-sm mt-1 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-8 sm:mb-12 text-white uppercase">
            OUR APPROACH
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed">
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
