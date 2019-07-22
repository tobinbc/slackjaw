import { MDCRipple } from "@material/ripple";

import React, { Fragment, FunctionComponent } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import uuid from 'uuid/v4'
const useStyles = makeStyles(
  createStyles({
    card: {
      width: 300,
    }
  }),
);
let port: chrome.runtime.Port
const sendRequest = e => {
  let clientId = '655447184916.649599483553'
  let scope = 'incoming-webhook,chat:write:bot,commands,users:read,team:read,bot'
  let state = uuid()
  let url = `https://slack.com/oauth/authorize?client_id=${clientId}&scope=${scope}&state=${state}`

  chrome.tabs.create({ url }, (tab) => {
    tab.id

  });
}
'https://mgt539uoqb.execute-api.eu-west-2.amazonaws.com/v1/oauth/redirect?code=655447184916.692637772837.e0e854d282e6695406e99882b830d285896779f3d8403d209428a8120f3095a4&state=bedd40c9-c376-4625-8240-e7eebf8caaaf'
const Signup: FunctionComponent = props => {
  const classes = useStyles({});
  // let buttons = document.getElementsByClassName('mdc-button');
  // for (var i in buttons) {
  //     new MDCRipple(buttons.item(+i));
  // }c


  return (
    <Fragment>

      <CardContent>
      
        <Typography variant="body1">
          Send the conversation from web based video calls to your Slack account.
          </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={e => sendRequest(e)} color="primary">
          <img alt="Add to Slack" height="40" width="139" src="https://platform.slack-edge.com/img/add_to_slack.png" />
        </Button>
        <Button color="primary" onClick={() => {
          chrome.tabs.create({ url: 'tab.html' }, tab => { })
        }}>
          Learn More
        </Button>
      </CardActions>
    </Fragment>
  );
};

export { Signup }