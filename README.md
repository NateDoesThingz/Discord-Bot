# Discord Bot Project

## Introduction
Welcome to the Discord Bot Project! This bot is designed to provide various moderation and utility features to enhance your Discord server experience. Whether you're managing a gaming community, a study group, or a fan club, this bot can help streamline moderation tasks and engage your community members.

## Features
- **Command Handling:** Easily execute commands to perform various actions within your server.
- **Moderation Commands:** Ban, mute, kick, timeout users, and log these actions in a specified channel.
- **Utility Commands:** Respond to pings, greet users, and perform other utility tasks.
- **Configurability:** Customize bot behavior, such as the bot prefix, allowed roles, and log channel.

## Getting Started
To get started with this bot, follow these steps:

1. **Clone the Repository:** Clone this repository to your local machine using `git clone`.

2. **Install Dependencies:** Navigate to the project directory and install the necessary dependencies using `npm install`.

3. **Obtain a Discord Bot Token:** Visit the [Discord Developer Portal](https://discord.com/developers/applications) to create a new application and obtain a bot token.

4. **Configure the Bot:** Create a `config.json` file in the root directory of the project and add your bot token, bot prefix, allowed roles, and log channel ID. See the section below on configuring the bot for more details.

5. **Run the Bot:** Run the bot using `node index.js` and ensure it successfully connects to your Discord server.

6. **Invite the Bot:** Invite the bot to your Discord server using the OAuth2 URL generated in the Discord Developer Portal.

## Configuration
The `config.json` file in the root directory of the project is used to configure the bot. Here's an example configuration:

```json
{
  "token": "YOUR_DISCORD_BOT_TOKEN",
  "prefix": "!",
  "allowedRoles": ["Moderator", "Admin"],
  "logChannelId": "YOUR_LOG_CHANNEL_ID"
}




