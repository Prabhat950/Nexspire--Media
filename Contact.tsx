import { useState } from "react";
import { Reveal } from "./Reveal";
import { Mail, Phone, Instagram, Send, CheckCircle } from "lucide-react";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "8516857082",
      href: "tel:8516857082",
    },
    {
      icon: Mail,
      label: "Email",
      value: "medianexspire@gmail.com",
      href: "mailto:medianexspire@gmail.com",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@nexspiremedia.in",
      href: "https://instagram.com/nexspiremedia.in",
    },
  ];

  return (
    <section id="contact" className="py-28 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-primary/8 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <Reveal direction="up">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-accent mb-4 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20">
              Get In Touch
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mt-4 mb-6">
              Ready to{" "}
              <span className="gradient-text">Transform</span>?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Let's talk about your brand, your goals, and how Nexspire Media can
              make them happen.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          <Reveal direction="right" delay={0.1} width="100%">
            <div className="lg:col-span-2 flex flex-col gap-5">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <a
                    key={info.label}
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="glass-card glass-card-hover rounded-xl p-5 flex items-center gap-4 group"
                    data-testid={`contact-${info.label.toLowerCase()}`}
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mb-0.5">
                        {info.label}
                      </div>
                      <div className="text-foreground font-medium text-sm">
                        {info.value}
                      </div>
                    </div>
                  </a>
                );
              })}

              <a
                href="https://wa.me/918516857082"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] font-semibold hover:bg-[#25D366] hover:text-white transition-all duration-300 group"
                data-testid="contact-whatsapp"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </Reveal>

          <Reveal direction="left" delay={0.15} width="100%">
            <div className="lg:col-span-3">
              <form
                onSubmit={handleSubmit}
                className="glass-card rounded-2xl p-8 gradient-border"
                data-testid="contact-form"
              >
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-12 gap-4">
                    <CheckCircle className="w-16 h-16 text-green-400" />
                    <h3 className="text-2xl font-bold font-heading text-foreground">
                      Message Sent
                    </h3>
                    <p className="text-muted-foreground text-center">
                      We'll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <>
                    <h3 className="text-2xl font-bold font-heading text-foreground mb-8">
                      Send a Message
                    </h3>
                    <div className="space-y-5">
                      <div>
                        <label className="block text-sm font-medium text-muted-foreground mb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="John Doe"
                          data-testid="input-name"
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:bg-primary/5 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-muted-foreground mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="john@company.com"
                          data-testid="input-email"
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:bg-primary/5 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-muted-foreground mb-2">
                          Message
                        </label>
                        <textarea
                          required
                          rows={5}
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          placeholder="Tell us about your project..."
                          data-testid="input-message"
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:bg-primary/5 transition-all resize-none"
                        />
                      </div>
                      <button
                        type="submit"
                        data-testid="button-submit"
                        className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-semibold text-base hover:shadow-[0_0_40px_rgba(99,102,241,0.4)] transition-all duration-300 hover:-translate-y-0.5"
                      >
                        <Send className="w-4 h-4" />
                        Send Message
                      </button>
                    </div>
                  </>
                )}
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
