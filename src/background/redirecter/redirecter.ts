
import URLParse from 'url-parse'
chrome.webRequest.onHeadersReceived.addListener (
  details => {
    let slackResponse = details.responseHeaders.find (header => header.name === 'x-slack-response')
    let  slackSJON = slackResponse ? slackResponse.value : JSON.stringify ({ok: false})
    let url = URLParse(details.url)
    chrome.tabs.update (details.tabId, {
      url: chrome.extension.getURL (
        `redirect.html?state=${encodeURIComponent (url.query.state || '')}&slack=${encodeURIComponent (slackSJON)}`
      ),
    });
  },
  {
    urls: [
      'https://mgt539uoqb.execute-api.eu-west-2.amazonaws.com/v1/oauth/redirect*',
    ],
  },
  ['responseHeaders']
);