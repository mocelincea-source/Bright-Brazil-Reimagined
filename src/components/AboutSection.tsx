import { motion } from "framer-motion";
import { Leaf, Users, Shield, TrendingUp, Award } from "lucide-react";

const intro = {
  eyebrow: "Sobre nós",
  title: "Por que organizações escolhem a B.Right",
  desc: "Combinamos profundidade técnica em ESG com visão estratégica de negócio. Cada projeto é desenhado para gerar impacto mensurável — ambiental, social e econômico.",
};

const features = [
  {
    icon: Leaf,
    title: "Ambiental",
    bullets: ["Inventário de emissões GHG e CDP", "Planos de transição climática", "Métricas e metas validadas"],
  },
  {
    icon: Users,
    title: "Social",
    bullets: ["Mapeamento de stakeholders", "Engajamento com comunidades", "Relatórios de impacto social"],
  },
  {
    icon: Shield,
    title: "Governança",
    bullets: ["Conselhos consultivos e fiscais", "Compliance e ética corporativa", "Estrutura de reporte robusta"],
    highlight: true,
  },
  {
    icon: TrendingUp,
    title: "Estratégia",
    bullets: ["Materialidade e dupla materialidade", "Indicadores ESG consolidados", "Integração à estratégia de negócio"],
  },
  {
    icon: Award,
    title: "Certificações",
    bullets: ["Sistema B (B Lab)", "ISO 14001 e Pró-Ética", "Aderência a IFRS S1, S2, GRI, SASB"],
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-12 gap-8 mb-14"
        >
          <div className="md:col-span-7">
            <span className="text-xs font-medium text-primary uppercase tracking-widest mb-4 block">{intro.eyebrow}</span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-black text-foreground leading-[1.05] tracking-tight">
              {intro.title}
            </h2>
          </div>
          <div className="md:col-span-5 md:pt-3">
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">{intro.desc}</p>
          </div>
        </motion.div>

        {/* Feature rows */}
        <div className="flex flex-col gap-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className={`group rounded-2xl border transition-all ${
                f.highlight
                  ? "bg-accent border-accent shadow-[0_8px_30px_-8px_hsl(var(--accent)/0.5)]"
                  : "bg-secondary/50 border-border hover:bg-secondary"
              }`}
            >
              <div className="grid md:grid-cols-12 gap-6 items-center px-5 md:px-7 py-6">
                <div className="md:col-span-5 flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                      f.highlight ? "bg-accent-foreground/10" : "bg-background"
                    }`}
                  >
                    <f.icon
                      className={`w-5 h-5 ${f.highlight ? "text-accent-foreground" : "text-primary"}`}
                    />
                  </div>
                  <h3
                    className={`text-2xl md:text-3xl font-display font-bold tracking-tight ${
                      f.highlight ? "text-accent-foreground" : "text-foreground"
                    }`}
                  >
                    {f.title}
                  </h3>
                </div>
                <ul className="md:col-span-7 grid sm:grid-cols-1 gap-1.5">
                  {f.bullets.map((b) => (
                    <li
                      key={b}
                      className={`flex items-start gap-2 text-sm md:text-[0.95rem] ${
                        f.highlight ? "text-accent-foreground/85" : "text-muted-foreground"
                      }`}
                    >
                      <span
                        className={`mt-2 w-1 h-1 rounded-full flex-shrink-0 ${
                          f.highlight ? "bg-accent-foreground/60" : "bg-primary"
                        }`}
                      />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
