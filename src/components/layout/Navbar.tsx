import { Link, useLocation } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
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
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-primary/95 backdrop-blur-lg shadow-2xl"
          : "bg-transparent"
      )}
    >
      <div className="container flex h-20 items-center justify-between">
        <Link to={`/${region}`} className="flex items-center gap-2 group">
          <div className="flex items-center gap-0.5">
            <div className="flex gap-[2px]">
              <div className="w-[3px] h-5 bg-accent rounded-sm" />
              <div className="w-[3px] h-7 bg-accent rounded-sm" />
            </div>
            <span className="text-2xl font-heading font-bold tracking-tight text-white ml-1">
              N<span className="text-accent">R</span>S
            </span>
          </div>
          <span className="text-[10px] font-heading font-medium tracking-[0.2em] text-white/60 uppercase self-end mb-0.5">
            Fynser
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-0.5">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "relative px-4 py-2 text-[13px] font-medium tracking-wide uppercase transition-colors text-white/70 hover:text-white",
                location.pathname === link.path && "text-white"
              )}
            >
              {link.label}
              {location.pathname === link.path && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-4 right-4 h-[2px] bg-accent"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </Link>
          ))}
          <Link
            to={`/${other}`}
            className="ml-6 flex items-center gap-1.5 rounded border border-white/20 px-4 py-2 text-[13px] font-medium tracking-wide uppercase text-white/70 transition-all hover:border-accent hover:text-accent"
          >
            <Globe className="h-3.5 w-3.5" />
            {other === "dubai" ? "Dubai" : "India"}
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-primary/98 backdrop-blur-xl border-t border-white/10 overflow-hidden"
          >
            <div className="py-4">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block px-8 py-3.5 text-sm font-medium tracking-wide uppercase transition-colors text-white/60 hover:text-white hover:bg-white/5",
                    location.pathname === link.path && "text-accent border-l-2 border-accent bg-white/5"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-8 pt-4">
                <Link
                  to={`/${other}`}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 rounded border border-white/20 px-4 py-3 text-sm font-medium tracking-wide uppercase text-white/70 hover:border-accent hover:text-accent transition-all"
                >
                  <Globe className="h-4 w-4" />
                  Switch to {other === "dubai" ? "Dubai" : "India"}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
