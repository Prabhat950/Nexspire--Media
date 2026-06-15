import { Mail, Phone, Instagram } from "lucide-react";

export function Footer() {
  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/8 pt-16 pb-8 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="text-2xl font-bold font-heading gradient-text mb-4">
              Nexspire Media
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-sm">
              Transforming Ideas Into Digital Success. We build brands that inspire,
              convert, and dominate their market.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="tel:8516857082"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                8516857082
              </a>
              <a
                href="mailto:medianexspire@gmail.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                medianexspire@gmail.com
              </a>
              <a
                href="https://instagram.com/nexspiremedia.in"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <Instagram className="w-4 h-4 text-primary flex-shrink-0" />
                @nexspiremedia.in
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-foreground mb-5">
              Navigation
            </h4>
            <ul className="space-y-3">
              {["#home", "#services", "#portfolio", "#team", "#contact"].map((href) => (
                <li key={href}>
                  <button
                    onClick={() => scrollToSection(href)}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm capitalize"
                  >
                    {href.replace("#", "")}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-foreground mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                "Website Development",
                "Logo Design & Branding",
                "Social Media Management",
                "Website Maintenance",
              ].map((s) => (
                <li key={s}>
                  <button
                    onClick={() => scrollToSection("#services")}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm text-left"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Nexspire Media. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Transforming Ideas Into Digital Success
          </p>
        </div>
      </div>
    </footer>
  );
}
