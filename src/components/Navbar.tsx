import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Architecture", href: "#architecture" },
  { label: "Blog", href: "#blog" },
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
      className={`fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-6 md:px-10 transition-all duration-500 ${
        scrolled ? "glass border-b border-border/50" : "bg-transparent"
      }`}
    >
      <a href="#" className="text-lg font-bold text-foreground tracking-tight">
        Rohit<span className="text-gradient"> Ghorui</span>
      </a>

      <div className="hidden lg:flex items-center gap-7">
        {navLinks.map((link) => (
          <button
            key={link.href}
            onClick={() => handleClick(link.href)}
            className="text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            {link.label}
          </button>
        ))}
        <button className="btn-glow text-[13px] font-semibold text-primary-foreground px-4 py-2 rounded-lg flex items-center gap-2 transition-all duration-300">
          <Download className="h-3.5 w-3.5" />
          Resume
        </button>
      </div>

      <button
        className="lg:hidden text-foreground"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {mobileOpen && (
        <div className="absolute top-16 left-0 right-0 glass border-b border-border/50 p-6 flex flex-col gap-4 lg:hidden animate-fade-in">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors text-left"
            >
              {link.label}
            </button>
          ))}
          <button className="btn-glow text-sm font-semibold text-primary-foreground px-4 py-2 rounded-lg flex items-center gap-2 w-fit transition-all duration-300">
            <Download className="h-4 w-4" />
            Resume
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
