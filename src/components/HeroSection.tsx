import { ArrowRight, Mail, MapPin, Zap } from "lucide-react";

const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "1000+", label: "Hotels Served" },
  { value: "5+", label: "Production Systems" },
  { value: "10+", label: "Technologies" },
];

const HeroSection = () => {
  return (
    <section className="relative section-padding pt-28 md:pt-36 overflow-hidden min-h-[90vh] flex items-center">
      {/* Background glow orbs */}
      <div className="glow-orb top-10 -left-32 h-[400px] w-[400px] bg-primary/15 animate-pulse-soft" />
      <div className="glow-orb bottom-0 right-0 h-[500px] w-[500px] bg-secondary/10 animate-pulse-soft" style={{ animationDelay: "2s" }} />
      <div className="glow-orb top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] bg-primary/5" />

      <div className="container-narrow relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left */}
          <div className="space-y-8">
            <div className="flex flex-wrap items-center gap-3">
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

            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight leading-[1.08]">
                <span className="text-foreground">Hi, I'm</span>
                <br />
                <span className="text-gradient">Rohit Ghorui</span>
              </h1>

              <p className="text-lg md:text-xl font-semibold text-foreground/70 leading-relaxed flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary shrink-0" />
                Java Full Stack Developer
              </p>
            </div>

            <p className="text-muted-foreground leading-relaxed max-w-lg text-[15px]">
              Building scalable payment platforms, hotel booking systems, and microservices-based 
              applications with <span className="text-foreground font-medium">Spring Boot</span>,{" "}
              <span className="text-foreground font-medium">React</span>, and{" "}
              <span className="text-foreground font-medium">distributed systems</span>.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                className="btn-glow text-sm font-semibold text-primary-foreground px-6 py-3 rounded-xl flex items-center gap-2 transition-all duration-300"
                onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                View Projects
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                className="glass glass-hover text-sm font-semibold text-foreground px-6 py-3 rounded-xl flex items-center gap-2"
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Mail className="h-4 w-4" />
                Contact Me
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-border/50">
              {stats.map((stat) => (
                <div key={stat.label} className="space-y-1">
                  <p className="text-2xl font-extrabold text-gradient">{stat.value}</p>
                  <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-widest">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Code visual */}
          <div className="hidden lg:block relative">
            {/* Floating badges */}
            {[
              { label: "Spring Boot", cls: "right-0 top-4" },
              { label: "Kafka", cls: "right-20 top-24" },
              { label: "Microservices", cls: "right-4 bottom-28" },
            ].map((b, i) => (
              <div key={b.label} className={`absolute ${b.cls} z-20 animate-float`} style={{ animationDelay: `${i * 1.2}s` }}>
                <div className="glass rounded-lg px-3 py-1.5 text-xs font-medium text-foreground/80 shadow-lg">
                  {b.label}
                </div>
              </div>
            ))}

            <div className="glass rounded-2xl p-6 shadow-2xl font-mono text-sm leading-7 relative overflow-hidden">
              <div className="flex items-center gap-2 mb-5 pb-3 border-b border-border/30">
                <span className="h-3 w-3 rounded-full bg-destructive/50" />
                <span className="h-3 w-3 rounded-full bg-muted-foreground/20" />
                <span className="h-3 w-3 rounded-full bg-muted-foreground/15" />
                <span className="ml-3 text-xs text-muted-foreground font-sans">PaymentController.java</span>
              </div>

              <pre className="text-muted-foreground overflow-x-auto">
                <code>
                  <span className="text-primary">@RestController</span>{"\n"}
                  <span className="text-primary">@RequestMapping</span>
                  <span className="text-secondary">("/api/v1")</span>{"\n"}
                  <span className="text-foreground font-semibold">public class</span>{" "}
                  <span className="text-primary">PaymentController</span> {"{\n\n"}
                  {"  "}
                  <span className="text-primary">@PostMapping</span>
                  <span className="text-secondary">("/process")</span>{"\n"}
                  {"  "}
                  <span className="text-foreground/80">public ResponseEntity</span>{"<"}
                  <span className="text-primary">PaymentResponse</span>{">"}{"\n"}
                  {"  "}
                  <span className="text-foreground font-semibold">processPayment</span>
                  {"(\n"}
                  {"    "}
                  <span className="text-primary">@RequestBody</span>{" "}
                  <span className="text-foreground/80">PaymentRequest req</span>{"\n"}
                  {"  ) {\n"}
                  {"    "}
                  <span className="text-muted-foreground/60">// Scale to 1000+ merchants</span>{"\n"}
                  {"    "}
                  <span className="text-foreground font-semibold">return</span>{" "}
                  <span className="text-primary">paymentService</span>
                  <span className="text-foreground/80">.execute(req);</span>{"\n"}
                  {"  }\n"}
                  {"}"}
                </code>
              </pre>

              <div className="glow-orb -bottom-16 -right-16 h-32 w-32 bg-primary/25 animate-code-glow" style={{ filter: "blur(60px)" }} />
              <div className="glow-orb -top-8 -left-8 h-24 w-24 bg-secondary/20 animate-code-glow" style={{ filter: "blur(50px)", animationDelay: "1.5s" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
