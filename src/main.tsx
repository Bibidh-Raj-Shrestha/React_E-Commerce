import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import './index.css'
import App from './App.tsx'
import { CartProvider } from './components/CartContext.tsx'
import { AuthProvider } from './components/AuthContext.tsx'

createRoot(document.getElementById('root')!).render(

  <BrowserRouter>
    <AuthProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </AuthProvider>
  </BrowserRouter>
)
