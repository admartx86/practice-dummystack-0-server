const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const articleRouter = require('./route');

dotenv.config();

app.use(
  cors({
    origin: ['http://127.0.0.1:8080', 'http://localhost:5173'],
  }),
);

app.use(express.json());

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Node.js listening...' + port);
});
app.use('/articles', articleRouter);
