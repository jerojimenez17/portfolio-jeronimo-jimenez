# Portafolio de Jero Jiménez

Portafolio personal moderno desarrollado con React, TypeScript, Vite y Tailwind CSS. Incluye un diseño atractivo con animaciones suaves y un carrusel interactivo para mostrar proyectos.

## 🚀 Características

- ✨ Diseño moderno y responsivo
- 🎨 Animaciones fluidas con Framer Motion
- 🎠 Carrusel de proyectos con Swiper
- 📱 Totalmente responsive
- ⚡ Optimizado con Vite
- 🎯 TypeScript para type safety
- 🌙 Tema oscuro elegante

## 🛠️ Tecnologías

- **React 18** - Biblioteca de UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool rápido
- **Tailwind CSS** - Estilos utility-first
- **Framer Motion** - Animaciones
- **Swiper** - Carrusel moderno
- **Lucide React** - Iconos

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## 📁 Estructura del Proyecto

```
├── public/
│   └── avatar2.png
├── src/
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   └── ScrollToTop.tsx
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   └── vite-env.d.ts
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## 🎨 Personalización

### Agregar Proyectos

Edita el array de proyectos en `src/components/Projects.tsx`:

```typescript
const projects: Project[] = [
  {
    id: 1,
    title: 'Tu Proyecto',
    description: 'Descripción corta',
    longDescription: 'Descripción larga',
    image: '/ruta/a/imagen.jpg',
    technologies: ['React', 'TypeScript'],
    liveUrl: 'https://ejemplo.com',
    githubUrl: 'https://github.com/usuario/proyecto',
    featured: true,
  },
  // ... más proyectos
]
```

### Modificar Colores

Edita `tailwind.config.js` para personalizar la paleta de colores.

### Actualizar Información Personal

- **Hero**: `src/components/Hero.tsx`
- **Sobre Mí**: `src/components/About.tsx`
- **Contacto**: `src/components/Contact.tsx`

## 📝 Licencia

MIT

## 👤 Autor

**Jerónimo Jiménez**
- LinkedIn: [Jerónimo Jiménez](https://www.linkedin.com/in/jer%C3%B3nimo-jim%C3%A9nez-b2660a228/)
- GitHub: [@jeronimojimenez](https://github.com)