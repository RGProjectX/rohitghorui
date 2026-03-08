import { MapPin, CreditCard, Hotel, Code2, Layers, GitBranch, Database } from "lucide-react";
import { FaJava, FaReact, FaDocker } from "react-icons/fa";
import { SiSpringboot, SiApachekafka, SiKubernetes, SiRedis } from "react-icons/si";
import ScrollReveal from "@/components/ScrollReveal";

const BentoGridSection = () => (
  <section className="px-6 py-10 md:py-14 relative">
    <div className="container-narrow relative z-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">

        {/* Domain Expertise — spans 2 cols */}
        <ScrollReveal delay={0}>
          <div className="rounded-xl border border-border/20 bg-card/30 p-5 h-full col-span-1 transition-all duration-300 hover:border-primary/20 hover:bg-card/50">
            <div className="flex items-center gap-2 mb-4">
              <Layers className="h-4 w-4 text-primary" />
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Domain</h3>
            </div>
            <div className="space-y-3">
              {[
                { icon: CreditCard, label: "Fintech & Payments" },
                { icon: Hotel, label: "Hotel Booking" },
                { icon: Database, label: "Distributed Systems" },
              ].map((d) => (
                <div key={d.label} className="flex items-center gap-2.5">
                  <d.icon className="h-3.5 w-3.5 text-primary/70" />
                  <span className="text-sm text-foreground/80">{d.label}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Core Stack */}
        <ScrollReveal delay={0.08}>
          <div className="rounded-xl border border-border/20 bg-card/30 p-5 h-full transition-all duration-300 hover:border-primary/20 hover:bg-card/50">
            <div className="flex items-center gap-2 mb-4">
              <Code2 className="h-4 w-4 text-primary" />
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Stack</h3>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: <FaJava />, label: "Java" },
                { icon: <SiSpringboot />, label: "Spring" },
                { icon: <SiApachekafka />, label: "Kafka" },
                { icon: <SiRedis />, label: "Redis" },
                { icon: <FaReact />, label: "React" },
                { icon: <FaDocker />, label: "Docker" },
              ].map((t) => (
                <div key={t.label} className="flex flex-col items-center gap-1">
                  <span className="text-lg text-primary/60">{t.icon}</span>
                  <span className="text-[10px] text-muted-foreground">{t.label}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Impact Numbers */}
        <ScrollReveal delay={0.16}>
          <div className="rounded-xl border border-border/20 bg-card/30 p-5 h-full transition-all duration-300 hover:border-primary/20 hover:bg-card/50">
            <div className="flex items-center gap-2 mb-4">
              <GitBranch className="h-4 w-4 text-primary" />
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Impact</h3>
            </div>
            <div className="space-y-3">
              <div>
                <p className="text-2xl font-bold text-gradient">1000+</p>
                <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Hotels served</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gradient">10K+</p>
                <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Daily settlements</p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Location & Availability */}
        <ScrollReveal delay={0.24}>
          <div className="rounded-xl border border-border/20 bg-card/30 p-5 h-full flex flex-col justify-between transition-all duration-300 hover:border-primary/20 hover:bg-card/50">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="h-4 w-4 text-primary" />
                <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Location</h3>
              </div>
              <p className="text-sm font-medium text-foreground">Mumbai, India</p>
              <p className="text-xs text-muted-foreground mt-1">Available globally</p>
            </div>
            <div className="mt-4 pt-3 border-t border-border/30">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
                </span>
                <span className="text-xs text-green-400 font-medium">Open to work</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </div>
  </section>
);

export default BentoGridSection;
