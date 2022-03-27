const { Client, Intents } = require('discord.js');
require('dotenv').config();

const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
  ],
  partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
});

client.once('ready', async () => {
  console.log('Ready!');
  const general = await client.channels.fetch('918463280287207464');
  boopcrewID = '957591033208770590';
  general.send(`<@&${boopcrewID}> Jason is live on the LWJ Twitch!!`);
});

client.login(process.env.BOT_TOKEN);
