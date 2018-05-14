import {
  crawlFetch,
  vehiclesFetch,
  peopleFetch,
  planetsFetch
} from './Api.js';

describe('crawlFetch', () => {
  let mockFilmData;
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve({

        results: [{
          "episode_id": "Luke Skywalker",
          "opening_crawl": "Alderaan",
          "title": "Human"
        }, {
          "episode_id": "Luke Skywalker",
          "opening_crawl": "Alderaan",
          "title": "Human"
        }, {
          "episode_id": "Luke Skywalker",
          "opening_crawl": "Alderaan",
          "title": "Human"
        }, {
          "episode_id": "Luke Skywalker",
          "opening_crawl": "Alderaan",
          "title": "Human"
        }, {
          "episode_id": "Luke Skywalker",
          "opening_crawl": "Alderaan",
          "title": "Human"
        }, {
          "episode_id": "Luke Skywalker",
          "opening_crawl": "Alderaan",
          "title": "Human"
        }, {
          "episode_id": "Luke Skywalker",
          "opening_crawl": "Alderaan",
          "title": "Human"
        }]
      })
    }));

  });

  it('crawlFetch should get data for films with the correct parameters', async () => {
    const url = 'https://swapi.co/api/films/';

    crawlFetch(url);
    expect(window.fetch).toHaveBeenCalled();
  });

  // it('peopleFetch should get data for films with the correct parameters', async () => {
  //   const url = 'https://swapi.co/api/people/';

  //   peopleFetch(url);
  //   expect(window.fetch).toHaveBeenCalled();
  // });


});