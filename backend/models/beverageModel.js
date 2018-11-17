/*******************************************
beverage Schema
 ************************/

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BeverageSchema = new Schema(
    {
        //_id should be defined by default
        beverage_name: {type: String, required: true, max: 100},
        beverage_alc: {type: Number, required: true},
    }
);

// Virtual for author's full name
/*EventSchema
    .virtual('name')
    .get(function () {
        return this.family_name + ', ' + this.first_name;
    });
*/

// Virtual for event's URL
BeverageSchema
    .virtual('url')
    .get(function () {
        return '/beveragecatalog/beverage/' + this._id;
    });

//Export model
module.exports = mongoose.model('Beverage', BeverageSchema);