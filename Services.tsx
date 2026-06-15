import { Reveal } from "./Reveal";
import { Globe, Palette, Share2, Wrench } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description:
      "High-performance, conversion-optimized websites built with cutting-edge technology. From landing pages to full-stack platforms.",
    features: ["Custom Design", "SEO Optimized", "Lightning Fast"],
    gradient: "from-blue-500 to-cyan-400",
    glow: "rgba(59, 130, 246, 0.15)",
  },
  {
    icon: Palette,
    title: "Logo Design & Branding",
    description:
      "Distinctive brand identities that communicate authority, trust, and vision. We craft logos that become symbols.",
    features: ["Brand Strategy", "Visual Identity", "Style Guide"],
    gradient: "from-purple-500 to-pink-400",
    glow: "rgba(139, 92, 246, 0.15)",
  },
  {
    icon: Share2,
    title: "Social Media Management",
    description:
      "Data-driven social strategies that grow audiences, drive engagement, and turn followers into customers.",
    features: ["Content Creation", "Growth Analytics", "Community Building"],
    gradient: "from-indigo-500 to-blue-400",
    glow: "rgba(99, 102, 241, 0.15)",
  },
  {
    icon: Wrench,
    title: "Website Maintenance",
    description:
      "Proactive monitoring, security patches, performance optimization, and updates — so you stay focused on your business.",
    features: ["24/7 Monitoring", "Security Updates", "Performance Tuning"],
    gradient: "from-violet-500 to-purple-400",
    glow: "rgba(124, 58, 237, 0.15)",
  },
];

export function Services() {
  return (
    <section id="services" className="py-28 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-accent/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <Reveal direction="up">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20">
              What We Do
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mt-4 mb-6">
              Services Built for{" "}
              <span className="gradient-text">Impact</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Every service we offer is engineered to deliver measurable results,
              elevate your brand, and accelerate growth.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={i * 0.1} direction="up" width="100%">
                <div
                  className="glass-card glass-card-hover rounded-2xl p-8 group cursor-default h-full"
                  style={{
                    boxShadow: `0 0 0px ${service.glow}`,
                  }}
                >
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br ${service.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold font-heading text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {service.features.map((f) => (
                      <span
                        key={f}
                        className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 border border-white/10 text-muted-foreground group-hover:border-primary/30 group-hover:text-primary/80 transition-all"
                      >
                        {f}
                      </span>
                    ))}
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
