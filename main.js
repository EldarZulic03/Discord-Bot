const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = '.';
//prefix required before each message
const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    
    client.commands.set(command.name, command)
}

client.once('ready', () => {
    console.log('Re-Mined is online!')
});

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const commands = args.shift().toLowerCase();
    
    if (commands === 'ping'){
        client.commands.get('ping').execute(message, args);
    }
    else if(commands === 'hello'){
        client.commands.get('hello').execute(message, args);
    }
});



client.login('NzU1MTk2ODU1MTgwMzI5MDYy.X1_x4Q.f7Maf2aaJRsE-_qKXB1sk72FWa8');
//Login token, has to be last line in the file