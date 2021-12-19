/* Example
const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
GuildID: {
type: String,
},
userID: {
type: String,
},
balance: {
type: Number,
default: 6000 //Default user balance l
}
})

const ExamModel = module.exports = mongoose.model('schemaName', Schema);
*/
