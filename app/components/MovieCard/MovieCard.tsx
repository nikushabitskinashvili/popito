import Image from 'next/image';
import styles from './MovieCard.module.scss';
import img1 from '@/public/svg/Geometric, Abstract.svg';
import img2 from '@/public/svg/Group.svg';
import img3 from '@/public/svg/Interface, Essential.svg';
import img4 from '@/public/svg/Path.svg';

export const MovieCard = ({
  id,
  title,
  year,
  ganres,
  movieImg,
  rating,
  duration,
}: MovieCard) => {
  console.log(id);
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <Image
          src={movieImg}
          width={272}
          height={403}
          alt={title}
          className={styles.image}
        />
      </div>
      <div className={styles.overlay}>
        <div className={styles.iconsWrapper}>
          <div className={styles.iconsContainer}>
            <Image src={img1} alt="heart-icon" />
            <Image src={img2} alt="heart-icon" />
            <Image src={img3} alt="heart-icon" />
          </div>
        </div>
        <div className={styles.textContainer}>
          <h4 className={styles.movieTitle}>{title}</h4>
          <p className={styles.ganres}>
            {year}{' '}
            {ganres.map((ganre, index) => (
              <span key={index}>
                {ganre.title}
                {index < ganres.length - 1 && ', '}
              </span>
            ))}
          </p>
          <p className={styles.imdbInfo}>
            IMDB {rating}
            <span>{duration} min</span>
          </p>
          <button className={styles.button}>
            <Image src={img4} alt="heart-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};
