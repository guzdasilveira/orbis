export const SITE = {
  name: "ORBIS",
  url: "https://somosorbis.vercel.app",
  title: "ORBIS — Software para automotoras, gimnasios y psicólogos",
  description:
    "Sistemas de gestión a medida para automotoras (Finanzy), gimnasios (FLUX) y psicólogos (PureMind) en Uruguay y Latam. Cobros, agendas y recordatorios en piloto automático por WhatsApp.",
  whatsappNumber: "59891477400",
  get whatsappLink() {
    return `https://wa.me/${this.whatsappNumber}`;
  },
  email: "somosorbis.uy@gmail.com",
} as const;

export type Vertical = "finanzy" | "flux" | "puremind";

export interface Product {
  id: Vertical;
  name: string;
  nameAccentFrom: number; // index where the gold-accented part of the name starts
  category: string;
  categoryIcon: "Car" | "Dumbbell" | "Brain";
  tagline: string;
  description: string;
  features: string[];
  reversed: boolean;
  hasRealScreenshots: boolean;
  screenshots: { src: string; alt: string }[];
  pricing: {
    amount: number;
    per: string;
    description: string;
    features: string[];
    featured: boolean;
  };
}

export const PRODUCTS: Product[] = [
  {
    id: "finanzy",
    name: "Finanzy",
    nameAccentFrom: 5,
    category: "Automotoras · Financiamiento propio",
    categoryIcon: "Car",
    tagline: "Cobrá a tiempo. Creció sin papeles.",
    description:
      "¿Cuántas cuotas impagas tenés ahora mismo sin saberlo? Finanzy controla cada vehículo, cada contrato y cada vencimiento — y le manda el recordatorio al cliente por WhatsApp antes de que se pase. Sin llamadas. Sin Excel. Sin sorpresas.",
    features: [
      "Stock de vehículos con precio de costo, venta y ganancia por unidad",
      "Historial completo por cliente: vehículos, contratos y cuotas",
      "Recordatorios automáticos de cobro por WhatsApp (3 días antes, día del vencimiento, mora)",
      "Dashboard de ventas, cobranzas y cashflow en tiempo real",
      "Roles diferenciados: admin, vendedores y área de finanzas",
    ],
    reversed: false,
    hasRealScreenshots: true,
    screenshots: [
      { src: "/screenshots/finanzy-dashboard.png", alt: "Dashboard de Finanzy: stock disponible, cuotas vencidas y flujo mensual de una automotora real" },
      { src: "/screenshots/finanzy-reportes.png", alt: "Reportes de Finanzy: ganancia total, flujo de caja y ventas por vendedor" },
    ],
    pricing: {
      amount: 129,
      per: "USD / mes · usuarios ilimitados",
      description: "Para automotoras que financian sus propias ventas y quieren dejar de perseguir cuotas a mano.",
      features: [
        "Stock completo de vehículos",
        "Contratos y cuotas ilimitadas",
        "Recordatorios WhatsApp automáticos",
        "Dashboard de ventas y cashflow",
        "Roles admin, vendedor y finanzas",
      ],
      featured: false,
    },
  },
  {
    id: "flux",
    name: "FLUX",
    nameAccentFrom: 2,
    category: "Gimnasios · Fitness Boutique",
    categoryIcon: "Dumbbell",
    tagline: "Tu gimnasio en piloto automático, con las herramientas que ya usás.",
    description:
      "FLUX se integra con Handy para el booking de clases y con Mercado Pago para los cobros. Los alumnos reservan solos, pagan solos y acceden a sus rutinas personalizadas desde el portal. Vos entrás a ver los números — y a cobrar.",
    features: [
      "Integración nativa con Handy — booking de clases y horarios 24/7",
      "Cobro automático de membresías vía Mercado Pago",
      "Portal del alumno: acceso a rutinas personalizadas por semana",
      "Auto-feedback post-clase por WhatsApp con encuesta de 1 toque",
      "Panel admin: retención, capacidad, staff y alertas de inactividad",
    ],
    reversed: true,
    hasRealScreenshots: false,
    screenshots: [],
    pricing: {
      amount: 169,
      per: "USD / mes · alumnos ilimitados",
      description: "Para gimnasios que quieren automatizar cobros, booking y rutinas sin perder tiempo en admin.",
      features: [
        "Integración con Handy",
        "Cobros automáticos Mercado Pago",
        "Portal de alumno con rutinas",
        "Auto-feedback por WhatsApp",
        "Panel admin con retención",
      ],
      featured: true,
    },
  },
  {
    id: "puremind",
    name: "PureMind",
    nameAccentFrom: 4,
    category: "Psicólogos · Salud Mental",
    categoryIcon: "Brain",
    tagline: "Menos administración, más presencia con el paciente.",
    description:
      "Una hora muerta de turno perdido es dinero que no vuelve. PureMind le manda el recordatorio al paciente solo, gestiona tus aranceles con IVA, y guarda el historial de sesiones con privacidad total y encriptación de extremo a extremo.",
    features: [
      "Historia clínica digital con encriptación y privacidad garantizada",
      "Recordatorio de turno por WhatsApp 24hs antes — el paciente confirma con un toque",
      "Gestión de aranceles, IVA y facturación profesional automática",
      "Dashboard de ingresos, sesiones y evolución por paciente",
      "Agenda inteligente sin solapamientos ni huecos innecesarios",
    ],
    reversed: false,
    hasRealScreenshots: true,
    screenshots: [
      { src: "/screenshots/puremind-dashboard.png", alt: "Dashboard de PureMind: ingresos del mes, pendiente de cobro y tasa de asistencia" },
      { src: "/screenshots/puremind-cobros.png", alt: "Cobros semanales de PureMind: agenda de la semana con turnos programados" },
      { src: "/screenshots/puremind-rentabilidad.png", alt: "Reporte de rentabilidad de PureMind: ingresos por mes y tasa de cobro" },
    ],
    pricing: {
      amount: 89,
      per: "USD / mes · por profesional",
      description: "Para psicólogos y terapeutas que quieren agenda llena, cero horas muertas y cero papeles.",
      features: [
        "Agenda inteligente sin solapamientos",
        "Recordatorios automáticos de turno",
        "Historia clínica encriptada",
        "Gestión de aranceles e IVA",
        "Dashboard de ingresos mensual",
      ],
      featured: false,
    },
  },
];

export const HOW_IT_WORKS = [
  {
    step: "01",
    icon: "Phone" as const,
    title: "Demo en 30 minutos",
    description: "Te mostramos el sistema en vivo con datos de tu industria. Sin presentaciones genéricas — solo lo que importa para tu negocio.",
  },
  {
    step: "02",
    icon: "Settings2" as const,
    title: "Configuración a medida",
    description: "Adaptamos el sistema a tus procesos, tu equipo y tu forma de trabajar. Vos no te adaptás al software — el software se adapta a vos.",
  },
  {
    step: "03",
    icon: "Rocket" as const,
    title: "Lanzamiento en 5 días",
    description: "Tu equipo empieza a operar el sistema. Capacitación incluida. Soporte directo por WhatsApp desde el día uno.",
  },
  {
    step: "04",
    icon: "TrendingUp" as const,
    title: "Resultados en 30 días",
    description: "Medimos el impacto real: plata recuperada, horas ahorradas, clientes retenidos. Números que podés ver en el dashboard.",
  },
];

export const TECH_STACK = {
  chips: ["WhatsApp API", "Mercado Pago", "Handy", "Automatización n8n"],
  cards: [
    {
      icon: "MessageCircle" as const,
      name: "WhatsApp API",
      description: "El canal que ya usa todo el mundo. Cobros, recordatorios y feedback sin que el cliente tenga que instalar nada.",
    },
    {
      icon: "CreditCard" as const,
      name: "Mercado Pago + Handy",
      description: "Cobros automáticos y booking de clases integrado. Los alumnos reservan y pagan sin que vos hagas nada.",
    },
    {
      icon: "Zap" as const,
      name: "Automatización n8n",
      description: "El motor detrás de todo. Conecta apps, dispara mensajes y procesa datos sin una línea de código manual.",
    },
    {
      icon: "RefreshCw" as const,
      name: "Actualización en tiempo real",
      description: "Lo que pasa en tu negocio aparece en el dashboard en segundos. Desde cualquier dispositivo, siempre actualizado.",
    },
  ],
};

export const TESTIMONIAL = {
  quote:
    "Nos ayudó a organizar todo el papeleo que llevábamos, centralizar las ventas y llevar las cuotas de los clientes en un sistema — y no en Excel.",
  author: "Juncal Automóviles",
  role: "Cliente real de Finanzy",
};

export const TICKER_EVENTS = [
  { vertical: "finanzy" as const, text: "recordatorio enviado · cuota #4 · J. González" },
  { vertical: "flux" as const, text: "pago confirmado · Mercado Pago · $3.500" },
  { vertical: "puremind" as const, text: "turno confirmado · mañana 15:00" },
  { vertical: "finanzy" as const, text: "cuota vencida detectada · seguimiento activado" },
  { vertical: "flux" as const, text: "reserva de clase · Spinning 7:00am" },
  { vertical: "puremind" as const, text: "factura con IVA generada automáticamente" },
];

export const VERTICALS = [
  { id: "finanzy" as const, label: "Automotoras" },
  { id: "flux" as const, label: "Gimnasios" },
  { id: "puremind" as const, label: "Psicólogos" },
];
