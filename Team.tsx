import { Reveal } from "./Reveal";
import { Linkedin, Twitter } from "lucide-react";

const team = [
  {
    initials: "PD",
    name: "Prabhat Kumar Dubey",
    role: "Founder & CEO",
    focus: "Strategy & Growth",
    bio: "Visionary strategist with a passion for building brands that dominate their market. Leads client strategy and company direction.",
    gradient: "from-blue-600 to-cyan-500",
    glow: "rgba(59, 130, 246, 0.3)",
  },
  {
    initials: "SK",
    name: "Sumit Kumar",
    role: "Co-Founder & CTO",
    focus: "Tech & Systems",
    bio: "Full-stack architect who builds the technology backbone behind every digital product. Obsessed with performance and scalability.",
    gradient: "from-purple-600 to-violet-500",
    glow: "rgba(139, 92, 246, 0.3)",
  },
  {
    initials: "SY",
    name: "Satyam Kumar",
    role: "Co-Founder & CMO",
    focus: "Marketing & Branding",
    bio: "Creative force behind every campaign. Blends data-driven thinking with bold storytelling to craft brands people remember.",
    gradient: "from-indigo-600 to-blue-500",
    glow: "rgba(99, 102, 241, 0.3)",
  },
];

export function Team() {
  return (
    <section id="team" className="py-28 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-[120px]" />
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-primary/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <Reveal direction="up">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20">
              Leadership
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mt-4 mb-6">
              The Minds Behind{" "}
              <span className="gradient-text">Nexspire</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A founding trio obsessed with results, driven by craft, and united by a single goal:
              making your brand unstoppable.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <Reveal key={member.name} delay={i * 0.15} direction="up" width="100%">
              <div className="glass-card glass-card-hover rounded-2xl p-8 text-center group h-full flex flex-col">
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div
                      className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center text-3xl font-bold text-white font-heading shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      style={{
                        boxShadow: `0 0 30px ${member.glow}`,
                      }}
                    >
                      {member.initials}
                    </div>
                    <div
                      className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-300 blur-sm"
                      style={{
                        background: `linear-gradient(135deg, ${member.glow}, transparent)`,
                      }}
                    />
                  </div>
                </div>

                <div className="mb-1">
                  <span
                    className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full"
                    style={{
                      color:
                        i === 0
                          ? "#3B82F6"
                          : i === 1
                          ? "#8B5CF6"
                          : "#6366F1",
                      background:
                        i === 0
                          ? "rgba(59,130,246,0.12)"
                          : i === 1
                          ? "rgba(139,92,246,0.12)"
                          : "rgba(99,102,241,0.12)",
                    }}
                  >
                    {member.focus}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-heading text-foreground mt-3 mb-1 group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                <p className="text-sm font-semibold text-muted-foreground mb-4">
                  {member.role}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                  {member.bio}
                </p>

                <div className="flex justify-center gap-3 mt-6 pt-6 border-t border-white/8">
                  <button className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all">
                    <Linkedin className="w-4 h-4" />
                  </button>
                  <button className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all">
                    <Twitter className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
