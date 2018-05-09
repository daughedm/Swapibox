const crawlCleaner = (rawData) => {
  let randNum = Math.floor(Math.random() * 1) + 1;
  let newcrawlData = rawData.results.map(film => {
    return { title: film.title, episode_id: film.episode_id, opening_crawl: film.opening_crawl }
  })
  return newcrawlData[randNum];
}

const peopleCleaner = (rawData) => {

}

const planetsCleaner = (rawData) => {

}

const vehiclesCleaner = (rawData) => {

}



export { 
  crawlCleaner, 
  peopleCleaner, 
  vehiclesCleaner, 
  planetsCleaner 
};