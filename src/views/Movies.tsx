/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Movie from "../components/Movie/Movie";
import FormInput from "../components/FormInput/FormInput";
import sorting from "../helpers/sorting";
import Title from "../components/Title/Title";

const Movies: React.FC<any> = () => {
  const [sortMethod, setSortMethod] = useState<string>("yearDescending");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [demandedMovies, setDemandedMovies] = useState<IMovie[]>([]);
  const [initialMovies, setInitialMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const fetchData = async () => {
    setIsPending(true);
    try {
      const res = await fetch("/api/moviesSeries");
      const moviesSeries = await res.json();
      const first21MoviesAfter2010 = moviesSeries
        .filter(
          (serie: IMovie) =>
            serie.title.toLocaleLowerCase().includes(searchTerm) &&
            serie.releaseYear >= 2010 &&
            serie.programType === "movie"
        )
        .slice(0, 21);
      setInitialMovies(first21MoviesAfter2010);
      setIsPending(false);
      setError(null);
    } catch (err: any) {
      setError(err.message);
      setIsPending(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const sortedAndSearchSeries = sorting(initialMovies, sortMethod).filter(
      (serie: IMovie) => serie.title.toLocaleLowerCase().includes(searchTerm)
    );

    setDemandedMovies(sortedAndSearchSeries);
  }, [sortMethod, searchTerm]);

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

          <div className="seriesList">
            {error && <h1>{error}</h1>}
            {isPending && <h1>Loading...</h1>}
            {(demandedMovies.length > 0 ? demandedMovies : initialMovies).map(
              (movie: IMovie, idx: number) => {
                return <Movie key={idx} movie={movie} />;
              }
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default Movies;
