import { motion } from "framer-motion";
import { Leaf, Users, Shield } from "lucide-react";

const pillars = [
  { icon: Leaf, title: "Ambiental", desc: "Práticas ambientais conscientes integradas em todas as áreas operacionais." },
  { icon: Users, title: "Social", desc: "Responsabilidade social corporativa que gera impacto positivo real." },
  { icon: Shield, title: "Governança", desc: "Governança transparente e ética em cada fase das operações." },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-widest mb-4 block">Sobre nós</span>
          <h2 className="text-3xl md:text-5xl font-display text-foreground mb-6 leading-tight">A Empresa</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            A B.Right é especializada em ESG (Ambiental, Social e Governança), oferecendo serviços abrangentes para criar impacto positivo em organizações. Nossa consultoria integra práticas ambientais conscientes, responsabilidade social corporativa e governança transparente em todas as áreas operacionais.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mt-4">
            Nosso objetivo é impulsionar organizações para a excelência sustentável e para o alcance dos Objetivos de Desenvolvimento Sustentável (ODS) do Pacto Global da ONU, superando expectativas convencionais.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mt-4">
            Comprometidos com uma missão de alcance significativo, buscamos contribuir substancialmente para organizações, elevando a conscientização sobre os pilares essenciais do ESG. Guiados por valores fundamentais, como Inovação Sustentável, Resultados Consistentes e Integridade, nossa consultoria entrelaça sustentabilidade e responsabilidade social em cada fase de nossas operações.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-8"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <pillar.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-3">{pillar.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
