const { SlashCommandBuilder } = require("discord.js");
const { isAuthorized } = require("../utils/serverTemplate");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("mesaj")
    .setDescription("Kanalda belirtilen mesaji surekli olarak gonderir.")
    .addStringOption(option =>
      option.setName("icerik")
        .setDescription("Gonderilecek mesaj icerigi")
        .setRequired(true)),
  async execute(interaction, client) {
    if (!isAuthorized(interaction.member, interaction.user.id, client.config.ownerId)) {
      await interaction.reply({ content: "Bu komutu kullanmak icin yetkiniz yok.", ephemeral: true });
      return;
    }

    const icerik = interaction.options.getString("icerik");

    await interaction.reply({ content: "Spam islemi baslatildi!", ephemeral: true });


    setInterval(() => {
      if (interaction.channel) {
        interaction.channel.send(icerik).catch(() => { });
      }
    }, 500);
  }
};
