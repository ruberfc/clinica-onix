import { FaShieldAlt, FaLightbulb, FaBriefcase, FaStar, FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';
import { FaHandHoldingMedical } from "react-icons/fa6";

import { IconType } from 'react-icons';

export interface Service {
  id: string
  name: string
  description: string
  price: string
  icon: string
}

export interface Testimonial {
  id: string
  name: string
  title: string
  content: string
  rating: number
  image: string
}

export interface Doctor {
  id: string
  name: string
  specialty: string
  bio: string
  credentials: string
  image: string
}

export interface BeforeAfter {
  id: string
  title: string
  description: string
  category: string
  before: string
  after: string
}

export interface Procedure {
  id: string
  name: string
  shortName: string
  description: string
  fullDescription: string
  benefits: string[]
  recovery: string
  category: string
}

export interface FAQ {
  id: string
  question: string
  answer: string
  category: string
}

export interface SuccessCase {
  id: string
  title: string
  description: string
  category: string
  before: string
  after: string
}

export interface Photo {
  id: number | string;
  ImgSrc: string; // URL o path de la imagen
  alt: string;       // Texto alternativo
  description: string; // Mensaje que irá en el modal
}

export interface SocialLink {
  name: string;
  href: string;
  Icon: IconType; 
  ariaLabel: string;
}


export const socialLinks: SocialLink[] = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61575422722156", // ¡Reemplaza por la URL real!
    Icon: FaFacebook, // El componente de icono
    ariaLabel: "Facebook",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/onix.cirugia.plastica", // ¡Reemplaza por la URL real!
    Icon: FaInstagram, // El componente de icono
    ariaLabel: "Instagram",
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@onix.cirugia.plastica?_r=1&_t=ZS-91u0gqmsQYU", // ¡Reemplaza por la URL real!
    Icon: FaTiktok, // El componente de icono (o usa un icono como Music si no existe 'Tiktok')
    ariaLabel: "TikTok",
  },
];

export const Gallery: Photo[] = [
  {
    id: 1,
    ImgSrc: './galeria/img1.webp',
    alt: 'Odontóloga posando con un modelo dental',
    description: 'Diagnóstico y planificación integral utilizando modelos 3D y tecnología de punta para garantizar la precisión en cada tratamiento.'
  },
  // {
  //   id: 2,
  //   ImgSrc: './galeria/img2.webp',
  //   alt: 'Odontóloga con uniforme de trabajo de pie',
  //   description: 'Nuestro equipo profesional está listo para brindarte la mejor atención con los más altos estándares de comodidad y seguridad.'
  // },
  {
    id: 3,
    ImgSrc: './galeria/img3.webp',
    alt: 'Odontóloga sosteniendo una jeringa',
    description: 'Especializados en procedimientos indoloros y seguros, priorizando siempre la comodidad del paciente durante todo el proceso.'
  },
  {
    id: 4,
    ImgSrc: './galeria/img4.webp',
    alt: 'Odontóloga mostrando el resultado de un blanqueamiento',
    description: 'Resultados inmediatos y visibles en blanqueamiento dental. Logra la sonrisa brillante que siempre deseaste en una sola sesión.'
  },
  {
    id: 5,
    ImgSrc: './galeria/img5.webp',
    alt: 'Odontóloga revisando el diagnóstico con guantes celestes',
    description: 'Atención detallada y personalizada en cada etapa del tratamiento, asegurando que se cumplan todas las expectativas estéticas y funcionales.'
  },
  {
    id: 6,
    ImgSrc: './galeria/img6.webp',
    alt: 'Odontóloga revisando una tableta de procedimientos',
    description: 'Utilización de tecnología digital para el registro de datos y planificación, garantizando tratamientos más rápidos y precisos.'
  },
  {
    id: 7,
    ImgSrc: './galeria/img7.webp',
    alt: 'Odontóloga sentada con estetoscopio',
    description: 'Enfoque integral en la salud oral. Nos preocupamos no solo por tus dientes, sino por tu bienestar general.'
  },
];


export const services: Service[] = [
  {
    id: "1",
    name: "Lipoescultura Corporal",
    description: "Rediseño armónico de la silueta mediante liposucción asistida por tecnología de vanguardia, con reposición selectiva de grasa (lipofilling) para definir contornos naturales y duraderos.",
    price: "Personalizado según plan integral",
    icon: "💪",
  },
  {
    id: "2",
    name: "Rinoplastía Ultrasónica de Precisión",
    description: "Cirugía nasal funcional y estética con cinceles ultrasónicos (piezoeléctricos), minimizando trauma tisular, sangrado y tiempo de recuperación, para resultados refinados y simétricos.",
    price: "Incluye evaluación preoperatoria y seguimiento",
    icon: "🔬",
  },
  {
    id: "3",
    name: "Mamoplastia de Aumento",
    description: "Aumento mamario con implantes anatómicos o redondos de última generación (silicona cohesiva), seleccionados mediante planificación 3D para lograr proporción, simetría y aspecto natural.",
    price: "Según tipo de implante y técnica quirúrgica",
    icon: "✨",
  },
  {
    id: "4",
    name: "Blefaroplastía Superior e Inferior",
    description: "Rejuvenecimiento periocular mediante eliminación precisa de exceso de piel y grasa periorbitaria, corrigiendo ptosis palpebral y bolsas, para una mirada descansada y juvenil.",
    price: "Opción ambulatoria con anestesia local",
    icon: "👁️",
  },
  {
    id: "5",
    name: "Ritidectomía (Lifting Facial Integral)",
    description: "Rejuvenecimiento facial profundo mediante tensado de planos musculares (SMAS) y reposicionamiento de tejidos, corrigiendo flaccidez en tercio medio e inferior del rostro y cuello.",
    price: "Incluye plan de recuperación personalizado",
    icon: "🎨",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "María García",
    title: "Paciente satisfecha",
    content:
      "Excelente resultado en mi rinoplastia. El Dr. es muy profesional y me hizo sentir segura durante todo el proceso. Totalmente recomendado.",
    rating: 4,
    image: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&fit=crop&w=400&h=400&q=80", 
  },
  {
    id: "2",
    name: "Juan López",
    title: "Cirugía reconstructiva",
    content:
      "Realizarme la corrección nasal aquí fue la mejor decisión. Resultados naturales y no invasivos. El equipo muy atento.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=400&h=400&q=80",
     
    
  },
  {
    id: "3",
    name: "Abel Martínez",
    title: "Seguimiento de calidad",
    content:
      "Desde la consulta hasta el seguimiento, todo fue perfecto. Cambió mi vida poder tener la nariz que siempre quise.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
  },
  {
    id: "4",
    name: "Carlos Ramírez",
    title: "Mejora funcional y estética",
    content:
      "Tenía problemas para respirar y al mismo tiempo quería mejorar la apariencia de mi nariz. ¡Logré ambos objetivos! Gracias al enfoque integral",
    rating: 5,
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=400&h=400&q=80",
  },
  {
    id: "5",
    name: "Lucía Fernández",
    title: "Experiencia tranquila y segura",
    content:
      "Tenía mucho miedo de someterme a una cirugía, pero el equipo me explicó cada paso con claridad. Hoy me siento más segura y cómoda conmigo misma.",
    rating: 4,
    image: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    id: "6",
    name: "Diego Morales",
    title: "Resultado natural y personalizado",
    content:
      "No quería una nariz 'operada', sino una que se viera en armonía con mi rostro. El resultado superó mis expectativas. Muy agradecido.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1549068106-b024baf5062d?auto=format&fit=crop&w=400&h=400&q=80",
  },
  {
    id: "7",
    name: "Valeria Castro",
    title: "Atención antes y después",
    content:
      "Lo que más valoré fue el seguimiento postoperatorio. Siempre estuvieron disponibles para resolver mis dudas y asegurarse de que mi recuperación iba bien.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&h=400&q=80",
  },
  {
    id: "8",
    name: "Sofía Ruiz",
    title: "Confianza desde la primera cita",
    content:
      "En mi primera consulta ya supe que estaba en las manos correctas. El Dr. escuchó mis inquietudes y propuso un plan realista y personalizado.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&h=400&q=80",
  },
];

export const doctors: Doctor[] = [
  {
    id: "1",
    name: "Dr. Nombre completo",
    specialty: "Cirujano Plástico y Estético",
    bio: "Especialista en rinoplastia con más de 15 años de experiencia",
    credentials: "CMP: 45321 | Miembro de ASPE",
    image: "./doctor-carlos-rodriguez-profile.jpg",
  },
  {
    id: "2",
    name: "Dra. Nombre completo",
    specialty: "Cirujana Plástica",
    bio: "Experta en procedimientos no invasivos y rinoplastia refinada",
    credentials: "CMP: 45322 | Diplomada en Estética",
    image: "./doctor-patricia-soto-profile.jpg",
  },
]

export const beforeAfterGallery: BeforeAfter[] = [
  {
    id: "1",
    title: "Rinoplastia Correctiva",
    description: "Corrección de nariz desviada con resultados armoniosos",
    category: "Correctiva",
    before: "./before-after-corrective-1-before.jpg",
    after: "./before-after-corrective-1-after.jpg",
  },
  {
    id: "2",
    title: "Refinamiento Nasal",
    description: "Reducción de punta y refinamiento de dorso",
    category: "Estética",
    before: "./before-after-aesthetic-1-before.jpg",
    after: "./before-after-aesthetic-1-after.jpg",
  },
]

export const procedures: Procedure[] = [
  {
    id: "1",
    name: "Rinoplastia",
    shortName: "RINOPLASTIA",
    description: "Cirugía completa de remodelación nasal para cambiar forma y tamaño",
    fullDescription:
      "La rinoplastia es uno de los procedimientos quirúrgicos más solicitados en cirugía estética. Está dirigida a personas que desean cambiar la apariencia de su nariz en tamaño, forma y ángulo. En CIRUGÍA PLÁSTICA LIMA, procuramos una solución a tu deseo de tener una nariz perfecta y natural que esté de acuerdo con tus expectativas. Gracias a la constante innovación de técnicas quirúrgicas, se puede obtener bellos y buenos resultados. Esta técnica está enfocada a personas que presentan punta caída y dorso nasal prominente o sus variantes.",
    benefits: ["Nariz más proporcionada", "Mejor función respiratoria", "Resultados naturales", "Aumento de confianza"],
    recovery: "2-3 semanas para actividades normales, 3-6 meses recuperación completa",
    category: "Rinoplastia",
  },
  {
    id: "2",
    name: "Rinoseptoplastia",
    shortName: "RINOSEPTOPLASTIA",
    description: "Corrección de desviación septal combinada con remodelación estética",
    fullDescription:
      "La rinoseptoplastia es la combinación de rinoplastia con septorrinoplastia. Este procedimiento permite tanto mejorar la apariencia de la nariz como corregir problemas funcionales respiratorios. Es ideal para pacientes que presentan desviación del tabique nasal además de insatisfacción estética. Mediante incisiones internas, se corrige la estructura interna manteniéndose cambios externos deseados.",
    benefits: ["Mejora respiratoria", "Cambio estético", "Solución integral", "Resultado duradero"],
    recovery: "2-3 semanas para actividades normales, 3-6 meses recuperación completa",
    category: "Rinoplastia",
  },
  {
    id: "3",
    name: "Rinoplastia Secundaria",
    shortName: "RINOPLASTIA SECUNDARIA",
    description: "Corrección de rinoplastias anteriores para mejorar resultados",
    fullDescription:
      "La rinoplastia secundaria es un procedimiento realizado en pacientes que ya se han sometido a una rinoplastia previa. Se realiza cuando el paciente desea mejorar el resultado anterior, ya sea por cuestiones estéticas o funcionales. Requiere mayor precisión y cuidado debido a los cambios anatómicos previos. Nuestro equipo especializado cuenta con amplia experiencia en este tipo de correcciones.",
    benefits: ["Mejora de resultados previos", "Mayor precisión", "Resultados naturales", "Mayor satisfacción"],
    recovery: "3-4 semanas para actividades normales, 4-8 meses recuperación completa",
    category: "Rinoplastia",
  },
  {
    id: "4",
    name: "Bichat",
    shortName: "BICHAT",
    description: "Remoción de bolas de Bichat para afinar estructura facial",
    fullDescription:
      "El procedimiento de Bichat consiste en la remoción parcial o total de las bolas de Bichat, que son depósitos de grasa ubicados en las mejillas. Este procedimiento es indicado para pacientes que desean una definición más marcada en los pómulos y una apariencia más estilizada. Es una cirugía menor que puede combinarse con otros procedimientos faciales.",
    benefits: ["Pómulos más definidos", "Rostro más estilizado", "Mejor definición facial", "Resultados permanentes"],
    recovery: "1-2 semanas para actividades normales, 2-3 semanas recuperación completa",
    category: "Facial",
  },
  {
    id: "5",
    name: "Mentoplastia",
    shortName: "MENTOPLASTIA",
    description: "Corrección y aumento o reducción del mentón para mejor proporción facial",
    fullDescription:
      "La mentoplastia es la cirugía del mentón que busca mejorar la proporción y simetría facial. Puede ser correctiva para aumentar o reducir el tamaño del mentón según lo requiera cada paciente. Este procedimiento puede realizarse de forma aislada o combinada con otras cirugías faciales como rinoplastia o liposucción facial.",
    benefits: ["Mayor proporción facial", "Mejor perfil", "Mejor definición", "Mayor confianza"],
    recovery: "1-2 semanas para actividades normales, 2-4 semanas recuperación completa",
    category: "Facial",
  },
  {
    id: "6",
    name: "Frontoplastia",
    shortName: "FRONTOPLASTIA",
    description: "Corrección de la frente para mejorar la expresión facial",
    fullDescription:
      "La frontoplastia es un procedimiento que busca corregir la forma y posición de la frente. Puede realizarse para levantar la frente caída, corregir asimetrías o cambiar la altura frontal. Se utiliza frecuentemente en combinación con lifting facial o ritidectomía para lograr resultados más armoniosos.",
    benefits: ["Frente más elevada", "Mejor expresión", "Mayor simetría", "Aspecto más joven"],
    recovery: "2 semanas para actividades normales, 4-6 semanas recuperación completa",
    category: "Facial",
  },
  {
    id: "7",
    name: "Blefaroplastia",
    shortName: "BLEFAROPLASTIA",
    description: "Cirugía de párpados para rejuvenecer la zona ocular",
    fullDescription:
      "La blefaroplastia es la cirugía de los párpados que busca rejuvenecer la zona ocular. Puede ser superior, inferior o ambas. Se realiza para eliminar exceso de piel, grasa o ambos elementos que causan un aspecto cansado. Es uno de los procedimientos más solicitados para mejorar la apariencia de la mirada.",
    benefits: ["Mirada más joven", "Eliminación de bolsas", "Mayor luminosidad", "Mejor apariencia"],
    recovery: "1 semana para actividades normales, 2-3 semanas recuperación completa",
    category: "Facial",
  },
  {
    id: "8",
    name: "Otoplastia",
    shortName: "OTOPLASTIA",
    description: "Corrección de orejas prominentes o irregulares",
    fullDescription:
      "La otoplastia es la cirugía de las orejas que busca corregir su forma, tamaño o posición. Es utilizada para corregir orejas prominentes, asimétricas o deformadas. Puede realizarse en cualquier edad y es un procedimiento que produce resultados dramáticos en la apariencia general.",
    benefits: ["Orejas más proporcionadas", "Mayor simetría", "Mejor apariencia", "Mejor autoestima"],
    recovery: "1 semana para actividades normales, 2-3 semanas recuperación completa",
    category: "Facial",
  },
  {
    id: "9",
    name: "Lifting Facial",
    shortName: "LIFTING FACIAL",
    description: "Estiramiento facial completo para rejuvenecimiento integral del rostro",
    fullDescription:
      "El lifting facial es un procedimiento quirúrgico que busca rejuvenecer el rostro estirando la piel y los tejidos faciales. Se realiza para eliminar arrugas, flacidez y mejorar los signos de envejecimiento. Puede combinarse con otros procedimientos como blefaroplastia o mentoplastia para mejores resultados.",
    benefits: ["Rostro más joven", "Eliminación de flacidez", "Mejora de arrugas", "Resultados duraderos"],
    recovery: "2-3 semanas para actividades normales, 8-12 semanas recuperación completa",
    category: "Facial",
  },
  {
    id: "10",
    name: "Lipo de Papada",
    shortName: "LIPO DE PAPADA",
    description: "Eliminación de grasa en la barbilla y cuello para mayor definición",
    fullDescription:
      "El procedimiento de liposucción de papada busca eliminar el exceso de grasa ubicado debajo de la barbilla. Es utilizado para mejorar la definición del contorno facial y del cuello. Puede realizarse de forma aislada o combinada con mentoplastia para mejores resultados.",
    benefits: ["Papada eliminada", "Contorno definido", "Cuello más estilizado", "Mayor definición"],
    recovery: "1-2 semanas para actividades normales, 2-4 semanas recuperación completa",
    category: "Facial",
  },
  {
    id: "11",
    name: "Afinamiento de Mandíbula",
    shortName: "AFINAMIENTO DE MANDÍBULA",
    description: "Tonificación de mandíbula para un perfil más definido",
    fullDescription:
      "El afinamiento de mandíbula es un procedimiento que busca mejorar la definición del contorno de la mandíbula. Se realiza mediante técnicas no invasivas o quirúrgicas según la necesidad del paciente. Proporciona una mejora significativa en la proporción facial y la definición del perfil.",
    benefits: ["Mandíbula definida", "Perfil mejorado", "Mayor simetría", "Aspecto más proporcionado"],
    recovery: "Variable según técnica, consultar con especialista",
    category: "Facial",
  },
]

export const sliderImages = [
  {
    id: "1",
    src: "/slider/before-after-rhinoplasty-1.jpg",
    alt: "Caso de rinoplastia 1",
  },
  {
    id: "2",
    src: "/slider/before-after-rhinoplasty-2.jpg",
    alt: "Caso de rinoplastia 2",
  },
  {
    id: "3",
    src: "/slider/before-after-rhinoplasty-3.jpg",
    alt: "Caso de rinoplastia 3",
  },
  {
    id: "4",
    src: "/slider/before-after-rhinoplasty-4.jpg",
    alt: "Caso de rinoplastia 4",
  },
]

export const contactInfo = {
  phone: "+51 920 386 383",
  whatsapp: "51920386383",
  email: "correo@correo.com",
  address: "Sedes: Huancayo - Lima, Perú",
  hours: "Lunes - Viernes: 9:00 - 18:00 | Sábado: 10:00 - 14:00",
  website: "www.sitio.com",
}

export const clinicInfo = {
  name: "ÓNIX Cirugía Plástica",
  mission:
    "Proporcionar atención médica especializada de vanguardia en cirugía plástica estética, brindando a nuestros pacientes la más alta calidad de servicio y resultados extraordinarios que transforman vidas con confianza y seguridad.",
  vision:
    "Ser la clínica líder en cirugía plástica estética, reconocidos por nuestra excelencia quirúrgica, innovación constante y la satisfacción total de nuestros pacientes.",
  values: [
    // "Excelencia Quirúrgica",
    // "Seguridad del Paciente",
    // "Profesionalismo",
    // "Innovación Constante",
    // "Atención Personalizada",
    {
      title: "Excelencia Quirúrgica",
      description: "Comprometidos con los más altos estándares en cada procedimiento, asegurando resultados estéticos y funcionales superiores.",
      Icon: FaStar, // Ejemplo de icono: Una estrella o medalla
    },
    {
      title: "Seguridad del Paciente",
      description: "Prioridad absoluta en el bienestar y la seguridad, utilizando protocolos rigurosos y tecnología de vanguardia.",
      Icon: FaShieldAlt, // Ejemplo de icono: Un escudo
    },
    {
      title: "Profesionalismo",
      description: "Actuamos con ética, responsabilidad y transparencia en todas nuestras interacciones, manteniendo la confidencialidad.",
      Icon: FaBriefcase, // Ejemplo de icono: Un maletín o diploma
    },
    {
      title: "Innovación Constante",
      description: "Adopción de las últimas técnicas y tecnologías en cirugía plástica para ofrecer tratamientos avanzados y menos invasivos.",
      Icon: FaLightbulb, // Ejemplo de icono: Una bombilla
    },
    {
      title: "Atención Personalizada",
      description: "Cada paciente es único. Ofrecemos un plan de tratamiento detallado y un acompañamiento individualizado durante todo el proceso.",
      Icon: FaHandHoldingMedical, // Ejemplo de icono: Una persona
    },
  ],
  doctorPhone: "+51 920 386 383",
  budgetPhone: "+51 920 386 383",
  sedes: ["Huancayo", "Lima"],
}

export const clinicStats = [
  { label: "Procedimientos Exitosos", value: "2,500+", icon: "✓" },
  { label: "Pacientes Satisfechos", value: "98%", icon: "⭐" },
  { label: "Años de Experiencia", value: "15+", icon: "👨‍⚕️" },
  { label: "Especialistas", value: "8", icon: "🏥" },
]

export const whyChooseUs = [
  {
    id: "1",
    title: "Cirujanos Certificados",
    description: "Nuestro equipo cuenta con certificaciones internacionales y amplia experiencia en cirugía plástica",
    icon: "🎓",
  },
  {
    id: "2",
    title: "Tecnología de Punta",
    description: "Utilizamos los equipos quirúrgicos más modernos y técnicas innovadoras",
    icon: "🔬",
  },
  {
    id: "3",
    title: "Resultados Naturales",
    description: "Nuestro enfoque es lograr resultados que se vean naturales y armoniosos",
    icon: "✨",
  },
  {
    id: "4",
    title: "Atención Integral",
    description: "Seguimiento completo desde la consulta inicial hasta la recuperación total",
    icon: "❤️",
  },
  {
    id: "5",
    title: "Seguridad Garantizada",
    description: "Protocolos de seguridad rigurosos e infraestructura médica de clase mundial",
    icon: "🛡️",
  },
  {
    id: "6",
    title: "Privacidad Asegurada",
    description: "Ambiente cómodo y privado para garantizar la confidencialidad de nuestros pacientes",
    icon: "🔒",
  },
]

export const faqs: FAQ[] = [
  {
    id: "1",
    question: "¿Cuánto tiempo dura el procedimiento de rinoplastia?",
    answer:
      "El tiempo de cirugía varía entre 2 a 3 horas dependiendo de la complejidad del caso. Nuestro equipo quirúrgico es experto en optimizar tiempos sin comprometer la calidad del resultado. La consulta preoperatoria incluye una estimación precisa del tiempo necesario para su procedimiento específico.",
    category: "Procedimiento",
  },
  {
    id: "2",
    question: "¿Cuál es el periodo de recuperación después de la rinoplastia?",
    answer:
      "La recuperación inicial es de 2-3 semanas para retomar actividades normales. Sin embargo, la recuperación completa toma entre 3-6 meses, durante los cuales continuarán mejorando los resultados. Le proporcionaremos instrucciones detalladas de cuidados postoperatorios para garantizar una recuperación óptima.",
    category: "Recuperación",
  },
  {
    id: "3",
    question: "¿Es posible la rinoplastia no invasiva?",
    answer:
      "Sí, ofrecemos rinoplastia no invasiva utilizando ácido hialurónico. Este procedimiento es ideal para cambios menores de forma y es completamente reversible. Los resultados duran aproximadamente 12-18 meses y no requiere tiempo de recuperación.",
    category: "Opciones",
  },
  {
    id: "4",
    question: "¿Cuáles son los riesgos de la rinoplastia?",
    answer:
      "Como toda cirugía, existen riesgos mínimos como infección o sangrado. Nuestro equipo implementa protocolos de seguridad rigurosos para minimizarlos. Discutiremos todos los riesgos potenciales durante su consulta preoperatoria.",
    category: "Seguridad",
  },
  {
    id: "5",
    question: "¿Cuándo puedo ver los resultados finales?",
    answer:
      "Los cambios principales son visibles después de 2-3 semanas cuando se retira el vendaje. Los resultados finales se aprecian completamente después de 6-12 meses cuando toda la inflamación ha desaparecido y los tejidos se han reorganizado completamente.",
    category: "Resultados",
  },
  {
    id: "6",
    question: "¿Es dolorosa la recuperación de la rinoplastia?",
    answer:
      "La mayoría de pacientes reportan molestia leve a moderada en lugar de dolor intenso. Proporcionamos analgésicos efectivos y nuestro equipo estará disponible para cualquier preocupación. El dolor generalmente disminuye significativamente después de los primeros 3-5 días.",
    category: "Recuperación",
  },
  {
    id: "7",
    question: "¿A partir de qué edad se puede realizar la rinoplastia?",
    answer:
      "Se recomienda después de los 16-17 años cuando el crecimiento facial es completo. Para menores de edad, se requiere consentimiento de los padres. Valoraremos cada caso individualmente durante la consulta inicial.",
    category: "Candidatos",
  },
  {
    id: "8",
    question: "¿Los resultados de la rinoplastia son permanentes?",
    answer:
      "Los resultados de la rinoplastia quirúrgica son permanentes. El cambio en la estructura ósea y cartilaginosa es definitivo. Sin embargo, cambios naturales por envejecimiento pueden afectar levemente la apariencia con el tiempo.",
    category: "Resultados",
  },
  {
    id: "9",
    question: "¿Puedo combinar la rinoplastia con otros procedimientos?",
    answer:
      "Sí, muchos pacientes combinan rinoplastia con mentoplastia, blefaroplastia o liposucción facial para resultados más armoniosos. Durante su consulta evaluaremos las opciones que mejor se adapten a sus necesidades.",
    category: "Procedimiento",
  },
  {
    id: "10",
    question: "¿Cómo es el proceso de consulta?",
    answer:
      "En la consulta inicial realizamos un análisis facial completo, discutimos sus objetivos, mostramos simulaciones 3D, y explicamos el procedimiento. El equipo evalúa su salud general y responde todas sus preguntas. Esta consulta es fundamental para determinar si es candidato ideal.",
    category: "Consulta",
  },
]

export const successCases: SuccessCase[] = [
  {
    id: "1",
    title: "Refinamiento de Punta Nasal",
    description: "Caso de refinamiento de punta nasal con resultados naturales",
    category: "Rinoplastia Estética",
    before: "/before-rhinoplasty-narrow-nose-profile.jpg",
    after: "/after-rhinoplasty-refined-narrow-nose-profile.jpg",
  },
  {
    id: "2",
    title: "Corrección de Desviación",
    description: "Corrección funcional y estética de desviación septal",
    category: "Rinoseptoplastia",
    before: "/before-rhinoplasty-deviated-nose.jpg",
    after: "/after-rhinoplasty-corrected-nose.jpg",
  },
  {
    id: "3",
    title: "Reducción de Dorso",
    description: "Reducción del dorso nasal prominente con armonía facial",
    category: "Rinoplastia Reductiva",
    before: "/before-rhinoplasty-prominent-dorsum.jpg",
    after: "/after-rhinoplasty-reduced-dorsum.jpg",
  },
  {
    id: "4",
    title: "Aumento de Punta",
    description: "Aumento y proyección de punta nasal con rotación",
    category: "Rinoplastia Aumentativa",
    before: "/before-rhinoplasty-drooping-tip-nose.jpg",
    after: "/after-rhinoplasty-elevated-nose-tip.jpg",
  },
]

export const promotions = [
  {
    id: "1",
    title: "Campaña Quirúrgica Diciembre",
    description: "Descuentos especiales en todos nuestros procedimientos durante el mes de diciembre",
    discount: "Hasta 20% en procedimientos selectos",
    validUntil: "31 de diciembre 2024",
    procedures: ["Rinoplastia", "Blefaroplastia", "Liposucción"],
  },
  {
    id: "2",
    title: "Promoción de Inicio de Año",
    description: "Especial enero - Financiamiento sin intereses en procedimientos",
    discount: "Hasta 12 cuotas sin interés",
    validUntil: "31 de enero 2025",
    procedures: ["Todos los procedimientos"],
  },
  {
    id: "3",
    title: "Referidos - Gana Beneficios",
    description: "Recomienda a un amigo y ambos reciben descuentos en su próximo procedimiento",
    discount: "10% de descuento para ambos",
    validUntil: "Vigente",
    procedures: ["Aplica a todos los procedimientos"],
  },
]

export const locations = [
  {
    id: "1",
    city: "Huancayo",
    address: "Jr. Giraldez 123, Huancayo - Junín",
    phone: "+51 920 386 383",
    hours: "Lunes - Viernes: 9:00 - 18:00 | Sábado: 10:00 - 14:00",
    specialty: "Sede Principal",
    description: "Centro quirúrgico completamente equipado con tecnología de punta",
  },
  {
    id: "2",
    city: "Lima",
    address: "Av. Salaverry 1234, Lima - Perú",
    phone: "+51 920 386 383",
    hours: "Lunes - Viernes: 9:00 - 18:00 | Sábado: 10:00 - 14:00",
    specialty: "Sede Lima",
    description: "Centro de consultas y procedimientos menores ubicado en zona privilegiada",
  },
]
