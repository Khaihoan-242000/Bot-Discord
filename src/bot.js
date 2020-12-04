const Discord = require('discord.js'); 
const client = new Discord.Client();

//Token
const { token } = require('../config.json');
// Command 
const command = require('./command');

client.on('ready', () => {
  console.log('The client is ready!');

  command(client, ['ping', 'test'], (message) => {
    message.channel.send('Pong!');
  });
});

client.login(token);