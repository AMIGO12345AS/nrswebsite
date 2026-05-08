import { ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { fadeUp } from "@/lib/animations";
import careersHero from "@/assets/careers-hero.jpg";

const values = [
  {
    num: "01",
    title: "Mentorship First",
    desc: "Every team member gets direct access to senior leadership, so learning stays practical and feedback is immediate.",
  },
  {
    num: "02",
    title: "Real Client Work",
    desc: "From day one, you work with live audit, tax, compliance, and advisory engagements instead of sideline tasks.",
  },
  {
    num: "03",
    title: "Growth Without Ceilings",
    desc: "The firm promotes from within and rewards initiative, ownership, and strong client thinking.",
  },
];

const roles = [
  "Audit and assurance",
  "Direct tax and indirect tax",
  "MCA and corporate compliance",
  "NRI and cross-border advisory",
];

export default function Careers() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const cinematicOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);

  return (
    <>
      <section ref={heroRef} className="relative h-[75vh] min-h-[520px] flex items-end overflow-hidden bg-foreground">
        <link rel="preload" as="image" href={careersHero} />
        <img fetchPriority="high" loading="eager" src={careersHero} alt="NRS team at work" className="absolute inset-0 w-full h-full object-cover object-center" />
        <motion.div style={{ opacity: cinematicOpacity }} className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/50 to-transparent" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 50% at 20% 90%, hsl(var(--accent) / 0.1), transparent)" }} />
        <div className="relative z-10 container pb-10 md:pb-20">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
            <span className="text-accent text-[13px] font-medium tracking-[0.15em] uppercase mb-6 block">Careers</span>
            <h1 className="text-5xl md:text-[64px] font-heading font-bold text-white leading-[1.1] tracking-[-0.02em] max-w-2xl">
              Build a Career<br />that Shapes <span className="font-medium text-white/50">Businesses</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container max-w-5xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-20">
            <motion.span variants={fadeUp} custom={0} className="text-accent text-[13px] font-medium tracking-[0.15em] uppercase mb-5 block">Life at NRS</motion.span>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-[48px] font-heading font-bold tracking-[-0.02em] leading-[1.1] max-w-2xl">
              More than employment. It is a training ground for confident professionals.
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="mt-6 max-w-3xl text-[16px] leading-[1.85] text-muted-foreground">
              NRS and Associates focuses on structured learning, hands-on exposure, and client interaction so that growth comes through real work, not theory alone.
            </motion.p>
          </motion.div>

          <div className="relative border-t border-border">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="group relative border-b border-border py-8 md:py-16 grid md:grid-cols-[100px_1fr_1.5fr] gap-4 md:gap-16 items-start md:items-center hover:bg-accent/[0.02] -mx-4 px-4 md:-mx-8 md:px-8 transition-colors duration-700 cursor-default overflow-hidden"
              >
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-accent scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />
                <span className="text-[14px] font-mono font-semibold text-accent/50 tracking-[0.2em] transform group-hover:translate-x-4 transition-transform duration-500">{v.num}</span>
                <h3 className="text-3xl md:text-[40px] font-heading font-bold tracking-[-0.02em] group-hover:text-accent transition-colors duration-500 leading-[1.1]">{v.title}</h3>
                <p className="text-[16px] text-muted-foreground leading-[1.8] font-light max-w-xl md:ml-auto group-hover:text-foreground/80 transition-colors duration-500">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-28 bg-foreground overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/[0.05] blur-[120px] rounded-full" />
        </div>
        <div className="container max-w-4xl relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center">
            <h2 className="text-3xl md:text-[42px] font-heading font-bold text-white tracking-[-0.02em] leading-[1.15] mb-6">
              Roles we grow into, together.
            </h2>
            <p className="text-[15px] text-white/45 leading-relaxed mb-10 max-w-2xl mx-auto">
              We hire for curiosity, reliability, and ownership across audit, taxation, compliance, and international advisory.
            </p>
            <div className="grid gap-3 sm:grid-cols-2 mb-10 text-left">
              {roles.map((role) => (
                <div key={role} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-[14px] text-white/70">
                  {role}
                </div>
              ))}
            </div>
            <a href="mailto:info@nrsassociates.in" className="group inline-flex items-center gap-2.5 bg-accent text-white px-8 py-4 rounded-full text-[14px] font-semibold hover:bg-accent/90 transition-all hover:shadow-lg hover:shadow-accent/20">
              Send Your CV
              <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
