module.exports = async(client) =>  {
  client.user.setActivity('/help', { type: 'PLAYING'
  })
  client.user.setPresence({ status: "online" })
  console.log(`${client.user.tag} is online.`)
}
