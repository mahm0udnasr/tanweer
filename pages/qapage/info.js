let infoBody = document.querySelectorAll(".info__body");
        const questions = [
            { question: "هل يهتم طفلك بأنواع مختلفة من الألعاب أو الأشياء؟", answer: true },
            { question: "هل يلعب طفلك بالألعاب أو الأشياء بطرق متنوعة؟", answer: false },
            { question: "عندما يعبر طفلك عن مشاعره، هل يكون ذلك مناسبًا للموقف والوقت؟", answer: true },
            { question: "هل يتفاعل طفلك بشكل طبيعي مع المحفزات (الحسية)؟", answer: true },
            { question: "هل يمكنك أن تعرف شعور طفلك بسهولة من وجهه؟", answer: true },
            { question: "هل يسهل التواصل بالعين مع طفلك؟", answer: true },
            { question: "هل يعاني طفلك من تأخر في الكلام؟", answer: true },
            { question: "هل يظهر طفلك سلوكيات متكررة مثل الدوران أو الرفرفة؟", answer: true },
            { question: "هل يعاني طفلك من حساسية مفرطة للأصوات؟", answer: false },
            { question: "هل يجد طفلك صعوبة في تكوين صداقات؟", answer: true }
        ];
        let userAnswers = [];
        let currentQuestionIndex = 0;
        document.getElementById('result').style.display = 'none';
        function loadQuestion() {
            if (currentQuestionIndex < questions.length) {
                const questionContainer = document.getElementById('quiz');
                questionContainer.innerHTML = `
                    <div class="question__quiz--show">
                        <p class="question__quiz--p">${questions[currentQuestionIndex].question}</p>
                    </div>
                    <div class="question__controls">
                        <button onclick="answerQuestion(true)">نعم</button>
                        <button onclick="answerQuestion(false)">لا</button>
                    </div>
                `;
            } else {
                calculateScore();
                setTimeout(()=> {
                    window.location.reload;
                },2000)
            }
        }

        function answerQuestion(answer) {
            userAnswers.push(answer === questions[currentQuestionIndex].answer);
            currentQuestionIndex++;
            loadQuestion();
        }

        function calculateScore() {
            let score = userAnswers.filter(Boolean).length;
            document.getElementById('result').style.display = 'flex';
            document.getElementById('result').innerText = `لقد حصلت على ${score} من ${questions.length}`;
            saveScore(score);

        }

        function saveScore(score) {
            localStorage.setItem('quizScore', score);
        }

        function loadScore() {
            return localStorage.getItem('quizScore');
        }

        function retryQuiz() {
            userAnswers = [];
            currentQuestionIndex = 0;
            document.getElementById('result').innerText = '';
            shuffleQuestions();
            loadQuestion();
        }

        function shuffleQuestions() {
            for (let i = questions.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [questions[i], questions[j]] = [questions[j], questions[i]];
            }
        }

        shuffleQuestions();
        loadQuestion();
