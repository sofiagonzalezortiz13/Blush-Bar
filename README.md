# 💄 Blush-Bar - Tienda de Belleza Online

Plataforma de comercio electrónico especializada en productos de belleza y maquillaje de marcas premium como CHANEL, Dior, Fenty Beauty y más.

## ✨ Características Principales

- **Catálogo de Productos**: Navegación completa de artículos, ofertas especiales y best sellers
- **Carrito de Compras**: Sistema funcional de carrito con gestión de items y cantidad
- **Cuenta de Usuario**: Perfil personal, historial de compras y lista de favoritos
- **Búsqueda Avanzada**: Buscador de productos integrado en la barra de navegación
- **Navegación Intuitiva**: Estructura clara con menú principal y rutas organizadas
- **Diseño Responsivo**: Interfaz adaptable a dispositivos móviles y escritorio
- **Envíos Especiales**: Información destacada sobre envíos gratis en pedidos mayores a $150.000 COP

## 🛠️ Tecnologías Utilizadas

| Tecnología | Versión | Propósito |
|-----------|---------|----------|
| React | 19.2.0 | Framework principal |
| Vite | 7.3.1 | Build tool y dev server |
| React Router DOM | 7.13.1 | Enrutamiento de aplicación |
| Material-UI (MUI) | 7.3.8 | Componentes UI y estilos |
| Emotion | 11.14.0+ | CSS-in-JS styling |
| ESLint | 9.39.1 | Linting y calidad de código |

## 📁 Estructura del Proyecto

```
src/
├── features/
│   ├── auth/                  # Módulo de autenticación
│   │   ├── components/        # Myaccount, Mybuys, Myfavourites
│   │   ├── hooks/
│   │   └── pages/
│   ├── layout/                # Componentes de diseño
│   │   ├── components/        # Header, Footer, BestSellers, Content
│   │   ├── hooks/
│   │   └── pages/
│   └── view/                  # Vista principal de productos
│       ├── components/        # Articles, ArticlesCarousel, Offers, ProductCard
│       ├── hooks/             # Custom hooks (CartContext, useCustom, etc.)
│       └── pages/
├── shared/                    # Componentes compartidos
├── App.jsx                    # Componente raíz
├── Routes.jsx                 # Configuración de rutas
└── main.jsx                   # Punto de entrada
```

## 🚀 Instalación y Configuración

### Prerrequisitos
- Node.js 16+ 
- npm o yarn

### Pasos de Instalación

```bash
# 1. Clonar o descargar el repositorio
cd taller3

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo
npm run dev

# 4. Abrir en navegador
# Generalmente en http://localhost:5173
```

## 📝 Scripts Disponibles

```bash
npm run dev      # Inicia servidor de desarrollo con HMR
npm run build    # Crea build optimizado para producción
npm run lint     # Valida código con ESLint
npm run preview  # Visualiza el build de producción localmente
```

## 📍 Rutas Principales

| Ruta | Destino |
|------|---------|
| `/` | Página de inicio |
| `/articulos` | Catálogo de artículos |
| `/ofertas` | Productos en oferta |
| `/favoritos` | Elementos guardados como favoritos |
| `/micuenta` | Perfil y configuración de usuario |
| `/mybuys` | Carrito de compras y pedidos |

## 🎨 Características de Diseño

- **Paleta de Colores**: Rosa (#fce4ec, #f8bbd0) como color principal
- **Tipografía**: Fuente Roboto de Google Fonts
- **Componentes UI**: Iconos de Material-UI Icons para acciones y navegación
- **Estilos Responsivos**: Breakpoints para xs, md y superiores

## 🔧 Configuración de Desarrollo

El proyecto utiliza:
- **HMR (Hot Module Replacement)**: Recarga automática en cambios
- **ESLint**: Reglas de calidad y React Hooks
- **Emotion**: Styled components para CSS dinámico

### Mejoras Sugeridas para Producción

- Implementar TypeScript para mayor seguridad de tipos
- Agregar tests unitarios y de integración
- Configurar variables de entorno (.env)
- Implementar persistencia de datos (localStorage / backend)
- Agrega un backend para gestionar pedidos y usuarios
- Configurar un sistema de autenticación real

## 📦 Gestión de Estado

El proyecto utiliza React Hooks personalizados en `/view/hooks/`:
- `CartContext.jsx` - Gestión del carrito
- `useCallback.jsx` - Optimización de funciones
- `useContext.jsx` - Acceso a contexto global
- `useCustom.jsx` - Hooks personalizados
- `useEffects.jsx` - Efectos secundarios
- `useReducer.jsx` - Lógica compleja de estado

## 📧 Contacto y Soporte

Para reportar bugs o sugerir mejoras, contacta al equipo de desarrollo.

---

**Versión**: 0.0.0  
**Última actualización**: Marzo 2026
