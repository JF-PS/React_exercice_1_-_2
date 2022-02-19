import { differenceInDays } from "date-fns";

export const getAllSeasons = () => [
  {
    title: "Spring",
    picture: "/Spring.e3f24ad5.png?1645291646771",
    period: { start: { m: 3, d: 20 }, end: { m: 6, d: 20 } },
  },
  {
    title: "Summer",
    picture: "/Summer.d9102dc6.png?1645291646771",
    period: { start: { m: 6, d: 21 }, end: { m: 9, d: 22 } },
  },
  {
    title: "Autumn",
    picture: "/Autumn.9b92d16f.png?1645291646771",
    period: { start: { m: 9, d: 23 }, end: { m: 12, d: 20 } },
  },
  {
    title: "Winter",
    picture: "/Winter.4beb169b.png?1645291646771",
    period: { start: { m: 12, d: 21 }, end: { m: 3, d: 19 } },
  },
];

export const getCurrentSeason = (currentDate = new Date()) => {
  const y = currentDate.getFullYear();

  const mySeason = getAllSeasons().filter((season) => {
    const { title, period } = season;
    const { start, end } = period;
    const isWinter = title !== "Winter";

    const beginAt = new Date(isWinter ? y : y - 1, start.m, start.d);
    const endAt = new Date(y, end.m, end.d);

    return currentDate >= beginAt && currentDate <= endAt;
  });

  return mySeason[0];
};

export const getNextSeason = (season = getCurrentSeason()) => {
  const seasons = getAllSeasons();
  const index = seasons.indexOf(season) + 1;
  return seasons[index > seasons.length ? 1 : index];
};

export const getSeasonDays = (season = getCurrentSeason()) => {
  const { title, period } = season;
  const { start, end } = period;
  const y = new Date().getFullYear();
  const isWinter = title !== "Winter";

  return differenceInDays(
    new Date(new Date(`${y}-${end.m}-${end.d}`)),
    new Date(`${isWinter ? y : y - 1}-${start.m}-${start.d}`)
  );
};

export const getSeasonDaysLeft = (
  currentDate = new Date(),
  season = getCurrentSeason()
) => {
  const { end } = season.period;
  const y = new Date().getFullYear();

  return differenceInDays(new Date(`${y}-${end.m}-${end.d}`), currentDate);
};

export const getSeasonDaysHowLong = (
  currentDate = new Date(),
  season = getCurrentSeason()
) => {
  const { title, period } = season;
  const { start } = period;
  const y = new Date().getFullYear();
  const isWinter = title !== "Winter";

  return differenceInDays(
    currentDate,
    new Date(`${isWinter ? y : y - 1}-${start.m}-${start.d}`)
  );
};
