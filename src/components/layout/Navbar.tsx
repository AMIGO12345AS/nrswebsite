import { Link, useLocation } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
import { useState } from "react";
import { Region, getOtherRegion } from "@/lib/region";
import { cn } from "@/lib/utils";

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
  { label: "Contact", path: "/india/contact" }],

  dubai: [
  { label: "Home", path: "/dubai" },
  { label: "About", path: "/dubai/about" },
  { label: "Services", path: "/dubai/services" },
  { label: "Team", path: "/dubai/team" },
  { label: "Insights", path: "/dubai/insights" },
  { label: "Careers", path: "/dubai/careers" },
  { label: "Contact", path: "/dubai/contact" }]

};

export default function Navbar({ region }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const links = navLinks[region];
  const other = getOtherRegion(region);

  return (
    <nav className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-lg">
      <div className="container flex h-16 items-center justify-between">
        <Link to={`/${region}`} className="flex items-center gap-2">
          <span className="text-xl font-heading font-bold tracking-tight">
            NRS <span className="text-accent">Fynser</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {links.map((link) =>
          <Link
            key={link.path}
            to={link.path}
            className={cn(
              "px-3 py-2 text-sm font-medium rounded-md transition-colors hover:bg-secondary",
              location.pathname === link.path && "bg-secondary text-accent"
            )}>

              {link.label}
            </Link>
          )}
          






        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu">

          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open &&
      <div className="lg:hidden border-t border-secondary bg-primary pb-4">
          {links.map((link) =>
        <Link
          key={link.path}
          to={link.path}
          onClick={() => setOpen(false)}
          className={cn(
            "block px-6 py-3 text-sm font-medium transition-colors hover:bg-secondary",
            location.pathname === link.path && "bg-secondary text-accent"
          )}>

              {link.label}
            </Link>
        )}
          <Link
          to={`/${other}`}
          onClick={() => setOpen(false)}
          className="mx-6 mt-3 flex items-center gap-1.5 rounded-md border border-primary-foreground/30 px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground">

            <Globe className="h-4 w-4" />
            Switch to {other === "dubai" ? "Dubai" : "India"}
          </Link>
        </div>
      }
    </nav>);

}