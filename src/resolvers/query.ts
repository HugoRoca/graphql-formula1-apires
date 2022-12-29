import { IResolvers } from 'graphql-tools';

const query: IResolvers = {
    Query: {
        async seasons(_, __, { dataSources }) {
            return await dataSources.seasons.getSeasons().then(
                (response: any) => response.MRData.SeasonTable.Seasons
            )
        }
    }
};

export default query;