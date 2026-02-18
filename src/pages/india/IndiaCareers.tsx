import { Briefcase, Users, TrendingUp } from "lucide-react";

const perks = [
  { icon: Users, title: "Collaborative Culture", desc: "Work with a growing team of skilled professionals." },
  { icon: TrendingUp, title: "Career Growth", desc: "Continuous learning and clear advancement pathways." },
  { icon: Briefcase, title: "Impactful Work", desc: "Drive cross-border financial solutions and technology innovation." },
];

export default function IndiaCareers() {
  return (
    <>
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container text-center">
          <h1 className="text-4xl font-heading font-bold mb-4">Careers</h1>
          <p className="max-w-2xl mx-auto text-primary-foreground/70">Join NRS Fynser India and grow your career.</p>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="container max-w-4xl">
          <h2 className="text-2xl font-heading font-bold text-center mb-10">Why Join NRS Fynser?</h2>
          <div className="grid gap-6 sm:grid-cols-3 mb-12">
            {perks.map((p, i) => (
              <div key={i} className="rounded-lg border bg-background p-6 text-center">
                <p.icon className="mx-auto h-10 w-10 text-accent mb-3" />
                <h3 className="font-heading font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="rounded-lg border bg-background p-8 text-center">
            <h3 className="font-heading font-semibold mb-2">Open Positions</h3>
            <p className="text-sm text-muted-foreground mb-4">We're always looking for talented professionals. Check back soon for new openings.</p>
            <a href="mailto:info@nrsfysner.com" className="inline-block rounded-md bg-accent px-6 py-2.5 text-sm font-semibold text-accent-foreground hover:bg-accent/90 transition-colors">
              Send Your CV
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
