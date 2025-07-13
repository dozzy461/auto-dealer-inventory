const express = require('express');
const app = express();
const inventoryRouter = require('./controllers/inventory');

app.use(express.json());
app.use('/api/inventory', inventoryRouter);

app.listen(5000, () => console.log('API running on port 5000'));