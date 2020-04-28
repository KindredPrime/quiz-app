function handleQuiz() {
    // Handles starting the quiz when the user clicks the "Start Quiz" button
    function handleQuizStart() {
        console.log("handleQuizStart function ran");
    }

    // Handles checking the user's answer to a question when they click the "Submit" button
    function handleAnswerSubmit() {
        console.log("handleAnswerSubmit function ran");
    }

    // Handles generating the next layout when the user clicks the "Next >" button
    function handleNextLayout() {
        console.log("handleNextLayout function ran");
    }

    // Handles restarting the quiz when the user clicks the "Restart Quiz" button
    function handleQuizRestart() {
        console.log("handleQuizRestart function ran");
    }

    handleQuizStart();
    handleAnswerSubmit();
    handleNextLayout();
    handleQuizRestart();
}

$(handleQuiz());