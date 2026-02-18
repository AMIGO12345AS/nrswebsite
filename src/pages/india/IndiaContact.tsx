import { Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function IndiaContact() {
  return (
    <>
      <section className="bg-foreground pt-36 pb-24">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-accent" />
              <span className="text-accent text-[13px] font-medium tracking-[0.2em] uppercase">Contact</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white max-w-xl leading-tight tracking-[-0.02em]">
              Get in Touch
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container max-w-lg mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-border bg-card p-10"
          >
            <h3 className="font-heading font-semibold text-xl mb-8">India Office</h3>
            <div className="space-y-6 text-[14px] text-muted-foreground">
              <a href="mailto:info@nrsfysner.com" className="flex items-center gap-4 hover:text-accent transition-colors">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 shrink-0">
                  <Mail className="h-4 w-4 text-accent" />
                </div>
                info@nrsfysner.com
              </a>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 shrink-0">
                  <MapPin className="h-4 w-4 text-accent" />
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
