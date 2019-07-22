
import URLParse from 'url-parse'
chrome.webRequest.onHeadersReceived.addListener (
  details => {
    let responseHeaders = details.responseHeaders;
    let slackSJON;
    if (
      responseHeaders.filter (header => header.name === 'x-slack-response')
        .length
    ) {
      slackSJON = responseHeaders.filter (
        header => header.name === 'x-slack-response'
      )[0].value;
    } else {
      slackSJON = JSON.stringify ({ok: false});
    }
    let url = URLParse(details.url)
    let state = ''
    try {
      state = url.query.state
    } catch(e){
      console.log(e) 
    }
    chrome.tabs.update (details.tabId, {
      url: chrome.extension.getURL (
        `redirect.html?state=${encodeURIComponent (state)}&slack=${encodeURIComponent (slackSJON)}`
      ),

    });
    return;
  },
  {
    urls: [
      'https://mgt539uoqb.execute-api.eu-west-2.amazonaws.com/v1/oauth/redirect*',
    ],
  },
  ['responseHeaders']
);