require("dotenv").config();

const { App } = require("@slack/bolt");

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true
});

app.command("/bing-bong-bot-here-ping", async ({ command, ack, respond }) => {
  const start = Date.now();
  await ack();
  const latency = Date.now() - start;
  await respond({ text: `Pong!\nLatency: ${latency}ms` });
});

app.command("/bing-bong-bot-here-world", async ({ command, ack, respond }) => {
  const start = Date.now();
  await ack();
  const latency = Date.now() - start;
  await respond({ text: `Hello, World! How are you today?` });
});

app.command("/bing-bong-bot-here-im-a-bot-too", async ({ command, ack, respond }) => {
  const start = Date.now();
  await ack();
  const latency = Date.now() - start;
  await respond({ text: `Snap! We're both bots! 01001100 01100101 01110100 01110011 00100000 01110100 01100001 01101100 01101011 00100000 01110011 01100101 01100011 01110010 01100101 01110100 01101100 01111001 00100000 00111011 00110000` });
});

(async () => {
  await app.start();
  console.log("bot is running!");
})();