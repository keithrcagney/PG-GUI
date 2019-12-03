const connectionPoint = {};
const { Pool } = require('pg'); 

connectionPoint.createConnection = (req, res, next) => {
let {uri}=req.body;
console.log('uri:', uri)

//uri='postgres://gymyqkck:KDN5_PWumJO6UorMKuex8LLGBsTlISs8@salt.db.elephantsql.com:5432/gymyqkck'

const PG_URI = uri;
const pool = new Pool({
    connectionString: PG_URI
  });
  res.locals.pool=pool;
  pool.query("select tablename from pg_catalog.pg_tables where schemaname != 'pg_catalog' AND schemaname != 'information_scehma'", (err,result)=> console.log("result",result.rows))
  return next();
}

module.exports = {connectionPoint,
    query: (text, params, callback) => {
      console.log('executed query', text);
      return pool.query(text, params, callback);
    }
  };