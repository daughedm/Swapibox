import { crawlCleaner, peopleCleaner, vehiclesCleaner, planetsCleaner } from '../Helpers/Cleaner'

const crawlFetch = async (url) => {
  const response = await fetch(url);
  const filmsData = await response.json();
  const crawl = crawlCleaner(filmsData);
  return crawl;
}

export { crawlFetch }