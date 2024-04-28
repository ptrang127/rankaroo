import knex from 'knex';

export const pg = knex({
    client: 'pg',
    connection: {
        host: 'localhost',
        port: 5432,
        user: 'postgres',
        database: 'rankaroo',
        password: 'password',
    },
});

export default pg;