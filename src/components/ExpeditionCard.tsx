import Link from 'next/link';
import styles from './ExpeditionCard.module.css';

interface ExpeditionCardProps {
  title: string;
  tagline?: string;
  slug?: string;
  imageUrl?: string;
}

export default function ExpeditionCard({ 
  title, 
  tagline,
  slug, 
  imageUrl
}: ExpeditionCardProps) {
  
  const content = (
    <>
      <div className={styles.imageWrapper}>
        <div className={styles.imagePlaceholder} style={{ backgroundImage: imageUrl ? `url(${imageUrl})` : undefined }}>
          {!imageUrl && <span className={styles.imageText}>No Image Provided</span>}
        </div>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        {tagline && <p className={styles.tagline}>{tagline}</p>}
        <div className={styles.action}>
          <span className={styles.viewLink}>Explore Experience &rarr;</span>
        </div>
      </div>
    </>
  );

  if (!slug) {
    return (
      <div className={styles.card}>
        {content}
      </div>
    );
  }

  return (
    <Link href={`/expeditions/${slug}`} className={styles.card}>
      {content}
    </Link>
  );
}
