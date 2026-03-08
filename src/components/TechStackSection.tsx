import { FaJava, FaDocker, FaReact, FaGitAlt } from "react-icons/fa";
import { SiSpringboot, SiApachekafka, SiKubernetes, SiRedis, SiMysql, SiMongodb, SiTypescript, SiRabbitmq, SiJenkins, SiHibernate } from "react-icons/si";
import { ReactNode } from "react";

interface TechItem {
  name: string;
  icon: ReactNode;
}

const techStack: TechItem[] = [
  { name: "Java", icon: <FaJava /> },
  { name: "Spring Boot", icon: <SiSpringboot /> },
  { name: "React", icon: <FaReact /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Docker", icon: <FaDocker /> },
  { name: "Kubernetes", icon: <SiKubernetes /> },
  { name: "Kafka", icon: <SiKafka /> },
  { name: "Redis", icon: <SiRedis /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "RabbitMQ", icon: <SiRabbitmq /> },
  { name: "Jenkins", icon: <SiJenkins /> },
  { name: "Hibernate", icon: <SiHibernate /> },
];

const TechStackSection = () => (
  <section className="section-padding relative">
    <div className="glow-orb top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] bg-primary/5" />

    <div className="container-narrow relative z-10">
      <p className="text-sm uppercase tracking-[0.25em] text-primary font-semibold mb-3">
        Technologies
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Tech Stack</h2>
      <div className="h-1 w-16 rounded-full mb-4 bg-gradient-to-r from-primary to-secondary" />
      <p className="text-muted-foreground max-w-xl mb-12">
        Technologies I use daily to build production-grade systems.
      </p>

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-5">
        {techStack.map((tech) => (
          <div
            key={tech.name}
            className="glass flex flex-col items-center gap-3 p-5 rounded-xl group cursor-pointer transition-all duration-300 hover:scale-[1.06] hover:border-primary/30 hover:shadow-[0_0_25px_rgba(124,108,255,0.25)]"
          >
            <span className="text-3xl text-muted-foreground group-hover:text-primary transition-colors duration-300">
              {tech.icon}
            </span>
            <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300 text-center">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TechStackSection;
