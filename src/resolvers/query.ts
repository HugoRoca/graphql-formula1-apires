import { IResolvers } from "graphql-tools";

const query: IResolvers = {
  Query: {
    async seasons(_, __, { dataSources }) {
      return await dataSources.seasons
        .getSeasons()
        .then((response: any) => response.MRData.SeasonTable.Seasons);
    },
    async racesByYear(_, { year }, { dataSources }) {
      return await dataSources.races
        .getRacesByYear(year)
        .then((response: any) => response.MRData.RaceTable.Races);
    },
    async raceByYearAndRound(_, { year, round }, { dataSources }) {
      return await dataSources.races
        .getRaceByYearAndRound(year, round)
        .then((response: any) => response.MRData.RaceTable.Races[0]);
    },
    async drivers(_, { size, page }, { dataSources }) {
      return await dataSources.drivers
        .getDrivers(size, page)
        .then((response: any) => response.MRData.DriverTable.Drivers);
    },
    async driversByYear(_, { year }, { dataSources }) {
      return await dataSources.drivers
        .getDriversByYear(year)
        .then((response: any) => response.MRData.DriverTable.Drivers);
    },
    async driversByYearAndRound(_, { year, round }, { dataSources }) {
      return await dataSources.drivers
        .getDriversByYearAndRound(year, round)
        .then((response: any) => response.MRData.DriverTable.Drivers);
    },
    async driverSelect(_, { id }, { dataSources }) {
      return await dataSources.drivers
        .getDriver(id)
        .then((response: any) => response.MRData.DriverTable.Drivers[0]);
    },
    async seasonPilotsRanking(_, { year }, { dataSources }) {
      return await dataSources.drivers
        .getDriverStandings(year)
        .then((response: any) => response.MRData.StandingsTable.StandingsLists[0].DriverStandings);
    },
    async circuits(_, { size, page }, { dataSources }) {
      return await dataSources.circuits
        .getCircuits(size, page)
        .then((response: any) => response.MRData.CircuitTable.Circuits);
    },
    async circuitById(_, { id }, { dataSources }) {
      return await dataSources.circuits
        .getCircuit(id)
        .then((response: any) => response.MRData.CircuitTable.Circuits[0]);
    }
  },
};

export default query;
