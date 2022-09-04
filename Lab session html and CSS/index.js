/**
 * Question class data members
 * - text
 * - choices (array of string)
 * - answer
 */

function Question(text, choices, answer) {

    this.text = text;
    this.choices = choices;
    this.answer = answer;

}

/**
 * EXERCISE: 
 * Add a method to question class -isCorrectAnswer-
 * it take as argument a choice string,and it returns
 * true if the choice matches the answer for questions
 */
 Question.prototype.isCorrectAnswer = function (answer) {
    return this.answer === answer;
}


/**
 * Exercise: To Create the Quiz class
 * - question (input in constructor -array of question)
 * - score (intally 0)
 * - questionIndex (intally 0)
 * 
 * Methods
 * getCurrentQuestion = return the question object for questionIndex
 * checkOptionWithAnswer = answer is checked against correct answer of current question
 * returned - please use the question object's is CorrectAnswer Method
 * 
 * */


function Quiz(questions) {

    this.questions = questions;
    this.score = 0;
    this.scorePercentage = 0;
    this.questionIndex = 0;

}

Quiz.prototype.getCurrentQuestion = function () {
    return this.questions[this.questionIndex];
};

Quiz.prototype.checkOptionWithAnswer = function (answer) {
    if (this.getCurrentQuestion().isCorrectAnswer(answer)) {
        this.score++;
        this.scorePercentage = (this.score / quiz.questions.length) * 100;
    }
    this.questionIndex++;
};

Quiz.prototype.done = function () {
    return this.questionIndex >= this.questions.length;

};

function loadQuestion() {
    if (quiz.done()) {
        showScore();

        return;
    }

    const currentQuestion = quiz.getCurrentQuestion();
    // to get the DOM nodes for the question and then set the question in it
    const questionEl = document.getElementById('question');
    questionEl.textContent = quiz.getCurrentQuestion().text;

    //Now, we need to loop through choices for the question get the the choice element in UI
    for (let i = 0; i < currentQuestion.choices.length; i++) {
        const currentChoice = currentQuestion.choices[i];
        document.getElementById('choice' + i).textContent = currentQuestion.choices[i];
        handleSelect('btn' + i, currentChoice)
    }

    showProgress();

}

function handleSelect(id, choice) {
    console.log(id, choice);
    //we will setup the event handler onclick will replace the old event handler
    //for the button and setup a new handler get set up since we will add a handler in each step of quiz.

    document.getElementById(id).onclick = function () {
        quiz.checkOptionWithAnswer(choice);
        loadQuestion();

    };

}

function showScore() {
    document.getElementById('quiz').innerHTML =`
    <h1>Result</h1>
    <h2 id="score"> You have Scored ${quiz.score}.</h2>
    <h3 id="scorePercentage"> Total percentage of correctly answered questions out of the all ${quiz.questions.length} questions is ${quiz.scorePercentage} % </h3>

    `;
}

function showProgress() {
    document.getElementById('progress').innerHTML = `
    Question ${quiz.questionIndex + 1} of ${quiz.questions.length}

    `;
}

function showCorrectPercentage() {

} 

const questions = [
    new Question("JavaScript supports", ["Functions", "XHTML", "CSS", "HTML"], "Functions"),
    new Question("Which language is used for styling web pages?", ["HTML", "JQuery", "CSS", "XML"], "CSS"),
    new Question("Which is not a JavaScript Framework?", ["Python Script", "JQuery", "Django", "NodeJS"], "Django"),
    new Question("Which is used for Connect To Database?", ["PHP", "HTML", "JS", "All"], "PHP"),
    new Question("JavaScript is a ", ["Language", "Programming Language", "Development", "All"], "Programming Language")
];

// console.log(questions);
// If implemented correctly this shoud be the output
// console.log(questions[0].isCorrectAnswer("Functions")); //true
// console.log(questions[0].isCorrectAnswer("CSS"));//false

const quiz = new Quiz(questions);
loadQuestion();

// console.log(quiz);
// console.log(quiz.getCurrentQuestion);
// console.log(quiz.checkOptionWithAnswer("Functions"));
// console.log(quiz.checkOptionWithAnswer("CSS"));

