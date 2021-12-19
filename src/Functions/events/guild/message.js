/* You can use this file as whenever a msg create in a guild it create data of that user or guild
*/

module.exports = async(message, client) => {
  /*
Example

let setup = await setupModel.findOne({
GuildID: message.guild.id, //Find the guild 
userID: message.author.id, //Find the user
  })

if(!setup) {
//If data is empty of that user/guild
  new setupModel({
    GuildID: message.guild.id,
    userID: message.author.id
//As balance default is 6000 it will automatically create it
  }).save(); //create new data
  var prefix = config.bot.prefix;
} else if(setup) {
  //Check if data is already there of that user/guild

}
*/
  if(message.author.bot || message.channel.type === "dm") return;
  if (!message.guild.me.permissionsIn(message.channel).has("SEND_MESSAGES"))
    return;
} 
