/* eslint-disable no-undef */
const client = require('./client.js');
const { createUser } = require('./users.js');

const dropTables = async() => {
  try {
    await client.query(`
      DROP TABLE IF EXISTS users;
    `);
  } catch(err) {
    console.log(err);
  }
}

const createTables = async() => {
  try {
    await client.query(`
      CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(30) NOT NULL UNIQUE,
        password VARCHAR(30) NOT NULL
      );
    `);
  } catch(err) {
    console.log(err);
  }
}

const syncAndSeed = async() => {
  await client.connect();
  console.log('CONNECTED');

  await dropTables();
  console.log(`TABLES DROPPED!`);
  
  await createTables();
  console.log(`TABLES CREATED!`);

  await createUser('bill123', 'I_am_bill!');
  console.log('USER BILL CREATED!');

  await createUser('amy12', 'AWEsome!');
  console.log('USER AMY CREATED!');

  await client.end();
  console.log(`DISCONNECTED`);
}

syncAndSeed();