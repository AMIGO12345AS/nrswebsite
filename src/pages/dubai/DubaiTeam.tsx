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
    bio: "16+ years experience in private banking and wealth management, advising HNIs and corporates on portfolio management and offshore solutions.",
  },
];

export default function DubaiTeam() {
  return (
    <>
      <section className="bg-primary pt-32 pb-20">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-accent text-sm font-medium tracking-[0.3em] uppercase mb-4">Leadership</p>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white max-w-xl leading-tight">
              The People Behind NRS Fynser
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          {team.map((m, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
              className="group rounded-xl border border-border bg-card p-8 text-center hover:border-accent/40 hover:shadow-xl transition-all duration-500"
            >
              <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                <User className="h-10 w-10 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg">{m.name}</h3>
              <p className="text-sm text-accent font-medium mb-4">{m.role}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{m.bio}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
