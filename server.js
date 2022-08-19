const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const url = require('url');
const querystring = require('querystring');
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));


app.get("/api", (req, res, next) => {
    res.send("Get request successful");
})


const http = app.listen(8413, () => console.log(`Server listening on port 8413`));
