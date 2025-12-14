
import React, { useEffect, useRef, FC, MouseEvent } from 'react'; // Importamos MouseEvent
import Image from 'next/image';
import { AiFillCloseCircle } from "react-icons/ai";

interface PhotoModalContent {
  src: string;
  alt?: string;
  message?: string;
}

interface PhotoModalProps {
  isOpen: boolean;
  onClose: () => void;
  content?: PhotoModalContent;
}

export const PhotoModal: FC<PhotoModalProps> = ({ isOpen, onClose, content }) => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    if (dialogRef.current) {
      if (isOpen) {
        dialogRef.current.showModal(); 
      } else {
        dialogRef.current.close();
      }
    }
  }, [isOpen]);

  if (!content) return null; 

  // Esta función maneja el cierre nativo (ej. tecla ESC) y el cierre por botones.
  const handleClose = () => {
    onClose(); 
  };
  
  // --- FUNCIÓN CLAVE: CERRAR AL HACER CLIC EN EL BACKDROP ---
  const handleBackdropClick = (event: MouseEvent<HTMLDialogElement>) => {
    const dialogElement = dialogRef.current;
    
    // Comprobamos si el elemento clickeado es el propio <dialog> y no su contenido.
    // Cuando haces clic en el backdrop, event.target es el <dialog>
    if (dialogElement && event.target === dialogElement) {
      handleClose();
    }
  };
  // -------------------------------------------------------------

  return (
    <dialog
      ref={dialogRef}
      onClose={handleClose}
      // AÑADIMOS EL LISTENER onClick AL DIALOG
      onClick={handleBackdropClick} 
      
      className="rounded-xl shadow-2xl backdrop:bg-black/50 max-w-3xl w-full mx-auto my-10"
      style={{ 
          maxWidth: '60vw',
          maxHeight: '90vh', 
          padding: 0,
      }} 
    >

      <div 
          // Es importante que este contenedor tenga un fondo para evitar que los clics
          // 'atraviesen' el contenido y se registren en el dialog.
          className="relative w-full h-full overflow-y-auto rounded-xl bg-white" 
      >
        
        <div className="relative w-full aspect-4/3 md:aspect-3/2">
          <Image
            src={content.src} 
            alt={content.alt || 'Detalle del profesional'}
            fill
            className="object-cover"
          />
        </div>


        <div 
          className="absolute inset-x-0 bottom-0 p-6 md:p-8 
                     bg-linear-to-t from-black/60 via-black/30 to-transparent 
                     text-white"
        >

          {/* <h3 className="text-xl md:text-2xl font-bold mb-2">
            {content.message || 'Detalle del profesional.'}
          </h3> */}

 
          {/* <p className="text-sm md:text-base text-gray-300 mb-4">
            {content.alt || 'Información del equipo'}
          </p> */}


          {/* <button
            onClick={onClose}
            className="px-6 py-2 bg-white text-primary font-semibold rounded-full 
                       hover:bg-gray-200 transition-colors shadow-md cursor-pointer"
          >
            Cerrar
          </button> */}

        </div>
        

        <button 
            onClick={onClose} 
            className="absolute top-4 right-4 text-white z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors cursor-pointer"
            aria-label="Cerrar modal"
        >
            <AiFillCloseCircle className="text-2xl"/> 
        </button>

      </div>
    </dialog>
  );
};

