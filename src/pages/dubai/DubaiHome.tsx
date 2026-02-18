import heroBuilding from "@/assets/hero-building.jpg";
import { Link } from "react-router-dom";
import { Shield, Building2, FileCheck, Landmark } from "lucide-react";

const services = [
  { icon: Shield, title: "Tax Advisory", desc: "UAE Corporate Tax, VAT, Transfer Pricing & Tax Audit representation" },
  { icon: Building2, title: "Business Setup", desc: "Mainland & Free Zone incorporation, Trade license & Corporate structuring" },
  { icon: FileCheck, title: "Compliance", desc: "AML/CFT framework design, UBO compliance & Regulatory reporting" },
  { icon: Landmark, title: "Capital & Finance", desc: "Bank finance, Working capital & Term loan support" },
];

export default function DubaiHome() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <img src={heroBuilding} alt="Dubai skyline" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative z-10 container text-center text-primary-foreground py-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6 animate-fade-in">
            Your Trusted FTA-Approved<br />Tax & Business Advisor in Dubai
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-primary-foreground/80 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            As an FTA-approved tax agent, we support businesses in meeting their statutory and regulatory obligations with confidence.
          </p>
          <div className="flex flex-wrap gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Link to="/dubai/services" className="rounded-md bg-accent px-6 py-3 font-semibold text-accent-foreground hover:bg-accent/90 transition-colors">
              Our Services
            </Link>
            <Link to="/dubai/contact" className="rounded-md border border-primary-foreground/30 px-6 py-3 font-semibold hover:bg-secondary transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-card">
        <div className="container">
          <h2 className="text-3xl font-heading font-bold text-center mb-12">What We Do</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <div key={i} className="group rounded-lg border bg-background p-6 text-center hover:shadow-lg hover:border-accent transition-all">
                <s.icon className="mx-auto h-10 w-10 text-accent mb-4" />
                <h3 className="font-heading font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container grid gap-8 sm:grid-cols-3 text-center">
          <div>
            <p className="text-4xl font-heading font-bold text-accent">1,000+</p>
            <p className="text-sm mt-1 text-primary-foreground/70">Clients Served</p>
          </div>
          <div>
            <p className="text-4xl font-heading font-bold text-accent">50+</p>
            <p className="text-sm mt-1 text-primary-foreground/70">Expert Team Members</p>
          </div>
          <div>
            <p className="text-4xl font-heading font-bold text-accent">2017</p>
            <p className="text-sm mt-1 text-primary-foreground/70">Established</p>
          </div>
        </div>
      </section>
    </>
  );
}
