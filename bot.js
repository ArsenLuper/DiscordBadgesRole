const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready' , () => {
    console.log(`Başarıyla  Başlatıldı ${client.user.tag}!`);
});

const {Manager} = require('discord-autorole-badges');


let manager = new Manager(client, {
    DISCORD_EMPLOYEE: "Rol ID",  //Discord Staff
    PARTNERED_SERVER_OWNER: "Rol ID", //Partner Server Sahibi
    HYPESQUAD_EVENTS: "Rol ID",     //Hype Squad Etkinliği
    BUGHUNTER_LEVEL_1: "Rol ID",    //Bug Hunter (Yeşil)
    HOUSE_BRAVERY: "Rol ID",        //Hype squad Bravery (Mor)
    HOUSE_BRILLIANCE: "Rol ID",     //Hype squad Brilliance (Kırmızı)
    HOUSE_BALANCE: "Rol ID",        //Hype squad Balance (Yeşil)
    EARLY_SUPPORTER: "Rol ID",      //Erken Dönem Destekcisi
    TEAM_USER: "Rol ID",            
    BUGHUNTER_LEVEL_2: "Rol ID",     //Bug Hunter (Sarı, Altın)
    VERIFIED_BOT: "Rol ID",          //Onaylanmış Bot
    EARLY_VERIFIED_BOT_DEVELOPER: "Rol ID",  //Erken Dönem Bot Geliştiricisi
    DISCORD_CERTIFIED_MODERATOR: "Rol ID",   //Discord Sertifikalı Mod

})
client.on("guildMemberAdd", async (member) => {
    await manager.setRole(member);
})


client.login("BotToken");