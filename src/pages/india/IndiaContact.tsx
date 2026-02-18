import { Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function IndiaContact() {
  return (
    <>
      <section className="bg-primary pt-32 pb-20">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-accent text-sm font-medium tracking-[0.3em] uppercase mb-4">Contact</p>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white max-w-xl leading-tight">
              Get in Touch
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container max-w-lg mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-xl border border-border bg-card p-8"
          >
            <h3 className="font-heading font-semibold text-xl mb-6">India Office</h3>
            <div className="space-y-5 text-sm text-muted-foreground">
              <a href="mailto:info@nrsfysner.com" className="flex items-center gap-3 hover:text-accent transition-colors">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                  <Mail className="h-5 w-5 text-accent" />
                </div>
                info@nrsfysner.com
              </a>
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 shrink-0">
                  <MapPin className="h-5 w-5 text-accent" />
                </div>
                <p>India Office<br />(Address & phone details coming soon)</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
