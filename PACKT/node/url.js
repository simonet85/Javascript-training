const url = require('url')
url = URL.parse('https://www.google.com/maps#horizontal')
url.host = 'maps.google.com'
url.pathname = '/q'
url.hash = 'vertical'
console.log(URL.format(url))