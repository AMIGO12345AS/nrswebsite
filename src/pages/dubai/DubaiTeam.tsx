import { User } from "lucide-react";

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
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container text-center">
          <h1 className="text-4xl font-heading font-bold mb-4">Our Leadership</h1>
          <p className="max-w-2xl mx-auto text-primary-foreground/70">Meet the experienced professionals driving NRS Fynser Dubai.</p>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="container grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          {team.map((m, i) => (
            <div key={i} className="rounded-lg border bg-background p-8 text-center hover:shadow-lg transition-shadow">
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                <User className="h-10 w-10 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg">{m.name}</h3>
              <p className="text-sm text-accent font-medium mb-3">{m.role}</p>
              <p className="text-sm text-muted-foreground">{m.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
