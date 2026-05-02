import { ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => (
  <footer className="relative overflow-hidden">
    {/* OPEN TO WORK marquee */}
    <div className="py-6 border-t border-border/20 overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee">
        {Array.from({ length: 12 }).map((_, i) => (
          <span key={i} className="text-sm font-semibold text-muted-foreground/40 mx-6 tracking-widest uppercase">
            Open to Work ·
          </span>
        ))}
      </div>
    </div>

    {/* Big CTA */}
    <div className="section-padding text-center">
      <div className="container-narrow">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">From Concept to Creation</p>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-[1.05]">
          Let's Make It
          <br />
          <span className="text-gradient">Happen!</span>
        </h2>

        <button
          onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
          className="group glass glass-hover text-sm font-semibold text-foreground pl-6 pr-4 py-3 rounded-full inline-flex items-center gap-3 transition-all duration-300 mb-8"
        >
          Get In Touch
          <span className="h-8 w-8 rounded-full bg-primary flex items-center justify-center group-hover:bg-foreground transition-colors">
            <ArrowUpRight className="h-4 w-4 text-primary-foreground" />
          </span>
        </button>

        <p className="text-sm text-muted-foreground max-w-md mx-auto mb-10">
          I'm available for full-time roles & freelance projects.
          I thrive on crafting scalable backend systems and delivering seamless experiences.
        </p>

        <div className="flex justify-center gap-3 mb-10">
          {[
            { icon: FaLinkedinIn, href: "https://linkedin.com/in/rohit-ghorui" },
            { icon: FaGithub, href: "https://github.com/rohitghorui" },
          ].map((s) => (
            <a
              key={s.href}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass h-10 w-10 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground transition-all duration-300"
            >
              <s.icon className="h-4 w-4" />
            </a>
          ))}
        </div>

        <div className="border-t border-border/20 pt-6">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Rohit Ghorui. Built with caffeine and questionable decisions.
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
