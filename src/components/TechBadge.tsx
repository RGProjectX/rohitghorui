import { ReactNode } from "react";
import { FaJava, FaDocker, FaReact, FaGitAlt, FaAws, FaMoneyCheckAlt, FaWallet } from "react-icons/fa";
import { SiSpringboot, SiApachekafka, SiKubernetes, SiRedis, SiMysql, SiMongodb, SiTypescript, SiRabbitmq, SiJenkins, SiHibernate, SiCloudflareworkers, SiAnthropic, SiPostman, SiAngular, SiReact } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { MdCompareArrows } from "react-icons/md";
import { HiOutlineReceiptTax } from "react-icons/hi";
import { AiOutlineBank } from "react-icons/ai";
import { color } from "framer-motion";

export interface TechInfo {
  icon: ReactNode;
  color: string;
}

export const techMap: Record<string, TechInfo> = {
  "Java": { icon: <FaJava />, color: "#f89820" },
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
  "Hibernate": { icon: <SiHibernate />, color: "#BCAE79" },
  "Quartz": { icon: <SiSpringboot />, color: "#6DB33F" },
  "Quartz Scheduler": { icon: <SiSpringboot />, color: "#6DB33F" },
  "Claude": { icon: <SiAnthropic />, color: "#CC785C" },
  "Cloudflare": { icon: <SiCloudflareworkers />, color: "#F6821F" },
  "Postman": { icon: <SiPostman />, color: "#FF6C37" },
  "Angular": { icon: <SiAngular />, color: "#DD0031" },
  "AWS": { icon: <FaAws />, color: "#FF9900" },
  "MCP": { icon: <SiAnthropic />, color: "#CC785C" },
  "AI Workflows": { icon: <SiAnthropic />, color: "#CC785C" },
  "Service Orchestration": { icon: <SiCloudflareworkers />, color: "#F6821F" },
  "REST APIs": { icon: <SiPostman />, color: "#FF6C37" },
  "Zustand": { icon: <SiReact />, color: "#61DAFB" },
  "Microservices": { icon: <SiSpringboot />, color: "#6DB33F" },
  "Payments": { icon: <FaWallet />, color: "#22c55e" },          // money handling
  "Reconciliation": { icon: <MdCompareArrows />, color: "#3b82f6" }, // matching flows
  "Settlement": { icon: <HiOutlineReceiptTax />, color: "#f59e0b" }, // financial finalization
  "Fintech": { icon: <AiOutlineBank />, color: "#8b5cf6" },       // domain identity     // finance domain
  "Modular Architecture": { icon: <SiAngular />, color: "#DD0031" },
  "RxJS": { icon: <SiAngular />, color: "#DD0031" },
  "NgRx": { icon: <SiAngular />, color: "#DD0031" },
  "Spring AI": { icon: <SiSpringboot />, color: "#6DB33F" }
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
