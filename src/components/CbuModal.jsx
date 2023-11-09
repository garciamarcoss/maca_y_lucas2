import React, {useEffect} from "react";

const CbuModal = ({ open, onClose }) => {
    useEffect(() => {
      // Agregar la clase al body cuando la modal está abierta
      if (open) {
        document.body.classList.add("modal-open");
      } else {
        // Eliminar la clase al cerrar la modal
        document.body.classList.remove("modal-open");
      }
    }, [open]);
  if (!open) return null;

    


  return (
    <div className="overlay">
      <div
        onClick={() => {}}
        className="modalContainer"
      >
        <p onClick={onClose} className="closeBtn">
          X
        </p>
        <p className="bank">Banco Santander</p>
        <div className="datos">
          <p>Número de cuenta:</p>
          <span>Cuentas en Pesos 361-003901/7</span>
        </div>
        <div className="datos">
          <p>Número de CBU:</p>
          <span>0720361788000000390172</span>
        </div>
        <div className="datos">
          <p>Alias:</p>
          <span>macarena.castro.ths</span>
        </div>
        <div className="datos">
          <p>Titular de la cuenta:</p>
          <span>Castro Macarena</span>
        </div>
      </div>
    </div>
  );
};

export default CbuModal;
