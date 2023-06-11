const express = require('express');
const bodyParser = require('body-parser');
const blogRoutes = require('./api/blog/blog.routes')
const app = express();

app.use(bodyParser.json());

app.use('/api/blog', blogRoutes)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App listening on port`, PORT);
});
