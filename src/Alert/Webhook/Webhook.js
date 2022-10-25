

const { Webhook, MessageBuilder } = require('discord-webhook-node');

const hook = new Webhook('https://discord.com/api/webhooks/1011593686058016840/--5Hq58np2-PaoLwPKEY9XsCy7cq9gzucQwMA98eZQlk35QG-6laxI8VtKk3pCWwJ6rY')


// const webhookClient = new WebhookClient({ url: 'https://discord.com/api/webhooks/1011593686058016840/--5Hq58np2-PaoLwPKEY9XsCy7cq9gzucQwMA98eZQlk35QG-6laxI8VtKk3pCWwJ6rY'})


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