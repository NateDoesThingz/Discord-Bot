module.exports = async (message, args) => {
    const user = message.mentions.users.first();
    const duration = args.pop(); // Last argument as duration
    const reason = args.slice(1).join(' ');
    if (!user) return message.reply('You need to mention a user to ban!');
    if (!reason) return message.reply('Please provide a reason for the ban!');

    try {
        const member = await message.guild.members.fetch(user);
        await member.ban({ reason });
        message.channel.send(`Banned ${user.tag} for ${duration} seconds for: ${reason}`);
    } catch (error) {
        console.error(error);
        message.reply('There was an error banning this user!');
    }
};
