class Background {
    constructor() {
        chrome.webRequest.onBeforeRequest.addListener(details => {
            console.log('details',details)
            return {cancel:true}
        },{urls:['*://slackjaw.de/oauthredirect/*']},['blocking'])
        console.log('added background')
    }
}

new Background()