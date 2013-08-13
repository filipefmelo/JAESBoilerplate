
/**
 * Module dependencies
 */

var express = require('express'),
  routes = require('./routes'),
  http = require('http'),
  path = require('path'),
  stylus = require('stylus');

var app = module.exports = express();


/**
 * Configuration
 */

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(stylus.middleware({
    src: __dirname + '/public',
    dest: __dirname + '/public'
}));
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use('/bower_components', express.static(path.join(__dirname, '/bower_components')));
app.use('/', express.static(path.join(__dirname, '/public')));
app.use(app.router);

// development only
if (app.get('env') === 'development') {
  app.use(express.errorHandler());
}

// production only
if (app.get('env') === 'production') {
  // TODO
};


/**
 * Routes
 */

// serve index and view partials
app.get('/', routes.index);
app.get('/partials/:name', routes.partials);

// redirect all others to the index (HTML5 history)
app.get('*', routes.index);


/**
 * Start Server
 */

http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
