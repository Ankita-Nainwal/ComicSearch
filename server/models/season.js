var mongoose = require('mongoose');
var SeasonSchema = new mongoose.Schema({
    Name: {type:String},
    description: {type:String},
    Series_id: {type:String},
    Season_id: {type:String},
    starts_on: {type: Date},
    ends_on: {type: Date},
    created_at: {type: Date, default: Date.now},
   updated_at: {type: Date, default: Date.now}
});


// Export the Mongoose model
module.exports = mongoose.model('Season', SeasonSchema);
