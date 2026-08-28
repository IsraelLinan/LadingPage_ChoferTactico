import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLang } from "../i18n/LangContext";

export default function Hero() {
  const { t } = useLang();
  const h = t.hero;
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY * 0.4);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${offset}px)`,
          backgroundImage: `url('/assets/images/hero.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.45)",
          willChange: "transform",
          height: "156%",
          top: "-15%",
        }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-ocean/60 via-transparent to-ocean/90" />
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
        className="absolute left-8 md:left-16 top-1/4 bottom-1/4 w-px bg-gold origin-top z-10"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-mono text-gold text-xs tracking-[0.3em] uppercase mb-6 flex items-center gap-3"
          >
            <span className="w-8 h-px bg-gold inline-block" />
            {h.eyebrow}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="font-display text-5xl md:text-7xl font-bold text-cliff leading-tight mb-6"
          >
            {h.h1_line1}
            <span className="text-gold italic block">{h.h1_accent}</span>
            {h.h1_line3}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-cliff/80 text-lg md:text-xl leading-relaxed mb-10 max-w-xl"
          >
            {h.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="flex flex-wrap gap-4"
          >
            <a href="#contact" className="btn-primary">{h.cta_primary}</a>
            <a href="#services" className="btn-outline">{h.cta_secondary}</a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-cliff/20 pt-10"
        >
          {h.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-3xl md:text-4xl font-bold text-gold">{stat.value}</p>
              <p className="text-cliff/60 text-xs font-mono tracking-wide mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-cliff/40 text-xs font-mono tracking-widest">{h.scroll}</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-10 bg-gradient-to-b from-gold to-transparent"
        />
      </motion.div>
    </section>
  );
}
