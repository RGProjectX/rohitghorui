const techStack = [
  { name: "Java", icon: "☕" },
  { name: "Spring Boot", icon: "🍃" },
  { name: "React", icon: "⚛️" },
  { name: "Docker", icon: "🐳" },
  { name: "Kubernetes", icon: "☸️" },
  { name: "Kafka", icon: "📨" },
  { name: "Redis", icon: "⚡" },
  { name: "MySQL", icon: "🗄️" },
  { name: "Git", icon: "🔀" },
];

const TechStackSection = () => (
  <section className="section-padding">
    <div className="container-narrow">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Tech Stack</h2>
      <div className="h-1 w-12 bg-primary rounded-full mb-10" />

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
        {techStack.map((tech) => (
          <div
            key={tech.name}
            className="flex flex-col items-center gap-3 rounded-xl border bg-card p-5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200"
          >
            <span className="text-3xl">{tech.icon}</span>
            <span className="text-sm font-medium text-foreground">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TechStackSection;
