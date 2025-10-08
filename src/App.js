import './assets/styles/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import RouteComponents from './routes';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <BrowserRouter>
    <CartProvider>
      <Header />
      <RouteComponents />
      <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
