const Discord = require('discord.js');
const client = new Discord.Client();

const { handlePing, handleHello, handleBan, handleMute, handleKick, handleTimeout } = require('./commands');

const prefix = '!'; // Change this to your desired prefix
const allowedRoles = ['Moderator', 'Admin']; // Roles allowed to use the bot
const logChannelId = 'YOUR_LOG_CHANNEL_ID'; // Replace this with the ID of your log channel

client.once('ready', () => {
    console.log('Bot is ready!');
});

client.on('message', async message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    // Check if the user has one of the allowed roles
    if (!message.member.roles.cache.some(role => allowedRoles.includes(role.name))) {
        return message.reply('You do not have permission to use this bot!');
    }

    // Log the command in the log channel
    const logChannel = client.channels.cache.get(logChannelId);
    if (logChannel) {
        // Log command here
    } else {
        console.error(`Log channel with ID ${logChannelId} not found!`);
    }

    // Handle commands
    if (command === 'ping') {
        handlePing(message);
    } else if (command === 'hello') {
        handleHello(message);
    } else if (command === 'ban') {
        handleBan(message, args);
    } else if (command === 'mute') {
        handleMute(message, args);
    } else if (command === 'kick') {
        handleKick(message, args);
    } else if (command === 'timeout') {
        handleTimeout(message, args);
    }
    // Add more commands here

});

client.login('YOUR_DISCORD_BOT_TOKEN');
