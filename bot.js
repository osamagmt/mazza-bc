const Discord = require("discord.js");
const client = new Discord.Client();

const VIP = ['460976885036220426','532592989789487104',process.env.VIP];
const prefix = "$";
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
if (!VIP.includes(message.author.id)) return;
if (message.content.startsWith(prefix + 'setname')) {
  client.user.setUsername(argresult).then
	  message.channel.sendMessage(`Username Changed To **${argresult}**`)
  return message.reply("You Can change the username 2 times per hour");
} else
if (message.content.startsWith(prefix + 'setavatar')) {
  client.user.setAvatar(argresult);
   message.channel.sendMessage(`Avatar Changed Successfully To **${argresult}**`);
} else
  if (message.content.startsWith(prefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/osama_gmt");
      message.channel.send(``)
  }
});

client.on('ready', () => {
console.log('---------------------------------');
console.log(`  # Bot Name:  ||   ${client.user.tag}`);
console.log('---------------------------------');
console.log(`  # Prefix:    ||   ${prefix}`);
console.log('---------------------------------');
console.log(`  # Id:        ||   ${client.user.id}`);
console.log('--------------------------------');
console.log(`  # Servers:   ||   ${client.guilds.size}`);
console.log('--------------------------------');
console.log(`  # Members:   ||   ${client.users.size}`);
console.log('---------------------------------');
console.log(`  # Channels:  ||   ${client.channels.size}`);
console.log('---------------------------------');
});
const VIP = ['460976885036220426','532592989789487104'];
const prefix = "-";
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
if (!VIP.includes(message.author.id)) return;
if (message.content.startsWith(prefix + 'setname')) {
  client.user.setUsername(argresult).then
	  message.channel.sendMessage(`Username Changed To **${argresult}**`)
  return message.reply("You Can change the username 2 times per hour");
} else
if (message.content.startsWith(prefix + 'setavatar')) {
  client.user.setAvatar(argresult);
   message.channel.sendMessage(`Avatar Changed Successfully To **${argresult}**`);
} else
  if (message.content.startsWith(prefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/osama_gmt");
      message.channel.send(``)
  }
});

client.on('ready', () => {
console.log('---------------------------------');
console.log(`  # Bot Name:  ||   ${client.user.tag}`);
console.log('---------------------------------');
console.log(`  # Prefix:    ||   ${prefix}`);
console.log('---------------------------------');
console.log(`  # Id:        ||   ${client.user.id}`);
console.log('--------------------------------');
console.log(`  # Servers:   ||   ${client.guilds.size}`);
console.log('--------------------------------');
console.log(`  # Members:   ||   ${client.users.size}`);
console.log('---------------------------------');
console.log(`  # Channels:  ||   ${client.channels.size}`);
console.log('---------------------------------');
});
client.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(argresult.replace('[user]', m));
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
if(message.content.startsWith(prefix + 'obc')) {  
      let args = message.content.split(" ").slice(1);
      var argresult = args.join(' '); 
message.channel.send(`**:loudspeaker:  تم ارسال هذة الرسالة الى __${message.guild.memberCount}__ مشترك**`);

message.guild.members.forEach(m => { 
m.send(argresult.replace('[user]', m));
});
}
});

client.on("message", message => {
if(message.content.startsWith(prefix + "help")) {
const embed = new Discord.RichEmbed() .setColor("RANDOM").setDescription(`**${prefix}obc ⇏ لإرسال رسالة إلى جميع أعضاء السيرفر
${prefix}bc ⇏ لإرسال رسالة إلى الأعضاء الأونلاين فقط
${prefix}bcrole ⇏  لإرسآل رسالة لرتبة محدده 
ex :   ${prefix}bcrole @admin message
__تنبية__ : إذا أردت أن تمنشن العضو فقط أكتب بالرسالة
\`[user]\` وسيقوم بإستبدالها بمنشن العضو**`);
message.channel.sendEmbed(embed)}
});
client.login(process.env.BOT_TOKEN);
