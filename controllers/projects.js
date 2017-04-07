var express = require('express');
var Project = require('../models/project');
var router = express.Router();

router.route('/')
  .get(function(req, res) {
    Project.find(function(err, users) {
      if (err) return res.status(500).send(err);

      return res.send();
    });
  })
  .post(function(req, res) {
      Project.create(req.body, function(err, user) {
        if (err) return res.status(500).send(err);

        return res.send(user);
      });
  });

router.get('/:id', function(req, res) {
  Project.findById(req.params.id, function(err, user) {
    if (err) return res.status(500).send(err);

    return res.send(user);
  });
});

module.exports = router;