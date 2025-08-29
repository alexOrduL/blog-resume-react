import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Tag, Share2 } from 'lucide-react';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { getPostBySlug, getRecentPosts } from '../data/posts';
import PostCard from '../components/PostCard';
import './Post.css';

const Post = () => {
  const { slug } = useParams();
  const post = getPostBySlug(slug);
  const relatedPosts = getRecentPosts(3).filter(p => p.id !== post?.id).slice(0, 2);

  // Si no se encuentra el post, redirigir a 404
  if (!post) {
    return <Navigate to="/404" replace />;
  }

  const formattedDate = format(new Date(post.date), 'dd MMMM yyyy', { locale: es });

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback para navegadores que no soportan Web Share API
      navigator.clipboard.writeText(window.location.href);
      alert('¡Enlace copiado al portapapeles!');
    }
  };

  // Función para renderizar markdown básico
  const renderContent = (content) => {
    return content
      .split('\\n\\n')
      .map((paragraph, index) => {
        if (paragraph.startsWith('# ')) {
          return <h1 key={index}>{paragraph.substring(2)}</h1>;
        }
        if (paragraph.startsWith('## ')) {
          return <h2 key={index}>{paragraph.substring(3)}</h2>;
        }
        if (paragraph.startsWith('### ')) {
          return <h3 key={index}>{paragraph.substring(4)}</h3>;
        }
        if (paragraph.startsWith('```')) {
          const code = paragraph.replace(/```[\\w]*\\n?/, '').replace(/```$/, '');
          return (
            <pre key={index} className=\"code-block\">
              <code>{code}</code>\n            </pre>\n          );\n        }\n        if (paragraph.startsWith('- ') || paragraph.match(/^\\d+\\. /)) {\n          const items = paragraph.split('\\n').filter(item => item.trim());\n          const isOrdered = paragraph.match(/^\\d+\\. /);\n          const ListComponent = isOrdered ? 'ol' : 'ul';\n          return (\n            <ListComponent key={index}>\n              {items.map((item, i) => (\n                <li key={i}>{item.replace(/^- |^\\d+\\. /, '')}</li>\n              ))}\n            </ListComponent>\n          );\n        }\n        if (paragraph.trim()) {\n          return <p key={index}>{paragraph}</p>;\n        }\n        return null;\n      })\n      .filter(Boolean);\n  };\n\n  return (\n    <div className=\"post-page fade-in\">\n      <div className=\"container\">\n        {/* Back Navigation */}\n        <div className=\"post-navigation\">\n          <Link to=\"/blog\" className=\"back-link\">\n            <ArrowLeft size={20} />\n            Volver al blog\n          </Link>\n        </div>\n\n        {/* Post Header */}\n        <header className=\"post-header\">\n          <div className=\"post-meta\">\n            <span className=\"post-date\">\n              <Calendar size={16} />\n              {formattedDate}\n            </span>\n            <span className=\"post-read-time\">\n              <Clock size={16} />\n              {post.readTime}\n            </span>\n            <button onClick={handleShare} className=\"share-button\">\n              <Share2 size={16} />\n              Compartir\n            </button>\n          </div>\n\n          <h1 className=\"post-title\">{post.title}</h1>\n          \n          <p className=\"post-excerpt\">{post.excerpt}</p>\n\n          <div className=\"post-tags\">\n            {post.tags.map((tag) => (\n              <span key={tag} className=\"tag\">\n                <Tag size={12} />\n                {tag}\n              </span>\n            ))}\n          </div>\n        </header>\n\n        {/* Post Content */}\n        <article className=\"post-content\">\n          <div className=\"prose\">\n            {renderContent(post.content)}\n          </div>\n        </article>\n\n        {/* Post Footer */}\n        <footer className=\"post-footer\">\n          <div className=\"author-info\">\n            <div className=\"author-details\">\n              <h4>Escrito por {post.author}</h4>\n              <p>Desarrollador Full Stack apasionado por crear experiencias web increíbles.</p>\n            </div>\n          </div>\n\n          <div className=\"post-actions\">\n            <button onClick={handleShare} className=\"btn btn-secondary\">\n              <Share2 size={18} />\n              Compartir artículo\n            </button>\n            <Link to=\"/blog\" className=\"btn btn-primary\">\n              Ver más artículos\n            </Link>\n          </div>\n        </footer>\n\n        {/* Related Posts */}\n        {relatedPosts.length > 0 && (\n          <section className=\"related-posts\">\n            <h3>Artículos relacionados</h3>\n            <div className=\"related-grid\">\n              {relatedPosts.map((relatedPost) => (\n                <PostCard key={relatedPost.id} post={relatedPost} />\n              ))}\n            </div>\n          </section>\n        )}\n      </div>\n    </div>\n  );\n};\n\nexport default Post;"}}]
