const path = require('path');
const express =  require('express');

const publicPath = path.join(__dirname,'../public');

var app = express();

const port = process.env.PORT || 3000;

//middle

app.use(express.static(publicPath));

app.listen(port, () => {
    consle.log(`Server is up on ${port}`);
});