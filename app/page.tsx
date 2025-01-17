import { MovieCard } from './components/MovieCard/MovieCard';
import styles from './page.module.css';
import { moviesData } from './utils/constants';

export default function Home() {
  return (
    <div className={styles.page}>
      {moviesData.map((movie) => {
        return (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            year={movie.year}
            ganres={movie.ganres}
            movieImg={movie.movieImg}
            rating={movie.rating}
            duration={movie.duration}
          />
        );
      })}
    </div>
  );
}
