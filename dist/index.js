'use strict';

var _botkit = require('botkit');

var _botkit2 = _interopRequireDefault(_botkit);

var _secrets = require('./secrets');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var controller = _botkit2.default.slackbot({ debug: false }

// connect the bot to a stream of messages
);controller.spawn({ token: _secrets.slackBotKey }).startRTM

// listen for messages and reply
();controller.hears('.*Who is up?.*', ['direct_message', 'direct_mention', 'mention'], function (bot, message) {
  bot.reply(message, 'Ed is up');
});
//# sourceMappingURL=index.js.map