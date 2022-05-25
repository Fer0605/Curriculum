if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/serviceworker.js')
    .then(reg => console.log(reg))
    .catch(error => console.warn(error))
}