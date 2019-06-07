
const { RTMClient } = require('@slack/client');

const rtm = new RTMClient(process.env.SLACK_API_TOKEN);
rtm.start();

rtm.on('message', (event) => {
    console.log("VATO", event);
});
