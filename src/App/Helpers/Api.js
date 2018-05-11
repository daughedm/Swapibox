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

const planetsFetch = async (url) => {
  const response = await fetch(url);
  const planetsData = await response.json();
  const cleanedPlanetsData = planetsCleaner(planetsData);
  return cleanedPlanetsData;
}

const peopleFetch = async (url) => {
  const response = await fetch(url);
  const peopleData = await response.json();
  
  const homeworldFetch = peopleData.results.map(async (person, i) => {
    const homeworldResponse = await fetch(person.homeworld);
    const homeworldData = await homeworldResponse.json();
    
    const specieResponse = await fetch(person.species[0]);
    const specieData = await specieResponse.json();
    
    const selectedHWData= { 
      population: homeworldData.population, 
      homeworld: homeworldData.name, 
      species: specieData.name
    }
  
    const newpeopleObj = Object.assign({}, peopleData.results[i], selectedHWData )
    return newpeopleObj;
  })

  return Promise.all(homeworldFetch);
  }



export { crawlFetch, vehiclesFetch, planetsFetch, peopleFetch }