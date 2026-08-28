import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useLang } from "../i18n/LangContext";

export default function HowItWorks() {
  const { t } = useLang();
  const h = t.howItWorks;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-ocean py-24" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="font-mono text-gold text-xs tracking-[0.3em] uppercase mb-4 flex items-center justify-center gap-3"
          >
            <span className="w-8 h-px bg-gold" /> {h.eyebrow} <span className="w-8 h-px bg-gold" />
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="section-title text-cliff mb-4"
          >
            {h.h2_line1}
            <span className="text-gold italic block">{h.h2_accent}</span>
          </motion.h2>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-px bg-gold/20 z-0" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {h.steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="text-center"
              >
                <div className="relative inline-flex flex-col items-center mb-6">
                  <div className="w-16 h-16 border-2 border-gold bg-ocean flex items-center justify-center text-2xl">
                    {step.icon}
                  </div>
                  <div className="w-6 h-6 bg-gold flex items-center justify-center -mt-3 -mr-12 absolute right-0 top-0">
                    <span className="font-mono text-ocean text-[10px] font-bold">{step.number}</span>
                  </div>
                </div>
                <h3 className="font-display text-cliff text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-cliff/60 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-14"
        >
          <a href="#contact" className="btn-primary">{h.cta}</a>
        </motion.div>
      </div>
    </section>
  );
}
