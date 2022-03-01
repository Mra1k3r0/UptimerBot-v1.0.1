const Discord = require('discord.js')
const webhook1 = new Discord.WebhookClient('873291044953948221', '-cz1vqgYwMtLa4rm1UffFljZygwVcRxb6fc9EZaB95iEzP3CRvfJDX7a-fS7SvoSYiQs')

module.exports = {
  name: "bug-report",
  description: "bugreport command",
  aliases: ['bugreport'],

  async run(bot, message, args) {

    if (!args[0]) return message.reply('Please add a bug to report!')

    message.reply(`✉ | ${message.author.username}, Thanks for the feedback! :)`)

    const bugReportEmbed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle(`${message.author.username}#${message.author.discriminator} (${message.author.id}) Bug:`)
      .setDescription(`${args}`)
      .addField("On the server:", `${message.guild.name}`)
      .addField("Server ID:", `${message.guild.id}`)

    webhook1.send(bugReportEmbed)


  }
}