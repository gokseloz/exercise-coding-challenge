/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import FormInput from "../components/FormInput/FormInput";
import Header from "../components/Header/Header";
import Serie from "../components/Serie/Serie";
import Title from "../components/Title/Title";
import sorting from "../helpers/sorting";
import data from "../mocks/sample.json";

const Series = () => {
  const [sortMethod, setSortMethod] = useState<string>("yearDescending");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [demandedSeries, setDemandedSeries] = useState<ISerie[]>([]);
  const [initialSeries, setInitialSeries] = useState<ISerie[]>([]);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const fetchData = async () => {
    setIsPending(true);

    if (process.env.NODE_ENV === "development") {
      try {
        const res = await fetch("/api/moviesSeries");
        if (!res.ok) {
          throw Error("could not fetch the data for that resource");
        }
        const moviesSeries = await res.json();
        const first21SeriesAfter2010 = moviesSeries
          .filter(
            (serie: ISerie) =>
              serie.title.toLocaleLowerCase().includes(searchTerm) &&
              serie.releaseYear >= 2010 &&
              serie.programType === "series"
          )
          .slice(0, 21);
        setInitialSeries(first21SeriesAfter2010);
        setIsPending(false);
        setError(null);
      } catch (err: any) {
        setError(err.message);
        setIsPending(false);
      }
    } else {
      const first21SeriesAfter2010 = data
        .filter(
          (serie) =>
            serie.title.toLocaleLowerCase().includes(searchTerm) &&
            serie.releaseYear >= 2010 &&
            serie.programType === "series"
        )
        .slice(0, 21);
      setInitialSeries(first21SeriesAfter2010);
      setIsPending(false);
      setError(null);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const sortedAndSearchSeries = sorting(initialSeries, sortMethod).filter(
      (serie: ISerie) => serie.title.toLocaleLowerCase().includes(searchTerm)
    );

    setDemandedSeries(sortedAndSearchSeries);
  }, [sortMethod, searchTerm]);
  console.log(demandedSeries);
  console.log(initialSeries);

  return (
    <>
      <Header />
      <Title title="Popular Series" />
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
            {(demandedSeries.length > 0 ? demandedSeries : initialSeries).map(
              (serie: ISerie, idx: number) => {
                return <Serie key={idx} serie={serie} />;
              }
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default Series;
