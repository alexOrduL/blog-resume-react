export const blogPosts = [
  {
    id: 1,
    title: "Desarrollador & Artista: Mi Viaje en Tech y Hip Hop",
    slug: "desarrollador-artista-viaje",
    category: "personal",
    excerpt: "Mi trayectoria única combinando el desarrollo de software y la inteligencia artificial con mi pasión por la música y el breaking.",
    content: `
# ¡Hola y bienvenidos! 👋

Este es mi primer post en este nuevo blog personal. Después de mucho tiempo pensándolo, finalmente decidí crear un espacio donde poder compartir mis pensamientos, experiencias y aprendizajes.

## ¿Qué encontrarás aquí?

En este blog voy a hablar sobre:

- **Desarrollo Web**: Tutoriales, tips y mejores prácticas
- **Tecnología**: Las últimas tendencias y herramientas que uso
- **Experiencias**: Proyectos en los que trabajo y lecciones aprendidas
- **Reflexiones**: Pensamientos sobre la industria tech y la vida

## ¿Por qué un blog?

Creo firmemente que compartir conocimiento es una de las mejores formas de:
1. Ayudar a otros desarrolladores
2. Consolidar mi propio aprendizaje
3. Crear conexiones con la comunidad

Espero que este contenido te sea útil y te invite a reflexionar. ¡No dudes en contactarme si tienes preguntas o comentarios!

## ¿Qué viene después?

En los próximos posts estaré hablando sobre React, JavaScript moderno, y cómo construir aplicaciones web escalables.

¡Nos vemos en el siguiente post! 🚀
    `,
    date: "2024-01-15",
    readTime: "3 min",
    tags: ["personal", "introducción", "bienvenida"],
    author: "Tu Nombre"
  },
  {
    id: 2,
    title: "Guía Completa de React Hooks en 2024",
    slug: "guia-react-hooks-2024",
    excerpt: "Una guía práctica y completa sobre React Hooks, desde los básicos hasta los más avanzados, con ejemplos reales y mejores prácticas.",
    content: `
# React Hooks: La Guía Definitiva 2024

Los React Hooks revolucionaron la forma en que escribimos componentes en React. En esta guía veremos desde lo más básico hasta patrones avanzados.

## ¿Qué son los Hooks?

Los Hooks son funciones especiales que te permiten "engancharte" a características de React desde componentes funcionales.

### useState - El Hook Fundamental

\`\`\`jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Has hecho click {count} veces</p>
      <button onClick={() => setCount(count + 1)}>
        Incrementar
      </button>
    </div>
  );
}
\`\`\`

### useEffect - Efectos Secundarios

\`\`\`jsx
import { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    fetchUser(userId).then(setUser);
  }, [userId]);
  
  if (!user) return <div>Cargando...</div>;
  
  return <div>Hola, {user.name}!</div>;
}
\`\`\`

## Hooks Avanzados

### useCallback y useMemo

Estos hooks son esenciales para optimización:

\`\`\`jsx
import { useCallback, useMemo } from 'react';

function ExpensiveComponent({ items, filter }) {
  const filteredItems = useMemo(() => {
    return items.filter(item => item.category === filter);
  }, [items, filter]);
  
  const handleClick = useCallback((id) => {
    console.log('Clicked item:', id);
  }, []);
  
  return (
    <div>
      {filteredItems.map(item => (
        <Item 
          key={item.id} 
          item={item} 
          onClick={handleClick} 
        />
      ))}
    </div>
  );
}
\`\`\`

## Mejores Prácticas

1. **Siempre usa las reglas de los Hooks**
2. **Extrae lógica compleja a custom hooks**
3. **Optimiza solo cuando sea necesario**
4. **Usa TypeScript para mejor DX**

## Conclusión

Los React Hooks nos permiten escribir código más limpio, reutilizable y fácil de testear. Dominarlos es esencial para cualquier desarrollador React moderno.

¿Qué Hook te resulta más útil? ¡Cuéntame en los comentarios!
    `,
    date: "2024-01-10",
    readTime: "8 min",
    tags: ["react", "javascript", "frontend", "tutorial"],
    author: "Tu Nombre"
  },
  {
    id: 3,
    title: "El Futuro del Desarrollo Web: Tendencias 2024",
    slug: "futuro-desarrollo-web-2024",
    excerpt: "Exploramos las tendencias más importantes que están moldeando el desarrollo web en 2024, desde nuevos frameworks hasta herramientas de IA.",
    content: `
# El Futuro del Desarrollo Web: Tendencias 2024

El desarrollo web evoluciona a un ritmo vertiginoso. Estas son las tendencias que están marcando el rumbo este año.

## 1. Frameworks Meta

### Next.js 14 y App Router
Next.js continúa dominando con su App Router y Server Components:

\`\`\`jsx
// app/blog/[slug]/page.js
export default async function BlogPost({ params }) {
  const post = await getPost(params.slug);
  
  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </article>
  );
}
\`\`\`

### Remix y Full-Stack TypeScript
Remix está ganando tracción con su enfoque en los fundamentos web.

## 2. Herramientas de Desarrollo

### Vite - El Nuevo Estándar
Vite ha reemplazado a webpack en muchos proyectos por su velocidad.

### Bun - El Runtime Súper Rápido
Bun promete ser más rápido que Node.js para muchas tareas.

## 3. Inteligencia Artificial

### GitHub Copilot y Alternativas
La IA está cambiando cómo escribimos código:

- Autocompletado inteligente
- Generación de tests
- Refactoring automático

### Herramientas de Diseño IA
Figma AI, v0.dev y otras herramientas están automatizando el diseño.

## 4. Web Components Nativas

Los Web Components están madurando:

\`\`\`javascript
class MyButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  
  connectedCallback() {
    this.shadowRoot.innerHTML = \`
      <button>
        <slot></slot>
      </button>
    \`;
  }
}

customElements.define('my-button', MyButton);
\`\`\`

## 5. Performance y Core Web Vitals

Google sigue priorizando la performance:

- **LCP** (Largest Contentful Paint)
- **FID** (First Input Delay)  
- **CLS** (Cumulative Layout Shift)

## Conclusión

El desarrollo web en 2024 se trata de:
- **Performance**: Aplicaciones más rápidas
- **DX**: Mejor experiencia de desarrollo
- **Full-Stack**: Frontends que manejan más lógica de servidor
- **IA**: Herramientas que nos hacen más productivos

¿Cuál de estas tendencias te emociona más? ¡Compártelo conmigo!
    `,
    date: "2024-01-05",
    readTime: "6 min",
    tags: ["tendencias", "desarrollo web", "2024", "tecnología"],
    author: "Tu Nombre"
  }
];

export const getPostBySlug = (slug) => {
  return blogPosts.find(post => post.slug === slug);
};

export const getRecentPosts = (limit = 3) => {
  return blogPosts
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limit);
};
