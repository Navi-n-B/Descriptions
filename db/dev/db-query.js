const pool = require('./pool.js');

const query = {
  query(quertText, params) {
    return new Promise((resolve, reject) => {
      pool.authenticate().then(()=>{(quertText, params)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
  };
};

export default query;
