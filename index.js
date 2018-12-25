const express=require('express');
const app=express();
app.get('/', function (req, res) {
    res.sendFile('index.html', { root: __dirname });
});
var port = process.env.PORT || 3000;
app.listen(port);
