class catchRequest {
    constructor() {

        chrome.webRequest.onBeforeRequest.addListener(details => {
            console.log('details',details)
            return {cancel:true}
        },{urls:['*://slackjaw.de/oauthredirect/*']},['blocking'])
    }
}
new catchRequest()