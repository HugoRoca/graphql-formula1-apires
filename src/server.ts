import express from 'express';
import compression from 'compression';
import cors from 'cors';
import schema from './schema';
import { ApolloServer } from 'apollo-server-express';
import { createServer } from 'http';
import expressPlayGround from 'graphql-playground-middleware-express';
import { dataSources } from './data';

async function init() {
    const app = express();

    app.use(cors());

    app.use(compression());

    const server = new ApolloServer({
        schema,
        introspection: true,
        dataSources: () => ({
            seasons: new dataSources.SeasonsData(),
            races: new dataSources.RacesData(),
            drivers: new dataSources.DriversData()
        })
    });

    server.applyMiddleware({ app });

    app.use('/', expressPlayGround({
        endpoint: '/graphql'
    }));

    const PORT = process.env.PORT || 3000;

    const httpServer = createServer(app);

    httpServer.listen({ port: PORT }, (): void => console.log(`http://localhost:${PORT}/graphql`));
}

init();
