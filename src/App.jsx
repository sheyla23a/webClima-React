import { Container } from "react-bootstrap";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import FormularioClima from "./components/FormularioClima";

function App() {
  return <>
  <h1 className="text-center mt-4 text-light">Web del clima</h1>
  <Container className="mt-4">
    <FormularioClima></FormularioClima>
  </Container>
  </>;
}

export default App;
