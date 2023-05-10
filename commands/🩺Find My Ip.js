/*CMD
  command: 🩺Find My Ip
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/

let url = Libs.Webhooks.getUrlFor({
  command: "/onWebhook",
  user_id: user.id
})
let webPage =
  "https://api.codinary.org/v1/ipTrack?webhookUrl=" +
  encodeURIComponent(url) +
  "&redirectUrl=tg://resolve?domain=" +
  bot.name

Api.sendMessage({
  text:
    "Press On The Link To Get Your Ip In The Bot:\n[Get My Ip Now!!](" +
    webPage +
    ")\n\nToo lazy to open the website? Click the button below and do it automatically!",
  disable_web_page_preview: true,
  parse_mode: "Markdown",
  reply_markup: {
    inline_keyboard: [
      [
        {
          text: "Get My Ip",
          web_app: {
            url:
              "https://api.codinary.org/v1/webApp/ipTrack?webhookUrl=" +
              encodeURIComponent(url)
          }
        }
      ]
    ]
  }
})

