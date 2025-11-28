// server/db.js
const Database = require('better-sqlite3');
const path = require('path');
const fs = require('fs');

const DB_FILE = process.env.SQLITE_FILE || path.join(__dirname, '../data/nblasst.db');

// ensure data folder
const dataDir = path.dirname(DB_FILE);
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });

const db = new Database(DB_FILE);

module.exports = db;
