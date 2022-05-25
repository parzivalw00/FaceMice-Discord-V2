//=============================== Port =================================
const discord = require("discord.js")
const express = require('express');
const app = express();
const port = 1001;

app.get('/', (req, res) => res.send('Bot Is Working Well!'));
app.listen(port, () => 
    console.log(`Example app listening at https://loclhost:${port}`)
);

//=============================== Bot =================================

const Discord = require('discord.js-self');
const user1 = new Discord.Client();
const user2 = new Discord.Client();
const user3 = new Discord.Client();
const user4 = new Discord.Client();
const user5 = new Discord.Client();
const user6 = new Discord.Client();
const user7 = new Discord.Client();
const user8 = new Discord.Client();;
const {error, success } = require('./config.json');



user1.on('ready', () => {
    const targetguild = user1.guilds.cache.get('976580118191411200')
    console.log(`User-1 ${user1.user.tag}!`);
    user1.user.setActivity("LFC on top", {type: 'LISTENING'});
    const channel = user1.channels.cache.get('971728627022577674');
    if (!channel) return console.error(`${error}`);
    channel 
    .join()
    .then(connection => {
        connection.voice.setSelfDeaf(false);
        connection.voice.setSelfMute(true);
        console.log(`${success}`);
    })
    .catch(e => {
        console.error(e);
     });
});
// ======================================================================

user2.on('ready', () => {
    const targetguild = user2.guilds.cache.get('976580118191411200')
    console.log(`User-2 ${user2.user.tag}!`);
    user1.user.setActivity("LFC on top", {type: 'LISTENING'});
    const channel = user2.channels.cache.get('971728627022577674');
    if (!channel) return console.error(`${error}`);
    channel 
    .join()
    .then(connection => {
        connection.voice.setSelfDeaf(false);
        connection.voice.setSelfMute(true);
        console.log(`${success}`);
    })
    .catch(e => {
        console.error(e);
     });
});
// ======================================================================

user3.on('ready', () => {
    const targetguild = user3.guilds.cache.get('976580118191411200')
    console.log(`User-3 ${user3.user.tag}!`);
    user1.user.setActivity("LFC on top", {type: 'LISTENING'});
    const channel = user3.channels.cache.get('971728627022577674');
    if (!channel) return console.error(`${error}`);
    channel 
    .join()
    .then(connection => {
        connection.voice.setSelfDeaf(false);
        connection.voice.setSelfMute(true);
        console.log(`${success}`);
    })
    .catch(e => {
        console.error(e);
     });
});
// ======================================================================

user4.on('ready', () => {
    const targetguild = user4.guilds.cache.get('976580118191411200')
    console.log(`User-4 ${user4.user.tag}!`);
    user4.user.setActivity("LFC on top", {type: 'LISTENING'});
    const channel = user4.channels.cache.get('971728627022577674');
    if (!channel) return console.error(`${error}`);
    channel 
    .join()
    .then(connection => {
        connection.voice.setSelfDeaf(false);
        connection.voice.setSelfMute(true);
        console.log(`${success}`);
    })
    .catch(e => {
        console.error(e);
     });
});
// ======================================================================

user5.on('ready', () => {
    const targetguild = user5.guilds.cache.get('976580118191411200')
    console.log(`User-5 ${user5.user.tag}!`);
    user5.user.setActivity("LFC on top", {type: 'LISTENING'});
    const channel = user5.channels.cache.get('971728627022577674');
    if (!channel) return console.error(`${error}`);
    channel 
    .join()
    .then(connection => {
        connection.voice.setSelfDeaf(false);
        connection.voice.setSelfMute(true);
        console.log(`${success}`);
    })
    .catch(e => {
        console.error(e);
     });
});
// ======================================================================

user6.on('ready', () => {
    const targetguild = user6.guilds.cache.get('976580118191411200')
    console.log(`User-6 ${user5.user.tag}!`);
    user6.user.setActivity("LFC on top", {type: 'LISTENING'});
    const channel = user6.channels.cache.get('971728627022577674');
    if (!channel) return console.error(`${error}`);
    channel 
    .join()
    .then(connection => {
        connection.voice.setSelfDeaf(false);
        connection.voice.setSelfMute(true);
        console.log(`${success}`);
    })
    .catch(e => {
        console.error(e);
     });
});
// ======================================================================

user7.on('ready', () => {
    const targetguild = user7.guilds.cache.get('976580118191411200')
    console.log(`User-7 ${user7.user.tag}!`);
    user7.user.setActivity("LFC on top", {type: 'LISTENING'});
    const channel = user7.channels.cache.get('971728627022577674');
    if (!channel) return console.error(`${error}`);
    channel 
    .join()
    .then(connection => {
        connection.voice.setSelfDeaf(false);
        connection.voice.setSelfMute(true);
        console.log(`${success}`);
    })
    .catch(e => {
        console.error(e);
     });
});
// ======================================================================

user8.on('ready', () => {
    const targetguild = user8.guilds.cache.get('976580118191411200')
    console.log(`User-8 ${user8.user.tag}!`);
    user1.user.setActivity("LFC on top", {type: 'LISTENING'});
    const channel = user8.channels.cache.get('971728627022577674');
    if (!channel) return console.error(`${error}`);
    channel 
    .join()
    .then(connection => {
        connection.voice.setSelfDeaf(false);
        connection.voice.setSelfMute(true);
        console.log(`${success}`);
    })
    .catch(e => {
        console.error(e);
     });
});
// ======================================================================
user1.login("");
user2.login("");
user3.login("");
user4.login("");
user5.login("");
user6.login("");
user7.login("");
user8.login("");
