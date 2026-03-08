const techStack = [
  { name: "Java", icon: "☕" },
  { name: "Spring Boot", icon: "🍃" },
  { name: "React", icon: "⚛️" },
  { name: "TypeScript", icon: "📘" },
  { name: "Docker", icon: "🐳" },
  { name: "Kubernetes", icon: "☸️" },
  { name: "Kafka", icon: "📨" },
  { name: "Redis", icon: "⚡" },
  { name: "MySQL", icon: "🗄️" },
  { name: "MongoDB", icon: "🍃" },
  { name: "Git", icon: "🔀" },
  { name: "Jenkins", icon: "🔧" },
];

const TechStackSection = () => (
  <section className="section-padding overflow-hidden">
    <div className="container-narrow mb-10">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Tech Stack</h2>
      <div className="h-1 w-12 bg-primary rounded-full mb-4" />
      <p className="text-muted-foreground max-w-xl">
        Technologies I use daily to build production-grade systems.
      </p>
    </div>

    {/* Marquee row 1 */}
    <div className="relative">
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
      
      <div className="flex animate-marquee w-max gap-4 py-2">
        {[...techStack, ...techStack].map((tech, i) => (
          <div
            key={`${tech.name}-${i}`}
            className="flex items-center gap-3 rounded-xl border bg-card px-5 py-4 shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-primary/30 transition-all duration-300 min-w-[160px]"
          >
            <span className="text-2xl">{tech.icon}</span>
            <span className="text-sm font-semibold text-foreground whitespace-nowrap">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Marquee row 2 — reverse */}
    <div className="relative mt-4">
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

      <div className="flex w-max gap-4 py-2" style={{ animation: "marquee 35s linear infinite reverse" }}>
        {[...techStack.slice().reverse(), ...techStack.slice().reverse()].map((tech, i) => (
          <div
            key={`r-${tech.name}-${i}`}
            className="flex items-center gap-3 rounded-xl border bg-card px-5 py-4 shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-primary/30 transition-all duration-300 min-w-[160px]"
          >
            <span className="text-2xl">{tech.icon}</span>
            <span className="text-sm font-semibold text-foreground whitespace-nowrap">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TechStackSection;
