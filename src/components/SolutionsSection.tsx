import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const solutions = [
  { num: "01", title: "Conselho consultivo e de administração", desc: "Apoiamos empresas na criação e estruturação de Conselhos Consultivos e de Administração que assegurem boas práticas de governança corporativa. Também oferecemos participação ativa nesses conselhos, trazendo visão estratégica, ética e foco em crescimento sustentável." },
  { num: "02", title: "Consultoria empresarial de gestão e estratégia", desc: "Entregamos consultoria personalizada para fortalecer a gestão, estratégia e controles internos da sua empresa, com foco em inovação, compliance e governança." },
  { num: "03", title: "Relatórios de Sustentabilidade (IFRS S1, S2, GRI, SASB)", desc: "Preparamos Relatórios de Sustentabilidade completos e em conformidade com os principais padrões globais — IFRS S1, S2, GRI, SASB — garantindo transparência e aderência regulatória." },
  { num: "04", title: "Matriz de Materialidade e Dupla Materialidade", desc: "Desenvolvemos a Matriz de Materialidade e Dupla Materialidade para mapear os temas ESG mais relevantes para o negócio e seus stakeholders." },
  { num: "05", title: "Mapeamento de Stakeholders", desc: "Identificamos e categorizamos os stakeholders estratégicos da sua empresa, mapeando interesses, expectativas e potenciais riscos." },
  { num: "06", title: "Inventário de emissões de gases: GHG Protocol, CDP", desc: "Elaboramos inventários completos de emissões de gases poluentes seguindo os protocolos GHG e CDP." },
  { num: "07", title: "Planos de transição climática", desc: "Elaboramos planos estratégicos de transição climática, identificando riscos físicos e de transição, além de oportunidades na jornada rumo a uma economia de baixo carbono." },
  { num: "08", title: "Adequação a regulações", desc: "Garantimos que sua empresa esteja adequada às principais exigências regulatórias nacionais e internacionais — CVM, Susep, Bacen, IFRS, EU, EUA." },
  { num: "09", title: "Implementação IFRS S1, S2", desc: "Apoiamos a implementação e adequação completa da sua estrutura de reporte aos novos padrões internacionais IFRS S1 e S2." },
  { num: "10", title: "Consolidação de Indicadores ESG", desc: "Organizamos, validamos e consolidamos os principais indicadores ESG da sua empresa, facilitando o acompanhamento estratégico." },
  { num: "11", title: "Certificação Sistema B Brasil (B Lab)", desc: "Oferecemos assessoria completa para sua empresa obter a certificação de Empresa B pelo B Lab Brasil." },
  { num: "12", title: "Certificação ISO 14001 e Selo Pró-Ética", desc: "Auxiliamos sua empresa na jornada para obter certificações reconhecidas em sustentabilidade e governança." },
  { num: "13", title: "Workshops e Cursos In-Company", desc: "Desenvolvemos workshops e cursos exclusivos, baseados em cases reais e adaptados às demandas dos seus times, com certificação e relatório de conclusão." },
  { num: "14", title: "Vídeo Institucional de Sustentabilidade", desc: "Produzimos vídeos institucionais que traduzem o compromisso da sua empresa com ESG e sustentabilidade, gravados em estúdio próprio." },
  { num: "15", title: "Campanha para Mídias Sociais e Televisão", desc: "Criamos campanhas de comunicação para fortalecer a imagem sustentável da sua marca nos canais certos." },
];

const SolutionItem = ({ solution }: { solution: typeof solutions[0] }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-6 py-5 text-left group"
      >
        <span className="text-sm font-mono text-primary font-semibold min-w-[2rem]">{solution.num}</span>
        <span className="flex-1 text-base md:text-lg font-medium text-foreground group-hover:text-primary transition-colors">
          {solution.title}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pl-14 pb-5 text-muted-foreground leading-relaxed max-w-2xl">
              {solution.desc}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const SolutionsSection = () => {
  return (
    <section id="solutions" className="section-padding bg-secondary">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-widest mb-4 block">O que fazemos</span>
          <h2 className="text-3xl md:text-5xl font-display text-foreground leading-tight">Soluções em ESG</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {solutions.map((s) => (
            <SolutionItem key={s.num} solution={s} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionsSection;
