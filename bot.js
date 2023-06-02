const {Manager} = require('discord-autorole-badges');
const {Client} = require('discord.js');
const client = new Client({ intents: 32767})


let manager = new Manager(client, {
    STAFF: "role_id",  ///discord staff
    PARTNER: "role_id", ///discord partner
    HYPESQUAD: "role_id", /// Hypesquad event rozeti
    BUG_HUNTER_LEVEL_1: "role_id",   ///Yesil Bug Hunter Rozeti
    HYPESQUAD_ONLINE_HOUSE_1: "role_id",  ///Hypesquad rozetlerinden birisi
    HYPESQUAD_ONLINE_HOUSE_2: "role_id",  ///Hypesquad rozetlerinden birisi
    HYPESQUAD_ONLINE_HOUSE_3: "role_id",  ///Hypesquad rozetlerinden birisi
    PREMIUM_EARLY_SUPPORTER: "role_id",   ///Early sup rozeti
    TEAM_USER: "role_id",  
    BUG_HUNTER_LEVEL_2: "role_id",   ///Gold bug hunter rozeti
    VERIFIED_BOT: "role_id",          ///Onaylanmis Bot
    ACTIVE_DEVELOPER: "role_id",     ////Aktif Gelistirici
    VERIFIED_DEVELOPER: "role_id",    /// Erken onaylanan bot developer
    CERTIFIED_MODERATOR: "role_id",    ///Mod rozeti

})
client.on("guildMemberAdd", async (member) => {
    await manager.setRole(member);
})

client.on("ready", () => {
    console.log("Basariyla Baslatildi")
})

client.login("token")
