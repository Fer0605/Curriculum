if('serviceWorker' in navigator){
    navigator.serviceWorker.register('https://Fer0605.github.io/Curriculum/serviceworker.js')
    .then(reg => console.log(reg))
    .catch(error => console.warn(error))
}
