import pool from './pool';

const testAuthenticate = function(){
  try {
    pool.authenticate().then(()=>{
      console.log('Connection has been established successfully.');
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

const getListings = (request, response) => {
  pool.query('SELECT * FROM listings ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getListingById = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query('SELECT * FROM listings WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error;
    };
    response.status(200).json(results.rows);
  });
};

const deleteListing = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM listing WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Listing deleted with ID: ${id}`)
  })
}

module.exports = {
  pool,
  testAuthenticate,
  getListings,
  getListingById,
  // createListing,
  updateListing,
  deleteListing,
}