import { crawlCleaner, peopleCleaner, vehiclesCleaner, planetsCleaner } from '../Helpers/Cleaner'

const crawlFetch = async (url) => {
  const response = await fetch(url);
  const filmsData = await response.json();
  const crawl = crawlCleaner(filmsData);
  return crawl;
}

const vehiclesFetch = async (url) => {
  const response = await fetch(url);
  const vehiclesData = await response.json();
  const cleanedVehiclesData = vehiclesCleaner(vehiclesData);
  return cleanedVehiclesData;
}

export { crawlFetch, vehiclesFetch }