import './assets/styles/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import RouteComponents from './routes';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <RouteComponents />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
