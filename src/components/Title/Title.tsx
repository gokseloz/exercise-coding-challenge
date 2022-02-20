import React from "react";
import "./Title.css";

interface ITitleProps {
  title: string;
}

const Title: React.FC<ITitleProps> = ({ title }) => {
  return (
    <div className="header-container-bottom">
      <div className="header-bottom">
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default Title;
