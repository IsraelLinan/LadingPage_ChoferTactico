import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useLang } from "../i18n/LangContext";

function ServiceCard({ service, index, cta_card, badge_popular }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative flex flex-col transition-all duration-300 cursor-default
        ${service.highlight ? "bg-gold text-ocean" : "bg-cliff border border-ocean/10 hover:border-gold"}`}
    >
      {service.highlight && (
        <div className="absolute top-0 right-0 bg-ocean text-gold font-mono text-[10px] tracking-widest uppercase px-3 py-1">
          {badge_popular}
        </div>
      )}
      <div className="p-8 flex-1">
        <div className="text-4xl mb-4">{service.icon}</div>
        <h3 className="font-display text-xl font-bold mb-3 text-ocean">{service.title}</h3>
        <p className={`text-sm leading-relaxed mb-5 ${service.highlight ? "text-ocean/80" : "text-ocean/60"}`}>
          {service.desc}
        </p>
        <div className={`font-mono text-xs tracking-widest uppercase mb-4 ${service.highlight ? "text-ocean/60" : "text-gold"}`}>
          ⏱ {service.duration}
        </div>
        <ul className="space-y-2">
          {service.included.map((item) => (
            <li key={item} className={`flex items-center gap-2 text-xs ${service.highlight ? "text-ocean" : "text-ocean/70"}`}>
              <span className={`w-3 h-px ${service.highlight ? "bg-ocean" : "bg-gold"} flex-shrink-0`} />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="px-8 pb-8">
        <a
          href="#contact"
          className={`block text-center text-xs font-semibold tracking-widest uppercase py-3 px-6 transition-all duration-300 border
            ${service.highlight
              ? "bg-ocean text-gold border-ocean hover:bg-ocean/90"
              : "border-ocean/20 text-ocean hover:border-gold hover:text-gold"}`}
        >
          {cta_card}
        </a>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const { t } = useLang();
  const s = t.services;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="services" className="bg-sand py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16" ref={ref}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="font-mono text-gold text-xs tracking-[0.3em] uppercase mb-4 flex items-center justify-center gap-3"
          >
            <span className="w-8 h-px bg-gold" /> {s.eyebrow} <span className="w-8 h-px bg-gold" />
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="section-title text-ocean mb-4"
          >
            {s.h2_line1}
            <span className="text-gold italic block">{s.h2_accent}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-ocean/60 max-w-xl mx-auto"
          >
            {s.subtitle}
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {s.items.map((service, i) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={i}
              cta_card={s.cta_card}
              badge_popular={s.badge_popular}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
