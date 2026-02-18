import { Linkedin } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { fadeUp } from "@/lib/animations";
import teamHero from "@/assets/team-hero.jpg";
import teamSaleel from "@/assets/team-saleel.jpg";
import teamRashid from "@/assets/team-rashid.jpg";
import teamImran from "@/assets/team-imran.jpg";

const team = [
  {
    name: "CA Saleel Eranchikkal",
    role: "Managing Partner",
    bio: "FTA-Registered Tax Agent specializing in UAE VAT, Corporate Tax, and Transfer Pricing.",
    image: teamSaleel,
  },
  {
    name: "CA Rashid M. Basheer",
    role: "Managing Partner",
    bio: "Former General Manager at Lulu Retail PLC; expert in Financial Governance, Internal Audit, and IPOs.",
    image: teamRashid,
  },
  {
    name: "Imran Rashid",
    role: "Director - Corporate Services",
    bio: "16+ years experience in private banking and wealth management, advising HNIs and corporates.",
    image: teamImran,
  },
];

export default function DubaiTeam() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const cinematicOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);

  return (
    <>
      <section ref={heroRef} className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden bg-foreground">
        <img src={teamHero} alt="Team collaboration" className="absolute inset-0 w-full h-full object-cover object-center" />
        <motion.div style={{ opacity: cinematicOpacity }} className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/60 to-transparent" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 50% at 20% 90%, hsl(var(--accent) / 0.12), transparent)" }} />
        <div className="relative z-10 container pb-20">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-accent" />
              <span className="text-accent text-[13px] font-medium tracking-[0.2em] uppercase">Leadership</span>
            </div>
            <h1 className="text-5xl md:text-[64px] font-heading font-bold text-white max-w-2xl leading-[1.1] tracking-[-0.02em]">
              The People Behind<br />NRS & Associates
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-28 bg-background">
        <div className="container max-w-5xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-16">
            <motion.div variants={fadeUp} custom={0} className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-accent" />
              <span className="text-accent text-[13px] font-medium tracking-[0.2em] uppercase">Our Team</span>
            </motion.div>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-[42px] font-heading font-bold tracking-[-0.02em] leading-[1.15]">
              Led by Experience,<br />Driven by Purpose
            </motion.h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {team.map((m, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="group relative rounded-3xl border border-border bg-card overflow-hidden hover:border-accent/20 transition-all duration-500"
              >
                <div className="absolute top-0 left-0 w-full h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={m.image}
                    alt={m.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-7">
                  <h3 className="font-heading font-semibold text-lg">{m.name}</h3>
                  <p className="text-[13px] text-accent font-medium mb-3">{m.role}</p>
                  <p className="text-[13px] text-muted-foreground leading-relaxed">{m.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
