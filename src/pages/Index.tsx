import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  BriefcaseBusiness,
  FileCheck2,
  Globe2,
  Landmark,
  LineChart,
  ShieldCheck,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";
import { applySeo } from "@/lib/seo";

const services = [
  {
    title: "Audit & Assurance",
    desc: "Statutory, internal, bank, and risk-focused audits that improve confidence and control.",
    href: "/india/services",
    icon: ShieldCheck,
  },
  {
    title: "Direct Tax",
    desc: "Income tax planning, return filing, assessments, and dispute support for businesses and individuals.",
    href: "/india/services",
    icon: FileCheck2,
  },
  {
    title: "Indirect Tax",
    desc: "GST advisory, compliance, audits, litigation support, and process design for operational clarity.",
    href: "/india/services",
    icon: Landmark,
  },
  {
    title: "Cross-Border Advisory",
    desc: "NRI taxation, FEMA, DTAA, repatriation, and India-UAE business support across jurisdictions.",
    href: "/india/services",
    icon: Globe2,
  },
];

const proofPoints = [
  { value: "2016", label: "Founded" },
  { value: "700+", label: "Clients Served" },
  { value: "3", label: "India & UAE Offices" },
  { value: "10+", label: "Years of Experience" },
];

const strengths = [
  "Partner-led engagement with direct senior access",
  "Tailored solutions instead of one-size-fits-all advice",
  "Long-term relationships built on trust and transparency",
  "Practical support for corporates, NRIs, and high-growth businesses",
];

const Index = () => {
  useEffect(() => {
    applySeo("/");
  }, []);

  return (
    <main className="bg-foreground text-white">
      <section className="relative overflow-hidden min-h-screen flex items-end">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_70%_at_20%_20%,rgba(255,255,255,0.08),transparent_60%),linear-gradient(180deg,rgba(2,6,23,0.88),rgba(2,6,23,0.96))]" />
        <div className="absolute -top-32 right-[-8rem] h-[26rem] w-[26rem] rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute bottom-[-10rem] left-[-8rem] h-[24rem] w-[24rem] rounded-full bg-primary/20 blur-3xl" />

        <div className="container relative z-10 grid gap-14 py-28 md:py-32 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div className="max-w-4xl">
            <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-accent" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/70">Chartered Accountants | India & UAE</span>
            </div>
            <h1 className="text-[clamp(3rem,7vw,6.2rem)] font-heading font-bold leading-[0.95] tracking-[-0.04em]">
              Partner-led financial advisory for businesses that want to grow with confidence.
            </h1>
            <p className="mt-6 max-w-2xl text-[17px] leading-[1.85] text-white/60 md:text-[19px]">
              Founded in 2016, NRS and Associates delivers audit, tax, compliance, NRI advisory, and cross-border support from Manjeri, Calicut, and Dubai.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/india/services"
                className="group inline-flex items-center gap-2.5 rounded-full bg-accent px-7 py-4 text-[14px] font-semibold text-white transition-all duration-300 hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/20"
              >
                Explore Services
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/india/contact"
                className="group inline-flex items-center gap-2.5 rounded-full border border-white/15 px-7 py-4 text-[14px] font-semibold text-white/80 transition-all duration-300 hover:border-white/30 hover:bg-white/5 hover:text-white"
              >
                Talk to a Partner
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="grid gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl"
          >
            <div className="grid grid-cols-2 gap-4">
              {proofPoints.map((point) => (
                <div key={point.label} className="rounded-2xl border border-white/10 bg-black/20 p-5">
                  <div className="text-3xl font-heading font-bold text-white">{point.value}</div>
                  <div className="mt-2 text-[11px] uppercase tracking-[0.22em] text-white/45">{point.label}</div>
                </div>
              ))}
            </div>
            <div className="rounded-2xl border border-accent/20 bg-accent/10 p-5">
              <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-accent">Core advantage</div>
              <p className="text-[15px] leading-[1.8] text-white/80">
                Direct partner access, practical execution, and multi-jurisdiction support for clients operating in India and the Middle East.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative border-y border-white/5 bg-foreground/95">
        <div className="container grid gap-6 py-10 md:grid-cols-4">
          {proofPoints.map((point) => (
            <div key={point.label} className="text-center md:border-r md:border-white/10 md:last:border-r-0">
              <div className="text-3xl font-heading font-bold text-white">{point.value}</div>
              <div className="mt-2 text-[12px] uppercase tracking-[0.24em] text-white/45">{point.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-background py-20 md:py-32 text-foreground">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_80%_10%,rgba(15,118,110,0.08),transparent_60%)]" />
        <div className="container relative z-10 grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="h-px w-12 bg-accent" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-accent">About the firm</span>
            </div>
            <h2 className="max-w-xl text-4xl font-heading font-bold tracking-[-0.03em] md:text-[56px]">
              Trusted advisory that combines technical depth with commercial judgment.
            </h2>
            <p className="mt-6 max-w-xl text-[16px] leading-[1.9] text-muted-foreground md:text-[18px]">
              NRS and Associates was established with a clear promise: deliver high-quality, value-driven professional services with direct partner involvement. The firm serves corporates, entrepreneurs, NRIs, start-ups, and high-net-worth individuals across India and abroad.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {strengths.map((strength, index) => (
              <motion.div
                key={strength}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.55 }}
                className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-lg"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Users className="h-5 w-5" />
                </div>
                <p className="text-[15px] leading-[1.8] text-foreground/80">{strength}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-foreground py-20 md:py-32">
        <div className="container relative z-10">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <div className="h-px w-12 bg-accent/70" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-accent">Service focus</span>
              </div>
              <h2 className="text-4xl font-heading font-bold tracking-[-0.03em] text-white md:text-[52px]">
                Built for compliance, clarity, and cross-border growth.
              </h2>
            </div>
            <Link to="/india/services" className="inline-flex items-center gap-2 text-[14px] font-semibold text-white/60 transition-colors hover:text-white">
              View detailed services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.65 }}
                className="group rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition-all duration-300 hover:border-accent/30 hover:bg-white/[0.06]"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent transition-transform duration-300 group-hover:scale-105">
                  <service.icon className="h-5 w-5" />
                </div>
                <h3 className="text-2xl font-heading font-bold tracking-[-0.02em] text-white">{service.title}</h3>
                <p className="mt-4 text-[14px] leading-[1.8] text-white/55">{service.desc}</p>
                <Link to={service.href} className="mt-6 inline-flex items-center gap-2 text-[13px] font-semibold text-accent transition-colors hover:text-accent/80">
                  Learn more
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-20 md:py-32 text-foreground">
        <div className="container grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="h-px w-12 bg-accent" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-accent">Office footprint</span>
            </div>
            <h2 className="max-w-xl text-4xl font-heading font-bold tracking-[-0.03em] md:text-[54px]">
              Local presence in Kerala, global reach through Dubai.
            </h2>
            <p className="mt-6 max-w-xl text-[16px] leading-[1.9] text-muted-foreground">
              The firm is headquartered in Manjeri, with branches in Calicut and a global presence in Dubai, UAE. That footprint supports cross-border transactions, NRI advisory, and international business setup with much stronger context than a generic firm profile.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { title: "Manjeri", desc: "Head office and core delivery base" },
              { title: "Calicut", desc: "Branch coverage for regional clients" },
              { title: "Dubai", desc: "International advisory and support" },
            ].map((office) => (
              <div key={office.title} className="rounded-3xl border border-border bg-card p-6 shadow-sm">
                <Building2 className="h-6 w-6 text-accent" />
                <h3 className="mt-5 text-2xl font-heading font-bold tracking-[-0.02em]">{office.title}</h3>
                <p className="mt-3 text-[14px] leading-[1.8] text-muted-foreground">{office.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-white/5 bg-foreground py-20 md:py-28">
        <div className="container relative z-10 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px w-10 bg-accent/70" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-accent">Next step</span>
            </div>
            <h2 className="max-w-2xl text-3xl font-heading font-bold tracking-[-0.03em] text-white md:text-[44px]">
              Need a partner for audit, tax, compliance, or cross-border growth?
            </h2>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link to="/india/contact" className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 text-[14px] font-semibold text-white transition-all duration-300 hover:bg-accent/90">
              Start a conversation
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/india/careers" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-4 text-[14px] font-semibold text-white/75 transition-all duration-300 hover:border-white/30 hover:bg-white/5 hover:text-white">
              Explore careers
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
