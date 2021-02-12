const API_TOKEN = "f921988f78b0707a4074be54a83b1620"

export function getFilmsFromApiWithSearchedText(text, page) {
  const url =
    "https://api.themoviedb.org/3/search/movie?api_key=f921988f78b0707a4074be54a83b1620" +
    "&language=fr&query=" +
    text +
    "&page=" +
    page

  // const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_TOKEN}&language=${text}fr&query=${page}`
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}
export function getImageFromApi(name) {
  return "https://image.tmdb.org/t/p/w300" + name
}

export function getFilmDetailFromApi(id) {
  return fetch(
    "https://api.themoviedb.org/3/movie/" +
      id +
      "?api_key=" +
      API_TOKEN +
      "&language=fr"
  )
    .then((response) => response.json())
    .catch((error) => console.error(error))
}
