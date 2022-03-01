const ButtonPages = require('discord-button-pages');
const { MessageEmbed } = require('discord.js')
const disbutpages = require("discord-embeds-pages-buttons")
const Discord = require("discord.js");
const disbut = require("discord-buttons");
const MessageButton = require("discord-buttons");

module.exports = {
  name: "help",
  description: "Shows all commands of the bot",
  category: "uptime",
  botPermission: [],
  authorPermission: [],
  aliases: ["newhelp"],
  ownerOnly: false,
  run: async (client, message, args) => {
    let helpEmbed = new MessageEmbed()
      .setTitle("<a:verified_developer:867324410025607188> Here are my commands")
      .setDescription("<a:YellowArrow:852088036422057985> ** *Uptimer* Is An Free Discord Bot That Allows You To Make Your Projects ( Bot ) Online 24/7 Just By Using A Single Command.**")
      .addField(
        "<a:EMP_KING:867324413267542026> **ADMIN**",
        "`ban` `unban` `kick` `addemoji` `addrole` `removerole`"
      )
      .addField(
        "<:general:866155253861580811> **GENERAL**",
        "`servericon` `calculator` `invite` `membercount` `help` `serverinfo`"
      )
      .addField(
        "<a:TadaBig:870535786376859650> **GIVEAWAY**",
        "`gstart` `gend` `greroll`"
      )
      .addField(
        "<:channels:866155257687048192> **INFO**",
        "`avatar` `bug-report` `feedback` `developer` `help` `howtouse` `info` `serverinfo`"
      )
      .addField(
        "<:avatar:866155256827084851> **IMAGE**",
        "`tweet` `deepfry`"
      )
      .addField(
        "<:moderation:866155254399500288> **MODERATION**",
        "`lockchannel` `purge` `slowmode` `mute` `unmute` `nuke`"
      )
      .addField(
        "<:crowne:866155257225674752> **OWNER**",
        "`eval` `reload` `serverlist`"
      )
      .addField(
        "<:fun:866155255321853982> **FUN**",
        "`rps` `coinflip` `meme` `reverse` `hangman`"
      )
      .addField(
        "<:up1:866155257583501342> **UPTIME**",
        "`add` `calc` `ping` `projects` `remove` `stats` `total`"
      )
      .setThumbnail(client.user.displayAvatarURL())
      .setFooter("BOT DEVELOPERS: Akg#9426 | Prefix: *")


      let button1 = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('💞 • Invite Me') 
      .setURL("https://discordapp.com/oauth2/");
      let button2 = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('🤔 • Support Server') 
      .setURL("https://discord.gg/XP68Eu7VXw");
      let button3 = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('🎬 • Tutorial Video') 
      .setURL("https://youtu.be/XIpijC6GMYU");


      return message.channel.send(helpEmbed,{
        button: [button1,button2,button3],
      });

  },
};