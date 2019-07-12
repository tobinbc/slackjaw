// const getQueryVariable = (url, variable) => {
//   var query = url.split ('?')[1];
//   var vars = query.split ('&');
//   for (var i = 0; i < vars.length; i++) {
//     var pair = vars[i].split ('=');
//     if (decodeURIComponent (pair[0]) === variable) {
//       return decodeURIComponent (pair[1]);
//     }
//   }
// };
// chrome.webRequest.onHeadersReceived.addListener (
//   details => {
//     let responseHeaders = details.responseHeaders;
//     let slackSJON;
//     if (
//       responseHeaders.filter (header => header.name === 'x-slack-response')
//         .length
//     ) {
//       slackSJON = responseHeaders.filter (
//         header => header.name === 'x-slack-response'
//       )[0].value;
//     } else {
//       slackSJON = JSON.stringify ({ok: false});
//     }
//     let state = getQueryVariable (details.url, 'state');

//     chrome.tabs.update (details.tabId, {
//       url: chrome.extension.getURL (
//         `redirect.html?state=${encodeURIComponent (state)}&slack=${encodeURIComponent (slackSJON)}`
//       ),

//     });
//     return;
//   },
//   {
//     urls: [
//       'https://mgt539uoqb.execute-api.eu-west-2.amazonaws.com/v1/oauth/redirect*',
//     ],
//   },
//   ['responseHeaders']
// );