import React, { useState } from "react";
import { Container } from "react-bootstrap";

const FormularioClima = () => {
  const [ubicacion, setUbicacion] = useState("");
  const [pais, setPais] = useState("");
  const [climaInfo, setClimaInfo] = useState(null);
  const [error, setError] = useState(null);

  const handleConsultaClick = async () => {
    try {
      setError(null);

      if (!ubicacion || !pais) {
        alert("Por favor, ingrese la ubicación y el país");
        return;
      }

      const apiKey = "1274ab5c06a80ed9d05df8a97a12103d";
      const apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
      const url = `${apiEndpoint}?q=${ubicacion},${pais}&appid=${apiKey}&lang=es`;

      const response = await fetch(url);
      const data = await response.json();

      if (response.ok) {
        setClimaInfo(data);
      } else {
        setError(data.message || "Error al obtener la información del clima");
      }
    } catch (error) {
      setError("Error al procesar la solicitud");
    }
  };

  return (
    <section>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h2 className="mb-4">Consulta de Clima</h2>
            <form>
              <div className="mb-3">
                <label htmlFor="lugar" className="form-label">
                  Ubicación:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lugar"
                  value={ubicacion}
                  onChange={(e) => setUbicacion(e.target.value)}
                  minLength={10}
                  maxLength={20}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="pais" className="form-label">
                  País:
                </label>
                <select
                  className="form-control"
                  id="pais"
                  value={pais}
                  onChange={(e) => setPais(e.target.value)}
                >
                  <optgroup label="América">
                    <option value="US">Estados Unidos (USA)</option>
                    <option value="CA">Canadá</option>
                    <option value="MX">México</option>
                    <option value="BR">Brasil</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="PE">Perú</option>
                    <option value="CL">Chile</option>
                    <option value="EC">Ecuador</option>
                    <option value="VE">Venezuela</option>
                  </optgroup>
                  <optgroup label="Europa">
                    <option value="GB">Reino Unido (UK)</option>
                    <option value="DE">Alemania</option>
                    <option value="FR">Francia</option>
                    <option value="IT">Italia</option>
                    <option value="ES">España</option>
                    <option value="NL">Países Bajos (Holanda)</option>
                    <option value="BE">Bélgica</option>
                    <option value="SE">Suecia</option>
                    <option value="CH">Suiza</option>
                    <option value="AT">Austria</option>
                  </optgroup>
                  <optgroup label="Asia">
                    <option value="CN">China</option>
                    <option value="JP">Japón</option>
                    <option value="KR">Corea del Sur</option>
                    <option value="IN">India</option>
                    <option value="ID">Indonesia</option>
                    <option value="TH">Tailandia</option>
                    <option value="PH">Filipinas</option>
                    <option value="VN">Vietnam</option>
                    <option value="MY">Malasia</option>
                    <option value="SG">Singapur</option>
                  </optgroup>
                </select>
              </div>
              <div className="text-center">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleConsultaClick}
                >
                  Consultar Clima
                </button>
              </div>
            </form>
            {climaInfo && (
              <Container className="mt-5 text-center">
                <h3>Información del Clima</h3>
                <p>
                  Ubicación: {climaInfo.name}, País: {climaInfo.sys.country}
                </p>
                <p>
                  Temperatura: {climaInfo.main.temp} °C
                  <span> ({(climaInfo.main.temp + 273.15).toFixed(2)} K)</span>
                </p>
                <p>Descripción: {climaInfo.weather[0].description}</p>
                <p>Humedad: {climaInfo.main.humidity}%</p>
                <p>Velocidad del viento: {climaInfo.wind.speed} m/s</p>
                <p>Presión atmosférica: {climaInfo.main.pressure} hPa</p>
                <p>
                  Icono:
                  <img
                    src={`https://openweathermap.org/img/w/${climaInfo.weather[0].icon}.png`}
                    alt="Icono del clima"
                  />
                </p>
              </Container>
            )}
            {error && <p style={{ color: "red" }}>{error}</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormularioClima;
