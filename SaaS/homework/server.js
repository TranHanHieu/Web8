const express = require('express');
const fileController = require('fs');

let app = express();
app.use(express.static(__dirname + '/homework'));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/menu.html');
});
app.get('/stylemenu.css', (req, res) => {
    res.sendFile(__dirname + '/stylemenu.css');
});
app.get('/styleabout.css', (req, res) => {
    res.sendFile(__dirname + '/styleabout.css');
});
app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/about.html');
});
app.get('/readfile', (req, res) => {
    var data = fileController.readFileSync('test.txt');
    res.send(`
        <html>
            <head> <meta charset="utf-8">
                <title></title>
                <link rel="stylesheet" href="stylemenu.css">
            </head>
            <body>
                <nav class="menu">
                    <span onclick="location='/'">Homepage</span>
                    <span onclick="location='/about'">About</span>
                    <span onclick="location='/readfile'">Read File</span>
                    <span>Item 4</span>
                </nav>
                <h1> ${data} </h1>
            </body>
        </html>`);
});
app.listen(6970, () => {
    console.log('server is up')
});