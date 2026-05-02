const { Client, Collection, GatewayIntentBits, Partials } = require("discord.js");
const fs = require("node:fs");
const path = require("node:path");
require("dotenv").config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ],
  partials: [Partials.Channel]
});

client.prefixCommands = new Collection();
client.slashCommands = new Collection();
client.config = {
  prefix: process.env.PREFIX || "+",
  ownerId: process.env.OWNER_ID || ""
};

function getFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...getFiles(fullPath));
      continue;
    }

    if (entry.name.endsWith(".js")) {
      files.push(fullPath);
    }
  }

  return files;
}

function loadPrefixCommands() {
  const commandsPath = path.join(__dirname, "komutlar");
  if (!fs.existsSync(commandsPath)) return;

  for (const file of getFiles(commandsPath)) {
    const command = require(file);
    if (!command?.name || typeof command.execute !== "function") continue;
    client.prefixCommands.set(command.name, command);
    if (Array.isArray(command.aliases)) {
      for (const alias of command.aliases) {
        client.prefixCommands.set(alias, command);
      }
    }
  }
}

function loadSlashCommands() {
  const interactionsPath = path.join(__dirname, "interactionlar");
  if (!fs.existsSync(interactionsPath)) return [];

  const slashData = [];
  for (const file of getFiles(interactionsPath)) {
    const interaction = require(file);
    if (!interaction?.data || typeof interaction.execute !== "function") continue;
    client.slashCommands.set(interaction.data.name, interaction);
    slashData.push(interaction.data);
  }

  return slashData;
}

function loadEvents(slashData) {
  const eventsPath = path.join(__dirname, "eventler");
  if (!fs.existsSync(eventsPath)) return;

  for (const file of getFiles(eventsPath)) {
    const event = require(file);
    if (!event?.name || typeof event.execute !== "function") continue;

    const handler = (...args) => event.execute(...args, client, slashData);
    if (event.once) {
      client.once(event.name, handler);
    } else {
      client.on(event.name, handler);
    }
  }
}

loadPrefixCommands();
const slashData = loadSlashCommands();
loadEvents(slashData);

if (!process.env.TOKEN) {
  throw new Error(".env icine TOKEN eklenmeli.");
}

client.login(process.env.TOKEN);
