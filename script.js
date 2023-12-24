const questions = [
    {
        question: 'What is the capital city of France?',
        answers: [
            { text: 'London', correct: false },
            { text: 'Paris', correct: true },
            { text: 'Berlin', correct: false },
            { text: 'Valencia', correct: false },
        ]
    },
    {
        question: 'Who wrote the play Romeo and Juliet?',
        answers: [
            { text: 'William Shakespeare', correct: true },
            { text: 'Jane Austen', correct: false },
            { text: 'Charles Dickens', correct: false },
            { text: 'Richard Bachman', correct: false },
        ]
    },
    {
        question: 'Which planet is known as the red planet?',
        answers: [
            { text: 'Mercury', correct: false },
            { text: 'Jupiter', correct: false },
            { text: 'Venus', correct: false },
            { text: 'Mars', correct: true },
        ]
    },
    {
        question: 'In which year did Christoper columbus first reach the American\'s?',
        answers: [
            { text: '1620', correct: false },
            { text: '1492', correct: true },
            { text: '1776', correct: false },
            { text: '1940', correct: false },
        ]
    }
];

const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = 'Next';
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        // For each answer in the array, create a button element
        const button = document.createElement('button');
        // Set the inner HTML of the button to the text of the answer
        button.innerHTML = answer.text;
        // Add a CSS class 'btn' to the button
        button.classList.add('btn');
        // Append the button to an HTML element (answerButton)
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
    })
}

function resetState(){
    nextButton.style.display = 'none';
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
        }
}

function selectAnswer(e){
     const selectedBtn = e.target;
     const isCorrect = selectedBtn.dataset.correct === 'true';
     if(isCorrect){
        selectedBtn.classList.add('correct');
        score++;
     }else{
        selectedBtn.classList.add('incorrect');
     }
     Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === 'true'){
            button.classList.add('correct');
        }
        button.disabled = true;
     });
     nextButton.style.display = 'block';

}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.
    length}!`;
    nextButton.innerHTML = 'Play Again';
    nextButton.style.display = 'block';
}
    

nextButton.addEventListener('click', ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    } else {
        startQuiz();
    }
});


startQuiz();