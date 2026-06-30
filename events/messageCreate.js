const { Events } = require("discord.js");
const { talkToOllama } = require("../LLM/ollama");

module.exports = {
  name: Events.MessageCreate,
  async execute(message) {
    // Ignore bots
    if (message.author.bot) return;

    // Only respond if the bot is mentioned
    if (!message.mentions.has(message.client.user)) return;

    const thinking = await message.reply("Thinking...");
    await message.channel.sendTyping();

    const response = await talkToOllama(message.content);

    await thinking.edit(response);
  },
};
