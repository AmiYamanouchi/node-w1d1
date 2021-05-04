const path = require('path')

console.log('basename: ' ,path.basename(__filename));

console.log('directory: ', path.dirname(__filename));

console.log('filext: ' , path.extname(__filename))

console.log('path obj: ', path.parse(__filename));

console.log('path concat:', path.join(__dirname, 'test', 'hello.html'))