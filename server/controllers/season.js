var Season = require('../models/season');


exports.postSeason = function (req, res) {
    var season = new Season({
        Name: req.body.Name,
        description: req.body.description,
        Series_id: req.body.Series_id,
        starts_on: req.body.starts_on,
        ends_on: req.body.ends_on,
        created_at: new Date(),
        updated_at: ""
});


season.save(function (err, response) {
    if(err) {
        return customHandleError(req, res, next, err);
    }

    res.json({
        success: true,
        body: response
    })

});
}

exports.getSeason=function(req,res){
    Season.find({}, function(err, response){
        if(err) {
            return res.json(req, res, err);
        }

        res.json(response);
    })
}

exports.updateSeason=function(req,res){
    var id = req.params.id;
    Season.findOne({_id: id}, function(err, user){
        if(err){
            res.json(err);
        }

        var username = req.body.username;
        user.username = username;
        user.updated_at = new Date();

        user.save(function(err, response){
            if(err){
                res.json(err);
            }

            res.json(response);
        })
    })
}

exports.deleteSeason = function (req, res) {
    var _id = req.params._id;
    Season.findOne({ _id: _id }, function (err, season) {
        if (err) {
            res.json(err);
        }

        if (season) {
            Season.remove({ _id: _id }, function (err) {
                if (err) {
                    res.json(err);
                }

                res.json({
                    "status": true,
                    "respData": {
                        "data": "success"
                    }
                });
            })
        } else {
            res.json({
                "status": false,
                "respData": {
                    "data": "User Does not Exist"
                }
            });
        }

    })
}
exports.updateSeason = function (req, res) {
    var _id = req.params._id;
    Season.findOne({ _id: _id }, function (err, season) {
        if (err) {
            res.json(err);
        }
        var Name = req.body.Name;
        var description = req.body.description;
        var starts_on = req.body.starts_on;
        var ends_On = req.body.ends_On;
        season.Name = Name;
        season.description = description;
        season.starts_on = starts_on;
        season.ends_On = ends_On;
        season.updated_at = new Date();

        season.save(function (err, response) {
            if (err) {
                res.json(err);
            }

            res.json({
                "status": true,
                "respData": {
                    "data": response
                }
            });
        })
    })
}
