// Load required packages
var mongoose = require('mongoose');

// Define our user schema
var UserSchema = new mongoose.Schema({
    username: {type: String},
    password : {type: String},
    user_type : {type: String}
});


// Export the Mongoose model
module.exports = mongoose.model('User', UserSchema);
