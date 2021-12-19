module.exports = {
  name: "ping",
  description: "Get bot ping",
  options: null,
  run: async (client, interaction, args) => {
interaction.reply({
  content: `pong!`
})

  },
}
