const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const fileController = require('./fileController');
const homeRouter = require('./homeRouter');
const askQuestionRouter = require('./askQuestionRoute');
const addQuestionRouter = require('./addQuestionRouter');
const questionRouter = require('./questionRouter');

let app = express();

app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(__dirname + '/public'));


app.use('/', homeRouter);
app.use('/ask', askQuestionRouter);
app.use('/add', addQuestionRouter);
app.use('/question', questionRouter);

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/readFile', (req, res) => {
    let data = fileController.readFileSync('test.txt');
    res.render('readFile', {data});
});

app.listen(6969, () => {
    console.log('Server is up');
});