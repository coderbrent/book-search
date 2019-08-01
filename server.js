const express = require('express');
const port = process.env.PORT || 3001;
const app = express();

app.get('/', (req, res) => res.send('Express DERPPP!'));

app.listen(port, ()=> console.log(`Server is working and listening on port ${port}!`))