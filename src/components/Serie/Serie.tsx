import React, { useState } from "react";
import "./Serie.css";

interface ISerieProps {
  serie: any;
}

const Serie: React.FC<ISerieProps> = ({ serie }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const img = serie.images["Poster Art"].url;

  return (
    <article>
      <div className="article-content">
        <div className="serie-top">
          <img
            src={img}
            alt={serie.title}
            onLoad={() => setImageLoaded(true)}
          />
        </div>
        <div className="serie-bottom">
          {!imageLoaded ? <h3>Loading...</h3> : <span>{serie.title}</span>}
        </div>
      </div>
    </article>
  );
};

export default Serie;
