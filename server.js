/**
 * Created by Firdoesh on 6/30/2016.
 */

    var express = require('express');
    var app     = express();
    //var mongoose = require('mongoose');
    var morgan = require('morgan');             // log requests to the console (express4)
    var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
    var methodOverride = require('method-override');


        // configuration

    //mongoose.connect('mongodb://localhost:27017/TodoApp');

    app.use(express.static(__dirname + '/public'));
    app.use(morgan('dev'));                                         // log every request to the console
    app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
    app.use(bodyParser.json());                                     // parse application/json
    app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
    app.use(methodOverride());


            app.get('*', function(req, res) {
            res.sendfile('$./public/index.html');
                });
//listner

    app.listen(3000);
       console.log("App running on port 3000");

