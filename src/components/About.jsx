import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useLang } from "../i18n/LangContext";

export default function About() {
  const { t } = useLang();
  const a = t.about;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="bg-ocean py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border border-gold/30 z-0" />
              <div className="relative z-10 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=700&q=80"
                  alt="Tour guide"
                  className="w-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                  style={{ height: "520px", objectPosition: "top" }}
                />
                <div className="absolute bottom-6 right-6 bg-gold text-ocean px-5 py-4 text-center">
                  <p className="font-display text-4xl font-bold leading-none">8+</p>
                  <p className="font-mono text-xs tracking-widest uppercase mt-1">{a.badge}</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 mt-4">
              {a.features.map((f) => (
                <div key={f.label} className="bg-cliff/5 border border-cliff/10 px-4 py-3 flex items-center gap-3">
                  <span className="text-xl">{f.icon}</span>
                  <div>
                    <p className="text-gold font-mono text-[10px] uppercase tracking-wider">{f.label}</p>
                    <p className="text-cliff text-xs font-medium leading-tight">{f.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          >
            <p className="font-mono text-gold text-xs tracking-[0.3em] uppercase mb-4 flex items-center gap-3">
              <span className="w-8 h-px bg-gold" /> {a.eyebrow}
            </p>
            <h2 className="section-title text-cliff mb-6">
              {a.h2_line1}
              <span className="text-gold italic block">{a.h2_accent}</span>
            </h2>
            <p className="text-cliff/70 leading-relaxed mb-4">{a.p1}</p>
            <p className="text-cliff/70 leading-relaxed mb-8">{a.p2}</p>
            <ul className="space-y-3 mb-10">
              {a.highlights.map((item) => (
                <li key={item} className="flex items-center gap-3 text-cliff/80 text-sm">
                  <span className="w-4 h-px bg-gold flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <a href="#contact" className="btn-primary">{a.cta}</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
