import nrsBuilding from "@/assets/nrs-building.png";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

const services = [
  {
    num: "01",
    title: "Audit & Assurance",
    desc: "Statutory financial audits, Internal audit & Risk assessment",
    link: "/india/services",
  },
  {
    num: "02",
    title: "CFO Services",
    desc: "Virtual CFO support, Budgeting, Forecasting & Financial analysis",
    link: "/india/services",
  },
  {
    num: "03",
    title: "Technology & ERP",
    desc: "Zoho ERP implementation, Accounting modules & Workflow automation",
    link: "/india/services",
  },
  {
    num: "04",
    title: "Cross-Border",
    desc: "India-GCC financial transactions and compliance management",
    link: "/india/services",
  },
];

export default function IndiaHome() {
  return (
    <>
      {/* Hero — immersive, no tint */}
      <section className="relative h-screen flex items-end overflow-hidden bg-foreground">
        <img
          src={nrsBuilding}
          alt="NRS Fynser Building"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Only a subtle bottom gradient for text readability — no blue tint */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        <div className="relative z-10 container pb-16 md:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-accent" />
              <span className="text-accent text-[13px] font-medium tracking-[0.2em] uppercase">
                Financial Advisory
              </span>
            </div>
            <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-heading font-bold leading-[1.05] text-white mb-6 tracking-[-0.02em]">
              Expert Financial
              <br />
              Advisory &
              <br />
              <span className="text-accent">Cross-Border</span> Solutions
            </h1>
            <p className="text-[16px] text-white/50 leading-relaxed mb-10 max-w-md font-light">
              Integrating financial expertise with technology-enabled systems to support informed decision-making.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/india/services"
                className="group inline-flex items-center gap-2.5 bg-accent text-white px-7 py-4 rounded-full text-[14px] font-semibold hover:bg-accent/90 transition-all hover:shadow-lg hover:shadow-accent/25"
              >
                Explore Services
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/india/about"
                className="group inline-flex items-center gap-2 text-white/50 hover:text-white text-[14px] font-medium transition-colors"
              >
                Learn More
                <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
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

      {/* Stats strip */}
      <section className="bg-foreground border-t border-white/[0.06]">
        <div className="container py-10">
          <div className="grid grid-cols-3 divide-x divide-white/[0.06]">
            {[
              { value: "1,000+", label: "Clients" },
              { value: "50+", label: "Experts" },
              { value: "2017", label: "Est." },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center px-4"
              >
                <p className="text-3xl md:text-4xl font-heading font-bold text-white">{stat.value}</p>
                <p className="text-[12px] mt-1 text-white/30 tracking-[0.15em] uppercase">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services — editorial grid */}
      <section className="py-28 bg-background">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-16"
          >
            <div>
              <motion.div variants={fadeUp} custom={0} className="flex items-center gap-3 mb-4">
                <div className="h-px w-10 bg-accent" />
                <span className="text-accent text-[13px] font-medium tracking-[0.2em] uppercase">Services</span>
              </motion.div>
              <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-[42px] font-heading font-bold leading-tight tracking-[-0.02em]">
                What we do
              </motion.h2>
            </div>
            <motion.div variants={fadeUp} custom={2}>
              <Link
                to="/india/services"
                className="group inline-flex items-center gap-2 text-[14px] font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                View all services
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden">
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
                  className="group block bg-card p-10 md:p-12 hover:bg-secondary/50 transition-all duration-500 h-full"
                >
                  <span className="text-[12px] font-mono text-accent tracking-wider">{s.num}</span>
                  <h3 className="text-xl md:text-2xl font-heading font-semibold mt-3 mb-3 group-hover:text-accent transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-[14px] text-muted-foreground leading-relaxed">{s.desc}</p>
                  <ArrowUpRight className="h-5 w-5 mt-6 text-muted-foreground/30 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="py-28 bg-secondary/30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-10 bg-accent" />
                <span className="text-accent text-[13px] font-medium tracking-[0.2em] uppercase">About</span>
              </div>
              <h2 className="text-3xl md:text-[38px] font-heading font-bold leading-tight tracking-[-0.02em] mb-6">
                Driven by expertise,
                <br />
                powered by trust
              </h2>
              <p className="text-[15px] text-muted-foreground leading-relaxed mb-8">
                Established in 2017, NRS Fynser is a professionally driven accounting and advisory firm offering comprehensive services. With the trust of over 1,000 clients and a 50+ member expert team, we deliver solutions that are reliable, timely, and practical.
              </p>
              <Link
                to="/india/about"
                className="group inline-flex items-center gap-2 text-[14px] font-semibold text-foreground hover:text-accent transition-colors"
              >
                Our Story
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { title: "Integrity", desc: "Transparent and ethical operations" },
                { title: "Excellence", desc: "High-quality through attention to detail" },
                { title: "Innovation", desc: "Modern tools for smarter solutions" },
                { title: "Client-First", desc: "Exceeding expectations at every step" },
              ].map((p, i) => (
                <div key={i} className="rounded-2xl bg-card border border-border p-6 hover:shadow-lg hover:border-accent/20 transition-all duration-500">
                  <h4 className="font-heading font-semibold text-[15px] mb-1.5">{p.title}</h4>
                  <p className="text-[13px] text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
