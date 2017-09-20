const mongoose = require('mongoose');
const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const questionApiRouter = require('./module/question/questionApiRouter');
const questionViewRouter = require('./module/question/questionViewRouter');
const config = require('./config.json');
let app = express();

app.use(bodyParser.urlencoded({ extended : true }));
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use('/', questionViewRouter);
app.use('/api/question', questionApiRouter);


app.get('/about', (req, res) => {
  let questionList = [{ id : 1, question : 'test'}, {id : 2, question : 'test1'}];
  res.render('about',{ questionList });
});

app.use(express.static(__dirname + '/public'));

mongoose.connect(config.connectionString,(err)=>{
  if (err){
      console.log(err)
  }else {
      console.log('Connect success !')
  }
});

app.listen(config.port, () => {
  console.log('server is up');
});
