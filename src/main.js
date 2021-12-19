const discord = require('discord.js');
const { Collection, Intents, MessageEmbed, Client } = require('discord.js');
const { database } = require('./Database/mongoose');
const config = require('./Assets/configuration/config');
const app = require('./Dashboard/app');
const { loadCommands } = require('./Functions/handler/loadCommands');
const { loadEvents } = require('./Functions/handler/loadEvents')
const client = new Client({
  "intents": [
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILDS,
 Intents.FLAGS.GUILD_MESSAGE_REACTIONS
  
    ]
});
client.commands = new Collection();
client.aliases = new Collection();
client.login(`${process.env.TOKEN || 'Your Bot Token'}`);

const { caughtError } = require('./Functions/utils/caughtError');
caughtError(client);
database(client);
loadCommands(client);
loadEvents(client);
global.config = config;
app(client);
