const express = require('express');
const Router = express.Router();
const fileController = require('./fileController');


Router.get('/', (req, res, next) => {
    res.render('questionId');
})

Router.get('/:id', (req, res) => {
    question = fileController.getListQuestion();
    question = question[req.params.id];
    res.render('questionId', {
        question: question.question,
        Yes: question.yes,
        No: question.no
    });
});

module.exports = Router;