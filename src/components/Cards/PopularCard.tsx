import React from "react";
import { Link } from "react-router-dom";
import "./PopularCard.css";

interface IPopularCardProps {
  name: string;
  link: string;
}

const PopularCard: React.FC<IPopularCardProps> = ({ name, link }) => {
  return (
    <Link to={link}>
      <section>
        <div className="popular-top">
          <h3>{name}</h3>
        </div>
        <div className="popular-bottom">
          <span>Popular {name}</span>
        </div>
      </section>
    </Link>
  );
};

export default PopularCard;
