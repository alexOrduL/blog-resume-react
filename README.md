# 📝 Mi Blog Personal

Un blog personal moderno construido con **React**, **Vite** y **React Router**. Diseño responsive y optimizado para SEO.

## ✨ Características

- 🎨 **Diseño moderno y responsive**
- 🚀 **Optimizado para rendimiento** (Vite + React)
- 📱 **Mobile-first design**
- 🔍 **Búsqueda y filtros** de artículos
- 🏷️ **Sistema de etiquetas**
- 📖 **Rendering de Markdown básico**
- 🌟 **Animaciones suaves**
- 📤 **Botones de compartir**
- 🎯 **SEO optimizado**

## 🛠️ Tecnologías Utilizadas

- **React 18** - Biblioteca de interfaz de usuario
- **Vite** - Herramienta de build rápida
- **React Router** - Navegación del lado del cliente
- **Lucide React** - Iconos modernos
- **date-fns** - Manipulación de fechas
- **CSS3** - Estilos personalizados con variables CSS

## 🚀 Instalación y Configuración

### Prerrequisitos

- Node.js (versión 16 o superior)
- npm o yarn

### Pasos de instalación

1. **Instalar dependencias**
   ```bash
   npm install
   ```

2. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   ```

3. **Construir para producción**
   ```bash
   npm run build
   ```

4. **Preview de la build de producción**
   ```bash
   npm run preview
   ```

## 📝 Personalización

### Cambiar información personal

1. **Actualizar datos en `src/data/posts.js`**
   - Modificar el nombre del autor
   - Actualizar el contenido de los posts

2. **Personalizar información en páginas**
   - `src/pages/Home.jsx` - Información del hero
   - `src/pages/About.jsx` - Tu historia y experiencia
   - `src/components/Footer.jsx` - Enlaces sociales

3. **Actualizar meta tags en `index.html`**
   - Título de la página
   - Descripción
   - Enlaces sociales
   - URL del sitio

## 🚀 Deployment

### Netlify (Recomendado)

1. Conecta tu repositorio de GitHub a Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Los cambios se despliegan automáticamente

### Vercel

```bash
npm i -g vercel
vercel
```

## 📱 Responsive Design

Diseñado para funcionar perfectamente en:

- 📱 Móviles (320px+)
- 📱 Tablets (768px+)
- 💻 Escritorio (1024px+)
- 🖥️ Pantallas grandes (1200px+)

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
