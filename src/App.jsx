import './styles/App.css';
import './components/general/NavBar/NavBar.css';
import NavBar from './components/general/NavBar/NavBar';
import galeria from './components/Product/galeria.jsx';

function App() {
  const carritoDeCompra = () => {
    alert('Sitio en construcción');
  }
  return (
    <div>
      <NavBar action={carritoDeCompra}/>
      <galeria/>
    </div>
  );
}

export default App;
