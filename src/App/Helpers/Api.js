import {
  crawlCleaner,
  vehiclesCleaner,
} from '../Helpers/Cleaner';

const crawlFetch = async (url) => {
  const response = await fetch(url);
  const filmsData = await response.json();
  const crawl = crawlCleaner(filmsData);
  return crawl;
};

const vehiclesFetch = async (url) => {
  const response = await fetch(url);
  const vehiclesData = await response.json();
  const cleanedVehiclesData = vehiclesCleaner(vehiclesData);
  return cleanedVehiclesData;
};

const peopleFetch = async (url) => {
  const response = await fetch(url);
  const peopleData = await response.json();

  const homeworldFetch = peopleData.results.map(async (person, i) => {
    const homeworldResponse = await fetch(person.homeworld);
    const homeworldData = await homeworldResponse.json();

    const specieResponse = await fetch(person.species[0]);
    const specieData = await specieResponse.json();

    const selectedHWData = {
      population: homeworldData.population,
      homeworld: homeworldData.name,
      species: specieData.name
    };

    const newpeopleObj = Object.assign({}, peopleData.results[i], selectedHWData);
    return newpeopleObj;
  });

  return Promise.all(homeworldFetch);
};

const planetsFetch = async (url) => {
  const response = await fetch(url);
  const planetsData = await response.json();

  const planetInfo = planetsData.results.map(async (planet) => {
    const residentsInfo = planet.residents.map(async (resident) => {

      return await residentsFetch(resident);
    });
    const residentNames = await Promise.all(residentsInfo);
    return {
      residents: residentNames.length ? residentNames.join(', ') : 'unknown',
      population: planet.population,
      terrain: planet.terrain,
      climate: planet.climate,
      name: planet.name
    };
  });
  return Promise.all(planetInfo);
};

const residentsFetch = async (residentUrl) => {
  const residentResponse = await fetch(residentUrl);
  const residentsApi = await residentResponse.json();
  return await residentsApi.name;
};

export {
  crawlFetch,
  vehiclesFetch,
  planetsFetch,
  peopleFetch
};