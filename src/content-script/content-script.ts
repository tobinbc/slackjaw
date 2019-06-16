class AudioCatcher {
    constructor() {
        this.initializeMessagesListener();
    }
    initializeMessagesListener() {
        chrome.runtime.onConnect.addListener(this.onConnectHandler);
        setInterval(() => {
            console.log('audio')
        }, 1000);
    }
    onConnectHandler = (port: chrome.runtime.Port)  => {
        port.onMessage.addListener(this.onConnectMessageHandler);
    }
    onConnectMessageHandler = (msg, port) => {
        console.log('Received connection message: ' + msg);
        const response = 'Greetings!';
        port.postMessage(response);
    }
}


const audioCatcher = new AudioCatcher();
