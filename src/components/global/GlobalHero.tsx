import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const clients = ["Syngenta", "HRZ", "Vtall", "Cargopetro", "New Expo", "Rift Distribuidora", "C. Romero Advocacia"];

const GlobalHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 max-w-5xl mx-auto text-center">
        <motion.h1
          className="text-3xl md:text-5xl lg:text-6xl font-display text-secondary leading-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          ESG Strategy & Compliance Support for EU-Regulated Companies
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-secondary/85 max-w-3xl mx-auto mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          B.Right helps organisations align ESG strategy, reporting, governance and stakeholder engagement with EU expectations — turning compliance into credibility, value, and competitive advantage.
        </motion.p>

        <motion.ul
          className="text-secondary/80 text-sm md:text-base space-y-2 max-w-2xl mx-auto mb-10 text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <li className="flex items-start gap-2"><span className="text-accent mt-1">✦</span> EU-ready ESG support (strategy, implementation, governance and reporting)</li>
          <li className="flex items-start gap-2"><span className="text-accent mt-1">✦</span> Alignment with international standards (including IFRS S1 & S2 and leading ESG frameworks)</li>
          <li className="flex items-start gap-2"><span className="text-accent mt-1">✦</span> ESG communication for internal and external audiences (videos, presentations, social media, landing pages, talks)</li>
          <li className="flex items-start gap-2"><span className="text-accent mt-1">✦</span> Gamified ESG & Compliance training to embed ESG into culture and decision-making</li>
        </motion.ul>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
        >
          <a
            href="#meeting"
            className="bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-medium text-base hover:opacity-90 transition-opacity"
          >
            Schedule a free-of-charge meeting
          </a>
          <a
            href="#solutions"
            className="border border-secondary/30 text-secondary px-8 py-3.5 rounded-full font-medium text-base hover:bg-secondary/10 transition-colors"
          >
            See our ESG Solutions
          </a>
        </motion.div>

        {/* Client logos strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="border-t border-secondary/15 pt-8"
        >
          <p className="text-secondary/50 text-xs uppercase tracking-widest mb-6">Trusted by</p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {clients.map((c) => (
              <span key={c} className="text-secondary/60 text-sm font-medium tracking-wide">{c}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GlobalHero;
