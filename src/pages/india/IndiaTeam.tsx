import { User } from "lucide-react";
import { motion } from "framer-motion";

export default function IndiaTeam() {
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
              The People Behind NRS Fynser
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-border bg-card p-10 text-center hover:shadow-lg hover:border-accent/20 transition-all duration-500"
          >
            <div className="mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-2xl bg-secondary">
              <User className="h-11 w-11 text-muted-foreground" />
            </div>
            <h3 className="font-heading font-semibold text-xl">CA Muhammed Nizar E</h3>
            <p className="text-[13px] text-accent font-medium mb-4">Partner</p>
            <p className="text-[14px] text-muted-foreground leading-relaxed">
              Co-Founder of NRS Fynser, overseeing the firm's Indian operations. He practices with expertise in cross-border financial transactions and plays a key role in strategic growth.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
