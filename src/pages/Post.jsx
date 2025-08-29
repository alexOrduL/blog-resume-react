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
      .split('\n\n')
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
          const code = paragraph.replace(/```[\w]*\n?/, '').replace(/```$/, '');
          return (
            <pre key={index} className="code-block">
              <code>{code}</code>
            </pre>
          );
        }
        if (paragraph.startsWith('- ') || paragraph.match(/^\d+\. /)) {
          const items = paragraph.split('\n').filter(item => item.trim());
          const isOrdered = paragraph.match(/^\d+\. /);
          const ListComponent = isOrdered ? 'ol' : 'ul';
          return (
            <ListComponent key={index}>
              {items.map((item, i) => (
                <li key={i}>{item.replace(/^- |^\d+\. /, '')}</li>
              ))}
            </ListComponent>
          );
        }
        if (paragraph.trim()) {
          return <p key={index}>{paragraph}</p>;
        }
        return null;
      })
      .filter(Boolean);
  };

  return (
    <div className="post-page fade-in">
      <div className="container">
        {/* Back Navigation */}
        <div className="post-navigation">
          <Link to="/blog" className="back-link">
            <ArrowLeft size={20} />
            Volver al blog
          </Link>
        </div>

        {/* Post Header */}
        <header className="post-header">
          <div className="post-meta">
            <span className="post-date">
              <Calendar size={16} />
              {formattedDate}
            </span>
            <span className="post-read-time">
              <Clock size={16} />
              {post.readTime}
            </span>
            <button onClick={handleShare} className="share-button">
              <Share2 size={16} />
              Compartir
            </button>
          </div>

          <h1 className="post-title">{post.title}</h1>
          
          <p className="post-excerpt">{post.excerpt}</p>

          <div className="post-tags">
            {post.tags.map((tag) => (
              <span key={tag} className="tag">
                <Tag size={12} />
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Post Content */}
        <article className="post-content">
          <div className="prose">
            {renderContent(post.content)}
          </div>
        </article>

        {/* Post Footer */}
        <footer className="post-footer">
          <div className="author-info">
            <div className="author-details">
              <h4>Escrito por {post.author}</h4>
              <p>Desarrollador Full Stack apasionado por crear experiencias web increíbles.</p>
            </div>
          </div>

          <div className="post-actions">
            <button onClick={handleShare} className="btn btn-secondary">
              <Share2 size={18} />
              Compartir artículo
            </button>
            <Link to="/blog" className="btn btn-primary">
              Ver más artículos
            </Link>
          </div>
        </footer>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="related-posts">
            <h3>Artículos relacionados</h3>
            <div className="related-grid">
              {relatedPosts.map((relatedPost) => (
                <PostCard key={relatedPost.id} post={relatedPost} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default Post;
