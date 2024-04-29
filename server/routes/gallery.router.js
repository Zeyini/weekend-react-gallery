const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js'); // requring the pool file to access DB

// PUT /gallery/like/:id
router.put('/:id', (req, res) => {
  const sqlText = 'UPDATE gallery SET likes = likes + 1 WHERE id = $1';
  const sqlIDValue = req.params.id;
  pool.query(sqlText, [sqlIDValue])

  .then(() => {
    res.sendStatus(200);
  })
  .catch(error => {
    console.error('Error counting db:', error);
    res.sendStatus(500);
  });

});




// GET /gallery 👇
router.get('/', (req, res) => {
  // code here

  // use pool to retrieve all the data in gallery table
  let queryText = 'SELECT * from "gallery"';
  pool.query(queryText)
  
  // when data is received send it to client side 
  .then((result) => {
    res.send(result.rows);
})

// if the data is not retrieved from DB sucessfully send a 500 error
.catch((err) => {
  console.log("client side data not recieved," , err);
  res.sendStatus(200);
})

});


module.exports = router;
