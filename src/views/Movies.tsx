/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Movie from "../components/Movie/Movie";
import FormInput from "../components/FormInput/FormInput";
import sorting from "../helpers/sorting";
import Title from "../components/Title/Title";
import data from "../mocks/sample.json";

const Movies: React.FC<any> = () => {
  const [sortMethod, setSortMethod] = useState<string>("yearDescending");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [demandedMovies, setDemandedMovies] = useState<IMovie[]>([]);
  const [initialMovies, setInitialMovies] = useState<IMovie[]>([]);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);

  const fetchData = async () => {
    setIsPending(true);
    if (process.env.NODE_ENV === "development") {
      console.log("abc");
      try {
        const res = await fetch("/api/moviesSeries");
        const moviesSeries = await res.json();
        const first21MoviesAfter2010 = moviesSeries
          .filter(
            (serie: IMovie) =>
              serie.releaseYear >= 2010 && serie.programType === "movie"
          )
          .slice(0, 21);
        setInitialMovies(first21MoviesAfter2010);
        setIsPending(false);
        setError(null);
      } catch (err: any) {
        setError(err.message);
        setIsPending(false);
      }
    } else {
      const first21MoviesAfter2010 = data
        .filter(
          (serie) => serie.releaseYear >= 2010 && serie.programType === "movie"
        )
        .slice(0, 21);
      setInitialMovies(first21MoviesAfter2010);
      setIsPending(false);
      setError(null);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const sortedAndSearchMovies = sorting(initialMovies, sortMethod).filter(
      (serie: IMovie) => serie.title.toLocaleLowerCase().includes(searchTerm)
    );
    if (searchTerm.length > 2) {
      if (sortedAndSearchMovies.length > 0) {
        setIsNotFound(false);
        setDemandedMovies(sortedAndSearchMovies);
      } else {
        setIsNotFound(true);
        setDemandedMovies([]);
      }
    } else {
      setIsNotFound(false);
      setDemandedMovies(initialMovies);
    }
  }, [sortMethod, searchTerm, initialMovies]);

  return (
    <>
      <Header />
      <Title title="Popular Movies" />
      <main>
        <div className="main-container">
          <FormInput
            setSortMethod={setSortMethod}
            sortMethod={sortMethod}
            setSearchTerm={setSearchTerm}
          />
          {isNotFound && (
            <h3>{`Could not find any movie matching to ${searchTerm}`}</h3>
          )}

          <div className="seriesList">
            {error && <h1>{error}</h1>}
            {isPending && <h1>Loading...</h1>}
            {demandedMovies.map((movie: ISerie, idx: number) => {
              return <Movie key={idx} movie={movie} />;
            })}
          </div>
        </div>
      </main>
    </>
  );
};

export default Movies;
