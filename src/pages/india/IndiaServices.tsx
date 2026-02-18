import { ClipboardCheck, LineChart, Monitor, Globe, ChevronRight } from "lucide-react";

const services = [
  {
    icon: ClipboardCheck,
    title: "Audit & Assurance",
    items: ["Statutory financial audits", "Internal audit", "Risk assessment"],
  },
  {
    icon: LineChart,
    title: "CFO Services",
    items: ["Virtual CFO support", "Budgeting and forecasting", "Financial analysis"],
  },
  {
    icon: Monitor,
    title: "Technology & ERP",
    items: ["Zoho ERP implementation", "Accounting module setup", "Workflow automation"],
  },
  {
    icon: Globe,
    title: "Cross-Border Compliance",
    items: ["Managing financial transactions between India and GCC", "Cross-border compliance management"],
  },
];

export default function IndiaServices() {
  return (
    <>
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container text-center">
          <h1 className="text-4xl font-heading font-bold mb-4">Our Services</h1>
          <p className="max-w-2xl mx-auto text-primary-foreground/70">
            Integrating financial expertise with technology-enabled systems to support informed decision-making.
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
