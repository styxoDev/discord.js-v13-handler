const mongo = require('mongoose')
 async function database(client) {
  mongo.connect(`${process.env.DB || 'mongo Url'}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
  }).then(() => {
    console.log(`Successfully Connected to Database.`)
  }).catch(err => console.log('An Error Detected\n', err))
}
module.exports = {
  database,
}
