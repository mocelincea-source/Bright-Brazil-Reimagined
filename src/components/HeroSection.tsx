import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative pt-20 md:pt-24">
      <div className="relative w-full overflow-hidden h-[88vh] min-h-[600px]">
        {/* Background */}
        <img
          src={heroBg}
          alt="Profissionais trabalhando em ambiente sustentável"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/30 to-transparent" />

        {/* Top chip */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute top-8 md:top-12 left-6 md:left-12 lg:left-20 z-10"
        >
          <span className="inline-flex items-center bg-background/15 backdrop-blur-md border border-background/25 rounded-full px-4 py-1.5 text-xs font-light text-background tracking-wide">
            Consultoria ESG
          </span>
        </motion.div>

        {/* Bottom content */}
        <div className="absolute inset-x-0 bottom-0 z-10 px-6 md:px-12 lg:px-20 pb-10 md:pb-16">
          <div className="grid md:grid-cols-12 gap-8 items-end max-w-[1600px] mx-auto">
            <div className="md:col-span-8">
              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-display font-light text-background leading-[1.02] tracking-tight mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                Excelência em ESG para sua{" "}
                <span className="italic font-extralight">jornada sustentável.</span>
              </motion.h1>

              <motion.p
                className="text-sm md:text-base text-background/75 max-w-xl mb-8 leading-relaxed font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Estratégia, governança e relatórios alinhados aos maiores frameworks globais, transformando compliance em valor competitivo.
              </motion.p>

              <motion.a
                href="#solutions"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="group inline-flex items-center gap-2 bg-accent text-accent-foreground pl-6 pr-2 py-2 rounded-full font-medium text-sm hover:brightness-95 transition-all"
              >
                Começar agora
                <span className="bg-foreground text-background rounded-full p-2 group-hover:translate-x-0.5 transition-transform">
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </motion.a>
            </div>

            {/* Mission card */}
            <motion.div
              className="md:col-span-4 md:justify-self-end w-full md:max-w-xs"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="bg-foreground/40 backdrop-blur-xl border border-background/15 rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span className="text-xs font-light text-accent uppercase tracking-widest">
                    Nossa missão
                  </span>
                </div>
                <p className="text-sm text-background/85 leading-relaxed mb-4 font-light">
                  Elevar organizações à excelência sustentável, transformando ESG em vantagem competitiva real.
                </p>
                <a
                  href="#about"
                  className="inline-flex items-center gap-1.5 text-xs font-light text-background hover:text-accent transition-colors"
                >
                  Saiba mais
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
