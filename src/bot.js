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
  // Command Time
  command(client, ['time'], message => {
    const dateTime = new Date();
    const day = dateTime.getDay();
    const month = dateTime.getMonth();
    const years = dateTime.getFullYear();
    const hour = dateTime.getHours();
    const minute = dateTime.getMinutes();
    const second = dateTime.getSeconds();

    message.channel.send(`Today: ${day}/${month}/${years} | ${second}:${minute}:${hour}`)

  });
});

client.login(token);