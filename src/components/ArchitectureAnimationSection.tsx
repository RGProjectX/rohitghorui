import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Shield, CreditCard, Radio, Zap, Database, Server } from "lucide-react";

const nodes = [
  { id: "client", label: "Client App", icon: Globe, desc: "Browser / Mobile" },
  { id: "gateway", label: "API Gateway", icon: Server, desc: "Load Balancer" },
  { id: "auth", label: "Auth Service", icon: Shield, desc: "JWT Verification" },
  { id: "payment", label: "Payment Service", icon: CreditCard, desc: "Core Processing" },
  { id: "kafka", label: "Kafka Queue", icon: Radio, desc: "Event Stream" },
  { id: "redis", label: "Redis Cache", icon: Zap, desc: "In-Memory Store" },
  { id: "db", label: "MySQL DB", icon: Database, desc: "Persistent Storage" },
];

const steps = [
  { from: 0, to: 1, label: "API Request", desc: "Client sends payment request to gateway" },
  { from: 1, to: 2, label: "Authentication", desc: "Gateway forwards to auth service" },
  { from: 2, to: 3, label: "Payment Processing", desc: "JWT verified, routing to payment service" },
  { from: 3, to: 4, label: "Event Publishing", desc: "Payment event published to Kafka" },
  { from: 4, to: 5, label: "Cache Update", desc: "Event triggers cache invalidation" },
  { from: 5, to: 6, label: "Database Write", desc: "Transaction persisted to MySQL" },
  { from: 6, to: 0, label: "Response", desc: "Success response returned to client" },
];

const ArchitectureAnimationSection = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [activeNode, setActiveNode] = useState(-1);
  const [completedNodes, setCompletedNodes] = useState<number[]>([]);

  useEffect(() => {
    const step = steps[currentStep];
    setActiveNode(step.to);

    const timer = setTimeout(() => {
      setCompletedNodes((prev) => [...prev, step.to]);

      if (currentStep < steps.length - 1) {
        setCurrentStep((s) => s + 1);
      } else {
        // Reset and loop
        setTimeout(() => {
          setCurrentStep(0);
          setActiveNode(-1);
          setCompletedNodes([]);
        }, 800);
      }
    }, 1200);

    return () => clearTimeout(timer);
  }, [currentStep]);

  const getNodeState = (index: number) => {
    if (activeNode === index) return "active";
    if (completedNodes.includes(index)) return "completed";
    return "idle";
  };

  return (
    <section id="architecture" className="section-padding relative overflow-hidden">
      <div className="glow-orb bottom-0 left-0 h-[400px] w-[400px] bg-primary/6" />
      <div className="glow-orb top-20 right-20 h-[300px] w-[300px] bg-secondary/5" />

      <div className="container-narrow relative z-10">
        <p className="text-sm uppercase tracking-[0.25em] text-primary font-semibold mb-3">
          System Design
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          How My Backend Systems Work
        </h2>
        <div className="h-1 w-16 rounded-full mb-6 bg-gradient-to-r from-primary to-secondary" />
        <p className="text-muted-foreground max-w-2xl mb-12">
          Interactive visualization of how a payment request flows through a distributed backend —
          from client to database and back.
        </p>

        {/* Step indicator */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="text-center mb-8"
          >
            <span className="text-xs uppercase tracking-widest text-primary font-semibold">
              Step {currentStep + 1} of {steps.length}
            </span>
            <p className="text-lg font-bold text-foreground mt-1">{steps[currentStep].label}</p>
            <p className="text-sm text-muted-foreground">{steps[currentStep].desc}</p>
          </motion.div>
        </AnimatePresence>

        {/* Architecture nodes */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-3 lg:gap-0 mb-12">
          {nodes.map((node, i) => {
            const state = getNodeState(i);
            return (
              <div key={node.id} className="flex items-center flex-col lg:flex-row">
                <motion.div
                  className={`
                    relative flex flex-col items-center gap-2 p-4 md:p-5 rounded-xl text-center min-w-[120px]
                    transition-all duration-500
                    ${state === "active"
                      ? "glass border-primary/50 shadow-[0_0_30px_rgba(124,108,255,0.4)]"
                      : state === "completed"
                        ? "glass border-primary/20"
                        : "glass"
                    }
                  `}
                  animate={state === "active" ? { scale: [1, 1.05, 1] } : { scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  {state === "active" && (
                    <motion.div
                      className="absolute inset-0 rounded-xl border border-primary/40"
                      initial={{ opacity: 1, scale: 1 }}
                      animate={{ opacity: 0, scale: 1.15 }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                    />
                  )}

                  <node.icon
                    className={`h-6 w-6 transition-colors duration-300 ${
                      state === "active" ? "text-primary" : state === "completed" ? "text-primary/70" : "text-muted-foreground"
                    }`}
                  />
                  <span
                    className={`text-xs font-semibold transition-colors duration-300 ${
                      state === "active" ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {node.label}
                  </span>
                  <span className="text-[10px] text-muted-foreground/60">{node.desc}</span>

                  {state === "completed" && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-1.5 -right-1.5 h-4 w-4 rounded-full bg-primary flex items-center justify-center"
                    >
                      <span className="text-[8px] text-primary-foreground font-bold">✓</span>
                    </motion.div>
                  )}
                </motion.div>

                {i < nodes.length - 1 && (
                  <div className="relative flex items-center justify-center lg:w-8 h-8 lg:h-auto">
                    <div className="hidden lg:block w-full h-px bg-border/40" />
                    <div className="lg:hidden w-px h-full bg-border/40" />

                    {steps[currentStep].from === i && (
                      <motion.div
                        className="absolute w-3 h-3 rounded-full bg-primary shadow-[0_0_12px_rgba(124,108,255,0.8)]"
                        initial={{
                          left: "0%", top: "50%", translateY: "-50%",
                          ...(typeof window !== "undefined" && window.innerWidth < 1024 ? { left: "50%", top: "0%", translateX: "-50%", translateY: "0%" } : {})
                        }}
                        animate={{
                          left: typeof window !== "undefined" && window.innerWidth < 1024 ? "50%" : "100%",
                          top: typeof window !== "undefined" && window.innerWidth < 1024 ? "100%" : "50%",
                        }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                      />
                    )}

                    {currentStep === steps.length - 1 && i < nodes.length - 1 && (
                      <motion.div
                        className="absolute w-2 h-2 rounded-full bg-secondary shadow-[0_0_10px_rgba(91,140,255,0.8)]"
                        initial={{ left: "100%", top: "50%", translateY: "-50%" }}
                        animate={{ left: "0%", top: "50%" }}
                        transition={{ duration: 0.15, delay: (nodes.length - 2 - i) * 0.1, ease: "easeInOut" }}
                      />
                    )}

                    <svg className="hidden lg:block absolute right-0 h-3 w-3 text-border/60" viewBox="0 0 12 12" fill="currentColor">
                      <path d="M0 0L12 6L0 12z" />
                    </svg>
                    <svg className="lg:hidden absolute bottom-0 h-3 w-3 text-border/60" viewBox="0 0 12 12" fill="currentColor">
                      <path d="M0 0L12 0L6 12z" />
                    </svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ArchitectureAnimationSection;
