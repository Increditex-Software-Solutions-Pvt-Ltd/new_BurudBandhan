import { useLocation } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import AllRoutes from './Routes/AllRoutes';

function App() {
  const location = useLocation();
  const hideHeaderFooterRoutes = ['/login', '/register', '/admin']; // Define paths where you don't want navbar/footer

  return (
    <div className="App">
      {!hideHeaderFooterRoutes.includes(location.pathname) && <Navbar />}
      <AllRoutes />

      {!hideHeaderFooterRoutes.includes(location.pathname) && <Footer />}
    </div>
  );
}

export default App;
