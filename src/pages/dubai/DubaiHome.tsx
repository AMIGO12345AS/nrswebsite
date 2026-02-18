import nrsBuilding from "@/assets/nrs-building.png";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { fadeUp } from "@/lib/animations";

const services = [
  {
    num: "01",
    title: "Tax Advisory",
    desc: "UAE Corporate Tax, VAT, Transfer Pricing & Tax Audit representation",
    link: "/dubai/services",
  },
  {
    num: "02",
    title: "Business Setup",
    desc: "Mainland & Free Zone incorporation, Trade license & Corporate structuring",
    link: "/dubai/services",
  },
  {
    num: "03",
    title: "Compliance",
    desc: "AML/CFT framework, UBO compliance & Regulatory reporting",
    link: "/dubai/services",
  },
  {
    num: "04",
    title: "Capital & Finance",
    desc: "Bank finance, Working capital & Term loan support",
    link: "/dubai/services",
  },
];

export default function DubaiHome() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const cinematicOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="relative h-screen flex items-end overflow-hidden bg-foreground">
        <img
          src={nrsBuilding}
          alt="NRS & Associates Building"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Base readability gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        {/* Cinematic bottom-left fade — disappears on scroll */}
        <motion.div
          style={{ opacity: cinematicOpacity }}
          className="absolute inset-0 bg-[radial-gradient(ellipse_120%_100%_at_0%_100%,rgba(0,0,0,0.95)_0%,rgba(0,0,0,0.6)_40%,rgba(0,0,0,0.25)_65%,transparent_85%)]"
        />

        <div className="relative z-10 container pb-12 md:pb-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="h-px w-8 bg-accent" />
              <span className="text-accent text-[12px] font-medium tracking-[0.2em] uppercase">
                FTA-Approved Tax Agent
              </span>
            </div>
            <h1 className="text-[clamp(2.5rem,5.5vw,4.5rem)] font-heading font-bold leading-[1.1] text-white mb-3 tracking-[-0.03em]">
              Your Trusted
              <br />
              Tax & Business
              <br />
              <span className="text-accent">Advisor</span> in Dubai
            </h1>
            <p className="text-[15px] text-white/50 leading-relaxed mb-6 max-w-md font-light">
              Supporting businesses in meeting their statutory and regulatory obligations with confidence and precision.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                to="/dubai/services"
                className="group inline-flex items-center gap-2.5 bg-accent text-white px-7 py-4 rounded-full text-[14px] font-semibold hover:bg-accent/90 transition-all hover:shadow-lg hover:shadow-accent/25"
              >
                Explore Services
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/dubai/about"
                className="group inline-flex items-center gap-2 text-white/50 hover:text-white text-[14px] font-medium transition-colors"
              >
                Learn More
                <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 right-8 hidden md:flex flex-col items-center gap-2"
        >
          <span className="text-[10px] text-white/30 tracking-[0.2em] uppercase rotate-90 origin-center translate-y-6">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent"
          />
        </motion.div>
      </section>

      {/* Stats */}
      <section className="relative bg-foreground border-t border-white/[0.06] overflow-hidden">
        {/* Subtle ambient glow */}
        <div className="absolute -top-32 -left-32 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
        <div className="container py-14 relative z-10">
          <div className="grid grid-cols-3 divide-x divide-white/[0.08]">
            {[
              { value: "1,000+", label: "Clients Served" },
              { value: "50+", label: "Expert Team" },
              { value: "2017", label: "Established" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                className="text-center px-4"
              >
                <p className="text-3xl md:text-5xl font-heading font-bold text-white tracking-tight">{stat.value}</p>
                <p className="text-[11px] mt-2 text-white/40 tracking-[0.2em] uppercase font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="relative py-32 bg-background overflow-hidden">
        {/* Background texture */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/50 to-transparent" />
        <div className="container relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-20"
          >
            <div>
              <motion.div variants={fadeUp} custom={0} className="flex items-center gap-3 mb-5">
                <div className="h-px w-12 bg-accent" />
                <span className="text-accent text-[12px] font-semibold tracking-[0.25em] uppercase">Services</span>
              </motion.div>
              <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-[48px] font-heading font-bold leading-[1.1] tracking-[-0.03em]">
                What we do
              </motion.h2>
            </div>
            <motion.div variants={fadeUp} custom={2}>
              <Link
                to="/dubai/services"
                className="group inline-flex items-center gap-2.5 text-[14px] font-semibold text-muted-foreground hover:text-accent transition-colors"
              >
                View all services
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-[1px] bg-border/50 rounded-3xl overflow-hidden shadow-2xl shadow-black/5">
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <Link
                  to={s.link}
                  className="group relative block bg-card p-10 md:p-14 hover:bg-accent/[0.03] transition-all duration-700 h-full overflow-hidden"
                >
                  {/* Hover accent line */}
                  <div className="absolute top-0 left-0 w-0 h-[2px] bg-accent group-hover:w-full transition-all duration-700" />
                  <span className="text-[11px] font-mono text-accent/70 tracking-[0.3em]">{s.num}</span>
                  <h3 className="text-xl md:text-[26px] font-heading font-semibold mt-4 mb-3 group-hover:text-accent transition-colors duration-500 tracking-[-0.01em]">
                    {s.title}
                  </h3>
                  <p className="text-[14px] text-muted-foreground leading-relaxed max-w-sm">{s.desc}</p>
                  <ArrowUpRight className="h-5 w-5 mt-8 text-border group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="relative py-32 bg-foreground overflow-hidden">
        {/* Cinematic ambient glow */}
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/[0.07] rounded-full blur-[120px]" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-12 bg-accent" />
                <span className="text-accent text-[12px] font-semibold tracking-[0.25em] uppercase">About</span>
              </div>
              <h2 className="text-3xl md:text-[42px] font-heading font-bold leading-[1.1] tracking-[-0.02em] mb-7 text-white">
                Driven by expertise,
                <br />
                powered by trust
              </h2>
              <p className="text-[15px] text-white/50 leading-[1.8] mb-10">
                Established in 2017, NRS & Associates is a professionally driven accounting and advisory firm. With the trust of over 1,000 clients and a 50+ member expert team, we deliver solutions that are reliable, timely, and practical.
              </p>
              <Link
                to="/dubai/about"
                className="group inline-flex items-center gap-2.5 text-[14px] font-semibold text-white hover:text-accent transition-colors"
              >
                Our Story
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { title: "Integrity", desc: "Transparent and ethical operations" },
                { title: "Excellence", desc: "High-quality through attention to detail" },
                { title: "Innovation", desc: "Modern tools for smarter solutions" },
                { title: "Client-First", desc: "Exceeding expectations at every step" },
              ].map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.08, duration: 0.5 }}
                  className="rounded-2xl bg-white/[0.04] border border-white/[0.08] p-7 hover:border-accent/30 hover:bg-white/[0.06] transition-all duration-500 group"
                >
                  <h4 className="font-heading font-semibold text-[15px] mb-2 text-white group-hover:text-accent transition-colors">{p.title}</h4>
                  <p className="text-[13px] text-white/40 leading-relaxed">{p.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
