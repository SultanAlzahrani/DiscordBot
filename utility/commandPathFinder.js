const fs = require("node:fs");
const path = require("node:path");
const foldersPath = path.join(__dirname, ".." + "/commands");
const commandFolders = fs.readdirSync(foldersPath);

const findCommandFilePath = (commandName) => {
  for (const folder of commandFolders) {
    const commandsPath = path.join(foldersPath, folder);
    const commandFiles = fs
      .readdirSync(commandsPath)
      .filter((file) => file.endsWith(".js"));
    for (const file of commandFiles) {
      console.log("file", file);
      const filePath = path.join(commandsPath, file);
      const command = require(filePath);

      if (command.data.name == commandName) {
        return filePath;
      }
    }
  }

  return null;
};

module.exports = { findCommandFilePath };
