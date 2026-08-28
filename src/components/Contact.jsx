import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useLang } from "../i18n/LangContext";

const WHATSAPP_NUMBER = "51933445293";

export default function Contact() {
  const { t } = useLang();
  const c = t.contact;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const [form, setForm] = useState({ name: "", email: "", country: "", date: "", people: "1", service: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleWhatsApp = () => {
    const msg = encodeURIComponent(c.whatsapp_msg(form.name, form.date, form.people, form.service, form.message));
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSent(true);
  };

  const f = c.form;

  return (
    <section id="contact" className="bg-sand py-24" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="font-mono text-gold text-xs tracking-[0.3em] uppercase mb-4 flex items-center justify-center gap-3"
          >
            <span className="w-8 h-px bg-gold" /> {c.eyebrow} <span className="w-8 h-px bg-gold" />
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="section-title text-ocean mb-4"
          >
            {c.h2_line1}
            <span className="text-gold italic block">{c.h2_accent}</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="font-display text-ocean text-2xl font-bold mb-4">{c.side_title}</h3>
              <p className="text-ocean/60 text-sm leading-relaxed">{c.side_desc}</p>
            </div>

            <button
              onClick={handleWhatsApp}
              className="flex items-center gap-4 w-full bg-[#25D366] text-white px-6 py-5 hover:bg-[#20bd5a] transition-colors duration-300 group"
            >
              <svg className="w-8 h-8 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <div className="text-left">
                <p className="font-semibold text-sm">{c.wa_label}</p>
                <p className="text-white/80 text-xs font-mono">+51 933 445 293</p>
              </div>
              <svg className="w-5 h-5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div className="space-y-4 border-t border-ocean/10 pt-6">
              {c.info.map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <span className="text-xl mt-0.5">{item.icon}</span>
                  <div>
                    <p className="font-mono text-[10px] text-gold uppercase tracking-widest">{item.label}</p>
                    <p className="text-ocean text-sm">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3"
          >
            {sent ? (
              <div className="bg-mgreen/10 border border-mgreen/30 p-12 text-center h-full flex flex-col items-center justify-center">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="font-display text-ocean text-2xl font-bold mb-3">{c.success_title}</h3>
                <p className="text-ocean/60 mb-6">{c.success_desc}</p>
                <button onClick={handleWhatsApp} className="btn-primary text-xs">{c.success_cta}</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 bg-cliff border border-ocean/10 p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-mono text-[10px] text-ocean/50 uppercase tracking-widest block mb-2">{f.name_label}</label>
                    <input required type="text" name="name" value={form.name} onChange={handleChange}
                      className="w-full border border-ocean/15 bg-transparent px-4 py-3 text-ocean text-sm focus:border-gold focus:outline-none transition-colors"
                      placeholder={f.name_placeholder} />
                  </div>
                  <div>
                    <label className="font-mono text-[10px] text-ocean/50 uppercase tracking-widest block mb-2">{f.country_label}</label>
                    <input type="text" name="country" value={form.country} onChange={handleChange}
                      className="w-full border border-ocean/15 bg-transparent px-4 py-3 text-ocean text-sm focus:border-gold focus:outline-none transition-colors"
                      placeholder={f.country_placeholder} />
                  </div>
                </div>
                <div>
                  <label className="font-mono text-[10px] text-ocean/50 uppercase tracking-widest block mb-2">{f.email_label}</label>
                  <input required type="email" name="email" value={form.email} onChange={handleChange}
                    className="w-full border border-ocean/15 bg-transparent px-4 py-3 text-ocean text-sm focus:border-gold focus:outline-none transition-colors"
                    placeholder={f.email_placeholder} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div>
                    <label className="font-mono text-[10px] text-ocean/50 uppercase tracking-widest block mb-2">{f.date_label}</label>
                    <input type="date" name="date" value={form.date} onChange={handleChange}
                      className="w-full border border-ocean/15 bg-transparent px-4 py-3 text-ocean text-sm focus:border-gold focus:outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="font-mono text-[10px] text-ocean/50 uppercase tracking-widest block mb-2">{f.people_label}</label>
                    <select name="people" value={form.people} onChange={handleChange}
                      className="w-full border border-ocean/15 bg-cliff px-4 py-3 text-ocean text-sm focus:border-gold focus:outline-none transition-colors">
                      {[1,2,3,4,5,6].map((n) => (
                        <option key={n} value={n}>{n} {n === 1 ? f.people_options[0] : f.people_options[1]}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="font-mono text-[10px] text-ocean/50 uppercase tracking-widest block mb-2">{f.service_label}</label>
                    <select name="service" value={form.service} onChange={handleChange}
                      className="w-full border border-ocean/15 bg-cliff px-4 py-3 text-ocean text-sm focus:border-gold focus:outline-none transition-colors">
                      <option value="">{f.service_placeholder}</option>
                      {f.service_options.map((o) => <option key={o}>{o}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="font-mono text-[10px] text-ocean/50 uppercase tracking-widest block mb-2">{f.message_label}</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={4}
                    className="w-full border border-ocean/15 bg-transparent px-4 py-3 text-ocean text-sm focus:border-gold focus:outline-none transition-colors resize-none"
                    placeholder={f.message_placeholder} />
                </div>
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <button type="submit" disabled={loading} className="btn-primary flex-1 text-center text-xs">
                    {loading ? f.btn_sending : f.btn_submit}
                  </button>
                  <button type="button" onClick={handleWhatsApp}
                    className="flex-1 text-center border-2 border-[#25D366] text-[#25D366] font-semibold px-6 py-4 text-xs tracking-widest uppercase hover:bg-[#25D366] hover:text-white transition-all duration-300">
                    {f.btn_whatsapp}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
