import {
  crawlCleaner,
  peopleCleaner,
  planetsCleaner,
  vehiclesCleaner
} from './Cleaner.js';


describe('crawlCleaner', () => {
  let rawData;

  beforeEach(() => {
    rawData = {
      "results": [{
        "title": "A New Hope",
        "episode_id": 1,
        "opening_crawl": "It is a period of civil war."
      },
      {
        "title": "A New Hope",
        "episode_id": 1,
        "opening_crawl": "It is a period of civil war."
      },
      {
        "title": "A New Hope",
        "episode_id": 1,
        "opening_crawl": "It is a period of civil war."
      },
      {
        "title": "A New Hope",
        "episode_id": 1,
        "opening_crawl": "It is a period of civil war."
      },
      {
        "title": "A New Hope",
        "episode_id": 1,
        "opening_crawl": "It is a period of civil war."
      },
      {
        "title": "A New Hope",
        "episode_id": 1,
        "opening_crawl": "It is a period of civil war."
      },
      {
        "title": "A New Hope",
        "episode_id": 1,
        "opening_crawl": "It is a period of civil war."
      }
      ]
    };
  });

  it('Should return an object', () => {
    const expected = {
      "title": "A New Hope",
      "episode_id": 1,
      "opening_crawl": "It is a period of civil war."
    };

    const result = crawlCleaner(rawData);
    
    expect(result).toEqual(expected);
  });

  it('Should return keys of title, episode id and opening crawl', () => {

    const result = crawlCleaner(rawData);
    
    expect(result.title).toEqual("A New Hope");
    expect(result.episode_id).toEqual(1);
    expect(result.opening_crawl).toEqual("It is a period of civil war.");
    expect(result.notThere).toEqual(undefined);

  });

  describe('peopleCleaner', () => {
    let peopleData;
    beforeEach(() => {
      peopleData = [{
        "name": "Dude McAwesome",
        "homeworld": "some planet",
        "species": "unknown",
        "population": 1,
        "shouldNotBeHere": "SupDude"
      },
      {
        "name": "C-3PO",
        "homeworld": "a planet",
        "species": "robot",
        "population": 444444,
        "shouldNotBeHere": "Sup"
      }
      ];
    });

    it('Should return an array of objects', () => {

      const expected = [{
        "name": "Dude McAwesome",
        "homeworld": "some planet",
        "species": "unknown",
        "population": 1
      },
      {
        "name": "C-3PO",
        "homeworld": "a planet",
        "species": "robot",
        "population": 444444
      }
      ];

      const result = peopleCleaner(peopleData);
      
      expect(result).toEqual(expected);
    });

    it('Should return keys of name, homeworld, species and population ', () => {
      const result = peopleCleaner(peopleData);

      expect(result[0].name).toEqual("Dude McAwesome");
      expect(result[0].homeworld).toEqual("some planet");
      expect(result[0].species).toEqual("unknown");
      expect(result[0].population).toEqual(1);
      expect(result[0].shouldNotBeHere).toEqual(undefined);
    });

  });

  describe('vehiclesCleaner', () => {
    let vehicleData;
    beforeEach(() => {
      vehicleData = {
        "results": [{
          "name": 'el camino',
          "model": 'yugo',
          "vehicle_class": 'car',
          "passengers": 4,
          "shouldNotBeHere": 'Sup'
        }]
      };
    });

    it('Should return an array of objects', () => {

      const expected = [{
        "name": 'el camino',
        "model": 'yugo',
        "vehicle_class": 'car',
        "passengers": 4,
      }];

      const result = vehiclesCleaner(vehicleData);
      
      expect(result).toEqual(expected);
    });

    it('Should return keys of name, model, vehicleclass, passengers ', () => {
      const result = vehiclesCleaner(vehicleData);

      expect(result[0].name).toEqual("el camino");
      expect(result[0].model).toEqual("yugo");
      expect(result[0].vehicle_class).toEqual("car");
      expect(result[0].passengers).toEqual(4);
      expect(result[0].shouldNotBeHere).toEqual(undefined);
    });

  });

  describe('planetsCleaner', () => {
    let planetData;
    beforeEach(() => {
      planetData = {
        "results": [{
          "name": 'goober',
          "terrain": 'smooth',
          "population": 800,
          "climate": "mild",
          "residents": "weirdos",
          "shouldNotBeHere": 'Sup'
        }]
      };
    });

    it('Should return an array of objects', () => {

      const expected = [{
        "name": 'goober',
        "terrain": 'smooth',
        "population": 800,
        "climate": "mild",
        "residents": "weirdos"
      }];

      const result = planetsCleaner(planetData);
      
      expect(result).toEqual(expected);
    });

    it('Should return keys of name, terrain, population, climate, residents', () => {
      const result = planetsCleaner(planetData);

      expect(result[0].name).toEqual("goober");
      expect(result[0].terrain).toEqual("smooth");
      expect(result[0].population).toEqual(800);
      expect(result[0].climate).toEqual("mild");
      expect(result[0].residents).toEqual("weirdos");
      expect(result[0].shouldNotBeHere).toEqual(undefined);
    });

  });

});