function handleQuiz(quizQuestions) {
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

$(handleQuiz([
    {
        question: "Who is the author of A Song of Ice and Fire?",
        answerOptions: ["J. R. R. Tolkien", "George R. R. Martin", "J. K. Rowling", "Jon Snow"],
        correctAnswer: "George R. R. Martin"
    }, {
        question: "What is the name of the third book in the Song of Ice and Fire book series?",
        answerOptions: ["A Hail of Halberds", "A Monsoon of Maces", "A Storm of Swords", "A Downpour of Duels"],
        correctAnswer: "A Storm of Swords"
    }, {
        question: "What is the name of the headquarters of the Night's Watch?",
        answerOptions: ["Castle Black", "Eastwatch by the Sea", "Winterfell", "Hardhome"],
        correctAnswer: "Castle Black"
    }, {
        question: "What is the name of the throne of Westeros?", 
        answerOptions: ["The Iron Throne", "The Steel Seat", "The Chair of China", "Hot Pie"],
        correctAnswer: "The Iron Throne"
    }, {
        question: "What is the name of Jon Snow's direwolf?",
        answerOptions: ["Snow", "Rain", "Ghost", "Casper"],
        correctAnswer: "Ghost"
    }, {
        question: "Where is Tyrion Lannister from?",
        answerOptions: ["Casterly Rock", "Lannisport", "King's Landing", "Winterfell"],
        correctAnswer: "Casterly Rock"
    }, {
        question: "What is the name of Ned Stark's sister?", 
        answerOptions: ["Lyanna", "Daenerys", "Meera", "Catelyn"],
        correctAnswer: "Lyanna"
    }, {
        question: "What is the name of the body of water that separates Westeros from Essos?", 
        answerOptions: ["The Dividing Sea", "The Wide Sea", "The Calm Sea", "The Narrow Sea"],
        correctAnswer: "The Narrow Sea"
    }
]));