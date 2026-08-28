import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useLang } from "../i18n/LangContext";

export default function Gallery() {
  const { t } = useLang();
  const g = t.gallery;
  const CATEGORIES = [g.filter_all, ...new Set(g.destinations.map((d) => d.category))];

  const [activeFilter, setActiveFilter] = useState(g.filter_all);
  const [selected, setSelected] = useState(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  // When lang changes, reset filter to "All/Todos"
  const currentAll = g.filter_all;
  const safeFilter = CATEGORIES.includes(activeFilter) ? activeFilter : currentAll;
  const filtered = safeFilter === currentAll
    ? g.destinations
    : g.destinations.filter((d) => d.category === safeFilter);

  return (
    <section id="gallery" className="bg-cliff py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12" ref={ref}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="font-mono text-gold text-xs tracking-[0.3em] uppercase mb-4 flex items-center justify-center gap-3"
          >
            <span className="w-8 h-px bg-gold" /> {g.eyebrow} <span className="w-8 h-px bg-gold" />
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="section-title text-ocean mb-4"
          >
            {g.h2_line1}
            <span className="text-gold italic block">{g.h2_accent}</span>
          </motion.h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`font-mono text-xs tracking-widest uppercase px-5 py-2 border transition-all duration-300
                ${safeFilter === cat
                  ? "bg-gold text-ocean border-gold"
                  : "bg-transparent text-ocean border-ocean/20 hover:border-gold hover:text-gold"}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((dest, i) => (
              <motion.div
                key={dest.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                onClick={() => setSelected(dest)}
                className="relative overflow-hidden cursor-pointer group"
                style={{ height: "280px" }}
              >
                <img
                  src={dest.img}
                  alt={dest.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean via-ocean/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
                <div className="absolute top-4 left-4 bg-gold text-ocean font-mono text-[10px] tracking-widest uppercase px-3 py-1">
                  {dest.category}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-display text-cliff text-lg font-bold leading-tight">{dest.title}</h3>
                  <p className="text-cliff/70 text-xs mt-1 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {dest.desc}
                  </p>
                </div>
                <div className="absolute top-4 right-4 w-8 h-8 border border-cliff/30 flex items-center justify-center text-cliff/60 group-hover:border-gold group-hover:text-gold transition-all duration-300">
                  <span className="text-xs">+</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 bg-ocean/95 flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-cliff max-w-2xl w-full overflow-hidden"
            >
              <img src={selected.img} alt={selected.title} className="w-full object-cover" style={{ height: "360px" }} />
              <div className="p-8">
                <p className="font-mono text-gold text-xs tracking-widest uppercase mb-2">{selected.category}</p>
                <h3 className="font-display text-ocean text-2xl font-bold mb-3">{selected.title}</h3>
                <p className="text-ocean/70 leading-relaxed">{selected.desc}</p>
                <div className="flex gap-4 mt-6">
                  <a href="#contact" className="btn-primary text-xs py-3 px-6" onClick={() => setSelected(null)}>
                    {g.lightbox_cta}
                  </a>
                  <button onClick={() => setSelected(null)} className="text-ocean/50 text-sm hover:text-ocean transition-colors">
                    {g.lightbox_close}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
