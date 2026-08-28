import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useLang } from "../i18n/LangContext";

export default function Pricing() {
  const { t } = useLang();
  const p = t.pricing;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="pricing" className="bg-sand py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16" ref={ref}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="font-mono text-gold text-xs tracking-[0.3em] uppercase mb-4 flex items-center justify-center gap-3"
          >
            <span className="w-8 h-px bg-gold" /> {p.eyebrow} <span className="w-8 h-px bg-gold" />
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="section-title text-ocean mb-4"
          >
            {p.h2_line1}
            <span className="text-gold italic block">{p.h2_accent}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-ocean/60 max-w-lg mx-auto text-sm"
          >
            {p.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {p.plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`relative flex flex-col
                ${plan.highlight ? "bg-ocean text-cliff shadow-2xl scale-105" : "bg-cliff border border-ocean/10"}`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-ocean font-mono text-[10px] tracking-widest uppercase px-6 py-1 whitespace-nowrap">
                  {p.badge_popular}
                </div>
              )}
              <div className="p-8 flex-1">
                <p className="font-mono text-xs tracking-widest uppercase mb-1 text-gold">{plan.name}</p>
                <p className={`text-sm mb-6 ${plan.highlight ? "text-cliff/70" : "text-ocean/60"}`}>{plan.subtitle}</p>
                <div className="flex items-end gap-2 mb-1">
                  <span className={`font-mono text-sm ${plan.highlight ? "text-cliff/60" : "text-ocean/50"}`}>{plan.currency}</span>
                  <span className={`font-display text-6xl font-bold leading-none ${plan.highlight ? "text-gold" : "text-ocean"}`}>{plan.price}</span>
                </div>
                <p className={`font-mono text-xs mb-8 ${plan.highlight ? "text-cliff/50" : "text-ocean/40"}`}>{plan.duration}</p>
                <div className={`h-px mb-6 ${plan.highlight ? "bg-cliff/10" : "bg-ocean/10"}`} />
                <ul className="space-y-3 mb-6">
                  {plan.features.map((f) => (
                    <li key={f} className={`flex items-start gap-3 text-sm ${plan.highlight ? "text-cliff/90" : "text-ocean/80"}`}>
                      <span className="text-gold mt-0.5">✓</span>{f}
                    </li>
                  ))}
                  {plan.notIncluded.map((f) => (
                    <li key={f} className={`flex items-start gap-3 text-sm ${plan.highlight ? "text-cliff/30" : "text-ocean/30"}`}>
                      <span className="mt-0.5">✕</span>{f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-8 pb-8">
                <a
                  href="#contact"
                  className={`block text-center font-semibold tracking-widest uppercase text-xs py-4 px-6 transition-all duration-300
                    ${plan.highlight ? "bg-gold text-ocean hover:bg-gold/90" : "border-2 border-ocean/20 text-ocean hover:border-gold hover:text-gold"}`}
                >
                  {plan.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center text-ocean/40 font-mono text-xs mt-10 tracking-wide"
        >
          {p.footnote}
        </motion.p>
      </div>
    </section>
  );
}
