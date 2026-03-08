import { ArrowRight, Download, MapPin } from "lucide-react";

const floatingTech = [
  { label: "Java", x: "left-[5%]", y: "top-[15%]", delay: "0s", size: "text-sm" },
  { label: "Spring Boot", x: "left-[20%]", y: "top-[55%]", delay: "0.8s", size: "text-xs" },
  { label: "Kafka", x: "right-[15%]", y: "top-[10%]", delay: "1.2s", size: "text-sm" },
  { label: "React", x: "right-[5%]", y: "top-[45%]", delay: "2s", size: "text-xs" },
  { label: "Docker", x: "left-[10%]", y: "bottom-[20%]", delay: "1.6s", size: "text-xs" },
  { label: "Kubernetes", x: "right-[20%]", y: "bottom-[15%]", delay: "0.4s", size: "text-xs" },
  { label: "Redis", x: "right-[35%]", y: "top-[25%]", delay: "2.4s", size: "text-sm" },
  { label: "MySQL", x: "left-[35%]", y: "bottom-[30%]", delay: "1.8s", size: "text-xs" },
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
      {/* Background radial glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="glow-orb top-[10%] left-[20%] h-[500px] w-[500px] bg-primary/12 animate-pulse-soft" />
        <div className="glow-orb bottom-[10%] right-[10%] h-[600px] w-[600px] bg-secondary/8 animate-pulse-soft" style={{ animationDelay: "2s" }} />
        <div className="glow-orb top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] bg-primary/4" />
      </div>

      {/* Floating tech icons */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        {floatingTech.map((tech) => (
          <div
            key={tech.label}
            className={`absolute ${tech.x} ${tech.y} animate-float`}
            style={{ animationDelay: tech.delay }}
          >
            <div className="glass rounded-lg px-3 py-1.5 font-medium text-foreground/50 shadow-lg border border-primary/10">
              <span className={tech.size}>{tech.label}</span>
            </div>
          </div>
        ))}
      </div>

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
