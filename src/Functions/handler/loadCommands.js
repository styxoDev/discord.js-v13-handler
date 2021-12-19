function loadCommands(client) {
  const fs = require("fs");
    const ascii = require("ascii-table");
const path = require('path');
    let slash = []

    const table = new ascii().setHeading(" Slash Commands", "Load Status");
  
    const commandFolders = fs.readdirSync(`${process.cwd()}${path.sep}src/Commands`);
    for (const folder of commandFolders) {
      const commandFiles = fs
        .readdirSync(`${process.cwd()}${path.sep}src/Commands/${folder}`)
        .filter((file) => file.endsWith(".js"));
      for (const file of commandFiles) {
        const command = require(`${process.cwd()}${path.sep}src/Commands/${folder}/${file}`);
        if (command.name) {
          client.commands.set(command.name, command);
          slash.push(command)
          table.addRow(file, "✔️");
        } else {
          table.addRow(
            file,
            "❌ => Missing a help.name or help.name is not in string"
          );
          continue;
        }
      }
      console.log(table.toString());
    }
    client.on("ready", async() => {
      await client.application.commands.set(slash)
    })
}

module.exports = {
  loadCommands,
};

/*Load Slash Commands as discord forcing the bots are in more than 75 guilds should move towards slash commands.
*/
