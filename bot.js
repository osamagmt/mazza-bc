const Discord = require("discord.js");
const client = new Discord.Client();

const VIP = ['460976885036220426','532592989789487104'];
const adminprefix = "$";
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
if (!VIP.includes(message.author.id)) return;
if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
	  message.channel.sendMessage(`Username Changed To **${argresult}**`)
  return message.reply("You Can change the username 2 times per hour");
} else
if (message.content.startsWith(adminprefix + 'setavatar')) {
  client.user.setAvatar(argresult);
   message.channel.sendMessage(`Avatar Changed Successfully To **${argresult}**`);
} else
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/osama_gmt");
      message.channel.send(``)
  }
});

client.on('ready', () => {
console.log('---------------------------------');
console.log(`  # Bot Name:  ||   ${client.user.tag}`);
console.log('---------------------------------');
console.log(`  # Prefix:    ||   ${prefixbc}`);
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
const prefixbc = "$";
client.on('message', async message => {  
if(message.author.bot) return;
if(message.channel.type === 'dm') return;
if(!message.guild.members.get(message.author.id).hasPermission('ADMINISTRATOR')) return;
const args = message.content.split(" ").slice(1);
if(message.content.startsWith(prefixbc + 'obc')) {  
message.channel.send(`**:loudspeaker:  تم ارسال هذة الرسالة الى __${message.guild.memberCount}__ مشترك**`);
message.guild.members.forEach(m => { 
m.send(args.replace('[user]', m));
});}
if(message.content.startsWith(prefixbc + 'bc')) {  
message.channel.send(`**:loudspeaker:  تم ارسال هذة الرسالة الى ${message.guild.members.filter(m => m.presence.status !== 'online').size}__ مشترك**`);
message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
m.send(args.replace('[user]', m));
});}
if(message.content.startsWith(prefixbc + 'obc')) {  
var role = message.mentions.roles.first();
if(!role) {message.reply("لا توجد رتبة بهذا الاسم");return;}
if(!args[0]) {
message.channel.send(`قم بمنشنة الرتبة  | ${prefixbc}bcrole @admin message`);
return;}
message.channel.send(`**:loudspeaker:  تم ارسال هذة الرسالة الى __${role.members.size}__ مشترك**`);
message.guild.members.filter(m => m.roles.get(role.id)).forEach(n => {
n.send(args[1].replace('[user]', n));});}
if(message.content.startsWith(prefixbc + "help")) {
const embed = new Discord.RichEmbed() .setColor("RANDOM").setDescription(`**${prefixbc}obc ⇏ لإرسال رسالة إلى جميع أعضاء السيرفر
${prefixbc}bc ⇏ لإرسال رسالة إلى الأعضاء الأونلاين فقط
${prefixbc}bcrole ⇏  لإرسآل رسالة لرتبة محدده 
ex :   ${prefixbc}bcrole @admin message
__تنبية__ : إذا أردت أن تمنشن العضو فقط أكتب بالرسالة
\`[user]\` وسيقوم بإستبدالها بمنشن العضو**`);
message.channel.sendEmbed(embed)}
});
client.login(process.env.BOT_TOKEN);
