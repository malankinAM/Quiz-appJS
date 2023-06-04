const quizData = [  
    {  
     question: "Какой язык работает в веб-браузере?",  
     a: "Java",  
     b: "C",  
     c: "Rubu",  
     d: "JavaScript",  
     correct: "d",  
    },  
    {  
     question: "Что означает CSS?",  
     a: "Центральные таблицы стилей",  
     b: "Каскадные таблицы стилей",  
     c: "Каскадные простые листы",  
     d: "Автомобили внедорожники",  
     correct: "b",  
    },  
    {  
     question: "Что означает HTML?",  
     a: "Язык гипертекстовой разметки",  
     b: "Язык разметки гипертекста",  
     c: "Машинный язык Hyperloop",  
     d: "Вертолеты Терминалы Катера Lamborgini",  
     correct: "a",  
    },  
    {  
     question: "В каком году был запущен JavaScript?",  
     a: "1996",  
     b: "1995",  
     c: "1994",  
     d: "ни один из вышеперечисленных",  
     correct: "b",  
    },  
   ];  
   const quiz = document.getElementById("quiz");  
   const answerElements = document.querySelectorAll(".answer");  
   const questionElement = document.getElementById("question");  
   const a_text = document.getElementById("a_text");  
   const b_text = document.getElementById("b_text");  
   const c_text = document.getElementById("c_text");  
   const d_text = document.getElementById("d_text");  
   const submitButton = document.getElementById("submit");  
   let currentQuiz = 0;  
   let score = 0;  
   const deselectAnswers = () => {  
    answerElements.forEach((answer) => (answer.checked = false));  
   };  
   const getSelected = () => {  
    let answer;  
    answerElements.forEach((answerElement) => {  
     if (answerElement.checked) answer = answerElement.id;  
    });  
    return answer;  
   };  
   const loadQuiz = () => {  
    deselectAnswers();  
    const currentQuizData = quizData[currentQuiz];  
    questionElement.innerText = currentQuizData.question;  
    a_text.innerText = currentQuizData.a;  
    b_text.innerText = currentQuizData.b;  
    c_text.innerText = currentQuizData.c;  
    d_text.innerText = currentQuizData.d;  
   };  
   loadQuiz();  
   submitButton.addEventListener("click", () => {  
    const answer = getSelected();  
    if (answer) {  
     if (answer === quizData[currentQuiz].correct) score++;  
     currentQuiz++;  
     if (currentQuiz < quizData.length) loadQuiz();  
     else {  
      quiz.innerHTML = `  
         <h2>Ты ответил ${score}/${quizData.length}  правильно</h2>  
         <button onclick="history.go(0)">Играть снова</button>  
       ` // location.reload() won't work in CodePen for security reasons;  
     }  
    }  
   });  