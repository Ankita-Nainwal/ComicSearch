var User = require('../models/user');


exports.postUsers = function (req, res) {
    var user = new User({
        username: req.body.username,
        password: req.body.password,
        user_type: req.body.user_type
        });


user.save(function (err, response) {
        if(err) {
            return customHandleError(req, res, next, err);
        }

        res.json({
            success: true,
            body: response
        })

    });
}




exports.getUsers=function(req,res){
    User.find({}, function(err, response){
        if(err) {
            return res.json(req, res, err);
        }

        res.json(response);
    })
}

exports.updateUsers=function(req,res){
    var id = req.params.id;
    User.findOne({_id: id}, function(err, user){
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

exports.loginUsers=function(req,res)
{
  var username=req.body.username;
  var password=req.body.password;
  User.findOne({username:username,password:password},
  function(err, user)
  {
    if(err){

      res.json(err);
    }
    if(user){

      res.json(user);
    }
    else
    {
      res.json("User doesnt exist");
  }
  })
}





exports.deleteUsers = function (req, res) {
    var username = req.params.username;
    console.log(username);
    User.findOne({username:username}, function (err,user) {
        if (err) {
            res.json(err);
        }

        if (user) {

            User.remove({username:username}, function (err) {
                if (err) {
                    res.json(err);
                }

                res.json({
                    "status": true,
                    "respData": {
                        "data": "success"
                    }
                })
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



exports.updateUsers = function (req, res) {
    var username = req.params.username;
    User.findOne({ username: username }, function (err, user) {
        if (err) {
            res.json(err);
        }
        var user_type = req.body.user_type
        var password = req.body.password;
        user.password = password;
        user.user_type = user_type;
        user.updated_at = new Date();

        user.save(function (err, response) {
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
