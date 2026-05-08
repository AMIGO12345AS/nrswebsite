import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { fadeUp } from "@/lib/animations";
import teamHero from "@/assets/team-hero.jpg";
import teamNizar from "@/assets/team-nizar.jpg";

const leaders = [
  {
    name: "CA Muhammed Nizar E",
    role: "Managing Partner",
    focus: "India operations, direct tax, indirect tax, and MCA compliance",
    bio: "Co-founder of NRS and Associates with more than a decade of professional experience. He has incorporated and managed compliance for 300+ companies and LLPs, and supports clients across tax planning, assessments, corporate structuring, and NRI matters.",
    spotlight: true,
  },
  {
    name: "CA Saleel Eranhikkal",
    role: "Senior Partner",
    focus: "Dubai operations, UAE tax, transfer pricing, and international structuring",
    bio: "Registered Tax Agent in the UAE with deep expertise in UAE VAT, Corporate Tax, and Transfer Pricing. He leads cross-border advisory across the India-UAE corridor.",
  },
  {
    name: "CA Rashid M Basheer",
    role: "Senior Partner",
    focus: "Financial governance, accounting advisory, and cross-border business operations",
    bio: "A senior advisor with extensive experience in consulting and industry leadership, including financial governance work for large UAE enterprises and audit/risk exposure at Grant Thornton India.",
  },
  {
    name: "CA Mohammed Yasin",
    role: "Partner In Charge - Calicut Branch",
    focus: "Direct tax, indirect tax, corporate compliance, and entity setup",
    bio: "Leads the Calicut branch with strong capabilities in incorporations, MCA matters, return filing, audit support, and regulatory compliance.",
  },
  {
    name: "CA Aswathy G Namboothiri",
    role: "Partner",
    focus: "Indirect tax, GST compliance, and litigation support",
    bio: "Heads the indirect taxation practice from the Manjeri office, supporting GST registration, return filing, audits, departmental matters, and compliance optimisation.",
  },
];

const coreTeam = [
  {
    name: "Niyas K",
    role: "Audit Manager",
    focus: "Audit & assurance, direct tax, and accounts advisory",
  },
  {
    name: "Mohammed Shibili",
    role: "Compliance Manager",
    focus: "MCA matters, corporate compliance, income tax, and TDS",
  },
  {
    name: "Shihad K",
    role: "Administration & Accounts Manager",
    focus: "Registrations, statutory documents, and coordination",
  },
  {
    name: "Rashad",
    role: "Assistant General Manager",
    focus: "Business structuring, agreements, and tax alignment",
  },
  {
    name: "Sneha A B",
    role: "HR Manager",
    focus: "Recruitment, engagement, training, and performance",
  },
];

export default function Team() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const cinematicOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);

  return (
    <>
      <section ref={heroRef} className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden bg-foreground">
        <link rel="preload" as="image" href={teamHero} />
        <img fetchPriority="high" loading="eager" src={teamHero} alt="Team collaboration" className="absolute inset-0 w-full h-full object-cover object-center" />
        <motion.div style={{ opacity: cinematicOpacity }} className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/60 to-transparent" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 50% at 20% 90%, hsl(var(--accent) / 0.12), transparent)" }} />
        <div className="relative z-10 container pb-10 md:pb-20">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-accent" />
              <span className="text-accent text-[13px] font-medium tracking-[0.2em] uppercase">Leadership</span>
            </div>
            <h1 className="text-5xl md:text-[64px] font-heading font-bold text-white max-w-2xl leading-[1.1] tracking-[-0.02em]">
              The people who<br />shape the work
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-28 bg-background">
        <div className="container max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-16 max-w-3xl">
            <motion.div variants={fadeUp} custom={0} className="flex items-center gap-3 mb-4">
              <div className="h-px w-10 bg-accent" />
              <span className="text-accent text-[13px] font-medium tracking-[0.2em] uppercase">Leadership team</span>
            </motion.div>
            <motion.h2 variants={fadeUp} custom={1} className="text-4xl md:text-[52px] font-heading font-bold tracking-[-0.02em] leading-[1.1] text-foreground">
              Partner-led from India to the UAE.
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="mt-6 text-[16px] leading-[1.85] text-muted-foreground">
              The firm combines multi-disciplinary expertise in taxation, compliance, audit, finance, and international advisory so each client gets the right specialist at the right moment.
            </motion.p>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-2">
            {leaders.map((leader) => (
              <motion.article
                key={leader.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUp}
                className={`overflow-hidden rounded-3xl border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${leader.spotlight ? "border-accent/30" : "border-border"}`}
              >
                <div className="grid gap-0 md:grid-cols-[260px_1fr]">
                  <div className="relative min-h-[260px] bg-foreground/95">
                    {leader.spotlight ? (
                      <>
                        <img src={teamNizar} alt={leader.name} className="absolute inset-0 h-full w-full object-cover object-top" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
                      </>
                    ) : (
                      <div className="flex h-full items-end bg-[radial-gradient(circle_at_top,hsl(var(--accent)/0.12),transparent_55%),linear-gradient(180deg,hsl(var(--foreground)),hsl(var(--foreground)))] p-8">
                        <div>
                          <div className="text-[11px] font-semibold uppercase tracking-[0.3em] text-accent/70">NRS</div>
                          <div className="mt-3 text-2xl font-heading font-bold tracking-[-0.02em] text-white">Leadership</div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="p-8 md:p-10">
                    <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-accent/70 mb-4">
                      <span>{leader.role}</span>
                    </div>
                    <h3 className="text-3xl md:text-[40px] font-heading font-bold tracking-[-0.02em] leading-[1.05] text-foreground mb-4">
                      {leader.name}
                    </h3>
                    <p className="text-[14px] font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-5">
                      {leader.focus}
                    </p>
                    <p className="text-[15px] leading-[1.85] text-muted-foreground">
                      {leader.bio}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-background py-16 md:py-24">
        <div className="container max-w-6xl">
          <div className="mb-10 flex items-center gap-3">
            <div className="h-px w-10 bg-accent" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-accent">Core team</span>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
            {coreTeam.map((member) => (
              <div key={member.name} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h4 className="text-[18px] font-heading font-bold tracking-[-0.02em] text-foreground">{member.name}</h4>
                <p className="mt-2 text-[12px] font-semibold uppercase tracking-[0.2em] text-accent">{member.role}</p>
                <p className="mt-4 text-[14px] leading-[1.8] text-muted-foreground">{member.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-foreground py-16 md:py-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute right-0 top-0 h-[24rem] w-[24rem] rounded-full bg-accent/10 blur-3xl" />
        </div>
        <div className="container relative z-10 flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px w-10 bg-accent/70" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-accent">Work with us</span>
            </div>
            <h2 className="max-w-2xl text-3xl font-heading font-bold tracking-[-0.03em] text-white md:text-[44px]">
              Need a team that can handle technical work and still think commercially?
            </h2>
          </div>
          <Link to="/contact" className="group inline-flex items-center gap-2.5 rounded-full bg-accent px-7 py-4 text-[14px] font-semibold text-white transition-all duration-300 hover:bg-accent/90">
            Start a conversation
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </section>
    </>
  );
}
