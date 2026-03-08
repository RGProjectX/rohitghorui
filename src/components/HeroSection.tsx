import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, MapPin, Zap } from "lucide-react";

const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "1000+", label: "Hotels Served" },
  { value: "5+", label: "Production Systems" },
  { value: "10+", label: "Technologies" },
];

const floatingBadges = [
  { label: "Spring Boot", x: "right-0", y: "top-8", delay: "0s" },
  { label: "Kafka", x: "right-16", y: "top-28", delay: "1.5s" },
  { label: "Microservices", x: "right-4", y: "bottom-32", delay: "0.8s" },
  { label: "Redis", x: "right-24", y: "bottom-12", delay: "2.2s" },
];

const HeroSection = () => {
  return (
    <section className="relative section-padding pt-28 md:pt-36 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-20 -right-40 h-96 w-96 rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-primary/3 blur-[120px]" />
      </div>

      <div className="container-narrow relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="space-y-8">
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border bg-card px-4 py-1.5 text-sm text-muted-foreground shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-pulse-ring" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                Available for opportunities
              </div>
              <div className="inline-flex items-center gap-1.5 rounded-full border bg-card px-3 py-1.5 text-sm text-muted-foreground shadow-sm">
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

              <p className="text-lg md:text-xl font-semibold text-foreground/80 leading-relaxed flex items-center gap-2">
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
              <Button
                size="lg"
                className="gap-2 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
                onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                View Projects
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="gap-2 hover:bg-accent transition-all duration-300"
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Mail className="h-4 w-4" />
                Contact Me
              </Button>
            </div>

            {/* Stats bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t">
              {stats.map((stat) => (
                <div key={stat.label} className="space-y-1">
                  <p className="text-2xl font-extrabold text-gradient">{stat.value}</p>
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Code visual with floating badges */}
          <div className="hidden lg:block relative">
            {/* Floating tech badges */}
            {floatingBadges.map((badge) => (
              <div
                key={badge.label}
                className={`absolute ${badge.x} ${badge.y} z-20 animate-float`}
                style={{ animationDelay: badge.delay }}
              >
                <div className="glass-card px-3 py-1.5 text-xs font-medium text-foreground shadow-lg">
                  {badge.label}
                </div>
              </div>
            ))}

            <div className="glass-card p-6 shadow-xl font-mono text-sm leading-7 relative overflow-hidden">
              {/* Window chrome */}
              <div className="flex items-center gap-2 mb-5 pb-3 border-b">
                <span className="h-3 w-3 rounded-full bg-destructive/60" />
                <span className="h-3 w-3 rounded-full bg-muted-foreground/30" />
                <span className="h-3 w-3 rounded-full bg-muted-foreground/20" />
                <span className="ml-3 text-xs text-muted-foreground font-sans">PaymentController.java</span>
              </div>

              <pre className="text-muted-foreground overflow-x-auto">
                <code>
                  <span className="text-primary">@RestController</span>{"\n"}
                  <span className="text-primary">@RequestMapping</span>
                  <span className="text-accent-foreground">("/api/v1")</span>{"\n"}
                  <span className="text-foreground font-semibold">public class</span>{" "}
                  <span className="text-primary">PaymentController</span> {"{\n\n"}
                  {"  "}
                  <span className="text-primary">@PostMapping</span>
                  <span className="text-accent-foreground">("/process")</span>{"\n"}
                  {"  "}
                  <span className="text-foreground">public ResponseEntity</span>{"<"}
                  <span className="text-primary">PaymentResponse</span>{">"}{"\n"}
                  {"  "}
                  <span className="text-foreground font-semibold">processPayment</span>
                  {"(\n"}
                  {"    "}
                  <span className="text-primary">@RequestBody</span>{" "}
                  <span className="text-foreground">PaymentRequest req</span>{"\n"}
                  {"  ) {\n"}
                  {"    "}
                  <span className="text-muted-foreground">// Scale to 1000+ merchants</span>{"\n"}
                  {"    "}
                  <span className="text-foreground font-semibold">return</span>{" "}
                  <span className="text-primary">paymentService</span>
                  <span className="text-foreground">.execute(req);</span>{"\n"}
                  {"  }\n"}
                  {"}"}
                </code>
              </pre>

              {/* Multiple glow effects */}
              <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-primary/20 blur-3xl animate-code-glow" />
              <div className="absolute -top-10 -left-10 h-32 w-32 rounded-full bg-primary/10 blur-3xl animate-code-glow" style={{ animationDelay: "1s" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
