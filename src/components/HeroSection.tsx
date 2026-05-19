import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { value: "+15", label: "Anos de experiência em ESG" },
  { value: "100%", label: "Foco em resultados sustentáveis" },
];

const metrics = [
  { value: "10+", label: "Setores atendidos" },
  { value: "30+", label: "Projetos entregues" },
  { value: "5+", label: "Frameworks dominados" },
];

const HeroSection = () => {
  return (
    <section className="relative pt-28 md:pt-32 px-4 md:px-6">
      <div className="relative max-w-7xl mx-auto rounded-[2rem] md:rounded-[2.5rem] overflow-hidden min-h-[88vh] flex flex-col justify-end">
        {/* Background */}
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-foreground/20" />
        </div>


        {/* Bottom content area */}
        <div className="relative z-10 px-6 md:px-12 pb-10 md:pb-14 pt-32">
          <div className="grid md:grid-cols-12 gap-6 items-end">
            {/* Headline */}
            <div className="md:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 bg-background/15 backdrop-blur-md border border-background/20 rounded-full px-4 py-1.5 mb-6"
              >
                <Sparkles className="w-3.5 h-3.5 text-accent" />
                <span className="text-xs font-medium text-background uppercase tracking-widest">Consultoria ESG</span>
              </motion.div>

              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-background leading-[0.95] tracking-tight mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                Excelência em ESG para organizações{" "}
                <span className="italic font-light font-display text-accent">sustentáveis</span>
              </motion.h1>

              <motion.p
                className="text-base md:text-lg text-background/80 max-w-xl mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Estratégia, governança e relatórios alinhados aos maiores frameworks globais — transformando compliance em valor competitivo.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <a
                  href="#solutions"
                  className="group inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3.5 rounded-full font-semibold text-sm hover:brightness-95 transition-all"
                >
                  Explorar soluções
                  <span className="bg-accent-foreground/15 rounded-full p-1.5 group-hover:translate-x-0.5 transition-transform">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 border border-background/30 text-background px-6 py-3.5 rounded-full font-medium text-sm hover:bg-background/10 transition-colors"
                >
                  Fale conosco
                </a>
              </motion.div>
            </div>

            {/* Stat cards */}
            <motion.div
              className="md:col-span-5 grid grid-cols-2 gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-background/15 backdrop-blur-xl border border-background/25 rounded-2xl p-5"
                >
                  <div className="text-3xl md:text-4xl font-display font-black text-background mb-1">{s.value}</div>
                  <div className="text-xs text-background/75 leading-snug">{s.label}</div>
                </div>
              ))}

              <div className="col-span-2 bg-background/10 backdrop-blur-xl border border-background/20 rounded-2xl px-5 py-4 flex items-center justify-around">
                {metrics.map((m) => (
                  <div key={m.label} className="text-center">
                    <div className="text-xl md:text-2xl font-display font-bold text-accent">{m.value}</div>
                    <div className="text-[10px] uppercase tracking-wider text-background/70 mt-0.5">{m.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
