import React from "react";
import Header from "../components/Header/Header";
import PopularCard from "../components/Cards/PopularCard";
import Title from "../components/Title/Title";

const HomePage = () => {
  return (
    <>
      <Header />
      <Title title="Popular Titles" />

      <main>
        <div className="main-container">
          <PopularCard name="series" link="/series" />
          <PopularCard name="movies" link="/movies" />
        </div>
      </main>
    </>
  );
};

export default HomePage;
