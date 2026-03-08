import { FaJava, FaDocker, FaReact, FaGitAlt } from "react-icons/fa";
import { SiSpringboot, SiApachekafka, SiKubernetes, SiRedis, SiMysql, SiMongodb, SiTypescript, SiRabbitmq, SiJenkins, SiHibernate } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { ReactNode } from "react";

interface TechItem {
  name: string;
  icon: ReactNode;
}

const row1: TechItem[] = [
  { name: "Java", icon: <FaJava /> },
  { name: "Spring Boot", icon: <SiSpringboot /> },
  { name: "React", icon: <FaReact /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Docker", icon: <FaDocker /> },
  { name: "Kubernetes", icon: <SiKubernetes /> },
  { name: "Kafka", icon: <SiApachekafka /> },
];

const row2: TechItem[] = [
  { name: "Redis", icon: <SiRedis /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "GitHub", icon: <VscGithub /> },
  { name: "RabbitMQ", icon: <SiRabbitmq /> },
  { name: "Jenkins", icon: <SiJenkins /> },
  { name: "Hibernate", icon: <SiHibernate /> },
];

const TechPill = ({ tech }: { tech: TechItem }) => (
  <div className="glass flex items-center gap-2.5 px-5 py-3 rounded-full cursor-pointer shrink-0 transition-all duration-200 hover:scale-105 hover:border-primary/30 hover:shadow-[0_0_20px_rgba(124,108,255,0.4)] group/pill">
    <span className="text-xl text-muted-foreground group-hover/pill:text-primary transition-colors duration-200">
      {tech.icon}
    </span>
    <span className="text-sm font-medium text-muted-foreground group-hover/pill:text-foreground transition-colors duration-200 whitespace-nowrap">
      {tech.name}
    </span>
  </div>
);

const MarqueeRow = ({ items, reverse = false }: { items: TechItem[]; reverse?: boolean }) => {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] group/row py-2">
      <div
        className={`flex gap-4 w-max ${reverse ? "animate-marquee-reverse" : "animate-marquee"} group-hover/row:[animation-play-state:paused]`}
      >
        {doubled.map((tech, i) => (
          <TechPill key={`${tech.name}-${i}`} tech={tech} />
        ))}
      </div>
    </div>
  );
};

const TechStackSection = () => (
  <section className="section-padding relative overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />

    <div className="container-narrow relative z-10">
      <p className="text-sm uppercase tracking-[0.25em] text-primary font-semibold mb-3">
        Technologies
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Tech Stack</h2>
      <div className="h-1 w-16 rounded-full mb-4 bg-gradient-to-r from-primary to-secondary" />
      <p className="text-muted-foreground max-w-xl mb-12">
        Technologies I use daily to build production-grade systems.
      </p>

      <div className="space-y-5">
        <MarqueeRow items={row1} />
        <MarqueeRow items={row2} reverse />
      </div>
    </div>
  </section>
);

export default TechStackSection;
