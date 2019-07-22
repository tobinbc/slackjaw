import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import React, { FunctionComponent } from 'react';
import uuid from 'uuid/v4';

const sendRequest = e => {
  let clientId = '655447184916.649599483553'
  let scope = 'incoming-webhook,chat:write:bot,commands,users:read,team:read,bot'
  let state = uuid()
  let url = `https://slack.com/oauth/authorize?client_id=${clientId}&scope=${scope}&state=${state}`
  chrome.tabs.create({ url }, (tab) => {
    // Can do things like send a postmessage as you already have the tab id / context
  });
}
const Signup: FunctionComponent = props =>
  <CardActions>
    <Button onClick={sendRequest} color="primary">
      <img alt="Add to Slack" height="40" width="139" src="https://platform.slack-edge.com/img/add_to_slack.png" />
    </Button>
  </CardActions>

export { Signup };

