import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Download } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-6 transition-all duration-300 ${
        scrolled
          ? "bg-card/80 backdrop-blur-xl border-b shadow-sm"
          : "bg-transparent"
      }`}
    >
      <a href="#" className="text-lg font-bold text-foreground tracking-tight">
        Rohit<span className="text-primary">.</span>
      </a>

      {/* Desktop */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <button
            key={link.href}
            onClick={() => handleClick(link.href)}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            {link.label}
          </button>
        ))}
        <Button size="sm" className="gap-2">
          <Download className="h-4 w-4" />
          Resume
        </Button>
      </div>

      {/* Mobile toggle */}
      <button
        className="md:hidden text-foreground"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="absolute top-16 left-0 right-0 bg-card/95 backdrop-blur-xl border-b shadow-lg p-6 flex flex-col gap-4 md:hidden animate-fade-in">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors text-left"
            >
              {link.label}
            </button>
          ))}
          <Button size="sm" className="gap-2 w-fit">
            <Download className="h-4 w-4" />
            Resume
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
