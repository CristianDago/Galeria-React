import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header titulo="Galería de Imágenes con React"/>
      <Card imagen="./assets/img/imagen_01.jpg" nombre="Martin Pescador" descripcion="Pájaro"/>
      <Card imagen="./assets/img/imagen_02.jpg" nombre="Tigre" descripcion="Carnívoro"/>
      <Card imagen="./assets/img/imagen_03.jpg" nombre="Bebé Elefante" descripcion="Abrevadero"/>
      <Footer />
    </>
  );
}

export default App;
