

const { Webhook, MessageBuilder } = require('discord-webhook-node');

// get env from .env
require('dotenv').config();

// get webhook url from .env
const hook = new Webhook(process.env.WEBHOOK_URL);


export const myFunc = (value) => {

  let dumb = value.id.toString()
  let dumb2 = value.reason.toString()
  console.log(`ID: ${dumb}
  Reason: ${dumb2}`)

  const embed = new MessageBuilder()
    .setTitle('User Reported')
    .setColor('#f1e05a')
    .setFooter('Long live TTP')
    .setDescription(`ID: ${dumb}
    Reason: ${dumb2}`)
    // .addField(`Test`)
    // .addField(`ID: ${dumb}`)
    // .addField(`Reason: ${dumb2}`)
    .setTimestamp()
  
  // console.log(discordID)
  hook.send(embed);

}
export default {
  myFunc
}