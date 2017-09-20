const router = require('express').Router();

const {answerQuestion, getQuestionById, addNewQuestion, getRandomQuestion} = require('./questionController'); //ES6 destructuring

router.post('/', (req, res) => {
    let question = req.body.question;
    //call back
    // addNewQuestion(question, (_id) => {
    //     res.redirect(`/question/${_id}`);
    // });
    //promise
    addNewQuestion(question)
        .then((_id)=>res.redirect(`/question/${_id}`))
        .catch((err)=>{console.log(err)})
});

router.post('/:id', (req, res) => {
    console.log(req.body);
    answerQuestion(req.body ,(err,question)=>{
        if (question._id) {
            res.redirect(`/question/${question._id}`);
        } else {
            res.redirect(`/`);
        }
    });
});

router.get('/', (req, res) => {
    let question = getRandomQuestion((err,question)=>{
        if (err){
            res.send(err)
        }else {
            console.log(question);
            // res.send(question.question);
            res.render('home', {
                question: question,
                questionView: "class='active'"
            });

        }
    });
})

router.get('/:id', (req, res) => {
    let id = req.params.id;
    let question = getQuestionById(id,(err,question)=>{
        if (err){
            res.send(err)
        }else {
            res.send(question.question);
        }
    });

})

module.exports = router;
