import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "../i18n/LangContext";

export default function Navbar() {
  const { lang, t, toggleLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-ocean shadow-2xl py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo — ancho fijo para que no compita con el menú */}
        <a href="#hero" className="flex items-center gap-3 group min-w-[220px]">
          <img
            src="/assets/logo.png"
            alt="CB Logo"
            className="h-14 w-14 object-contain flex-shrink-0"
          />
          <div className="hidden sm:block">
            <p className="text-cliff font-display text-lg leading-none font-bold">
              Chofer Táctico
            </p>
            <p className="text-gold font-mono text-xs tracking-widest uppercase leading-tight">
              Seguridad Avanzada<br />y Profesional
            </p>
          </div>
        </a>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-8 mx-auto">
          {t.nav.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-cliff/80 hover:text-gold text-sm font-medium tracking-wide transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        {/* Right side: Lang toggle + CTA */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Language Toggle */}
          <button
            onClick={toggleLang}
            className="flex items-center gap-2 border border-cliff/20 hover:border-gold px-3 py-2 transition-all duration-300 group"
            title={lang === "es" ? "Switch to English" : "Cambiar a Español"}
          >
            <span className="text-base leading-none">{lang === "es" ? "🇺🇸" : "🇵🇪"}</span>
            <span className="font-mono text-xs text-cliff/60 group-hover:text-gold transition-colors tracking-widest">
              {lang === "es" ? "EN" : "ES"}
            </span>
          </button>
          <a href="#contact" className="btn-primary text-xs py-3 px-6">
            {t.nav.cta}
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="lg:hidden text-cliff p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          <div className="w-6 space-y-1.5">
            <span className={`block h-0.5 bg-gold transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 bg-gold transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 bg-gold transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-ocean border-t border-gold/20"
          >
            <ul className="px-6 py-4 space-y-4">
              {t.nav.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-cliff/80 hover:text-gold block text-sm font-medium tracking-wide transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                {/* Mobile lang toggle */}
                <button
                  onClick={toggleLang}
                  className="flex items-center gap-2 text-cliff/60 text-sm font-mono tracking-widest hover:text-gold transition-colors"
                >
                  <span>{lang === "es" ? "🇺🇸" : "🇵🇪"}</span>
                  {lang === "es" ? "Switch to English" : "Cambiar a Español"}
                </button>
              </li>
              <li>
                <a
                  href="#contact"
                  className="btn-primary text-xs py-3 px-6 block text-center"
                  onClick={() => setMenuOpen(false)}
                >
                  {t.nav.cta}
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
