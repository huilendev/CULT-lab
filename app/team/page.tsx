import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function Team() {
  return (
    <main className="bg-black">
      <Navigation />

      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-black mb-8 text-white uppercase">OUR TEAM</h1>
          <p className="text-xl text-gray-300">
            A collective of creative developers and designers with tattoos, color in their hair, and strong technical
            expertise.
          </p>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Alex Chen", role: "Creative Director", portfolio: "#" },
              { name: "Jordan Smith", role: "Lead Developer", portfolio: "#" },
              { name: "Casey Rivera", role: "Brand Strategist", portfolio: "#" },
              { name: "Morgan Lee", role: "UX Researcher", portfolio: "#" },
              { name: "Taylor Kim", role: "Motion Designer", portfolio: "#" },
              { name: "Sam Johnson", role: "Full-Stack Dev", portfolio: "#" },
              { name: "Riley Chen", role: "Product Manager", portfolio: "#" },
              { name: "Avery Martinez", role: "Creative Technologist", portfolio: "#" },
            ].map((member, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="glow-border p-6 rounded-lg mb-4 h-48 bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                  <div className="text-center">
                    <div className="text-4xl font-black text-white mb-2">
                      {member.name.split(" ")[0][0]}
                      {member.name.split(" ")[1][0]}
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
                <p className="text-sm text-white mb-3">{member.role}</p>
                <a href={member.portfolio} className="text-xs text-gray-400 hover:text-white transition-colors">
                  View Portfolio →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
