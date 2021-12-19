const clientEvents = (file) => require(`../events/client/${file}`);
const guildEvents = (file) => require(`../events/guild/${file}`);
const interEvents = (file) => require(`../events/interaction/${file}`)
  function loadEvents(client) {
  client.on('ready', () => clientEvents('ready')(client));

client.on('interactionCreate', (interaction) => guildEvents('interaction')(interaction, client));
    client.on('messageCreate', (m) => guildEvents('message')(m, client))
  }
module.exports = {
  loadEvents,
}
