const Discord = require("discord.js");
const db = require("quick.db");

exports.run = (client, message, args) => {
  const embed = new Discord.RichEmbed()
    .setColor("BLUE")
    .setDescription(
      "» **Yapımcı**\n» <@714451348212678658>\n» **Yapımcı Yaşı**\n» 15\n\n» __İletişim__\n» <a:> [Buraya Tıkla!](> [Buraya Tıkla!]()\nᅠᅠᅠᅠᅠ"
    )
    .setFooter(`${client.user.username}`, client.user.avatarURL)
    .setTimestamp();
  message.channel.send(embed);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: "yapımcı",
  description: "Yardım kategorilerini gösterir.",
  usage: "yapımcı"
};
