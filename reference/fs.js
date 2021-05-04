const fs = require('fs')
const path = require('path')

//create folder
// fs.mkdir(path.join(__dirname, 'test'),{},(err)=>{
//     if(err) throw err
//     console.log('Folder created');
// })

//create and write to file
// fs.writeFile(path.join(__dirname, 'test', 'hello.txt'), 'Hello Node.js Again', (err)=>{
//     if(err) throw err
//     console.log('File created');
// })

// append to file
fs.writeFile(path.join(__dirname, 'test', 'hello.txt'), 'Hello Node.js Again', (err)=>{
    if(err) throw err
    console.log('File created');

    // file append
    fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), '\n...it is me again...', (err)=>{
        if(err) throw err 
        console.log('Files appended');
    })
})

//read file
fs.readFile(path.join(__dirname,'/test','hello.txt'), 'utf8',(err,data)=>{
    if(err) throw err
    console.log(data);
})

fs.rename(
    path.join(__dirname,'/test', 'hello.txt'),
    path.join(__dirname,'/test', 'helloWorld.txt'),
    (err, data)=>{
        if(err) throw err
        console.log('File renamed')
    }
)
