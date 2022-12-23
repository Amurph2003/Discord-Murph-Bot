const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('minecraft')
        .setDescription('Sends a dm with info for the minecraft server'),
    async execute(interaction) {
        await interaction.user.send('Welcome to the Minecraft Server! Please check all the rules and guidelines upon joining. The IP Address is - 173.49.111.17, running on version 1.16.3. If you need help, message <@357683046968852490> or <@484471598917615627>. Have fun!');
        await interaction.reply(`Check your dm, <@${interaction.user.id}>`);
    },
};