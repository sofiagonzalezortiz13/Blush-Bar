import { HashRouter, Routes, Route } from "react-router-dom";
import { Box, GlobalStyles } from '@mui/material';

// IMPORTACIÓN DEL CONTEXTO (Asegúrate de que la ruta sea exacta)
import { CartProvider } from './features/view/hooks/CartContext'; 

// Layout Components
import { Header } from './features/layout/components/Header';
import { Content } from './features/layout/components/Content';
import { Footer } from './features/layout/components/Footer';

// View Components
import { Articles } from './features/view/components/Articles'; 
import { ArticlesCarousel } from './features/view/components/ArticlesCarousel'; 
import { Offers } from './features/view/components/Offers';

// Auth/User Components
import { Myaccount } from './features/auth/components/Myaccount';
import { Mybuys } from './features/auth/components/Mybuys';
import { Myfavourites } from './features/auth/components/Myfavourites';

function App() {
  return (
    // 1. El Provider envuelve TODA la aplicación para que el carrito funcione en cualquier página
    <CartProvider>
      <GlobalStyles styles={{ 
        body: { 
          margin: 0, 
          padding: 0, 
          overflowX: 'hidden',
          backgroundColor: '#fafafa' // Fondo sutil para resaltar las tarjetas blancas
        } 
      }} />
      
      <HashRouter>
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          
          {/* Header contendrá el menú y el acceso al carrito */}
          <Header />
          
          <Box component="main" sx={{ flexGrow: 1 }}>
            <Routes>
              {/* Ruta Principal: Home */}
              <Route path="/" element={
                <>
                  <Content />
                  <ArticlesCarousel />
                </>
              } />
              
              {/* Sección de Catálogo */}
              <Route path="/articulos" element={<Articles />} />
              
              {/* Sección de Ofertas */}
              <Route path="/ofertas" element={<Offers />} />
              
              {/* Secciones de Usuario (Protegidas por contexto) */}
              <Route path="/micuenta" element={<Myaccount />} />
              <Route path="/mybuys" element={<Mybuys />} />
              <Route path="/favoritos" element={<Myfavourites />} />
            </Routes>
          </Box>
          
          <Footer />
        </Box>
      </HashRouter>
    </CartProvider>
  );
}

export default App;