import { useLang } from "../i18n/LangContext";

const SOCIAL_LINKS = [
  { label: "Instagram", href: "#", icon: "📸" },
  { label: "TripAdvisor", href: "#", icon: "🌿" },
  { label: "Facebook", href: "#", icon: "👥" },
  { label: "Google Maps", href: "#", icon: "📍" },
];

export default function Footer() {
  const { t } = useLang();
  const f = t.footer;

  return (
    <footer className="bg-ocean border-t border-cliff/10">
      <div className="bg-gold py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-ocean text-2xl md:text-3xl font-bold">{f.banner_title}</h3>
            <p className="text-ocean/70 text-sm mt-1">{f.banner_sub}</p>
          </div>
          <a href="#contact" className="bg-ocean text-gold font-semibold px-8 py-4 tracking-widest uppercase text-sm hover:bg-ocean/90 transition-colors whitespace-nowrap flex-shrink-0">
            {f.banner_cta}
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <img
                src="/assets/logo.png"
                alt="CB Logo"
                className="h-14 w-14 object-contain flex-shrink-0"
              />
              <div>
                <p className="text-cliff font-display text-lg font-bold leading-none">Chofer Táctico</p>
                <p className="text-gold font-mono text-xs tracking-widest uppercase leading-tight">
                  Seguridad Avanzada<br />y Profesional
                </p>
              </div>
            </div>
            <p className="text-cliff/50 text-sm leading-relaxed max-w-xs">{f.tagline}</p>
            <div className="flex gap-4 mt-6">
              {SOCIAL_LINKS.map((s) => (
                <a key={s.label} href={s.href} title={s.label}
                  className="w-10 h-10 border border-cliff/15 flex items-center justify-center text-cliff/50 hover:border-gold hover:text-gold transition-all duration-300">
                  <span className="text-sm">{s.icon}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-mono text-gold text-xs tracking-widest uppercase mb-5">{f.nav_title}</h4>
            <ul className="space-y-3">
              {f.links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-cliff/50 hover:text-gold text-sm transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-gold text-xs tracking-widest uppercase mb-5">{f.contact_title}</h4>
            <ul className="space-y-3">
              <li>
                <a href="https://wa.me/51933445293" target="_blank" rel="noreferrer"
                  className="text-cliff/50 hover:text-gold text-sm transition-colors flex items-center gap-2">
                  <span>📱</span> +51 933 445 293
                </a>
              </li>
              <li className="text-cliff/50 text-sm flex items-center gap-2"><span>✉️</span> fernando_96_2@hotmail.com</li>
              <li className="text-cliff/50 text-sm flex items-center gap-2"><span>📍</span> Miraflores, Lima, Perú</li>
              <li className="text-cliff/50 text-sm flex items-center gap-2"><span>⏰</span> 7am – 9pm · 7 días</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cliff/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cliff/30 font-mono text-xs">{f.copyright}</p>
          <p className="text-cliff/20 font-mono text-xs">{f.credit}</p>
        </div>
      </div>
    </footer>
  );
}
