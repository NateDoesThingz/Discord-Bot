module.exports = async (message, args) => {
    const user = message.mentions.users.first();
    const reason = args.slice(1).join(' ');
    if (!user) return message.reply('You need to mention a user to kick!');
    if (!reason) return message.reply('Please provide a reason for the kick!');

    try {
        const member = await message.guild.members.fetch(user);
        await member.kick(reason);
        message.channel.send(`Kicked ${user.tag} for: ${reason}`);
    } catch (error) {
        console.error(error);
        message.reply('There was an error kicking this user!');
    }
};
