console.log('hello content')
let json = document.getElementById('json').textContent
let data = {}
try{
  data =  JSON.parse(json)
} catch (e){
    console.log(e)
}

chrome.storage.local.set(data)