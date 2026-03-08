import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Linkedin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import ScrollReveal from "@/components/ScrollReveal";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "Thanks for reaching out. I'll get back to you soon." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="glow-orb bottom-0 right-20 h-[300px] w-[300px] bg-secondary/8" />

      <div className="container-narrow relative z-10">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Get In Touch</h2>
          <div className="h-1 w-12 rounded-full mb-10 bg-gradient-to-r from-primary to-secondary" />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-10">
          <ScrollReveal direction="up" delay={0.1}>
            <form onSubmit={handleSubmit} className="rounded-xl border border-border/20 bg-card/30 p-6 space-y-5 transition-all duration-300 hover:border-primary/20 hover:bg-card/50">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground/80">Name</Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className="bg-muted/30 border-border/50 focus:border-primary/50"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground/80">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  className="bg-muted/30 border-border/50 focus:border-primary/50"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground/80">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Your message..."
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  className="bg-muted/30 border-border/50 focus:border-primary/50"
                />
              </div>
              <button type="submit" className="btn-glow text-sm font-semibold text-primary-foreground px-5 py-2.5 rounded-xl flex items-center gap-2 transition-all duration-300">
                <Send className="h-4 w-4" />
                Send Message
              </button>
            </form>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>

              <div className="space-y-3">
                {[
                  { icon: Mail, label: "ghorairohit12@gmail.com", href: "mailto:ghorairohit12@gmail.com" },
                  { icon: Phone, label: "+91 8779071502", href: "tel:+918779071502" },
                  { icon: Linkedin, label: "linkedin.com/in/rohit-ghorui", href: "https://linkedin.com/in/rohit-ghorui" },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="glass glass-hover flex items-center gap-3 rounded-xl p-4"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <span className="text-sm text-foreground/80">{item.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
