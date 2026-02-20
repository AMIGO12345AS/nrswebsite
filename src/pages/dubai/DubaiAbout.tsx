import { Eye, Target, Heart, Star, Lightbulb, Users } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { fadeUp } from "@/lib/animations";
import aboutHero from "@/assets/about-hero.jpg";

const principles = [
  { icon: Heart, title: "Integrity", desc: "Operating transparently and ethically to build lasting trust." },
  { icon: Star, title: "Excellence", desc: "Delivering high-quality services through attention to detail." },
  { icon: Lightbulb, title: "Innovation", desc: "Embracing modern tools and technology for smarter solutions." },
  { icon: Users, title: "Client-Centricity", desc: "Striving to exceed client expectations at every step." },
];

const stats = [
  { value: "2017", label: "Established" },
  { value: "1,000+", label: "Clients Served" },
  { value: "50+", label: "Expert Team" },
  { value: "2", label: "Global Offices" },
];

export default function DubaiAbout() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const cinematicOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden bg-foreground">
        <img src={aboutHero} alt="Modern boardroom" className="absolute inset-0 w-full h-full object-cover object-center" />
        <motion.div style={{ opacity: cinematicOpacity }} className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/60 to-transparent" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 50% at 20% 90%, hsl(var(--accent) / 0.12), transparent)" }} />

        <div className="relative z-10 container pb-10 md:pb-20">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-accent" />
              <span className="text-accent text-[13px] font-medium tracking-[0.2em] uppercase">About Us</span>
            </div>
            <h1 className="text-5xl md:text-[64px] font-heading font-bold text-white max-w-2xl leading-[1.1] tracking-[-0.02em]">
              Building Trust<br />Through Excellence
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="relative bg-foreground border-t border-white/[0.06] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-64 h-32 bg-accent/5 blur-3xl rounded-full" />
        </div>
        <div className="container relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/[0.08]">
            {stats.map((s, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i} className="py-10 md:py-14 text-center">
                <div className="text-3xl md:text-4xl font-heading font-bold text-white mb-1">{s.value}</div>
                <div className="text-[13px] text-white/50 tracking-wide uppercase">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-32 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-secondary/20 to-transparent pointer-events-none" />
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:col-span-5">
              <motion.div variants={fadeUp} custom={0} className="flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-accent" />
                <span className="text-accent text-[12px] font-semibold tracking-[0.25em] uppercase">Our Story</span>
              </motion.div>
              <motion.h2 variants={fadeUp} custom={1} className="text-4xl md:text-[52px] font-heading font-bold tracking-[-0.02em] leading-[1.1] text-foreground">
                A Decade of Delivering<br />Financial Excellence
              </motion.h2>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="lg:col-span-7 lg:pt-16">
              <p className="text-[19px] md:text-[22px] leading-[1.8] text-foreground/80 font-light mb-8">
                Established in 2017, NRS & Associates is a professionally driven accounting and advisory firm offering comprehensive services in accounting, bookkeeping, internal audit, tax advisory, and ERP implementation.
              </p>
              <p className="text-[16px] leading-[1.8] text-muted-foreground">
                With the trust of over 1,000 clients and a 50+ member expert team, we deliver solutions that are reliable, timely, and practical. Our approach merges traditional financial prudence with forward-thinking technological integration.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="relative py-16 md:py-32 bg-background overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-accent/[0.03] to-transparent pointer-events-none" />

        <div className="container relative z-10 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-0 md:gap-0 border border-border rounded-3xl overflow-hidden">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative p-8 md:p-16 border-b md:border-b-0 md:border-r border-border"
            >
              <div className="flex items-center gap-3 mb-6 md:mb-10">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-2xl bg-accent/10">
                  <Eye className="w-4 h-4 text-accent" />
                </div>
                <span className="text-[11px] font-semibold tracking-[0.25em] text-muted-foreground uppercase">Vision</span>
              </div>
              <p className="text-[20px] md:text-[32px] font-heading font-light leading-[1.4] tracking-[-0.02em] text-foreground">
                To be the <span className="text-accent font-semibold">trusted partner</span> for businesses across the globe, helping them navigate challenges, seize opportunities, and grow with confidence.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative p-8 md:p-16 bg-secondary/30"
            >
              <div className="flex items-center gap-3 mb-6 md:mb-10">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-2xl bg-primary/10">
                  <Target className="w-4 h-4 text-primary" />
                </div>
                <span className="text-[11px] font-semibold tracking-[0.25em] text-muted-foreground uppercase">Mission</span>
              </div>
              <p className="text-[20px] md:text-[32px] font-heading font-light leading-[1.4] tracking-[-0.02em] text-foreground">
                To empower businesses globally with trusted <span className="font-semibold text-foreground">financial, advisory, and technology solutions</span> that create lasting value.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-16 md:py-32 bg-background relative">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-20 max-w-2xl">
            <motion.div variants={fadeUp} custom={0} className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-accent" />
              <span className="text-accent text-[12px] font-semibold tracking-[0.25em] uppercase">Foundation</span>
            </motion.div>
            <motion.h2 variants={fadeUp} custom={1} className="text-4xl md:text-[52px] font-heading font-bold tracking-[-0.02em] leading-[1.1]">
              Core Principles
            </motion.h2>
          </motion.div>

          <div className="grid gap-y-12 gap-x-16 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((p, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                className="group relative pl-8 border-l border-border hover:border-accent transition-all duration-500 hover:pl-10"
              >
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/[0.05] group-hover:bg-accent/10 transition-colors duration-500">
                  <p.icon className="h-5 w-5 text-accent" />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-3 text-foreground tracking-tight">{p.title}</h3>
                <p className="text-[14px] text-muted-foreground leading-[1.8]">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
