import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
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
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-14 flex items-center justify-between px-6 md:px-10 transition-all duration-500 ${scrolled
          ? "glass border-b border-border/30"
          : "bg-transparent"
          }`}
      >
        {/* LOGO */}
        <a
          href="#"
          className="text-base font-bold text-foreground tracking-tight"
        >
          RG
        </a>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className="text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* DESKTOP ACTION */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="/Rohit_Ghorui_Resume.pdf"
            download
            className="text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 flex items-center gap-1.5"
          >
            <Download className="h-3.5 w-3.5" />
            Resume
          </a>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="lg:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </nav>

      {/* MOBILE MENU (FIXED OUTSIDE NAV) */}
      {mobileOpen && (
        <div className="fixed top-14 left-0 right-0 z-40 glass border-b border-border/30 p-6 flex flex-col gap-4 lg:hidden animate-fade-in">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors text-left"
            >
              {link.label}
            </button>
          ))}

          <a
            href="/Rohit_Ghorui_Resume.pdf"
            download
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5"
          >
            <Download className="h-4 w-4" />
            Resume
          </a>
        </div>
      )}
    </>
  );
};

export default Navbar;