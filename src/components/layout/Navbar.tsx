import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Region, getOtherRegion } from "@/lib/region";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  region: Region;
}

const navLinks = {
  india: [
    { label: "Home", path: "/india" },
    { label: "About", path: "/india/about" },
    { label: "Services", path: "/india/services" },
    { label: "Team", path: "/india/team" },
    { label: "Insights", path: "/india/insights" },
    { label: "Careers", path: "/india/careers" },
    { label: "Contact", path: "/india/contact" },
  ],
  dubai: [
    { label: "Home", path: "/dubai" },
    { label: "About", path: "/dubai/about" },
    { label: "Services", path: "/dubai/services" },
    { label: "Team", path: "/dubai/team" },
    { label: "Insights", path: "/dubai/insights" },
    { label: "Careers", path: "/dubai/careers" },
    { label: "Contact", path: "/dubai/contact" },
  ],
};

export default function Navbar({ region }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const links = navLinks[region];
  const other = getOtherRegion(region);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-700",
        scrolled
          ? "bg-white/80 backdrop-blur-2xl shadow-[0_1px_0_0_rgba(0,0,0,0.05)] border-b border-black/[0.04]"
          : "bg-transparent"
      )}
    >
      <div className="container flex h-[72px] items-center justify-between">
        {/* Clean text wordmark */}
        <Link to={`/${region}`} className="flex items-baseline gap-1">
          <span className={cn(
            "text-[22px] font-heading font-bold tracking-[-0.02em] transition-colors duration-500",
            scrolled ? "text-foreground" : "text-white"
          )}>
            NRS
          </span>
          <span className={cn(
            "text-[11px] font-body font-medium tracking-[0.15em] uppercase transition-colors duration-500",
            scrolled ? "text-muted-foreground" : "text-white/50"
          )}>
            Fynser
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "relative px-3.5 py-2 text-[13px] font-medium transition-all duration-300",
                scrolled
                  ? location.pathname === link.path
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                  : location.pathname === link.path
                    ? "text-white"
                    : "text-white/55 hover:text-white"
              )}
            >
              {link.label}
              {location.pathname === link.path && (
                <motion.div
                  layoutId="active-nav"
                  className="absolute -bottom-0.5 left-3.5 right-3.5 h-[1.5px] bg-accent rounded-full"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </Link>
          ))}

          <div className={cn("w-px h-5 mx-3", scrolled ? "bg-border" : "bg-white/15")} />

          <Link
            to={`/${other}`}
            className={cn(
              "group flex items-center gap-1.5 px-4 py-2 text-[13px] font-medium rounded-full transition-all duration-300",
              scrolled
                ? "text-muted-foreground hover:text-foreground hover:bg-secondary"
                : "text-white/55 hover:text-white hover:bg-white/10"
            )}
          >
            {other === "dubai" ? "🇦🇪 Dubai" : "🇮🇳 India"}
            <ArrowRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className={cn("lg:hidden p-2 rounded-lg transition-colors", scrolled ? "text-foreground" : "text-white")}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white/95 backdrop-blur-2xl border-t border-black/[0.04] shadow-xl"
          >
            <div className="py-3 px-2">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block px-4 py-3 rounded-xl text-[15px] font-medium transition-all",
                    location.pathname === link.path
                      ? "text-foreground bg-secondary"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mx-4 my-2 h-px bg-border" />
              <Link
                to={`/${other}`}
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 mx-2 px-4 py-3 rounded-xl text-[15px] font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-all"
              >
                {other === "dubai" ? "🇦🇪 Switch to Dubai" : "🇮🇳 Switch to India"}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
