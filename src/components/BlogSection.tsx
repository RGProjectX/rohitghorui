import { ArrowUpRight, Clock } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const posts = [
  {
    title: "Designing Scalable Payout Systems",
    excerpt: "How to architect financial settlement workflows that handle thousands of merchant payouts daily with idempotency and fault tolerance.",
    readTime: "8 min",
    tag: "System Design",
  },
  {
    title: "Handling Concurrency in Payment Workflows",
    excerpt: "Strategies for managing race conditions, distributed locks, and optimistic concurrency in high-throughput payment processing.",
    readTime: "6 min",
    tag: "Backend",
  },
  {
    title: "Building Reliable Schedulers with Quartz",
    excerpt: "Implementing retry logic, job recovery, and monitoring for mission-critical batch processing systems.",
    readTime: "5 min",
    tag: "Infrastructure",
  },
  {
    title: "Kafka vs RabbitMQ for Event-Driven Systems",
    excerpt: "A practical comparison of messaging systems for different use cases — throughput, ordering guarantees, and operational complexity.",
    readTime: "7 min",
    tag: "Architecture",
  },
];

const BlogSection = () => (
  <section id="blog" className="section-padding relative">
    <div className="glow-orb top-20 right-0 h-[300px] w-[300px] bg-secondary/6" />

    <div className="container-narrow relative z-10">
      <ScrollReveal>
        <p className="text-sm uppercase tracking-[0.25em] text-primary font-semibold mb-3">
          Writing
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Engineering Notes
        </h2>
        <div className="h-1 w-16 rounded-full mb-12 bg-gradient-to-r from-primary to-secondary" />
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-5">
        {posts.map((post, i) => (
          <ScrollReveal key={post.title} direction="up" delay={i * 0.1}>
            <article className="glass glass-hover rounded-2xl p-6 group cursor-pointer flex flex-col h-full">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-primary bg-accent px-2.5 py-1 rounded-md">
                  {post.tag}
                </span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground ml-auto">
                  <Clock className="h-3 w-3" />
                  {post.readTime}
                </span>
              </div>

              <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300 flex items-start gap-2">
                {post.title}
                <ArrowUpRight className="h-4 w-4 shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {post.excerpt}
              </p>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default BlogSection;
