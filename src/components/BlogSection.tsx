import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const posts = [
  {
    title: "IFRS S1 e S2: de preparação à realidade operacional",
    date: "Fevereiro 2026",
    excerpt: "Em 2026, os padrões IFRS S1 e IFRS S2 deixam de ser apenas um tema de preparação e passam a...",
    link: "https://brightbrazil.co/en/ifrs-s1-e-s2-de-preparacao-a-realidade-operacional-2/",
  },
  {
    title: "Treinamentos ESG nas empresas: por que capacitar pessoas é estratégico",
    date: "Fevereiro 2026",
    excerpt: "O ESG deixou de ser um conceito teórico e passou a ser parte central da estratégia empresarial...",
    link: "https://brightbrazil.co/en/treinamentos-esg-nas-empresas-por-que-capacitar-pessoas-e-estrategico/",
  },
  {
    title: "Cidades inteligentes: quando tecnologia, ESG e governança caminham juntas",
    date: "Fevereiro 2026",
    excerpt: "As cidades inteligentes deixaram de ser um conceito futurista e se tornaram uma agenda estratégica global...",
    link: "https://brightbrazil.co/en/cidades-inteligentes-quando-tecnologia-esg-e-governanca-caminham-juntas-2/",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="section-padding bg-secondary">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <span className="text-sm font-medium text-primary uppercase tracking-widest mb-4 block">Insights</span>
            <h2 className="text-3xl md:text-5xl font-display text-foreground leading-tight">Nosso Blog</h2>
          </div>
          <a
            href="https://brightbrazil.co/en/blog/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 text-primary font-medium hover:underline"
          >
            Ver todos <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.a
              key={post.title}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-8 group cursor-pointer"
            >
              <span className="text-xs text-muted-foreground uppercase tracking-wider">{post.date}</span>
              <h3 className="font-display text-lg text-foreground mt-3 mb-4 group-hover:text-primary transition-colors leading-snug">
                {post.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{post.excerpt}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                Ler mais <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
