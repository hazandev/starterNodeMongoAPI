const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const dbService = require('./services/generalService/db.service');

const collection = async () => {
    const userCollection = await dbService.getCollection('user');
    console.log(userCollection);
}

collection();


app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on port`, PORT);
});
