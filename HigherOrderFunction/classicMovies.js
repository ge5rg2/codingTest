/** 공략
 * arr에 filter 적용 year이하인 값만 나오게 한 뒤
 * map으로 el.title" by "el.direcetor 적용
 */
function classicMovies(arr, year) {
  // TODO: 여기에 코드를 작성합니다.
  return arr
    .filter((el) => el.year < year)
    .map((el) => el.title + " by " + el.director);
}

let output = classicMovies(
  [
    {
      title: "Batman",
      year: 1989,
      director: "Tim Burton",
      imdbRating: 7.6,
    },
    {
      title: "Batman Returns",
      year: 1992,
      director: "Tim Burton",
      imdbRating: 7.0,
    },
    {
      title: "Batman Forever",
      year: 1995,
      director: "Joel Schumacher",
      imdbRating: 5.4,
    },
  ],
  1993
);

console.log(output); // --> ["Batman by Tim Burton", "Batman Returns by Tim Burton"]
