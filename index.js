/////////////////////////////////////////////////////
// VARIABLES
/////////////////////////////////////////////////////
// JAK TO KUPILES TO PISZ Deraczi#5892 https://discord.gg/Kz5bSxc
const Discord = require("discord.js");
const client = new Discord.Client();
const configs = require("./configs.json");
const fivereborn = require('fivereborn-query');
client.config = configs;
// JAK TO KUPILES TO PISZ Deraczi#5892 https://discord.gg/Kz5bSxc
/////////////////////////////////////////////////////
// START THE BOT
/////////////////////////////////////////////////////
// JAK TO KUPILES TO PISZ Deraczi#5892 https://discord.gg/Kz5bSxc
client.login(configs.token)
  .then(
    () => {
      console.log("Bot Liczy Kurwa Graczy");
      console.log("Tera Kurwa Nie Wyłanczaj I Jest Bot");
    },
    () => {
      client.destroy();
      console.log("Bot Się Wyjebał");
    });
// JAK TO KUPILES TO PISZ Deraczi#5892 https://discord.gg/Kz5bSxc
/////////////////////////////////////////////////////
// FUNCTIONS
/////////////////////////////////////////////////////
// JAK TO KUPILES TO PISZ Deraczi#5892 https://discord.gg/Kz5bSxc
function activity() {
  setTimeout(() => {
    fivereborn.query(configs.serverInfo[0], configs.serverInfo[1], (err, data) => {
      if (err) {
        console.log(err);
      } else {
        client.user.setActivity(" Graczy " + data.clients + "/" + data.maxclients, { type: configs.activityType });
      }
    });
    activity();
  }, 10000);
}
activity();
/////////////////////////////////////////////////////
// KOMENDY 
/////////////////////////////////////////////////////
