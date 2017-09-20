const fs = require('fs');
const path = require('path');
const questionModel = require('./questionSchema');

const QuestionFile = path.join(__dirname + '/question.json');

//Working with question file
const getQuestionList = (callback) => {
    questionModel.find({}, (err, questions) => {
        if (err) {
            console.log(err);
            callback(err,null);
        } else {
            callback(null, questions);
        }
    });
}

// using call back
// const addNewQuestion = (question, callBack) => {
//     let newQuestion = {
//         question,
//     };
//
//     questionModel.create(newQuestion, (err, question) => {
//         if (err) {
//             console.log(err)
//         } else {
//             console.log(question._id);
//             callBack(question.id)
//             // return question._id;
//         }
//     });
// }
// using promise
const addNewQuestion = (question) => {
    let newQuestion = {
        question,
    };
    return new Promise((resolve,reject)=>{
        questionModel.create(newQuestion, (err, question) => {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                console.log(question._id);
                resolve(question._id)
                // return question._id;
            }
        });
    });

}

const answerQuestion = (answer,callback) => {
    questionModel.findOneAndUpdate({_id: answer.id}, {yes: answer.yes, no: answer.no}, (err, question) => {
        if (err) {
            console.log(err);
        } else {
            callback(null, question);
        }
    });

}


const getQuestionById = (id,callback) => {
    questionModel.findOne({_id: id}, (err, question) => {
        if (err) {
            console.log(err)
            callback(err,null)
        } else {
            callback(null, question)
        }
    });
};

const getRandomQuestion = (callback) => {
    getQuestionList((err, questions) => {
        if (!err) {
            if (questions.length > 0) {
                question = questions[Math.floor((Math.random() * questions.length))];
                callback(null,question);
            } else {
                callback('Xin lỗi! Không có câu hỏi nào',null);
            }
        } else {
            console.log(err);
            callback(err,null)
        }
    });
};

//End working with question, question list

module.exports = {
    answerQuestion,
    getQuestionById,
    addNewQuestion,
    getRandomQuestion
}
