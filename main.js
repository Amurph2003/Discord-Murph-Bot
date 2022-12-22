const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '-';


const fs = require('fs');
const { userInfo } = require('os');
const { on } = require('process');

client.commands = new Discord.Collection();

client.once('ready', () => {
    console.log('Connor is turned on!');
});

client.on("message", message => {
    if(message.author.bot || message.content.startsWith(prefix)) return;
        const args = message.content.slice(prefix.length).split();
        const command = args.shift().toLowerCase();
        if(command === 'help'){
            message.channel.send("Send these for messages: \n!hi -> Sends a welcome message\n@botName -> bot dm's you and confirmation message in server");
        }
});

client.on("message", message => {
    if (message.author.bot) return false;

    if (message.content.includes("@here") || message.content.includes("@everyone")) return false;

    if (message.mentions.has(client.user.id)) {
        message.author.send("Welcome to the Minecraft Server! Please check all the rules and guidelines upon joining. The IP Address is - 173.49.111.17, running on version 1.16.3. If you need help, message <@357683046968852490> or <@484471598917615627>. Have fun!");
        message.channel.send("<@" + message.author + "> Check your DM's for the IP Address and basic rules.");
    };
});

client.on('message', message => {
    if(message.content.startsWith(prefix) || message.author.bot);

    const args = message.content.slice(prefix.length).split(" ");
    const command = args.shift().toLowerCase();
    const user = message.mentions.users.first();

   if(command === 'hi'){
    //const command = message.content.shift().toLowerCase();
    const user = message.mentions.users.first();

    if(user === undefined){
        return;
    } else {
        name = user.id;
        if(name === '776603182968995840'){
            return;
        } else {
        message.channel.send('You just turned <@' + name + '> on!');
        }
    }
    }
});

client.on('message', message => {
    if(message.content.startsWith(prefix));

    const args = message.content.slice(prefix.length).split(" ");
    const command = args.shift().toLowerCase();


   if(command === 'chris'){
        message.channel.send('<@389518999127457792>');
    }

    if(message.content.includes('<@389518999127457792>')){
        if(Time < 7){
        message.channel.send('<@389518999127457792>');
        Time += 1;
        }
    }

   if(message.author === "<@629775855354118171>"){
       if(command === "end"){
           client.destroy
       }
   }

    if(command === 'connor'){

        message.channel.send('<@357683046968852490>');

    }    

    if(message.content.includes('<@357683046968852490>')){
        message.channel.send('<@357683046968852490>');
    }
});

client.login(process.env.BOT_TOKEN);
