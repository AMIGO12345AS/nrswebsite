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

        <div className="relative z-10 container pb-20">
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
      <section className="py-28 bg-background">
        <div className="container max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-12">
            <motion.div variants={fadeUp} custom={0} className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-accent" />
              <span className="text-accent text-[13px] font-medium tracking-[0.2em] uppercase">Our Story</span>
            </motion.div>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-[42px] font-heading font-bold tracking-[-0.02em] leading-[1.15] mb-8">
              A Decade of Delivering<br />Financial Excellence
            </motion.h2>
          </motion.div>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[17px] leading-[1.9] text-muted-foreground">
            Established in 2017, NRS & Associates is a professionally driven accounting and advisory firm offering comprehensive services in accounting, bookkeeping, internal audit, tax advisory, and ERP implementation. With the trust of over 1,000 clients and a 50+ member expert team, we deliver solutions that are reliable, timely, and practical.
          </motion.p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="relative py-28 bg-foreground overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-accent/[0.04] blur-[120px] rounded-full -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/[0.03] blur-[100px] rounded-full" />
        </div>
        <div className="container max-w-5xl relative z-10">
          <div className="grid gap-6 md:grid-cols-2">
            {[
              { icon: Eye, title: "Vision", text: "To be the trusted partner for businesses across the globe, helping them navigate challenges, seize opportunities, and grow with confidence." },
              { icon: Target, title: "Mission", text: "To empower businesses globally by providing trusted financial, advisory, and technology solutions while building a team of skilled professionals who contribute lasting value." },
            ].map((item, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                className="group rounded-3xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-sm p-10 hover:border-accent/20 transition-all duration-500"
              >
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 group-hover:bg-accent/20 transition-colors duration-500">
                  <item.icon className="h-5 w-5 text-accent" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-white mb-4">{item.title}</h3>
                <p className="text-[14px] text-white/60 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-28 bg-background">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <motion.div variants={fadeUp} custom={0} className="flex items-center gap-3 justify-center mb-4">
              <div className="h-px w-10 bg-accent" />
              <span className="text-accent text-[13px] font-medium tracking-[0.2em] uppercase">Foundation</span>
              <div className="h-px w-10 bg-accent" />
            </motion.div>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-[42px] font-heading font-bold tracking-[-0.02em]">
              Core Principles
            </motion.h2>
          </motion.div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
            {principles.map((p, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                className="group relative text-center p-8 rounded-3xl border border-border bg-card overflow-hidden hover:border-accent/20 transition-all duration-500"
              >
                <div className="absolute top-0 left-0 w-full h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <div className="mx-auto mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 group-hover:bg-accent/15 transition-colors duration-500">
                  <p.icon className="h-5 w-5 text-accent" />
                </div>
                <h3 className="font-heading font-semibold text-[15px] mb-2">{p.title}</h3>
                <p className="text-[13px] text-muted-foreground leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
