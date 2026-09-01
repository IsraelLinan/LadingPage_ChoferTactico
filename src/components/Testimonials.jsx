import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useLang } from "../i18n/LangContext";

const TESTIMONIALS = [
  { name: "Sarah & Tom",      country: "United States", flag: "🇺🇸", rating: 5, tour: "Premium Miraflores Tour",   text: "Christopher is absolutely amazing! He picked us up at our hotel, took us to all the iconic spots in Miraflores and Barranco, and gave us so much historical context. The ceviche lunch he recommended was the best meal of our trip. We felt completely safe and taken care of. 100% recommend!", avatar: "ST", color: "bg-blue-500" },
  { name: "Laura Hoffmann",   country: "Germany",       flag: "🇩🇪", rating: 5, tour: "Sunset + Barranco Tour",   text: "Der Sonnenuntergang vom Malecón war atemberaubend! Christopher sprach ausgezeichnet Englisch und wusste alles über die Geschichte des Viertels. Das Preis-Leistungs-Verhältnis war hervorragend. Ich empfehle ihn jedem, der Lima besucht!", avatar: "LH", color: "bg-red-500" },
  { name: "Familia Rodrigues", country: "Brazil",       flag: "🇧🇷", rating: 5, tour: "Family Tour",              text: "Fomos com nossos três filhos e Christopher foi incrível com as crianças! A Huaca Pucllana deixou nossos filhos impressionados. Com certeza voltaremos e contrataremos ele novamente!", avatar: "FR", color: "bg-green-600" },
  { name: "Isabelle Moreau",  country: "France",        flag: "🇫🇷", rating: 5, tour: "Food Tour",               text: "En tant que française passionnée de gastronomie, je pensais que rien ne pourrait me surprendre... Christopher m'a emmenée dans des endroits incroyables où j'ai découvert le vrai ceviche, le tiradito, la causa. C'était une révélation culinaire!", avatar: "IM", color: "bg-indigo-500" },
  { name: "Marco & Elena",    country: "Argentina",     flag: "🇦🇷", rating: 5, tour: "Historical Tour",         text: "Llegamos a Lima sin saber qué hacer y Christopher nos cambió el viaje. Su conocimiento histórico es impresionante. El vehículo era cómodo y llegó puntual. Los recomendamos sin dudarlo.", avatar: "ME", color: "bg-cyan-600" },
];

export default function Testimonials() {
  const { t } = useLang();
  const tm = t.testimonials;
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % TESTIMONIALS.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const item = TESTIMONIALS[current];

  return (
    <section id="testimonials" className="bg-ocean py-24 overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="font-mono text-gold text-xs tracking-[0.3em] uppercase mb-4 flex items-center justify-center gap-3"
          >
            <span className="w-8 h-px bg-gold" /> {tm.eyebrow} <span className="w-8 h-px bg-gold" />
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="section-title text-cliff mb-4"
          >
            {tm.h2_line1}
            <span className="text-gold italic block">{tm.h2_accent}</span>
          </motion.h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.5 }}
              className="bg-cliff/5 border border-cliff/10 p-8 md:p-12"
            >
              <div className="flex gap-1 mb-6">
                {Array.from({ length: item.rating }).map((_, i) => <span key={i} className="text-gold text-xl">★</span>)}
              </div>
              <blockquote className="font-display text-cliff text-lg md:text-xl italic leading-relaxed mb-8">
                "{item.text}"
              </blockquote>
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 ${item.color} flex items-center justify-center text-white font-bold font-mono text-sm flex-shrink-0`}>
                  {item.avatar}
                </div>
                <div>
                  <p className="text-cliff font-semibold flex items-center gap-2">
                    {item.name} <span className="text-xl">{item.flag}</span>
                  </p>
                  <p className="text-cliff/50 font-mono text-xs tracking-wider">
                    {item.country} · {item.tour}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-2 mt-8">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`transition-all duration-300 ${i === current ? "w-8 h-1 bg-gold" : "w-1 h-1 bg-cliff/20 hover:bg-cliff/50"}`}
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mt-12">
          {TESTIMONIALS.map((item, i) => (
            <button
              key={item.name}
              onClick={() => setCurrent(i)}
              className={`text-left p-4 border transition-all duration-300 ${i === current ? "border-gold bg-gold/10" : "border-cliff/10 hover:border-cliff/30"}`}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className={`w-6 h-6 ${item.color} flex items-center justify-center text-white font-bold font-mono text-[9px]`}>
                  {item.avatar}
                </div>
                <span className="text-lg">{item.flag}</span>
              </div>
              <p className="text-cliff text-xs font-medium leading-tight">{item.name}</p>
              <p className="text-gold text-xs font-mono">{"★".repeat(item.rating)}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
