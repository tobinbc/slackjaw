console.log('hello content')
let data = {}
try {
  let json = document.getElementById('json').textContent
  data = JSON.parse(json)
} catch (error) {
  data = {
    ok: false,
    error: error.message
  }
}
chrome.storage.local.set(data)