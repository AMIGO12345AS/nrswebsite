import { User } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

const team = [
  {
    name: "CA Saleel Eranchikkal",
    role: "Managing Partner",
    bio: "FTA-Registered Tax Agent specializing in UAE VAT, Corporate Tax, and Transfer Pricing.",
  },
  {
    name: "CA Rashid M. Basheer",
    role: "Managing Partner",
    bio: "Former General Manager at Lulu Retail PLC; expert in Financial Governance, Internal Audit, and IPOs.",
  },
  {
    name: "Imran Rashid",
    role: "Director - Corporate Services",
    bio: "16+ years experience in private banking and wealth management, advising HNIs and corporates.",
  },
];

export default function DubaiTeam() {
  return (
    <>
      <section className="bg-foreground pt-36 pb-24">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-accent" />
              <span className="text-accent text-[13px] font-medium tracking-[0.2em] uppercase">Leadership</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white max-w-xl leading-tight tracking-[-0.02em]">
              The People Behind NRS & Associates
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
          {team.map((m, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
              className="rounded-2xl border border-border bg-card p-8 text-center hover:shadow-lg hover:border-accent/20 transition-all duration-500"
            >
              <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-2xl bg-secondary">
                <User className="h-9 w-9 text-muted-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-[17px]">{m.name}</h3>
              <p className="text-[13px] text-accent font-medium mb-4">{m.role}</p>
              <p className="text-[13px] text-muted-foreground leading-relaxed">{m.bio}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
