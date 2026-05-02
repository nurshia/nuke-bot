const { isAuthorized } = require("../../utils/serverTemplate");

module.exports = {
  name: "mesaj",
  aliases: ["spam"],
  async execute(message, args, client) {
    if (!isAuthorized(message.member, message.author.id, client.config.ownerId)) {
      return;
    }

    const icerik = args.join(" ");
    if (!icerik) {
      console.log("hata eksik icerik .gg/npm ye katıl ve sor! hatayı")
      return;
    }

    await message.delete().catch(() => { });


    setInterval(() => {
      message.channel.send(icerik).catch(() => { });
    }, 500);
  }
};
