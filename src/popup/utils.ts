export const getStorage = () => new Promise(resolve => chrome.storage.local.get(data => resolve(data)))
