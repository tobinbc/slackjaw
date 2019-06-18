
class Background {
    constructor() {
        this.registerIntercept()
    }

    registerIntercept = () => {
        chrome.webRequest.onBeforeRequest.addListener(details => {
            console.log('details', details)
            /**
             * frameId: 0
method: "GET"
parentFrameId: -1
requestId: "14890"
tabId: 718
timeStamp: 1560857867315.1482
type: "main_frame"
url: "https://slackjaw.de/oauthredirect?code=655447184916.670583829478.79027dca0239c648fc24a3c43f712b343c46e3e295457818160314d64b6ba0c7&state="
             */

             let url = details.url
             url = url.substring(url.indexOf('?'))

            console.log('url')
            return { 
                redirectUrl: chrome.extension.getURL(`index.html#/redirect${url}`)
            }
        }, { urls: ['*://slackjaw.de/oauthredirect*'] }, ['blocking'])
        console.log('added background')
    }
}

new Background()