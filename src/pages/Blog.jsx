import { useState, useMemo } from 'react';
import { Search, Filter } from 'lucide-react';
import PostCard from '../components/PostCard';
import { blogPosts } from '../data/posts';
import './Blog.css';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  // Obtener todos los tags únicos
  const allTags = useMemo(() => {
    const tags = blogPosts.flatMap(post => post.tags);
    return ['Todos', ...new Set(tags)];
  }, []);

  // Filtrar posts basado en búsqueda y tag seleccionado
  const filteredPosts = useMemo(() => {
    let filtered = blogPosts;

    // Filtrar por término de búsqueda
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(term) ||
        post.excerpt.toLowerCase().includes(term) ||
        post.tags.some(tag => tag.toLowerCase().includes(term))
      );
    }

    // Filtrar por tag seleccionado
    if (selectedTag && selectedTag !== 'Todos') {
      filtered = filtered.filter(post =>
        post.tags.includes(selectedTag)
      );
    }

    // Filtrar por categoría
    if (selectedCategory && selectedCategory !== 'Todos') {
      filtered = filtered.filter(post =>
        post.category === selectedCategory
      );
    }

    // Ordenar por fecha (más recientes primero)
    return filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [searchTerm, selectedTag]);

  return (
    <div className="blog-page fade-in">
      <div className="container">
        {/* Header */}
        <div className="blog-header">
          <h1>Mi Blog</h1>
          <p>
            Explora mis artículos sobre desarrollo web, tecnología y reflexiones
            sobre la industria tech. {blogPosts.length} artículos y contando...
          </p>
        </div>

        {/* Filters */}
        <div className="blog-filters">
          <div className="search-bar">
            <Search size={20} className="search-icon" />
            <input
              type="text"
              placeholder="Buscar artículos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>

          <div className="filters-container">
            <div className="category-filters">
              <h3>Categorías</h3>
              <div className="category-buttons">
                {['Todos', 'professional', 'personal'].map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category === 'Todos' ? '' : category)}
                    className={`category-button ${
                      (selectedCategory === '' && category === 'Todos') ||
                      selectedCategory === category
                        ? 'active'
                        : ''
                    }`}
                  >
                    {category === 'professional' ? 'Profesional' : 
                     category === 'personal' ? 'Personal' : category}
                  </button>
                ))}
              </div>
            </div>

            <div className="tag-filters">
              <Filter size={20} className="filter-icon" />
              <div className="tag-buttons">
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(tag === 'Todos' ? '' : tag)}
                    className={`tag-button ${
                      (selectedTag === '' && tag === 'Todos') ||
                      selectedTag === tag
                        ? 'active'
                        : ''
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Results Info */}
        <div className="results-info">
          <p>
            {filteredPosts.length === blogPosts.length
              ? `Mostrando todos los ${filteredPosts.length} artículos`
              : `Mostrando ${filteredPosts.length} de ${blogPosts.length} artículos`}
          </p>
        </div>

        {/* Posts Grid */}
        {filteredPosts.length > 0 ? (
          <div className="posts-grid">
            {filteredPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="no-results">
            <h3>No se encontraron artículos</h3>
            <p>
              Prueba con diferentes términos de búsqueda o selecciona una categoría diferente.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedTag('');
              }}
              className="btn btn-primary"
            >
              Limpiar filtros
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
