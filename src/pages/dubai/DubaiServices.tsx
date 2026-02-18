import { Shield, Building2, FileCheck, Landmark, ChevronRight } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Tax Advisory",
    items: ["UAE Corporate Tax advisory", "VAT registration & return filing", "Transfer Pricing (Local & Master File)", "Representation during tax audits"],
  },
  {
    icon: Building2,
    title: "Business Setup",
    items: ["Mainland and Free Zone incorporation advisory", "Trade license issuance/renewal", "Corporate structuring"],
  },
  {
    icon: FileCheck,
    title: "Compliance",
    items: ["Anti-Money Laundering (AML/CFT) framework design", "UBO compliance", "Regulatory reporting"],
  },
  {
    icon: Landmark,
    title: "Capital & Finance",
    items: ["Bank finance arrangement", "Working capital structuring", "Term loan support"],
  },
];

export default function DubaiServices() {
  return (
    <>
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container text-center">
          <h1 className="text-4xl font-heading font-bold mb-4">Our Services</h1>
          <p className="max-w-2xl mx-auto text-primary-foreground/70">
            Structured tax advisory aligned with UAE Corporate Tax, VAT, and international regulations.
          </p>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="container grid gap-8 md:grid-cols-2">
          {services.map((s, i) => (
            <div key={i} className="rounded-lg border bg-background p-8 hover:shadow-lg hover:border-accent transition-all">
              <s.icon className="h-10 w-10 text-accent mb-4" />
              <h3 className="text-xl font-heading font-semibold mb-4">{s.title}</h3>
              <ul className="space-y-2">
                {s.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <ChevronRight className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
