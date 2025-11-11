import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function Process() {
  return (
    <main className="bg-black">
      <Navigation />

      <section className="pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-8 text-white uppercase leading-tight">
            OUR PROCESS
          </h1>
          <p className="text-base sm:text-lg text-gray-300">
            A structured approach to transforming your vision into reality.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6 sm:space-y-8 md:space-y-8">
            {[
              {
                title: "Discovery",
                description:
                  "We dive deep into understanding your vision, goals, and target audience. Through workshops and research, we uncover the insights that drive strategy.",
              },
              {
                title: "Strategy",
                description:
                  "Armed with insights, we craft a comprehensive roadmap. We define the digital experience, technical architecture, and success metrics.",
              },
              {
                title: "Design",
                description:
                  "Our designers create intuitive, beautiful experiences. From wireframes to high-fidelity mockups, every pixel serves a purpose.",
              },
              {
                title: "Development",
                description:
                  "Our developers bring designs to life with clean, performant code. We build with precision, scalability, and user experience in mind.",
              },
              {
                title: "Growth",
                description:
                  "Launch is just the beginning. We optimize, analyze, and evolve your digital presence to ensure continuous improvement and success.",
              },
            ].map((step, index) => (
              <div key={index} className="flex flex-col">
                <div className="glow-border p-6 sm:p-8 md:p-8 rounded-lg mb-3 sm:mb-4">
                  <h3 className="text-lg sm:text-2xl font-black text-white mb-2 sm:mb-3 uppercase">{step.title}</h3>
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed">{step.description}</p>
                </div>
                {index < 4 && (
                  <div className="flex justify-center py-2 sm:py-3">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-white arrow-bounce"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
