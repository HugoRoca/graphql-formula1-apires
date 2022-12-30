import { IResolvers } from 'graphql-tools';

const query: IResolvers = {
    Query: {
        async seasons(_, __, { dataSources }) {
            return await dataSources.seasons.getSeasons().then(
                (response: any) => response.MRData.SeasonTable.Seasons
            )
        },
        async racesByYear(_, { year }, { dataSources }) {
            return await dataSources.races.getRacesByYear(year).then(
                (response: any) => response.MRData.RaceTable.Races
            )
        },
        async raceByYearAndRound(_, { year, round }, { dataSources }) {
            return await dataSources.races.getRaceByYearAndRound(year, round).then(
                (response: any) => response.MRData.RaceTable.Races[0]
            )
        },
        async drivers(_, { size, page }, { dataSources }) {
            return await dataSources.drivers.getDrivers(size, page).then(
                (response: any) => response.MRData.DriverTable.Drivers
            )
        },
    }
};

export default query;