const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  cooldown: 3,
  data: new SlashCommandBuilder()
    .setName("cat")
    .setDescription("Tells you how much of a cat you are."),
  async execute(interaction) {
    const result = (Math.random() * 100).toFixed(1);
    // console.log(interaction.user);
    await interaction.reply(
      `${interaction.user.username} (aka ${interaction.user.globalName}) is a ${result}% a cat!`,
    );
  },
};
