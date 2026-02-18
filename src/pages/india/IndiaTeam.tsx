import { User } from "lucide-react";
import { motion } from "framer-motion";

export default function IndiaTeam() {
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
        <div className="container max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group rounded-xl border border-border bg-card p-10 text-center hover:border-accent/40 hover:shadow-xl transition-all duration-500"
          >
            <div className="mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-primary/10">
              <User className="h-12 w-12 text-primary" />
            </div>
            <h3 className="font-heading font-semibold text-xl">CA Muhammed Nizar E</h3>
            <p className="text-sm text-accent font-medium mb-4">Partner</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Co-Founder of NRS Fynser, overseeing the firm's Indian operations. He practices with expertise in cross-border financial transactions and plays a key role in strategic growth.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
