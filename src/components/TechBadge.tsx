import { ReactNode } from "react";
import { FaJava, FaDocker, FaReact, FaGitAlt } from "react-icons/fa";
import { SiSpringboot, SiApachekafka, SiKubernetes, SiRedis, SiMysql, SiMongodb, SiTypescript, SiRabbitmq, SiJenkins, SiHibernate, SiCloudflareworkers, SiAnthropic } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";

export interface TechInfo {
  icon: ReactNode;
  color: string;
}

export const techMap: Record<string, TechInfo> = {
  "Java": { icon: <FaJava />, color: "#f89820" },
  "Java 11": { icon: <FaJava />, color: "#f89820" },
  "Spring Boot": { icon: <SiSpringboot />, color: "#6DB33F" },
  "Spring MVC": { icon: <SiSpringboot />, color: "#6DB33F" },
  "React": { icon: <FaReact />, color: "#61DAFB" },
  "TypeScript": { icon: <SiTypescript />, color: "#3178C6" },
  "Docker": { icon: <FaDocker />, color: "#2496ED" },
  "Kubernetes": { icon: <SiKubernetes />, color: "#326CE5" },
  "Kafka": { icon: <SiApachekafka />, color: "#E8E8E8" },
  "Redis": { icon: <SiRedis />, color: "#DC382D" },
  "MySQL": { icon: <SiMysql />, color: "#4479A1" },
  "MongoDB": { icon: <SiMongodb />, color: "#47A248" },
  "Git": { icon: <FaGitAlt />, color: "#F05032" },
  "GitHub": { icon: <VscGithub />, color: "#FFFFFF" },
  "RabbitMQ": { icon: <SiRabbitmq />, color: "#FF6600" },
  "Jenkins": { icon: <SiJenkins />, color: "#D24939" },
  "Hibernate": { icon: <SiHibernate />, color: "#59666C" },
  "Quartz": { icon: <SiSpringboot />, color: "#6DB33F" },
  "Quartz Scheduler": { icon: <SiSpringboot />, color: "#6DB33F" },
  "Claude": { icon: <SiAnthropic />, color: "#D4A574" },
  "Cloudflare": { icon: <SiCloudflareworkers />, color: "#F6821F" },
};

export const TechBadge = ({ name }: { name: string }) => {
  const tech = techMap[name];
  return (
    <span className="inline-flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-full bg-card/50 border border-border/30 font-medium text-muted-foreground">
      {tech && (
        <span className="text-sm" style={{ color: tech.color }}>
          {tech.icon}
        </span>
      )}
      {name}
    </span>
  );
};
