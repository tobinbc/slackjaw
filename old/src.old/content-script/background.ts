
class Background {
    constructor() {
        this.registerIntercept()
    }
    getQueryVariable(url, variable) {
        var query = url.split('?')[1];
        var vars = query.split('&');
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split('=');
            if (decodeURIComponent(pair[0]) == variable) {
                return decodeURIComponent(pair[1]);
            }
        }
        console.log('Query variable %s not found', variable);
    }
    registerIntercept = () => {

        chrome.webRequest.onHeadersReceived.addListener(details => {
            console.log('details2', details)
            let responseHeaders = details.responseHeaders
            let slackSJON
            if(responseHeaders.filter(header => header.name === 'x-slack-response').length){
                slackSJON = responseHeaders.filter(header => header.name === 'x-slack-response')[0].value
                console.log(JSON.parse(slackSJON))
            } else {
                slackSJON = JSON.stringify({ok:false})
            }
            let state = this.getQueryVariable(details.url,'state')
          
            chrome.tabs.update(details.tabId, {url: chrome.extension.getURL(`index.html#/redirect?state=${encodeURIComponent(state)}&slack=${encodeURIComponent(slackSJON)}`)});
            return 
        }, { urls: ['https://mgt539uoqb.execute-api.eu-west-2.amazonaws.com/v1/oauth/redirect*'] },["responseHeaders"])
        console.log('added background')
    }
}

new Background()