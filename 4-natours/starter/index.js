const fs = require('fs');
const express = require('express');

const app = express();

/* app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello from the server!', app: 'Natours' });
});

app.post('/', (req, res) => {
  res.status(200).send('You just post to this URL');
});
 */

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      tours: tours,
    },
  });
});

app.listen(3000, () => {
  console.log('App running on port 3000');
});
