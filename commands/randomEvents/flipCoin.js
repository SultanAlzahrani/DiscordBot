const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  cooldown: 1,
  data: new SlashCommandBuilder()
    .setName("flipcoin")
    .setDescription("Flips a coin and returns either heads or tails."),
  async execute(interaction) {
    const result = Math.random() < 0.5 ? "Heads" : "Tails";
    await interaction.reply(`The coin landed on ${result}!`);
  },
};
