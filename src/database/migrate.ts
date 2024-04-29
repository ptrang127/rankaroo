import path from 'path';
import fs from 'fs';
import pg from './knex';

// read the seed file and stringify the sql
const sql = fs.readFileSync(path.resolve(__dirname, "../database/seed.sql")).toString();

// seed the database using our pg connection
(async () => {
    await pg.raw(sql).then(function(resp) {
        console.log('Database seeded');
        console.log(resp);
    });
})();
