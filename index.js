import Botkit from 'botkit'
import { slackBotKey } from './secrets'

const controller = Botkit.slackbot({debug: false})

// connect the bot to a stream of messages
controller.spawn({token: slackBotKey}).startRTM()

// listen for messages and reply
controller.hears('.*Who is up?.*', ['direct_message', 'direct_mention', 'mention'], function (bot, message) {
  bot.reply(message, 'Ed is up')
})