import path from 'path';
import fs from 'fs';
import pg from './knex';

// read the seed file and stringify the sql
const sql = fs.readFileSync(path.resolve(__dirname, '../database/seed.sql')).toString();

// seed the database using our pg connection
async function migrate() {
  await pg.raw(sql).catch(err => {
    console.log(err);
  }).finally(function () {
    console.log('Database seeded successfully!');
    pg.destroy();
  });
}

migrate();
