import { ArrowRight, FileText, Copy } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const getGreeting = () => {
  const hour = new Date().getHours();
  // 6am–12pm Morning, 12pm–4pm Afternoon, 4pm–9pm Evening, 9pm–6am Night
  if (hour >= 6 && hour < 12) return { text: "Good Morning", emoji: "☀️" };
  if (hour >= 12 && hour < 16) return { text: "Good Afternoon", emoji: "🌤️" };
  if (hour >= 16 && hour < 21) return { text: "Good Evening", emoji: "🌙" };
  return { text: "Good Night", emoji: "🌖" };
};

const HeroSection = () => {
  const [greeting, setGreeting] = useState(getGreeting());

  useEffect(() => {
    const interval = setInterval(() => setGreeting(getGreeting()), 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1200px] h-[400px] bg-secondary/6 rounded-full blur-[100px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto space-y-8">
        {/* Greeting pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="glass rounded-full px-5 py-2 text-sm text-muted-foreground flex items-center gap-2">
            <span>{greeting.emoji}</span>
            <span>{greeting.text}</span>
          </div>
        </motion.div>

        {/* Main headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative"
        >
          {/* Subtle gold glow behind heading */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[80%] bg-primary/10 rounded-full blur-[80px] animate-pulse-soft pointer-events-none" />
          <h1 className="relative text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
            <span className="text-foreground">Code that </span>
            <span className="italic text-foreground/90">scales.</span>
            <br />
            <span className="italic text-gradient">Engineering that ships.</span>
          </h1>
        </motion.div>

        {/* Subtitle with inline photo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center justify-center gap-3 text-lg md:text-xl text-muted-foreground"
        >
          <span>Hello, I'm</span>
          <span className="font-semibold text-foreground">Rohit Ghorui</span>
          <span className="text-muted-foreground/50">-</span>
          <span>a Java Full Stack Developer</span>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex items-center justify-center flex-wrap gap-4 pt-2"
        >
          <button
            className="group relative glass text-sm font-semibold text-foreground pl-6 pr-1.5 py-1.5 rounded-full flex items-center gap-3 overflow-hidden transition-colors duration-700 hover:text-background"
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            <span className="absolute top-1/2 right-1.5 -translate-y-1/2 h-9 w-9 bg-foreground rounded-full group-hover:h-[300%] group-hover:w-[300%] group-hover:right-1/2 group-hover:translate-x-1/2 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]" />
            <span className="relative z-10 py-1.5">Let's Connect</span>
            <span className="relative z-10 h-9 w-9 flex items-center justify-center">
              <ArrowRight className="h-4 w-4 text-background" />
            </span>
          </button>

          <a
            href="mailto:ghorairohit12@gmail.com"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Copy className="h-4 w-4" />
            ghorairohit12@gmail.com
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center gap-3 pt-2"
        >
          {[
            { icon: FaGithub, href: "https://github.com/rohitghorui", label: "GitHub", download: false },
            { icon: FaLinkedinIn, href: "https://linkedin.com/in/rohit-ghorui", label: "LinkedIn", download: false },
            { icon: FileText, href: "/resume.pdf", label: "Download Resume", download: true },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.download ? undefined : "_blank"}
              rel={s.download ? undefined : "noopener noreferrer"}
              download={s.download ? "Rohit-Ghorui-Resume.pdf" : undefined}
              aria-label={s.label}
              title={s.label}
              className="glass h-10 w-10 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-all duration-300"
            >
              <s.icon className="h-4 w-4" />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Earth curve at bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200%] md:w-[140%] pointer-events-none">
        <div className="relative">
          {/* Glow above the curve */}
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[60%] h-40 bg-gradient-to-t from-primary/20 via-secondary/10 to-transparent blur-2xl" />

          {/* The curve itself */}
          <svg viewBox="0 0 1440 320" className="w-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="curve-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(40, 95%, 55%)" stopOpacity="0" />
                <stop offset="30%" stopColor="hsl(40, 95%, 55%)" stopOpacity="0.4" />
                <stop offset="50%" stopColor="hsl(30, 90%, 50%)" stopOpacity="0.6" />
                <stop offset="70%" stopColor="hsl(40, 95%, 55%)" stopOpacity="0.4" />
                <stop offset="100%" stopColor="hsl(40, 95%, 55%)" stopOpacity="0" />
              </linearGradient>
            </defs>
            <ellipse cx="720" cy="600" rx="900" ry="280" fill="none" stroke="url(#curve-gradient)" strokeWidth="1.5" />
            <ellipse cx="720" cy="600" rx="900" ry="280" fill="hsl(240, 12%, 5%)" fillOpacity="0.3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
