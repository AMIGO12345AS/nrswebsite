import { Eye, Target, Heart, Star, Lightbulb, Users } from "lucide-react";

const principles = [
  { icon: Heart, title: "Integrity", desc: "Operating transparently and ethically to build lasting trust." },
  { icon: Star, title: "Excellence", desc: "Delivering high-quality services through attention to detail." },
  { icon: Lightbulb, title: "Innovation", desc: "Embracing modern tools and technology for smarter solutions." },
  { icon: Users, title: "Client-Centricity", desc: "Striving to exceed client expectations at every step." },
];

export default function DubaiAbout() {
  return (
    <>
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container text-center">
          <h1 className="text-4xl font-heading font-bold mb-4">About NRS Fynser</h1>
          <p className="max-w-2xl mx-auto text-primary-foreground/70">Established in 2017, we are a professionally driven accounting and advisory firm.</p>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="container max-w-3xl">
          <p className="text-lg leading-relaxed text-muted-foreground mb-8">
            NRS Fynser is a professionally driven accounting and advisory firm offering comprehensive services in accounting, bookkeeping, internal audit, tax advisory, and ERP implementation. With the trust of over 1,000 clients and a 50+ member expert team, we deliver solutions that are reliable, timely, and practical.
          </p>
          <div className="grid gap-8 sm:grid-cols-2 mb-12">
            <div className="rounded-lg border bg-background p-6">
              <Eye className="h-8 w-8 text-accent mb-3" />
              <h3 className="font-heading font-semibold mb-2">Vision</h3>
              <p className="text-sm text-muted-foreground">To be the trusted partner for businesses across the globe, helping them navigate challenges, seize opportunities, and grow with confidence.</p>
            </div>
            <div className="rounded-lg border bg-background p-6">
              <Target className="h-8 w-8 text-accent mb-3" />
              <h3 className="font-heading font-semibold mb-2">Mission</h3>
              <p className="text-sm text-muted-foreground">To empower businesses globally by providing trusted financial, advisory, and technology solutions while building a team of skilled professionals who contribute lasting value.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container">
          <h2 className="text-3xl font-heading font-bold text-center mb-10">Core Principles</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto">
            {principles.map((p, i) => (
              <div key={i} className="text-center p-6">
                <p.icon className="mx-auto h-10 w-10 text-accent mb-3" />
                <h3 className="font-heading font-semibold mb-1">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
