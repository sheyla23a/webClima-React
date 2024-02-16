import React, { useState } from "react";
import { Container } from "react-bootstrap";

const FormularioClima = () => {
  const [ubicacion, setUbicacion] = useState("");
  const [pais, setPais] = useState("");

  const handleConsultaClick = () => {
    console.log("Consulta con ubicación:", ubicacion, "y país:", pais);
  };

  return (
    <Container>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <form>
              <div className="mb-3">
                <label htmlFor="ubicacion" className="form-label">
                  Ubicación:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="ubicacion"
                  value={ubicacion}
                  onChange={(e) => setUbicacion(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="pais" className="form-label">
                  País:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="Pais"
                  value={pais}
                  onChange={(e) => setPais(e.target.value)}
                />
              </div>
              <div className="text-center mt-4">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleConsultaClick}
                >
                  Consultar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default FormularioClima;
