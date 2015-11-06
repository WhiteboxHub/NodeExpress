var express = require('express');

var routes = function (Job) {
    var jobRouter = express.Router();
    jobRouter.route('/')
        .post(function (req, res) {
            var job = new Job(req.body);
            job.save();
            res.status(201).send(job);
        })
        .get(function (req, res) {
            Job.find(req.query, function (err, jobs) {
                if (err) {
                    console.log(err);
                }
                res.json(jobs);
            });
        });

    jobRouter.route('/:id')
        .get(function (req, res) {
            Job.findOne({id: req.params.id}, function (err, job) {
                if (err) {
                    res.status(500).send(err);
                }
                else {
                    res.json(job);
                }
            });
        })
        .put(function (req, res) {
            Job.findOne({id: req.params.id}, function (err, job) {
                if (err) {
                    res.status(500).send(err);
                }
                else {

                    job.keywords = req.body.keywords;
                    job.location = req.body.location;
                    job.save();
                    console.log(job);
                    res.json(job);
                }
            });
        });

    return jobRouter;

};

module.exports = routes;
