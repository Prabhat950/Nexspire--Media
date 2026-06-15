import React from "react";
import { Reveal } from "./Reveal";
import { ArrowRight, MessageCircle } from "lucide-react";
import { ParticlesBackground } from "./ParticlesBackground";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <ParticlesBackground />
      
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/4 -translate-y-1/3 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 text-center flex flex-col items-center">
        <Reveal delay={0.1} direction="up">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <span className="text-sm font-medium tracking-wider text-primary uppercase">
              Transforming Ideas Into Digital Success
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.2} direction="up">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading tracking-tighter leading-[1.1] mb-6">
            We Build Brands That <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent">
              Inspire & Convert
            </span>
          </h1>
        </Reveal>

        <Reveal delay={0.3} direction="up">
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-light">
            Digital Marketing <span className="text-primary mx-2">•</span> Branding{" "}
            <span className="text-primary mx-2">•</span> Social Media Growth{" "}
            <span className="text-primary mx-2">•</span> AI Automation
          </p>
        </Reveal>

        <Reveal delay={0.4} direction="up">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="#contact"
              className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-primary to-accent text-white font-semibold text-lg overflow-hidden shadow-[0_0_30px_rgba(var(--color-primary),0.3)] hover:shadow-[0_0_50px_rgba(var(--color-primary),0.5)] transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Started <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </a>
            
            <a
              href="https://wa.me/918516857082"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-8 py-4 rounded-full bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/30 font-semibold text-lg hover:bg-[#25D366] hover:text-white transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Contact
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
