import nrsBuilding from "@/assets/nrs-building.png";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { fadeUp } from "@/lib/animations";

const services = [
  {
    num: "01",
    title: "Audit & Assurance",
    desc: "Statutory financial audits, Internal audit & Risk assessment",
    link: "/india/services"
  },
  {
    num: "02",
    title: "CFO Services",
    desc: "Virtual CFO support, Budgeting, Forecasting & Financial analysis",
    link: "/india/services"
  },
  {
    num: "03",
    title: "Technology & ERP",
    desc: "Zoho ERP implementation, Accounting modules & Workflow automation",
    link: "/india/services"
  },
  {
    num: "04",
    title: "Cross-Border",
    desc: "India-GCC financial transactions and compliance management",
    link: "/india/services"
  }];


export default function IndiaHome() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const cinematicOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);

  return (
    <>
      {/* Hero — immersive, no tint */}
      <section ref={heroRef} className="relative h-screen flex items-end overflow-hidden bg-foreground">
        <link rel="preload" as="image" href={nrsBuilding} />
        <img
          src={nrsBuilding}
          alt="NRS & Associates Building"
          fetchPriority="high"
          loading="eager"
          className="absolute inset-0 w-full h-full object-cover object-[30%_center] md:object-center" />

        {/* Base readability gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        {/* Cinematic bottom-left fade — adjusted for better text legibilty (premium audit change) */}
        <motion.div
          style={{ opacity: cinematicOpacity }}
          className="absolute inset-0 bg-[radial-gradient(ellipse_120%_100%_at_0%_100%,rgba(0,0,0,0.95)_0%,rgba(0,0,0,0.7)_40%,rgba(0,0,0,0.35)_65%,transparent_85%)]" />


        <div className="relative z-10 container pb-12 md:pb-16 flex flex-col justify-end">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="w-full max-w-[90vw] md:max-w-4xl lg:max-w-[1000px]">

            <div className="flex items-center gap-2 mb-4">
              <div className="h-px w-8 bg-white/90" />
              <span className="text-[12px] font-medium tracking-[0.2em] uppercase text-white/90">
                Financial Advisory
              </span>
            </div>
            <h1 className="text-[clamp(2.5rem,5.5vw,4.5rem)] font-heading font-bold leading-[1.15] text-white mb-3 tracking-[-0.01em]">
              Expert Financial
              <br />
              Advisory &
              <br />
              <span className="text-accent">Cross-Border</span> Solutions
            </h1>
            <p className="text-[15px] text-white/50 leading-relaxed mb-6 max-w-md font-light">
              Integrating financial expertise with technology-enabled systems to support informed decision-making.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                to="/india/services"
                className="group inline-flex items-center gap-2.5 bg-accent text-white px-7 py-4 rounded-full text-[14px] font-semibold hover:bg-accent/90 transition-all duration-500 ease-out hover:shadow-lg hover:shadow-accent/25">

                Explore Services
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-500 ease-out" />
              </Link>
              <Link
                to="/india/about"
                className="group inline-flex items-center gap-2 text-white/50 hover:text-white text-[14px] font-medium transition-colors duration-500">

                Learn More
                <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-500 ease-out" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 right-8 hidden md:flex flex-col items-center gap-2">

          <span className="text-[10px] text-white/30 tracking-[0.2em] uppercase rotate-90 origin-center translate-y-6">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />

        </motion.div>
      </section>

      {/* Stats strip */}
      <section className="relative bg-foreground overflow-hidden">
        <div className="absolute -top-32 -left-32 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
        <div className="container py-14 relative z-10">
          <div className="grid grid-cols-3">
            {[
              { value: "1,000+", label: "Clients Served" },
              { value: "50+", label: "Expert Team" },
              { value: "2", label: "Global Offices" }].
              map((stat, i) =>
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.6 }}
                  className={`text-center py-10 md:py-14 px-4 ${i < 2 ? "border-r border-white/[0.08]" : ""}`}>

                  <p className="text-3xl md:text-4xl font-heading font-bold text-white mb-1">{stat.value}</p>
                  <p className="text-[13px] text-white/50 tracking-wide uppercase">{stat.label}</p>
                </motion.div>
              )}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="relative py-20 md:py-40 bg-foreground overflow-hidden">
        {/* Dynamic Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-accent/[0.02] blur-[150px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/[0.02] blur-[150px] rounded-full" />
        </div>

        <div className="container relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 md:mb-24 max-w-7xl mx-auto"
          >
            <div>
              <motion.div variants={fadeUp} custom={0} className="flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-accent/60" />
                <span className="text-accent text-[12px] font-semibold tracking-[0.25em] uppercase">Expertise</span>
              </motion.div>
              <motion.h2 variants={fadeUp} custom={1} className="text-4xl md:text-[64px] font-heading font-bold leading-[1.1] tracking-[-0.02em] text-white">
                What we do.
              </motion.h2>
            </div>
            <motion.div variants={fadeUp} custom={2}>
              <Link
                to="/india/services"
                className="group inline-flex items-center gap-3 text-[14px] font-semibold text-white/50 hover:text-white transition-colors duration-300"
              >
                View all services
                <span className="relative flex items-center justify-center w-10 h-10 rounded-full border border-white/10 group-hover:border-accent/40 group-hover:bg-accent/10 transition-all duration-300">
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:text-accent transition-all duration-300" />
                </span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Premium Massive Typography List */}
          <div className="max-w-7xl mx-auto border-t border-white/[0.06]">
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="group relative border-b border-white/[0.06] hover:border-accent/30 transition-colors duration-700"
              >
                {/* Massive Number Background */}
                <span className="absolute -left-4 top-1/2 -translate-y-1/2 text-[120px] md:text-[180px] font-heading font-black text-white/[0.02] group-hover:text-accent/[0.03] transition-colors duration-700 pointer-events-none select-none z-0">
                  {s.num}
                </span>

                <Link
                  to={s.link}
                  className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 py-8 md:py-16 px-2 md:px-8"
                >
                  <div className="flex-1 flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12 w-full">
                    {/* Small numbering */}
                    <span className="text-[13px] font-mono font-medium text-accent/60 tracking-[0.2em] transform group-hover:-translate-y-2 transition-transform duration-500 ease-out">{s.num}</span>

                    <div className="flex-1">
                      <h3 className="text-3xl md:text-[56px] font-heading font-bold text-white/80 group-hover:text-white transition-all duration-700 tracking-[-0.02em] leading-[1.1]">
                        {s.title}
                      </h3>

                      {/* Description - Expands/Reveals on Hover */}
                      <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-700 ease-out">
                        <div className="overflow-hidden">
                          <p className="text-[16px] md:text-[18px] text-white/40 leading-relaxed max-w-2xl font-light transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-100 ease-out mt-4 pb-2">
                            {s.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Hover Arrow */}
                  <div className="shrink-0 pt-4 md:pt-0 pointer-events-none">
                    <div className="w-14 h-14 rounded-full border border-white/10 group-hover:border-accent/50 group-hover:bg-accent group-hover:scale-110 flex items-center justify-center transition-all duration-500 ease-out">
                      <ArrowUpRight className="h-6 w-6 text-white/30 group-hover:text-white transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500 ease-out" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="relative py-16 md:py-32 bg-foreground overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/[0.07] rounded-full blur-[120px]" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}>

              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-12 bg-accent" />
                <span className="text-accent text-[12px] font-semibold tracking-[0.25em] uppercase">About</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-3 py-1 mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                <span className="text-accent text-[11px] font-semibold tracking-[0.15em] uppercase">Est. 2017</span>
              </div>
              <h2 className="text-3xl md:text-[42px] font-heading font-bold leading-[1.1] tracking-[-0.02em] mb-7 text-white">
                Driven by expertise,
                <br />
                powered by trust
              </h2>
              <p className="text-[15px] text-white/50 leading-[1.8] mb-10">
                Established in 2017, NRS & Associates is a professionally driven accounting and advisory firm offering comprehensive services. With the trust of over 1,000 clients and a 50+ member expert team, we deliver solutions that are reliable, timely, and practical.
              </p>
              <Link
                to="/india/about"
                className="group inline-flex items-center gap-2.5 text-[14px] font-semibold text-white hover:text-accent transition-colors">

                Our Story
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="grid grid-cols-2 gap-4">

              {[
                { title: "Integrity", desc: "Transparent and ethical operations" },
                { title: "Excellence", desc: "High-quality through attention to detail" },
                { title: "Innovation", desc: "Modern tools for smarter solutions" },
                { title: "Client-First", desc: "Exceeding expectations at every step" }].
                map((p, i) =>
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.08, duration: 0.5 }}
                    className="rounded-2xl bg-white/[0.04] border border-white/[0.08] p-7 hover:border-accent/30 hover:bg-white/[0.06] transition-all duration-500 group">

                    <h4 className="font-heading font-semibold text-[15px] mb-2 text-white group-hover:text-accent transition-colors">{p.title}</h4>
                    <p className="text-[13px] text-white/40 leading-relaxed">{p.desc}</p>
                  </motion.div>
                )}
            </motion.div>
          </div>
        </div>
      </section>
    </>);

}