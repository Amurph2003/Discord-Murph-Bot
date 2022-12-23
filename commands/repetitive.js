const { SlashCommandBuilder, ComponentType } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('tag')
        .setDescription('Tags a user the specified number of times')
        .addUserOption(usr =>
            usr
                .setName('user')
                .setDescription('The user to be tagged')
                .setRequired(true))
        .addIntegerOption(freq => 
            freq
                .setName('frequency')
                .setDescription('How many times the user should be tagged')
                .setRequired(true)),
    async execute(interaction) {
        
        //await interaction.reply(`<@${interaction.options.getUser('user')}>`);
        for (let index = 0; index < interaction.options.getInteger('frequency'); index++) {
            try {
                await interaction.reply(`${interaction.options.getUser('user')}`);
            } catch {
                await interaction.followUp(`${interaction.options.getUser('user')}`);
            }
        }
    }
}