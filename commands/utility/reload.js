const { SlashCommandBuilder } = require("discord.js");
const { cooldown } = require("../randomEvents/UserIsCat");
const { findCommandFilePath } = require("../../utility/commandPathFinder");
module.exports = {
  cooldown: 10,
  data: new SlashCommandBuilder()
    .setName("reload")
    .setDescription("Reloads a command.")
    .addStringOption((option) =>
      option
        .setName("command")
        .setDescription("The command to reload.")
        .setRequired(true),
    ),

  async execute(interaction) {
    const commandName = interaction.options
      .getString("command", true)
      .toLowerCase();
    const command = interaction.client.commands.get(commandName);

    if (!command) {
      return interaction.reply(
        `There is no command with name \`${commandName}\`!`,
      );
    }

    // you can't require a module that has already been required, so we need to delete it from the cache first
    // if not done that, the command will not be reloaded and the old version will be used
    const commandFilePath = findCommandFilePath(command.data.name);
    if (!commandFilePath) {
      return interaction.reply(
        `Could not find the file path for command \`${command.data.name}\`!`,
      );
    }
    delete require.cache[require.resolve(commandFilePath)];

    try {
      const newCommand = require(commandFilePath);
      interaction.client.commands.set(newCommand.data.name, newCommand);
      await interaction.reply(
        `Command \`${newCommand.data.name}\` was reloaded!`,
      );
    } catch (error) {
      console.error(error);
      await interaction.reply(
        `There was an error while reloading a command \`${command.data.name}\`:\n\`${error.message}\``,
      );
    }
  },
};
