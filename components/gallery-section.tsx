import Image from "next/image";
import { useState } from "react";
import { PhotoModal } from "./modal/PhotoModal";

export interface Photo {
  id: number | string;
  ImgSrc: string; // URL o path de la imagen
  alt: string;       // Texto alternativo
  description: string; // Mensaje que irá en el modal
}

interface ModalContent {
  src: string;
  alt: string;
  message: string;
}

export const Gallery: Photo[] = [
  {
    id: 1,
    ImgSrc: '/galeria/img1.webp',
    alt: 'Odontóloga posando con un modelo dental',
    description: 'Diagnóstico y planificación integral utilizando modelos 3D y tecnología de punta para garantizar la precisión en cada tratamiento.'
  },
  // {
  //   id: 2,
  //   ImgSrc: '/galeria/img2.webp',
  //   alt: 'Odontóloga con uniforme de trabajo de pie',
  //   description: 'Nuestro equipo profesional está listo para brindarte la mejor atención con los más altos estándares de comodidad y seguridad.'
  // },
  {
    id: 3,
    ImgSrc: '/galeria/img3.webp',
    alt: 'Odontóloga sosteniendo una jeringa',
    description: 'Especializados en procedimientos indoloros y seguros, priorizando siempre la comodidad del paciente durante todo el proceso.'
  },
  {
    id: 4,
    ImgSrc: '/galeria/img4.webp',
    alt: 'Odontóloga mostrando el resultado de un blanqueamiento',
    description: 'Resultados inmediatos y visibles en blanqueamiento dental. Logra la sonrisa brillante que siempre deseaste en una sola sesión.'
  },
  {
    id: 5,
    ImgSrc: '/galeria/img5.webp',
    alt: 'Odontóloga revisando el diagnóstico con guantes celestes',
    description: 'Atención detallada y personalizada en cada etapa del tratamiento, asegurando que se cumplan todas las expectativas estéticas y funcionales.'
  },
  {
    id: 6,
    ImgSrc: '/galeria/img6.webp',
    alt: 'Odontóloga revisando una tableta de procedimientos',
    description: 'Utilización de tecnología digital para el registro de datos y planificación, garantizando tratamientos más rápidos y precisos.'
  },
  {
    id: 7,
    ImgSrc: '/galeria/img7.webp',
    alt: 'Odontóloga sentada con estetoscopio',
    description: 'Enfoque integral en la salud oral. Nos preocupamos no solo por tus dientes, sino por tu bienestar general.'
  },
];


export function GallerySection() {

  // Estado para controlar la apertura del modal (booleano)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Estado para guardar los datos que se mostrarán en el modal
  const [modalContent, setModalContent] = useState<ModalContent | undefined>(undefined);

  // Función para abrir el modal
  const openModal = (photoData: ModalContent) => {
    setModalContent(photoData);
    setIsModalOpen(true);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setIsModalOpen(false);
    // Opcional: limpiar el contenido para asegurar que no se muestren datos antiguos
    // si el modal se reabre rápido.
    // setTimeout(() => setModalContent(undefined), 300); 
  };

  return (
    <section id="galeria" className="py-20 md:py-28 bg-muted/20">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Galería de <span className="text-primary">Fotos </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Conoce al equipo de profesionales y especialistas que te atenderán.
          </p>
        </div>

        <div className="mb-16">
          {/* Estilo para un Grid limpio y moderno */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {Gallery.map((photo) => (
              <div
                key={photo.id}
                // Clases del Contenedor:
                // - 'aspect-square' asegura que todas las tarjetas sean cuadradas (1:1). 
                //   Puedes cambiarlo a 'aspect-[4/3]' para un formato más rectangular.
                // - 'transition-all' para animaciones suaves en hover.
                className="relative group overflow-hidden rounded-xl cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"

                // --- FUNCIÓN CLAVE: LLAMADA A openModal ---
                onClick={() => openModal({
                  src: photo.ImgSrc,
                  alt: photo.alt,
                  message: photo.description
                })}
              >
                {/* Contenedor de la Imagen para forzar el Aspect Ratio */}
                <div className="w-full aspect-square">
                  <Image
                    src={photo.ImgSrc}
                    alt={photo.alt}
                    fill // Ocupa todo el espacio del contenedor
                    // Ajusta los tamaños para optimizar la carga, basado en los breakpoints del grid
                    // sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                    // className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    placeholder="blur"
  blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2QwZDBkMCIvPjwvc3ZnPg=="
                  />
                </div>

                {/* Overlay (Efecto de Superposición) */}
                <div className="absolute inset-0 bg-primary/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-sm font-semibold border border-white px-4 py-2 rounded-full backdrop-blur-sm">
                    Ampliar Foto
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <PhotoModal
          isOpen={isModalOpen}
          onClose={closeModal}
          content={modalContent}
        />

      </div>
    </section>
  )
}
