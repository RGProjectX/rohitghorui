import { Code2, CreditCard, Building2, BarChart3, Wallet } from "lucide-react";

const domains = [
  { icon: CreditCard, label: "Fintech Systems" },
  { icon: Wallet, label: "Payment Processing" },
  { icon: Building2, label: "Hotel Booking Platforms" },
  { icon: BarChart3, label: "Financial Reporting" },
  { icon: Code2, label: "Payout & Reconciliation" },
];

const AboutSection = () => (
  <section id="about" className="section-padding">
    <div className="container-narrow">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
        About Me
      </h2>
      <div className="h-1 w-12 rounded-full mb-8 bg-gradient-to-r from-primary to-secondary" />

      <p className="text-muted-foreground leading-relaxed max-w-3xl text-lg mb-10">
        Java Full Stack Developer with 2+ years of experience building scalable backend systems and financial platforms.
        Experienced in Spring Boot, Microservices architecture, distributed messaging systems, and modern frontend
        frameworks like React.
      </p>

      <h3 className="text-sm font-semibold uppercase tracking-widest text-primary mb-6">
        Domain Expertise
      </h3>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {domains.map((d) => (
          <div
            key={d.label}
            className="glass glass-hover flex items-center gap-3 rounded-xl p-4"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-accent-foreground">
              <d.icon className="h-5 w-5" />
            </div>
            <span className="text-sm font-medium text-foreground">{d.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
