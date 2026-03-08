import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="section-padding pt-32 md:pt-40">
      <div className="container-narrow grid lg:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border bg-card px-4 py-1.5 text-sm text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Available for opportunities
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1]">
            Hi, I'm{" "}
            <span className="text-primary">Rohit Ghorui</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground font-medium leading-relaxed">
            Java Full Stack Developer building scalable backend systems and fintech platforms.
          </p>

          <p className="text-muted-foreground leading-relaxed max-w-lg">
            Full stack engineer with experience building scalable payment platforms, hotel booking systems, and microservices-based applications using Spring Boot, React, and distributed systems.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <Button
              size="lg"
              className="gap-2"
              onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              View Projects
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="gap-2"
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </Button>
          </div>
        </div>

        {/* Right — Code visual */}
        <div className="hidden lg:block">
          <div className="rounded-2xl border bg-card p-6 shadow-lg font-mono text-sm leading-7 relative overflow-hidden">
            {/* Window dots */}
            <div className="flex gap-2 mb-4">
              <span className="h-3 w-3 rounded-full bg-destructive/60" />
              <span className="h-3 w-3 rounded-full bg-yellow-400/60" />
              <span className="h-3 w-3 rounded-full bg-emerald-400/60" />
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

            {/* Glow effect */}
            <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-primary/20 blur-3xl animate-code-glow" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
