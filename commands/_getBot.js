/*CMD
  command: /getBot
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
*Send Your Gmail You Want To Get The Bot*

_The Bot Will Be Sent Through app.bots.business_
  ANSWER
  keyboard: 
  aliases: 
CMD*/

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  return re.test(String(email).toLowerCase())
}
if (!validateEmail(message)) {
  Bot.sendMessage("Invalid Email")
  return
}
BBAdmin.installBot({
  email: message,
  bot_id: bot.id
})
Api.sendMessage({
  text:
    "<b>🪅Bot Sent</b>\n\n🖨Email : " +
    message +
    '\n\n<i>You Are Requested To Give Credits To : @ROBBING_GAMER</i>\n\n<b><u>This bot is licensed under MIT license</u></b>\n<a href="https://codinary.org/license">MIT LICENSE</a>\n<a href="https://t.me/ROBBING_GAMER">Coder</a> | <a href="https://t.me/Codinary">Channel</a>',
  parse_mode: "HTML"
})

