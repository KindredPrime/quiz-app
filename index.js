function handleQuiz(quizQuestions) {

    // Renders the question and score trackers on the page
    function renderTrackers() {
        $("header").append(`<h2 class="question-number">Question: 1/${quizQuestions.length}</h2><h2 class="score">Score: 0/${quizQuestions.length}</h2>`);
    }

    function updateQuestionTracker(questionNumber) {
        // Check if the question number tracker has been added to the DOM yet
        if($(".question-number").length === 0) {
            $("header h1").after(`<h2 class="question-number">Question: 1/${quizQuestions.length}</h2>`);
        }
        else {
            $(".question-number").html(`Question: ${questionNumber}/${quizQuestions.length}`);
        }
    }

    // Renders the question for the provided number
    function renderQuestion(questionNumber) {
        let question = quizQuestions[questionNumber-1];
        let questionText = question.questionText;
        let answerOptions = question.answerOptions;
        let name = question.htmlRadioName;

        $(".js-quiz-form").html(`<fieldset><legend data-question-number="${questionNumber}">${questionText}</legend><input type="radio" id=${answerOptions[0].htmlID} name=${name} value=${answerOptions[0].htmlID} required><label for=${answerOptions[0].htmlID}>${answerOptions[0].answer}</label><br><input type="radio" id=${answerOptions[1].htmlID} name=${name} value=${answerOptions[1].htmlID}><label for=${answerOptions[1].htmlID}>${answerOptions[1].answer}</label><br><input type="radio" id=${answerOptions[2].htmlID} name=${name} value=${answerOptions[2].htmlID}><label for=${answerOptions[2].htmlID}>${answerOptions[2].answer}</label><br><input type="radio" id=${answerOptions[3].htmlID} name=${name} value=${answerOptions[3].htmlID}><label for=${answerOptions[3].htmlID} class="last-answer">${answerOptions[3].answer}</label></fieldset><button type="submit" class="js-submit-answer">Submit</button>`);

        updateQuestionTracker(questionNumber);
    }
    
    // Handles starting the quiz when the user clicks the "Start Quiz" button
    function handleQuizStart() {
        $(".js-quiz-start").click(event => {
            event.preventDefault();

            // Render the Question and Score trackers
            //renderTrackers();

            // Render the first question
            renderQuestion(1);
        });
    }
 
    // Render content that tells the user if their answer was right or wrong
    function renderEvaluation(userAnswer) {
        let questionNumber = $(".js-quiz-form").find("legend").data("question-number");
        let correctAnswer = quizQuestions[questionNumber-1].correctAnswer;

        let htmlElements = "";
        if(userAnswer.html() === correctAnswer) {
            htmlElements = `<div class="correct-answer"><p>Correct!</p></div>`;
        }
        else { // Wrong answer
            htmlElements = `<div class="wrong-answer"><p>You know nothing.</p><p>The correct answer is: ${correctAnswer}</p></div>`;
        }

        // Add the HTML elements below their answer telling them their answer is correct
        if(userAnswer.next("br").length > 0) {
            userAnswer.next("br").after(htmlElements);
        }
        else { // There's no <br> element following the label, so just add the HTML elements directly below the label
            userAnswer.after(htmlElements);
        }
    }

    // Change the submit button to the "Next >" button
    function renderNextButton() {
        $(".js-submit-answer").text("Next >");
        $(".js-submit-answer").addClass("js-next-button");
        $(".js-submit-answer").removeClass("js-submit-answer");
    }

    // Handles checking the user's answer to a question when they click the "Submit" button
    function handleAnswerSubmit() {
        $(".js-quiz-form").on("click", ".js-submit-answer", event => {
            event.preventDefault();
            
            // Find the text of the selected answer
            let selectedRadio = $(".js-quiz-form").find("input[type='radio']:checked");
            let selectedAnswer = $(".js-quiz-form").find(`label[for="${selectedRadio.attr("id")}"]`);

            // If no answer was selected, instruct the user to select one
            if(selectedAnswer.length === 0) {
                alert("You must select an answer");
            }
            else { // An answer was selected
                renderEvaluation(selectedAnswer);
                renderNextButton();
            }
        });
    }

    // Renders the final quiz results layout
    function renderQuizResults() {
        $(".js-quiz-form").html(`<p>Your final score is 8/8.</p><button type="submit" class="js-restart-quiz">Restart Quiz</button>`);
    }

    // Handles generating the next layout when the user clicks the "Next >" button
    function handleNextLayout() {
        $(".js-quiz-form").on("click", ".js-next-button", event => {
            event.preventDefault();
            
            let currentQuestionNumber = $(".js-quiz-form").find("legend").data("question-number");

            if(currentQuestionNumber < quizQuestions.length) {
                renderQuestion(currentQuestionNumber+1);
            }
            else {
                renderQuizResults();
            }
        });
    }

    // Renders the Start Quiz Layout
    function renderStartQuizLayout() {
        $(".js-quiz-form").html(`<p>Test how much you know about the book series "A Song of Ice and Fire".</p><button type="submit" class="js-quiz-start">Start Quiz</button>`);
    }

    // Handles restarting the quiz when the user clicks the "Restart Quiz" button
    function handleQuizRestart() {
        $(".js-quiz-form").on("click", ".js-restart-quiz", event => {
            event.preventDefault();

            // Render the first question
            renderQuestion(1);
        });
    }

    handleQuizStart();
    handleAnswerSubmit();
    handleNextLayout();
    handleQuizRestart();
}

$(handleQuiz([
    {
        questionText: "Who is the author of A Song of Ice and Fire?",
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
        questionText: "What is the name of the third book in the Song of Ice and Fire book series?",
        answerOptions: [
            {
                answer: "A Hail of Halberds",
                htmlID: "halberds"
            }, {
                answer: "A Monsoon of Maces",
                htmlID: "maces"
            }, {
                answer: "A Storm of Swords",
                htmlID: "swords"
            }, {
                answer: "A Downpour of Duels",
                htmlID: "duels"
        }],
        correctAnswer: "A Storm of Swords",
        htmlRadioName: "third-book"
    }, {
        questionText: "What is the name of the headquarters of the Night's Watch?",
        answerOptions: [
            {
                answer: "Castle Black",
                htmlID: "black"
            }, {
                answer: "Eastwatch by the Sea",
                htmlID: "eastwatch"
            }, {
                answer: "Winterfell",
                htmlID: "winterfell"
            }, {
                answer: "Hardhome",
                htmlID: "hardhome"
            }],
        correctAnswer: "Castle Black",
        htmlRadioName: "headquarters"
    }, {
        questionText: "What is the name of the throne of Westeros?", 
        answerOptions: [
            {
                answer: "The Iron Throne",
                htmlID: "iron"
            }, {
                answer: "The Steel Seat",
                htmlID: "steel"
            }, {
                answer: "The Chair of China",
                htmlID: "china"
            }, {
                answer: "Hot Pie",
                htmlID: "pie"
            }],
        correctAnswer: "The Iron Throne",
        htmlRadioName: "throne"
    }, {
        questionText: "What is the name of Jon Snow's direwolf?",
        answerOptions: [
            {
                answer: "Snow",
                htmlID: "snow"
            }, {
                answer: "Rain",
                htmlID: "rain"
            }, {
                answer: "Ghost",
                htmlID: "ghost"
            }, {
                answer: "Casper",
                htmlID: "casper"
            }],
        correctAnswer: "Ghost",
        htmlRadioName: "direwolf"
    }, {
        questionText: "Where is Tyrion Lannister from?",
        answerOptions: [
            {
                answer: "Casterly Rock",
                htmlID: "rock"
            }, {
                answer: "Lannisport",
                htmlID: "lannisport"
            }, {
                answer: "King's Landing",
                htmlID: "landing"
            }, {
                answer: "Winterfell",
                htmlID: "winterfell"
            }],
        correctAnswer: "Casterly Rock",
        htmlRadioName: "tyrion"
    }, {
        questionText: "What is the name of Ned Stark's sister?", 
        answerOptions: [
            {
                answer: "Lyanna",
                htmlID: "lyanna"
            }, {
                answer: "Daenerys",
                htmlID: "daenerys"
            }, {
                answer: "Meera",
                htmlID: "meera"
            }, {
                answer: "Catelyn",
                htmlID: "catelyn"
            }],
        correctAnswer: "Lyanna",
        htmlRadioName: "sister"
    }, {
        questionText: "What is the name of the body of water that separates Westeros from Essos?", 
        answerOptions: [
            {
                answer: "The Dividing Sea",
                htmlID: "dividing"
            }, {
                answer: "The Wide Sea",
                htmlID: "wide"
            }, {
                answer: "The Calm Sea",
                htmlID: "calm"
            }, {
                answer: "The Narrow Sea",
                htmlID: "narrow"
            }],
        correctAnswer: "The Narrow Sea",
        htmlRadioName: "water"
    }
]));