const restify = require('restify');
const {Job} = require('../objs/jobs.js');

module.exports =  function startServer () {
	const server = restify.createServer({
	  name: 'The schedular',
	  version: '1.0.0'
	});
	 
	server.use(restify.plugins.acceptParser(server.acceptable));
	server.use(restify.plugins.queryParser());
	server.use(restify.plugins.bodyParser());
	 
	server.get('/:tennent/:user/job', function (req, res, next) {
	  res.send(jobs);
	  return next();
	});

	server.post('/:tennent/:user/job', function (req, res, next) {
		jobs.push(new Job(req.body));
		res.status(201);
		res.send();
		return next();
	});

	server.get('/:tennent/:user/job/:jobId', function (req, res, next) {
		return next();
	});

	server.put('/:tennent/:user/job/:jobId', function (req, res, next) {
		return next();
	});

    server.del('/:tennent/:user/job/:jobId', function (req, res, next) {
		return next();
	});
	 
	server.listen(8080, function () {
	  console.log('%s listening at %s', server.name, server.url);
	});
}
 