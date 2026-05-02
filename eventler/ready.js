const { REST, Routes } = require("discord.js");

module.exports = {
  name: "ready",
  once: true,
  async execute(c, client, slashData) {
    console.log(`${client.user.tag} olarak giris yapildi.`);

    if (!process.env.CLIENT_ID) {
      console.log("CLIENT_ID olmadigi icin slash komut kaydi atlandi.");
      return;
    }

    const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

    try {
      if (process.env.GUILD_ID) {
        // Varsa eski guild komutlarini temizleyelim ki ayni komutlar cift gozukmesin
        await rest.put(
          Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
          { body: [] }
        ).catch(() => { });
      }

      await rest.put(
        Routes.applicationCommands(process.env.CLIENT_ID),
        { body: slashData.map((command) => command.toJSON()) }
      );
      console.log("Slash komutlari global olarak kaydedildi.");
    } catch (error) {
      console.error("Slash komut kaydi basarisiz:", error);
    }
  }
};
