export const blogPosts = [
  {
    id: 1,
    title: "Desarrollador & Artista: Mi Viaje en Tech y Hip Hop",
    slug: "desarrollador-artista-viaje",
    category: "personal",
    excerpt: "Mi trayectoria única combinando el desarrollo de software y la inteligencia artificial con mi pasión por la música y el breaking.",
    content: `
# ¡Hola! Soy Alejandro Orduño 👋

Bienvenidos a mi blog personal, un espacio donde dos mundos aparentemente diferentes se encuentran: la **tecnología** y el **arte urbano**.

## Mi Doble Identidad

### 💻 El Desarrollador
Soy un **Desarrollador Full Stack** especializado en **Inteligencia Artificial**. Mi día a día incluye:
- Desarrollo con React, Node.js y Python
- Implementación de soluciones de Machine Learning
- Creación de aplicaciones web escalables
- Optimización de algoritmos y estructuras de datos

### 🎤 El Artista
Pero cuando se pone el sol, me transformo en **Maxol**, un artista de hip-hop que:
- Produce beats innovadores
- Practica breaking y street dance
- Participa en eventos de la cultura urbana
- Fusiona la creatividad digital con la expresión artística

## ¿Cómo se Conectan?

Podría parecer que la programación y el hip-hop no tienen nada en común, pero en realidad:

1. **Creatividad estructurada**: Tanto el código como la música requieren creatividad dentro de reglas y estructuras
2. **Iteración y mejora**: Los beats, como los algoritmos, se perfeccionan con cada versión
3. **Comunidad**: Ambas culturas valoran la colaboración y el intercambio de conocimiento

## ¿Qué Encontrarás Aquí?

- **Tutoriales técnicos**: Desde React hasta IA práctica
- **Reflexiones artísticas**: Mi proceso creativo en la música
- **Proyectos únicos**: Donde la tech se encuentra con el arte
- **Mi trayectoria**: Cómo balance ambas pasiones

## Mi Misión

Quiero demostrar que no tienes que elegir entre ser "técnico" o "artístico". Puedes ser ambos y usar cada disciplina para enriquecer la otra.

---

🎧 **Escucha mi música**: [Maxol en Spotify](https://open.spotify.com/artist/0KTegBzreW7d5zsJrw4fQX)
💻 **Ve mis proyectos**: [GitHub](https://github.com/alexOrduL)

¡Prepárate para un viaje único donde los algoritmos bailan al ritmo del hip-hop! 🚀🎵
    `,
    date: "2024-01-15",
    readTime: "3 min",
    tags: ["personal", "introducción", "bienvenida"],
    author: "Alejandro Orduño"
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
    author: "Alejandro Orduño"
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
    author: "Alejandro Orduño"
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
