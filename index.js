function handleQuiz(quizQuestions) {

    // Renders the question and score trackers on the page
    function renderTrackers() {
        $("header").append(`<h2 class="question-number">Question: 1/8</h2><h2 class="score">Score: 0/8</h2>`);
    }

    // Renders the question found at the provided index in quizQuestions
    function renderQuestion(questionNumber) {
        let question = quizQuestions[questionNumber].question;
        let answerOptions = quizQuestions[questionNumber].answerOptions;
        let name = quizQuestions[questionNumber].htmlRadioName;

        $(".js-quiz-form").html(`<fieldset><legend>${question}</legend><input type="radio" id=${answerOptions[0].htmlID} name=${name} value=${answerOptions[0].htmlID}><label for=${answerOptions[0].htmlID}>${answerOptions[0].answer}</label><br><input type="radio" id=${answerOptions[1].htmlID} name=${name} value=${answerOptions[1].htmlID}><label for=${answerOptions[1].htmlID}>${answerOptions[1].answer}</label><br><input type="radio" id=${answerOptions[2].htmlID} name=${name} value=${answerOptions[2].htmlID}><label for=${answerOptions[2].htmlID}>${answerOptions[2].answer}</label><br><input type="radio" id=${answerOptions[3].htmlID} name=${name} value=${answerOptions[3].htmlID}><label for=${answerOptions[3].htmlID} class="last-answer">${answerOptions[3].answer}</label></fieldset><button type="submit" class="js-submit-answer">Submit</button>`);
    }
    
    // Handles starting the quiz when the user clicks the "Start Quiz" button
    function handleQuizStart() {
        let quizStartLayout;

        $(".js-quiz-start").click(event => {
            event.preventDefault();
            console.log("handleQuizStart function ran");

            // Hold on to the HTML content that was removed from the page, so I can add it back in later
            quizStartLayout = $(".js-quiz-form").children().detach();

            // Render the Question and Score trackers
            renderTrackers();

            // Render the first question
            renderQuestion(0);
        });

        return quizStartLayout;
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

    let startLayout = handleQuizStart();
    handleAnswerSubmit();
    handleNextLayout();
    handleQuizRestart();
}

$(handleQuiz([
    {
        question: "Who is the author of A Song of Ice and Fire?",
        answerOptions: [
            {
                answer: "J. R. R. Tolkien",
                htmlID: "tolkien"
            }, {
                answer: "George R. R. Martin",
                htmlID: "martin"
            }, {
                answer: "J. K. Rowling",
                htmlID: "rowling"
            }, {
                answer: "Jon Snow",
                htmlID: "snow"
        }],
        correctAnswer: "George R. R. Martin",
        htmlRadioName: "author"
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