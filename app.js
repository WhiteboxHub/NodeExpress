var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

var db = mongoose.connect('mongodb://104.197.80.27/test');
var Job = require('./models/jobModel');

var app = express();
var port = process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.send('Welcome to my API!!!');
});


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var jobRouter = require('./routes/jobRoutes')(Job);
app.use('/api/jobs', jobRouter);


app.listen(port, function () {
    console.log('Running on port' + port);
});