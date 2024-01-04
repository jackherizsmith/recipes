const pg = require('pg');

const conString = 'postgres://jhnappwe:s_mVOFA_zNCbyb4xtdZD0_YqxZMhuJrN@tyke.db.elephantsql.com/jhnappwe';
const client = new pg.Client(conString);

function request(req?: string) {
  return client.connect(err => {
    if (err) {
      return console.error('could not connect to postgres', err);
    }
    return client.query(req || 'SELECT NOW() AS "theTime"', (err, result) => {
      client.end();
      if (err) {
        return console.error('error running query', err);
      }
      console.log(result.rows);
      return result.rows;
    });
  });
}

export default request;
