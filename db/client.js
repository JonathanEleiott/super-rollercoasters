/* eslint-disable no-undef */
const { Client } = require('pg');
const client = new Client(process.env.DATABASE_URL || 'postgres://localhost:5432/super_rollercoasters');

module.exports = client;