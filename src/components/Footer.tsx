import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border/30 py-10 px-6">
    <div className="container-narrow flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        © 2026 Rohit Ghorui. Built with React & Tailwind.
      </p>
      <div className="flex items-center gap-4">
        {[
          { icon: Linkedin, href: "https://linkedin.com/in/rohit-ghorui" },
          { icon: Github, href: "https://github.com" },
          { icon: Mail, href: "mailto:ghorairohit12@gmail.com" },
        ].map((item) => (
          <a
            key={item.href}
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <item.icon className="h-5 w-5" />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
