import { Reveal } from "./Reveal";
import { TrendingUp, Users, Zap } from "lucide-react";

const cases = [
  {
    tag: "Brand Growth",
    icon: TrendingUp,
    title: "E-Commerce Brand Transformation",
    description:
      "Rebuilt the digital presence of a D2C fashion startup from scratch. Complete brand overhaul, new website, and targeted social campaigns.",
    metrics: [
      { label: "Revenue Growth", value: "340%" },
      { label: "Organic Reach", value: "2.4M" },
      { label: "Conversion Rate", value: "8.7%" },
    ],
    accent: "#3B82F6",
    gradient: "from-blue-600/20 to-cyan-600/10",
  },
  {
    tag: "Lead Generation",
    icon: Users,
    title: "B2B SaaS Lead Acceleration",
    description:
      "Designed and executed a full-funnel lead generation system for a SaaS startup, combining SEO, paid ads, and landing page optimization.",
    metrics: [
      { label: "Leads Generated", value: "12K+" },
      { label: "Cost Per Lead", value: "−67%" },
      { label: "Lead Conversion", value: "89%" },
    ],
    accent: "#8B5CF6",
    gradient: "from-purple-600/20 to-violet-600/10",
  },
  {
    tag: "Marketing Performance",
    icon: Zap,
    title: "Regional Restaurant Chain Scale-Up",
    description:
      "Social media strategy and paid campaigns for a 12-location restaurant brand. Built hyper-local targeting funnels that drove consistent foot traffic.",
    metrics: [
      { label: "Footfall Increase", value: "210%" },
      { label: "Instagram Followers", value: "+85K" },
      { label: "Ad ROAS", value: "6.8x" },
    ],
    accent: "#6366F1",
    gradient: "from-indigo-600/20 to-blue-600/10",
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-28 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-primary/8 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <Reveal direction="up">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-accent mb-4 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20">
              Case Studies
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mt-4 mb-6">
              Results That{" "}
              <span className="gradient-text">Speak</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Every campaign is a story. Here are a few that changed the game for our clients.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {cases.map((c, i) => {
            const Icon = c.icon;
            return (
              <Reveal key={c.title} delay={i * 0.12} direction="up" width="100%">
                <div
                  className={`glass-card glass-card-hover rounded-2xl overflow-hidden h-full flex flex-col`}
                >
                  <div
                    className={`h-2 w-full bg-gradient-to-r ${c.gradient}`}
                    style={{
                      background: `linear-gradient(90deg, ${c.accent}80, ${c.accent}20)`,
                    }}
                  />
                  <div className="p-8 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-5">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center"
                        style={{ background: `${c.accent}22` }}
                      >
                        <Icon className="w-5 h-5" style={{ color: c.accent }} />
                      </div>
                      <span
                        className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full"
                        style={{
                          color: c.accent,
                          background: `${c.accent}18`,
                          border: `1px solid ${c.accent}30`,
                        }}
                      >
                        {c.tag}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold font-heading text-foreground mb-3">
                      {c.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-1">
                      {c.description}
                    </p>

                    <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/8">
                      {c.metrics.map((m) => (
                        <div key={m.label} className="text-center">
                          <div
                            className="text-xl font-bold font-heading mb-0.5"
                            style={{ color: c.accent }}
                          >
                            {m.value}
                          </div>
                          <div className="text-[10px] text-muted-foreground leading-tight uppercase tracking-wide">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
