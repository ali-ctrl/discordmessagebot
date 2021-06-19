require('dotenv').config();


const { Client } = require('discord.js');

const client = new Client();
//turn bot on and message console that bot is on
client.on('ready', () => {
    console.log(`${client.user.tag} has logged in`)
})


/*
client.on('message', (message) => {
    console.log("A message has been posted")
    console.log(`[${message.author.tag}]: ${message.content} `);
    console.log(message.author.id);
    if (message.author.id === '220317567573557249') {
        console.log(message.author.id + ' ignore');
   } else {
            message.reply('@everyone <@785985574451675166>')
        }




    }

})

*/
//turn bot on 
client.on('message', (message) => {
    console.log("A message has been posted")
    console.log(`[${message.author.tag}]: ${message.content} `);
    console.log(message.author.id);
    console.log(message.channel.id)
    //if the message author is the bot ignore it. avoid message loop
    if (message.author.id == 853706944888307713){
        return;
    }    else if (message.channel.id == 770854451061719062){
        console.log('botchannel');
        message.reply('<@785985574451675166> <@220317567573557249> Bot sent webhook check server');
        client.users.cache.get('220317567573557249').send('DM SENT check server')
    } else {
        //if the channel isnt in the bot channel send not in console log
        console.log('not')
        
    }
})







client.login(process.env.DISCORDJS_BOT_TOKEN)


