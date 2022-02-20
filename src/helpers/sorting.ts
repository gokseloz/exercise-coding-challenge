export default function sorting(seriesOrMovies: any, sortMethod: any) {
  if (sortMethod === "yearDescending") {
    return seriesOrMovies.sort((a: any, b: any) => {
      let nameA = a.releaseYear;
      let nameB = b.releaseYear;
      if (nameA > nameB) {
        return -1;
      }
      if (nameA < nameB) {
        return 1;
      }
      return 0;
    });
  }
  if (sortMethod === "yearAscending") {
    return seriesOrMovies.sort((a: any, b: any) => {
      let nameA = a.releaseYear;
      let nameB = b.releaseYear;
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
  }
  if (sortMethod === "titleDescending") {
    return seriesOrMovies.sort((a: any, b: any) => {
      let nameA = a.title.toLocaleLowerCase();
      let nameB = b.title.toLocaleLowerCase();
      if (nameA > nameB) {
        return -1;
      }
      if (nameA < nameB) {
        return 1;
      }
      return 0;
    });
  }
  if (sortMethod === "titleAscending") {
    return seriesOrMovies.sort((a: any, b: any) => {
      let nameA = a.title.toLocaleLowerCase();
      let nameB = b.title.toLocaleLowerCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
  }
}
