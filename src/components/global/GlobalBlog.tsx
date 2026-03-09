import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const posts = [
  {
    title: "7,500 Liters for a Pair of Jeans: The Water Cost of the Fashion You Wear",
    date: "June 4, 2025",
    excerpt: "The hidden environmental impact in a common piece of clothing… Have you ever stopped to think about the real cost of a pair of jeans?…",
    link: "https://brightbrazil.co/en/blog/",
  },
  {
    title: "Standing Forest vs. Cut Timber: The Value of Smart Conservation",
    date: "June 4, 2025",
    excerpt: "A standing forest can be worth more than cut timber…",
    link: "https://brightbrazil.co/en/blog/",
  },
  {
    title: "Upcycling: Fashion That Respects the Future",
    date: "June 4, 2025",
    excerpt: "Positive-impact fashion isn't a trend. It's direction…",
    link: "https://brightbrazil.co/en/blog/",
  },
];

const GlobalBlog = () => {
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
            <h2 className="text-3xl md:text-5xl font-display text-foreground leading-tight">Our Blog</h2>
          </div>
          <a
            href="https://brightbrazil.co/en/blog/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 text-primary font-medium hover:underline"
          >
            Read more <ArrowUpRight className="w-4 h-4" />
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
                Read More <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalBlog;
