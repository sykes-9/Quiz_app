Quiz App
Overview
This is a simple quiz application built using HTML, CSS, and JavaScript. The app allows users to answer a series of multiple-choice questions and provides immediate feedback on the correctness of their answers.

Features
Questionnaire: The app presents a set of questions, each with multiple answer choices.
Scoring: Users earn points for each correct answer.
Feedback: Immediate visual feedback is provided for correct and incorrect answers.
Next Button: Users can proceed to the next question after making a selection.
Completion Summary: Upon completing the quiz, users are shown their total score.
Restart Quiz: Users have the option to play the quiz again.


Code Structure
index.html
The HTML file contains the structure of the quiz app, including the question display area, answer buttons, and the "Next" button.

styles.css
The CSS file provides styles for the quiz app, ensuring a visually appealing and user-friendly interface.

script.js
The JavaScript file contains the logic for handling quiz functionality. Key functions include:

startQuiz(): Initializes or resets the quiz state.
showQuestion(): Displays the current question and answer choices.
resetState(): Resets the UI state for the next question.
selectAnswer(e): Handles user selection of answers, provides feedback, and disables further interaction.
handleNextButton(): Advances to the next question or displays the final score.
showScore(): Displays the user's final score.
