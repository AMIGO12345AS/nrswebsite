import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
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

const regionLabels = {
  india: { flag: "🇮🇳", name: "India" },
  dubai: { flag: "🇦🇪", name: "Dubai" },
};

export default function Navbar({ region }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [regionOpen, setRegionOpen] = useState(false);
  const regionRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const links = navLinks[region];
  const other = getOtherRegion(region);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close region dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (regionRef.current && !regionRef.current.contains(e.target as Node)) {
        setRegionOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-[hsl(200_25%_10%/0.85)] backdrop-blur-2xl shadow-[0_1px_0_0_rgba(255,255,255,0.06)] border-b border-white/[0.04]"
          : "bg-transparent"
      )}
    >
      <div className="container flex h-[72px] items-center justify-between">
        {/* Brand */}
        <Link to={`/${region}`} className="flex items-baseline gap-1.5 group">
          <span className="text-[22px] font-heading font-bold tracking-[-0.02em] text-white">
            NRS
          </span>
          <span className="text-[9px] font-body font-semibold tracking-[0.25em] uppercase text-white/40 group-hover:text-accent transition-colors duration-300">
            & Associates
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-0.5">
          {links.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className="relative px-4 py-2 text-[13px] font-medium tracking-[0.01em] transition-colors duration-200 group"
              >
                <span
                  className={cn(
                    "relative z-10 transition-colors duration-200",
                    isActive ? "text-white" : "text-white/50 group-hover:text-white/90"
                  )}
                >
                  {link.label}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-full bg-white/[0.08] border border-white/[0.06]"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Right section: Contact CTA + Region switcher */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            to={`/${region}/contact`}
            className={cn(
              "px-4 py-2 rounded-full text-[13px] font-semibold transition-all duration-300 border",
              "bg-accent/10 border-accent/20 text-accent hover:bg-accent hover:text-white hover:border-accent"
            )}
          >
            Get in Touch
          </Link>

          <div ref={regionRef} className="relative">
            <button
              onClick={() => setRegionOpen(!regionOpen)}
              className={cn(
                "flex items-center gap-2 px-3.5 py-2 rounded-full text-[13px] font-medium transition-all duration-200 border",
                regionOpen
                  ? "bg-white/[0.12] border-white/[0.12] text-white"
                  : "bg-white/[0.05] border-white/[0.06] text-white/60 hover:text-white hover:bg-white/[0.08] hover:border-white/[0.1]"
              )}
            >
              <span className="text-sm">{regionLabels[region].flag}</span>
              <span>{regionLabels[region].name}</span>
              <ChevronDown
                className={cn(
                  "h-3.5 w-3.5 transition-transform duration-200",
                  regionOpen && "rotate-180"
                )}
              />
            </button>

            <AnimatePresence>
              {regionOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 6, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.97 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 top-full mt-2 w-44 rounded-xl bg-[hsl(200_25%_10%/0.95)] backdrop-blur-2xl border border-white/[0.08] shadow-2xl shadow-black/40 overflow-hidden"
                >
                  {(["india", "dubai"] as Region[]).map((r) => (
                    <Link
                      key={r}
                      to={`/${r}`}
                      onClick={() => setRegionOpen(false)}
                      className={cn(
                        "flex items-center gap-3 px-4 py-3 text-[13px] font-medium transition-colors",
                        r === region
                          ? "text-accent bg-accent/[0.08]"
                          : "text-white/50 hover:text-white hover:bg-white/[0.06]"
                      )}
                    >
                      <span className="text-base">{regionLabels[r].flag}</span>
                      <span>{regionLabels[r].name}</span>
                      {r === region && (
                        <span className="ml-auto text-[10px] text-accent/60 font-medium tracking-wider uppercase">
                          Active
                        </span>
                      )}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-white/70 hover:text-white transition-colors"
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
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-[hsl(200_25%_10%/0.97)] backdrop-blur-2xl border-t border-white/[0.04]"
          >
            <div className="py-3">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block px-6 py-3 text-[14px] font-medium transition-colors",
                    location.pathname === link.path
                      ? "text-white bg-white/[0.06]"
                      : "text-white/40 hover:text-white hover:bg-white/[0.04]"
                  )}
                >
                  {link.label}
                </Link>
              ))}

              {/* Mobile region switcher */}
              <div className="mx-6 mt-4 mb-2 pt-4 border-t border-white/[0.06]">
                <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/20 mb-3">
                  Region
                </p>
                <div className="flex gap-2">
                  {(["india", "dubai"] as Region[]).map((r) => (
                    <Link
                      key={r}
                      to={`/${r}`}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "flex items-center gap-2 px-4 py-2.5 rounded-lg text-[13px] font-medium transition-all flex-1 justify-center border",
                        r === region
                          ? "bg-accent/10 border-accent/20 text-accent"
                          : "bg-white/[0.04] border-white/[0.06] text-white/40 hover:text-white hover:bg-white/[0.08]"
                      )}
                    >
                      <span>{regionLabels[r].flag}</span>
                      <span>{regionLabels[r].name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
