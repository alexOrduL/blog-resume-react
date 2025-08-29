import { Link } from 'react-router-dom';
import { Calendar, Clock, Tag } from 'lucide-react';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import './PostCard.css';

const PostCard = ({ post, featured = false }) => {
  const formattedDate = format(new Date(post.date), 'dd MMM yyyy', { locale: es });

  return (
    <article className={`post-card ${featured ? 'featured' : ''}`}>
      <div className="post-card-content">
        <div className="post-meta">
          <span className="post-date">
            <Calendar size={14} />
            {formattedDate}
          </span>
          <span className="post-read-time">
            <Clock size={14} />
            {post.readTime}
          </span>
        </div>

        <h2 className="post-title">
          <Link to={`/blog/${post.slug}`}>
            {post.title}
          </Link>
        </h2>

        <p className="post-excerpt">
          {post.excerpt}
        </p>

        <div className="post-footer">
          <div className="post-tags">
            {post.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="tag">
                <Tag size={12} />
                {tag}
              </span>
            ))}
          </div>

          <Link to={`/blog/${post.slug}`} className="read-more">
            Leer más →
          </Link>
        </div>
      </div>
    </article>
  );
};

export default PostCard;
