const Pool = require("pg").Pool;
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "students",
    password: "postgrees",
    port:5432,
});

module.exports = pool;