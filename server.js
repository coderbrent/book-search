const express = require('express');
const port = process.env.PORT || 8080;
const app = express();

app.get('/', (req, res) => res.send('Express Yo!'));

app.listen(port, ()=> console.log(`Server is working and listening on port ${port}!`))