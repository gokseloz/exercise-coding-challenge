import React, { useState } from "react";
import "./Movie.css";

interface IMovieProps {
  movie: any;
}

const Movie: React.FC<IMovieProps> = ({ movie }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const img = movie.images["Poster Art"].url;
  console.log(imageLoaded);

  return (
    <article>
      <div className="article-content">
        <div className="movie-top">
          <img
            src={img}
            alt={movie.title}
            onLoad={() => setImageLoaded(true)}
          />
        </div>
        <div className="movie-bottom">
          {!imageLoaded ? <h3>Loading...</h3> : <span>{movie.title}</span>}
        </div>
      </div>
    </article>
  );
};

export default Movie;
