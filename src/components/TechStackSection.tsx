import { FaJava, FaDocker, FaReact, FaGitAlt } from "react-icons/fa";
import { SiSpringboot, SiApachekafka, SiKubernetes, SiRedis, SiMysql, SiMongodb, SiTypescript, SiRabbitmq, SiJenkins, SiHibernate } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import ScrollReveal from "@/components/ScrollReveal";
import { ReactNode } from "react";

interface TechItem {
  name: string;
  icon: ReactNode;
  color: string;
}

const row1: TechItem[] = [
  { name: "Java", icon: <FaJava />, color: "#f89820" },
  { name: "Spring Boot", icon: <SiSpringboot />, color: "#6DB33F" },
  { name: "React", icon: <FaReact />, color: "#61DAFB" },
  { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
  { name: "Docker", icon: <FaDocker />, color: "#2496ED" },
  { name: "Kubernetes", icon: <SiKubernetes />, color: "#326CE5" },
  { name: "Kafka", icon: <SiApachekafka />, color: "#E8E8E8" },
];

const row2: TechItem[] = [
  { name: "Redis", icon: <SiRedis />, color: "#DC382D" },
  { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
  { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
  { name: "GitHub", icon: <VscGithub />, color: "#FFFFFF" },
  { name: "RabbitMQ", icon: <SiRabbitmq />, color: "#FF6600" },
  { name: "Jenkins", icon: <SiJenkins />, color: "#D24939" },
  { name: "Hibernate", icon: <SiHibernate />, color: "#59666C" },
];

const TechPill = ({ tech }: { tech: TechItem }) => (
  <div
    className="glass flex items-center gap-2.5 px-5 py-3 rounded-full cursor-pointer shrink-0 transition-all duration-300 hover:scale-110 group/pill"
    style={{
      // @ts-ignore
      "--glow-color": tech.color,
    } as React.CSSProperties}
  >
    <span className="text-2xl transition-all duration-300 group-hover/pill:drop-shadow-[0_0_8px_var(--glow-color)]" style={{ color: tech.color }}>
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
    <div className="container-narrow relative z-10">
      <ScrollReveal>
        <div className="flex items-baseline gap-4 mb-10">
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">
            Tech Stack
          </p>
          <span className="text-xs text-muted-foreground">Tools I ship production code with</span>
        </div>
      </ScrollReveal>

      <div className="space-y-5">
        <MarqueeRow items={row1} />
        <MarqueeRow items={row2} reverse />
      </div>
    </div>
  </section>
);

export default TechStackSection;
