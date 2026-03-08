import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="border-t bg-card py-10 px-6">
    <div className="container-narrow flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        © 2026 Rohit Ghorui. Built with React & Tailwind.
      </p>
      <div className="flex items-center gap-4">
        <a
          href="https://linkedin.com/in/rohit-ghorui"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors duration-200"
        >
          <Linkedin className="h-5 w-5" />
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors duration-200"
        >
          <Github className="h-5 w-5" />
        </a>
        <a
          href="mailto:ghorairohit12@gmail.com"
          className="text-muted-foreground hover:text-primary transition-colors duration-200"
        >
          <Mail className="h-5 w-5" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
