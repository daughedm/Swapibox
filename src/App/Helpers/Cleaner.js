const crawlCleaner = (rawData) => {
  let randNum = Math.floor(Math.random() * 7);
  let cleanCrawlData = rawData.results.map(film => {
    return { 
      title: film.title, 
      episode_id: film.episode_id, 
      opening_crawl: film.opening_crawl 
    }
  })
  return cleanCrawlData[randNum];
}

const peopleCleaner = (rawData) => {
  const cleanPeopleData = rawData.results.map(person => {
    return {
      name: person.name,
      homeworld: person.homeworld,
      species: person.species,
      population: person.population
    }
  })
  return cleanPeopleData;
}

const planetsCleaner = (rawData) => {
  const cleanPlanetsData = rawData.results.map(planet => {
    return {
      name: planet.name,
      terrain: planet.terrain,
      population: planet.population,
      climate: planet.climate,
      residents: planet.residents
    }
  })
  return cleanPlanetsData;
}

const vehiclesCleaner = (rawData) => {
  const cleanVehiclesData = rawData.results.map(vehicle => {
    return {
      name: vehicle.name,
      model: vehicle.model,
      vehicle_class: vehicle.vehicle_class,
      passengers: vehicle.passengers
    }
  })
  return cleanVehiclesData;
}



export { 
  crawlCleaner, 
  peopleCleaner, 
  vehiclesCleaner, 
  planetsCleaner 
};