const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Displays a help menu for the bot'),
    async execute(interaction) {
        await interaction.reply("Send these for messages: \n/hi -> Sends a welcome message/minecraft -> bot dm's you and confirmation message in the server")
    },
};