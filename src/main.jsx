import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import{CartProvider} from './features/view/hooks/CartContext.jsx'
import App from './App.jsx'

// src/main.jsx

// ... tus otros imports

// ESTO ELIMINA EL MARGEN QUE CORTA TU IMAGEN
const globalStyles = document.createElement('style');
globalStyles.innerHTML = `
  body { margin: 0; padding: 0; overflow-x: hidden; }
  #root { width: 100%; margin: 0; padding: 0; }
`;
document.head.appendChild(globalStyles);

// ... el resto de tu código (ReactDOM.createRoot...)

createRoot(document.getElementById('root')).render(
  <CartProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </CartProvider>
)
