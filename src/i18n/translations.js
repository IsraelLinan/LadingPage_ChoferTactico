export const translations = {
  es: {
    // ---------- NAVBAR ----------
    nav: {
      links: [
        { label: "Inicio",      href: "#hero" },
        { label: "Sobre mí",   href: "#about" },
        { label: "Servicios",  href: "#services" },
        { label: "Destinos",   href: "#gallery" },
        { label: "Tarifas",    href: "#pricing" },
        { label: "Testimonios",href: "#testimonials" },
        { label: "Contacto",   href: "#contact" },
      ],
      cta: "Reservar Tour",
    },

    // ---------- HERO ----------
    hero: {
      eyebrow: "Miraflores · Lima · Perú",
      h1_line1: "Descubre",
      h1_accent: "Miraflores",
      h1_line3: "como nunca antes",
      subtitle: "Transporte privado + guía turístico personalizado. Vive la magia del malecón, la gastronomía y la historia de Lima con alguien que la conoce de adentro.",
      cta_primary: "Reservar mi tour",
      cta_secondary: "Ver servicios",
      scroll: "SCROLL",
      stats: [
        { value: "8+",   label: "Años de experiencia" },
        { value: "500+", label: "Turistas satisfechos" },
        { value: "15+",  label: "Destinos en Miraflores" },
        { value: "4.9★", label: "Calificación promedio" },
      ],
    },

    // ---------- ABOUT ----------
    about: {
      eyebrow: "Sobre mí",
      h2_line1: "Tu guía de confianza",
      h2_accent: "en Miraflores",
      p1: "Soy Christopher Bobadilla Hinojo, chofer certificado y guía turístico oficial con más de 8 años mostrando lo mejor de Lima a viajeros de todo el mundo. Nací y crecí en Miraflores, así que no solo conozco los lugares — conozco las historias detrás de cada rincón.",
      p2: "Mi misión es que te vayas con algo más que fotos: que te vayas con experiencias, sabores y memorias que duran toda la vida. Cada tour es diseñado a medida según lo que tú quieres vivir.",
      cta: "Hablar con CHRISTOPHER",
      badge: "Años guiando",
      features: [
        { icon: "🗣️", label: "Idiomas",        value: "Español · Inglés" },
        { icon: "🚗", label: "Vehículo",       value: "SUV privada con A/C" },
        { icon: "📍", label: "Zona",           value: "Miraflores y toda Lima" },
        { icon: "✅", label: "Certificación",  value: "Guía oficial de turismo" },
      ],
      highlights: [
        "Rutas personalizadas según tu interés",
        "Recojo y retorno en tu hotel o airbnb",
        "Tour gastronómico incluido en paquetes premium",
        "Disponible 7 días a la semana",
        "Grupos pequeños (máx. 6 personas)",
        "Asistencia en inglés y portugués",
      ],
    },

    // ---------- SERVICES ----------
    services: {
      eyebrow: "Lo que ofrezco",
      h2_line1: "Servicios diseñados",
      h2_accent: "para tu aventura",
      subtitle: "Cada servicio es una experiencia pensada para darte lo mejor de Miraflores, con la comodidad y personalización que mereces.",
      badge_popular: "Más popular",
      cta_card: "Consultar disponibilidad",
      items: [
        {
          icon: "🗺️",
          title: "Tour Privado Miraflores",
          desc: "Recorre los puntos más icónicos del distrito: el malecón, el Parque del Amor, Larcomar y la Huaca Pucllana. Todo en un vehículo cómodo y con explicación detallada de cada lugar.",
          duration: "4-6 horas",
          included: ["Transporte privado", "Guía bilingüe", "Paradas fotográficas", "Agua embotellada"],
          highlight: true,
        },
        {
          icon: "🍽️",
          title: "Tour Gastronómico",
          desc: "Prueba la mejor gastronomía limeña: ceviche, anticuchos, causa, lomo saltado. Te llevo a los restaurantes y huariques auténticos que los turistas no conocen.",
          duration: "3-4 horas",
          included: ["Transporte", "Guía experto", "3 paradas gastronómicas", "Degustaciones incluidas"],
          highlight: false,
        },
        {
          icon: "✈️",
          title: "Transfer Aeropuerto",
          desc: "Traslado seguro, puntual y sin estrés entre el Aeropuerto Internacional Jorge Chávez y cualquier hotel o dirección en Miraflores, San Isidro o Barranco.",
          duration: "45-90 min",
          included: ["Seguimiento de vuelo", "Ayuda con equipaje", "A/C", "WiFi en el vehículo"],
          highlight: false,
        },
        {
          icon: "🌅",
          title: "Tour Atardecer + Barranco",
          desc: "La combinación perfecta: el atardecer sobre el Pacífico desde el malecón y luego una noche en el bohemio Barranco. Una experiencia que no olvidarás.",
          duration: "4-5 horas",
          included: ["Transporte", "Guía nocturno", "Ruta personalizada", "Foto en el malecón"],
          highlight: false,
        },
        {
          icon: "🏛️",
          title: "Tour Histórico & Cultural",
          desc: "Desde el Centro Histórico de Lima (Patrimonio UNESCO) hasta las huacas preincas de Miraflores. Un viaje en el tiempo que abarca 3,000 años de historia.",
          duration: "6-8 horas",
          included: ["Entrada a museos", "Almuerzo típico", "Guía especializado", "Transporte A/C"],
          highlight: false,
        },
        {
          icon: "🚗",
          title: "Servicio a Medida",
          desc: "¿Tienes una ruta especial en mente? Diseñamos juntos el itinerario perfecto según tus intereses, tiempo disponible y presupuesto. Tú decides, yo lo hago realidad.",
          duration: "Flexible",
          included: ["Itinerario personalizado", "Horario flexible", "Consulta previa gratuita", "Precio negociable"],
          highlight: false,
        },
      ],
    },

    // ---------- GALLERY ----------
    gallery: {
      eyebrow: "Destinos",
      h2_line1: "Lugares que",
      h2_accent: "te van a enamorar",
      filter_all: "Todos",
      lightbox_cta: "Incluir en mi tour",
      lightbox_close: "Cerrar ✕",
      destinations: [
        { title: "Malecón de Miraflores", category: "Paisaje",         desc: "El acantilado más famoso de Lima, con vistas espectaculares al Océano Pacífico. Ideal para ver el atardecer.", img: "/assets/images/malecon-miraflores.jpg" },
        { title: "Parque del Amor",       category: "Romántico",       desc: "El icónico parque diseñado por Victor Delfín, famoso por la escultura 'El Beso' y su mosaico colorido.", img: "/assets/images/Parque-del-Amor.jpg" },
        { title: "Larcomar",              category: "Compras & Ocio",  desc: "Centro comercial y de entretenimiento enclavado en los acantilados, con tiendas, restaurantes y cine frente al mar.", img: "/assets/images/larcomar.jpg" },
        { title: "Huaca Pucllana",        category: "Historia",        desc: "Pirámide preinca de 1,500 años de antigüedad, ubicada en pleno Miraflores. Un viaje al pasado de Lima.", img: "/assets/images/huaca_pucllana.jpg" },
        { title: "Costa Verde",           category: "Naturaleza",      desc: "La extensa playa al pie de los acantilados de Miraflores. Perfecta para ver surfistas y disfrutar el Pacífico.", img: "/assets/images/costa_verde.jpg" },
        { title: "Parque Kennedy",        category: "Cultura",         desc: "El corazón de Miraflores, famoso por sus gatos, artesanías, y feria de antigüedades los fines de semana.", img: "/assets/images/parque_kennedy.jpg" },
        { title: "Gastronomía Limeña",    category: "Gastronomía",     desc: "Ceviche, tiradito, lomo saltado, causa... La cocina peruana declarada Patrimonio Cultural de la Nación.", img: "/assets/images/ceviche.jpg" },
        { title: "Barranco al Atardecer", category: "Arte & Bohemia",  desc: "El barrio más bohemio y colorido de Lima, a minutos de Miraflores. Murales, galerías y bares con historia.", img: "/assets/images/barranco.jpg" },
      ],
    },

    // ---------- HOW IT WORKS ----------
    howItWorks: {
      eyebrow: "Proceso",
      h2_line1: "Reservar es",
      h2_accent: "muy sencillo",
      cta: "Empezar a planear mi tour",
      steps: [
        { number: "01", icon: "💬", title: "Contáctame",          desc: "Escríbeme por WhatsApp o completa el formulario. Cuéntame cuándo llegas, cuántos son y qué te gustaría conocer de Miraflores." },
        { number: "02", icon: "🗺️", title: "Diseñamos tu ruta",   desc: "En 24 horas te envío un itinerario personalizado con todos los detalles: paradas, duración, precio y qué incluye cada servicio." },
        { number: "03", icon: "✅", title: "Confirmas tu reserva", desc: "Una vez que apruebes el plan, confirmas con un depósito mínimo. Todo es seguro y sin complicaciones." },
        { number: "04", icon: "🚗", title: "¡Vivimos el tour!",   desc: "Me presento puntual en tu hotel con el vehículo listo. Tú solo disfruta, que del resto me encargo yo." },
      ],
    },

    // ---------- PRICING ----------
    pricing: {
      eyebrow: "Tarifas",
      h2_line1: "Precios claros,",
      h2_accent: "sin sorpresas",
      subtitle: "Todos los precios incluyen transporte. También aceptamos soles peruanos (PEN). Contáctame para grupos especiales o tours a medida.",
      badge_popular: "Más elegido",
      footnote: "* Transfer aeropuerto desde $25 USD · Precios en soles disponibles · Consultar tarifas para grupos de +6",
      plans: [
        {
          name: "Básico", subtitle: "Ideal para conocer lo esencial",
          price: "45", currency: "USD", duration: "por persona",
          features: ["Tour privado 3-4 horas", "Transporte A/C", "Guía en español", "Hasta 4 destinos en Miraflores", "Fotos en los puntos icónicos"],
          notIncluded: ["Entradas a museos", "Alimentación", "Guía en inglés"],
          cta: "Reservar básico", highlight: false,
        },
        {
          name: "Premium", subtitle: "La experiencia completa",
          price: "85", currency: "USD", duration: "por persona",
          features: ["Tour privado 6-8 horas", "SUV privada con A/C y WiFi", "Guía bilingüe (ES / EN)", "Miraflores + Barranco + Centro", "Almuerzo típico incluido", "Entradas a Huaca Pucllana", "Fotos profesionales enviadas por email"],
          notIncluded: [],
          cta: "Reservar premium", highlight: true,
        },
        {
          name: "Familia", subtitle: "Para grupos de hasta 6",
          price: "180", currency: "USD", duration: "por grupo",
          features: ["Todo el día (8-10 horas)", "Van privada para 6 personas", "Guía bilingüe", "Ruta personalizada", "2 comidas incluidas", "Entradas a museos incluidas", "Precio fijo sin importar el grupo"],
          notIncluded: [],
          cta: "Reservar familiar", highlight: false,
        },
      ],
    },

    // ---------- TESTIMONIALS ----------
    testimonials: {
      eyebrow: "Testimonios",
      h2_line1: "Lo que dicen",
      h2_accent: "mis viajeros",
    },

    // ---------- CONTACT ----------
    contact: {
      eyebrow: "Contacto",
      h2_line1: "Planifica",
      h2_accent: "tu tour ahora",
      side_title: "Hablemos",
      side_desc: "La forma más rápida de coordinar tu tour es por WhatsApp. Respondo en menos de 2 horas durante el día. También puedes escribirme por el formulario y te contacto en menos de 24 horas.",
      wa_label: "WhatsApp directo",
      info: [
        { icon: "📍", label: "Punto de partida", value: "Tu hotel en Miraflores" },
        { icon: "⏰", label: "Horario de atención", value: "7am – 9pm todos los días" },
        { icon: "💳", label: "Formas de pago", value: "Efectivo · Tarjeta · Yape · Plin" },
        { icon: "✉️", label: "Email", value: "fernando_96_2@hotmail.com" },
      ],
      form: {
        name_label: "Tu nombre *", name_placeholder: "Ana García",
        country_label: "País de origen", country_placeholder: "Estados Unidos",
        email_label: "Tu Email *", email_placeholder: "ana@email.com",
        date_label: "Fecha del tour",
        people_label: "N° personas",
        people_options: ["persona", "personas"],
        service_label: "Servicio",
        service_placeholder: "Elegir...",
        service_options: ["Tour Básico", "Tour Premium", "Tour Familiar", "Tour Gastronómico", "Tour Atardecer", "Transfer Aeropuerto", "Tour a Medida"],
        message_label: "Mensaje (opcional)",
        message_placeholder: "Cuéntame qué te gustaría ver o cualquier duda que tengas...",
        btn_submit: "Enviar consulta",
        btn_sending: "Enviando...",
        btn_whatsapp: "Enviar por WhatsApp",
      },
      success_title: "¡Mensaje enviado!",
      success_desc: "Cristhofer se pondrá en contacto contigo en menos de 24 horas. También puedes escribirle por WhatsApp para una respuesta más rápida.",
      success_cta: "Continuar por WhatsApp",
      whatsapp_msg: (name, date, people, service, message) =>
        `Hola Cristhofer! 👋 Me llamo ${name || "..."} y quisiera consultar sobre un tour en Miraflores.\n\n📅 Fecha: ${date || "por confirmar"}\n👥 Personas: ${people}\n🗺️ Servicio: ${service || "por definir"}\n\n${message || ""}`,
    },

    // ---------- FOOTER ----------
    footer: {
      tagline: "Transporte privado y guía turístico certificado en Miraflores, Lima. Mostrando lo mejor del Perú al mundo desde 2016.",
      nav_title: "Navegación",
      contact_title: "Contacto rápido",
      links: [
        { label: "Inicio",     href: "#hero" },
        { label: "Servicios",  href: "#services" },
        { label: "Destinos",   href: "#gallery" },
        { label: "Tarifas",    href: "#pricing" },
        { label: "Contacto",   href: "#contact" },
      ],
      banner_title: "¿Listo para descubrir Miraflores?",
      banner_sub: "Reserva hoy y vive Lima de una manera diferente.",
      banner_cta: "Reservar mi tour →",
      copyright: "© 2026 Miraflores Guide & Transfer · Todos los derechos reservados",
      credit: "Hecho por Ing. Israel Linan en Lima, Perú",
    },

    // ---------- WHATSAPP FLOAT ----------
    whatsappFloat: {
      tooltip: "¡Escríbeme ahora!",
      msg: "Hola Cristhofer! 👋 Me interesa reservar un tour en Miraflores. ¿Tienes disponibilidad?",
    },
  },

  // ============================================================
  //  ENGLISH
  // ============================================================
  en: {
    nav: {
      links: [
        { label: "Home",         href: "#hero" },
        { label: "About me",     href: "#about" },
        { label: "Services",     href: "#services" },
        { label: "Destinations", href: "#gallery" },
        { label: "Pricing",      href: "#pricing" },
        { label: "Reviews",      href: "#testimonials" },
        { label: "Contact",      href: "#contact" },
      ],
      cta: "Book a Tour",
    },

    hero: {
      eyebrow: "Miraflores · Lima · Peru",
      h1_line1: "Discover",
      h1_accent: "Miraflores",
      h1_line3: "like never before",
      subtitle: "Private transport + personalized tour guide. Experience the magic of the cliffside promenade, Peruvian cuisine, and Lima's history with someone who knows it from the inside.",
      cta_primary: "Book my tour",
      cta_secondary: "View services",
      scroll: "SCROLL",
      stats: [
        { value: "8+",   label: "Years of experience" },
        { value: "500+", label: "Happy travelers" },
        { value: "15+",  label: "Spots in Miraflores" },
        { value: "4.9★", label: "Average rating" },
      ],
    },

    about: {
      eyebrow: "About me",
      h2_line1: "Your trusted guide",
      h2_accent: "in Miraflores",
      p1: "I'm Cristhofer Bobadilla, a certified driver and official tour guide with over 8 years showing the best of Lima to travelers from around the world. I was born and raised in Miraflores, so I don't just know the places — I know the stories behind every corner.",
      p2: "My mission is for you to leave with more than photos: to leave with experiences, flavors and memories that last a lifetime. Every tour is custom-designed around what you want to live.",
      cta: "Chat with Cristhofer",
      badge: "Years guiding",
      features: [
        { icon: "🗣️", label: "Languages",      value: "Spanish · English" },
        { icon: "🚗", label: "Vehicle",         value: "Private SUV with A/C" },
        { icon: "📍", label: "Area",            value: "Miraflores & all Lima" },
        { icon: "✅", label: "Certification",   value: "Official tour guide" },
      ],
      highlights: [
        "Custom routes based on your interests",
        "Pick-up and drop-off at your hotel or Airbnb",
        "Food tour included in premium packages",
        "Available 7 days a week",
        "Small groups (max. 6 people)",
        "Assistance in English and Portuguese",
      ],
    },

    services: {
      eyebrow: "What I offer",
      h2_line1: "Services designed",
      h2_accent: "for your adventure",
      subtitle: "Each service is an experience crafted to give you the best of Miraflores, with the comfort and personalization you deserve.",
      badge_popular: "Most popular",
      cta_card: "Check availability",
      items: [
        {
          icon: "🗺️",
          title: "Private Miraflores Tour",
          desc: "Explore the district's most iconic spots: the clifftop promenade, Parque del Amor, Larcomar and Huaca Pucllana — all in a comfortable vehicle with a detailed story at every stop.",
          duration: "4-6 hours",
          included: ["Private transport", "Bilingual guide", "Photo stops", "Bottled water"],
          highlight: true,
        },
        {
          icon: "🍽️",
          title: "Food & Gastronomy Tour",
          desc: "Taste the best of Lima's cuisine: ceviche, anticuchos, causa, lomo saltado. I'll take you to authentic restaurants and local gems that most tourists never find.",
          duration: "3-4 hours",
          included: ["Transport", "Expert guide", "3 food stops", "Tastings included"],
          highlight: false,
        },
        {
          icon: "✈️",
          title: "Airport Transfer",
          desc: "Safe, punctual, stress-free transfer between Jorge Chávez International Airport and any hotel or address in Miraflores, San Isidro or Barranco.",
          duration: "45-90 min",
          included: ["Flight tracking", "Luggage assistance", "A/C", "In-vehicle WiFi"],
          highlight: false,
        },
        {
          icon: "🌅",
          title: "Sunset + Barranco Tour",
          desc: "The perfect combination: watching the Pacific sunset from the clifftop promenade, then an evening in the bohemian Barranco district. An experience you won't forget.",
          duration: "4-5 hours",
          included: ["Transport", "Evening guide", "Custom route", "Photo at the promenade"],
          highlight: false,
        },
        {
          icon: "🏛️",
          title: "Historical & Cultural Tour",
          desc: "From Lima's UNESCO World Heritage Historic Center to the pre-Inca huacas of Miraflores — a journey through 3,000 years of history.",
          duration: "6-8 hours",
          included: ["Museum entry", "Traditional lunch", "Specialist guide", "A/C transport"],
          highlight: false,
        },
        {
          icon: "🚗",
          title: "Custom Service",
          desc: "Have a special route in mind? Let's design the perfect itinerary together based on your interests, schedule and budget. You decide, I make it happen.",
          duration: "Flexible",
          included: ["Personalized itinerary", "Flexible schedule", "Free pre-tour consult", "Negotiable price"],
          highlight: false,
        },
      ],
    },

    gallery: {
      eyebrow: "Destinations",
      h2_line1: "Places that will",
      h2_accent: "steal your heart",
      filter_all: "All",
      lightbox_cta: "Add to my tour",
      lightbox_close: "Close ✕",
      destinations: [
        { title: "Miraflores Boardwalk",   category: "Scenery",        desc: "Lima's most famous clifftop promenade, with breathtaking views of the Pacific Ocean. Perfect for sunsets.", img: "/assets/images/malecon-miraflores.jpg" },
        { title: "Parque del Amor",        category: "Romantic",       desc: "The iconic park designed by Victor Delfín, famous for the 'El Beso' sculpture and colorful mosaic walls.", img: "/assets/images/Parque-del-Amor.jpg" },
        { title: "Larcomar",              category: "Shopping & Fun",  desc: "An open-air mall and entertainment hub built into the cliffs, with shops, restaurants and a cinema over the sea.", img: "/assets/images/larcomar.jpg" },
        { title: "Huaca Pucllana",        category: "History",        desc: "A 1,500-year-old pre-Inca pyramid located right in the heart of Miraflores — a journey back in time.", img: "/assets/images/huaca_pucllana.jpg" },
        { title: "Costa Verde Beach",     category: "Nature",         desc: "The wide beach at the foot of Miraflores cliffs — perfect for watching surfers and enjoying the Pacific.", img: "/assets/images/costa_verde.jpg" },
        { title: "Parque Kennedy",        category: "Culture",        desc: "The heart of Miraflores, famous for its resident cats, handicrafts market, and weekend antique fair.", img: "/assets/images/parque_kennedy.jpg" },
        { title: "Lima Gastronomy",       category: "Food",           desc: "Ceviche, tiradito, lomo saltado, causa... Peruvian cuisine is a declared Cultural Heritage of the Nation.", img: "/assets/images/ceviche.jpg" },
        { title: "Barranco at Sunset",    category: "Art & Bohemia",  desc: "Lima's most colorful and bohemian neighborhood, minutes from Miraflores. Murals, galleries, and storied bars.", img: "/assets/images/barranco.jpg" },
      ],
    },

    howItWorks: {
      eyebrow: "How it works",
      h2_line1: "Booking is",
      h2_accent: "really simple",
      cta: "Start planning my tour",
      steps: [
        { number: "01", icon: "💬", title: "Contact me",         desc: "Message me on WhatsApp or fill out the form. Tell me when you arrive, how many people and what you'd like to see in Miraflores." },
        { number: "02", icon: "🗺️", title: "We design your route", desc: "Within 24 hours I'll send you a personalized itinerary with all the details: stops, duration, price and what each service includes." },
        { number: "03", icon: "✅", title: "Confirm your booking", desc: "Once you approve the plan, you confirm with a small deposit. Everything is safe and hassle-free." },
        { number: "04", icon: "🚗", title: "Let's tour!",         desc: "I'll be at your hotel on time with the vehicle ready. All you have to do is enjoy — I'll take care of the rest." },
      ],
    },

    pricing: {
      eyebrow: "Pricing",
      h2_line1: "Clear prices,",
      h2_accent: "no surprises",
      subtitle: "All prices include transport. We also accept Peruvian soles (PEN). Contact me for large groups or custom tours.",
      badge_popular: "Most chosen",
      footnote: "* Airport transfer from $25 USD · Prices in soles available · Ask for rates for groups of 6+",
      plans: [
        {
          name: "Basic", subtitle: "Perfect for seeing the essentials",
          price: "45", currency: "USD", duration: "per person",
          features: ["Private tour 3-4 hours", "A/C transport", "Spanish-speaking guide", "Up to 4 spots in Miraflores", "Photos at iconic locations"],
          notIncluded: ["Museum entry", "Food & drinks", "English guide"],
          cta: "Book basic", highlight: false,
        },
        {
          name: "Premium", subtitle: "The complete experience",
          price: "85", currency: "USD", duration: "per person",
          features: ["Private tour 6-8 hours", "Private SUV with A/C & WiFi", "Bilingual guide (ES / EN)", "Miraflores + Barranco + Downtown", "Traditional lunch included", "Huaca Pucllana entry", "Professional photos sent by email"],
          notIncluded: [],
          cta: "Book premium", highlight: true,
        },
        {
          name: "Family", subtitle: "For groups up to 6",
          price: "180", currency: "USD", duration: "per group",
          features: ["Full day (8-10 hours)", "Private van for 6 people", "Bilingual guide", "Custom route", "2 meals included", "Museum entries included", "Fixed price regardless of group size"],
          notIncluded: [],
          cta: "Book family", highlight: false,
        },
      ],
    },

    testimonials: {
      eyebrow: "Reviews",
      h2_line1: "What my",
      h2_accent: "travelers say",
    },

    contact: {
      eyebrow: "Contact",
      h2_line1: "Plan",
      h2_accent: "your tour now",
      side_title: "Let's talk",
      side_desc: "The fastest way to coordinate your tour is via WhatsApp. I reply within 2 hours during the day. You can also fill out the form and I'll get back to you within 24 hours.",
      wa_label: "WhatsApp direct",
      info: [
        { icon: "📍", label: "Meeting point",    value: "Your hotel in Miraflores" },
        { icon: "⏰", label: "Hours",            value: "7am – 9pm every day" },
        { icon: "💳", label: "Payment methods", value: "Cash · Card · Yape · Plin" },
        { icon: "✉️", label: "Email",           value: "fernando_96_2@hotmail.com" },
      ],
      form: {
        name_label: "Your name *", name_placeholder: "Jane Smith",
        country_label: "Country of origin", country_placeholder: "USA",
        email_label: "Your Email *", email_placeholder: "jane@email.com",
        date_label: "Tour date",
        people_label: "No. of people",
        people_options: ["person", "people"],
        service_label: "Service",
        service_placeholder: "Choose...",
        service_options: ["Basic Tour", "Premium Tour", "Family Tour", "Food Tour", "Sunset Tour", "Airport Transfer", "Custom Tour"],
        message_label: "Message (optional)",
        message_placeholder: "Tell me what you'd like to see or any questions you have...",
        btn_submit: "Send inquiry",
        btn_sending: "Sending...",
        btn_whatsapp: "Send via WhatsApp",
      },
      success_title: "Message sent!",
      success_desc: "Cristhofer will get in touch with you within 24 hours. You can also message him on WhatsApp for a faster response.",
      success_cta: "Continue on WhatsApp",
      whatsapp_msg: (name, date, people, service, message) =>
        `Hi Cristhofer! 👋 My name is ${name || "..."} and I'd like to ask about a tour in Miraflores.\n\n📅 Date: ${date || "to be confirmed"}\n👥 People: ${people}\n🗺️ Service: ${service || "to be defined"}\n\n${message || ""}`,
    },

    footer: {
      tagline: "Private transport and certified tour guide in Miraflores, Lima. Sharing the best of Peru with the world since 2016.",
      nav_title: "Navigation",
      contact_title: "Quick contact",
      links: [
        { label: "Home",         href: "#hero" },
        { label: "Services",     href: "#services" },
        { label: "Destinations", href: "#gallery" },
        { label: "Pricing",      href: "#pricing" },
        { label: "Contact",      href: "#contact" },
      ],
      banner_title: "Ready to discover Miraflores?",
      banner_sub: "Book today and experience Lima in a whole new way.",
      banner_cta: "Book my tour →",
      copyright: "© 2026 Miraflores Guide & Transfer · All rights reserved",
      credit: "Built by Ing. Israel Linan in Lima, Peru",
    },

    whatsappFloat: {
      tooltip: "Message me now!",
      msg: "Hi Cristhofer! 👋 I'm interested in booking a tour in Miraflores. Do you have availability?",
    },
  },
};
