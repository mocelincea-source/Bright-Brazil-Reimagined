import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/bright-logo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.img
          src={logo}
          alt="B.Right Consultoria em ESG"
          className="h-16 md:h-24 mx-auto mb-8 brightness-0 invert"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        />
        <motion.p
          className="text-lg md:text-xl text-secondary/90 font-body max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Consultoria especializada em ESG — Ambiental, Social e Governança — 
          impulsionando organizações para a excelência sustentável.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a
            href="#solutions"
            className="bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-medium text-base hover:opacity-90 transition-opacity"
          >
            Nossas Soluções
          </a>
          <a
            href="#contact"
            className="border border-secondary/30 text-secondary px-8 py-3.5 rounded-full font-medium text-base hover:bg-secondary/10 transition-colors"
          >
            Fale Conosco
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
