/* eslint-disable no-undef */
const client = require('./client.js');

const createUser = async(username, password) => {
  try {
    await client.query(`
      INSERT INTO users (username, password)
      VALUES ('${username}', '${password}');
    `);
  } catch(err) {
    console.log(err);
  }
}

const getAllUsers = async() => {
  try {
    const { rows } = await client.query(`
      SELECT * FROM users;
    `);

    return rows;
  } catch(err) {
    console.log(err);
  }
}

module.exports = {
  createUser,
  getAllUsers
}