import { motion } from "framer-motion";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import GlobalNavbar from "@/components/global/GlobalNavbar";
import GlobalFooter from "@/components/global/GlobalFooter";
import { globalBlogPosts } from "@/data/globalBlogPosts";

const GlobalBlog = () => {
  return (
    <div className="min-h-screen bg-secondary">
      <GlobalNavbar />

      <section className="pt-36 md:pt-40 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <Link
            to="/global"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="text-sm font-medium text-primary uppercase tracking-widest mb-4 block">
              Insights
            </span>
            <h1 className="text-4xl md:text-6xl font-display text-foreground leading-tight">
              Our Blog
            </h1>
            <p className="mt-4 text-muted-foreground text-lg max-w-2xl">
              Expert perspectives on ESG strategy, compliance, and communication for the European market.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {globalBlogPosts.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <Link
                  to={`/global/blog/${post.slug}`}
                  className="glass-card p-8 group cursor-pointer flex flex-col h-full"
                >
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">
                    {post.date}
                  </span>
                  <h2 className="font-display text-lg text-foreground mt-3 mb-4 group-hover:text-primary transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                    {post.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                    Read More <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <GlobalFooter />
    </div>
  );
};

export default GlobalBlog;
