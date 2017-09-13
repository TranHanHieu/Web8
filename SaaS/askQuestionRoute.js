const express = require('express');
const Router = express.Router();
const fileController = require('./fileController');

Router.get('/', (req, res) => {
    let question;
    if (fileController.getTotalQuestion() === 0) {
        question = 'Xin lỗi! Không có câu hỏi nào';
        res.render('askQuestion', {
            question,
            visibility: 'hidden'
        });
    } else {
        listQuestion = fileController.getListQuestion();
        question = listQuestion[Math.floor((Math.random() * listQuestion.length))];
        res.render('askQuestion', {
            question : question.question,
            href: `/add/question/${question.id}`
        });
    }
  // res.render('askQuestion');
});

module.exports = Router;