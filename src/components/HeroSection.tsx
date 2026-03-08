import { ArrowRight, Download, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { FaJava, FaDocker, FaReact, FaGitAlt } from "react-icons/fa";
import { SiSpringboot, SiApachekafka, SiKubernetes, SiRedis, SiMysql, SiMongodb } from "react-icons/si";
import { ReactNode } from "react";
import LightRays from "./LightRays";
import ParticleField from "./ParticleField";

interface FloatingIcon {
  icon: ReactNode;
  x: string;
  y: string;
  duration: number;
  delay: number;
  size: string;
}

const floatingIcons: FloatingIcon[] = [
  { icon: <FaJava />, x: "6%", y: "12%", duration: 7, delay: 0, size: "text-4xl" },
  { icon: <SiSpringboot />, x: "18%", y: "58%", duration: 8, delay: 1, size: "text-3xl" },
  { icon: <SiApachekafka />, x: "82%", y: "14%", duration: 6.5, delay: 0.5, size: "text-3xl" },
  { icon: <FaReact />, x: "90%", y: "50%", duration: 7.5, delay: 1.5, size: "text-4xl" },
  { icon: <FaDocker />, x: "8%", y: "78%", duration: 9, delay: 2, size: "text-3xl" },
  { icon: <SiKubernetes />, x: "78%", y: "76%", duration: 6, delay: 0.8, size: "text-3xl" },
  { icon: <SiRedis />, x: "72%", y: "28%", duration: 8.5, delay: 1.2, size: "text-2xl" },
  { icon: <SiMysql />, x: "28%", y: "82%", duration: 7, delay: 2.5, size: "text-3xl" },
  { icon: <SiMongodb />, x: "14%", y: "32%", duration: 8, delay: 0.3, size: "text-2xl" },
  { icon: <FaGitAlt />, x: "88%", y: "85%", duration: 7.5, delay: 1.8, size: "text-2xl" },
];

const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "1000+", label: "Hotels Served" },
  { value: "5+", label: "Production Systems" },
  { value: "10+", label: "Technologies" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Light Rays — Layer 1 */}
      <LightRays />

      {/* Particle Field */}
      <ParticleField />

      {/* Background radial glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="glow-orb top-[10%] left-[20%] h-[500px] w-[500px] bg-primary/12 animate-pulse-soft" />
        <div className="glow-orb bottom-[10%] right-[10%] h-[600px] w-[600px] bg-secondary/8 animate-pulse-soft" style={{ animationDelay: "2s" }} />
        <div className="glow-orb top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] bg-primary/4" />
      </div>

      {/* Floating tech icons */}
      <div className="absolute inset-0 z-0 pointer-events-none hidden md:block">
        {floatingIcons.map((item, i) => (
          <motion.div
            key={i}
            className={`absolute ${item.size} text-primary/[0.4]`}
            style={{ left: item.x, top: item.y, willChange: "transform" }}
            animate={{
              y: [0, -18, 0, 12, 0],
              x: [0, 8, 0, -6, 0],
              rotate: [0, 5, 0, -3, 0],
            }}
            transition={{
              duration: item.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: item.delay,
            }}
          >
            <div className="relative">
              <div className="absolute inset-0 -m-6 rounded-full bg-primary/[0.08] blur-2xl" />
              <span className="relative">{item.icon}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-b from-background/70 via-background/50 to-background/80" />

      <div className="container-narrow relative z-10 px-6 py-28">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          {/* Badges */}
          <div className="flex justify-center flex-wrap gap-3">
            <div className="glass rounded-full px-4 py-1.5 text-sm text-muted-foreground flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-pulse-ring" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Available for opportunities
            </div>
            <div className="glass rounded-full px-3 py-1.5 text-sm text-muted-foreground flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" />
              Mumbai, India
            </div>
          </div>

          {/* Intro */}
          <p className="text-sm uppercase tracking-[0.3em] text-primary font-semibold">
            Hi, I'm Rohit
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08]">
            <span className="text-foreground">Building </span>
            <span className="text-gradient">Scalable Backend Systems</span>
            <br />
            <span className="text-foreground">& Fintech Platforms</span>
          </h1>

          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto text-base md:text-lg">
            Java Full Stack Developer specializing in Spring Boot microservices, distributed systems, and payment platforms. 
            Experienced in building high-scale backend systems used by hotel booking and fintech platforms.
          </p>

          <div className="flex justify-center flex-wrap gap-4 pt-2">
            <button
              className="btn-glow text-sm font-semibold text-primary-foreground px-7 py-3.5 rounded-xl flex items-center gap-2 transition-all duration-300"
              onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              View Projects
              <ArrowRight className="h-4 w-4" />
            </button>
            <button className="glass glass-hover text-sm font-semibold text-foreground px-7 py-3.5 rounded-xl flex items-center gap-2">
              <Download className="h-4 w-4" />
              Download Resume
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-10 border-t border-border/30 max-w-xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.label} className="space-y-1">
                <p className="text-3xl font-extrabold text-gradient">{stat.value}</p>
                <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
