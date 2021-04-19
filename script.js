const quizData = [
    {
        question: "What is the most used programming language in 2019?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    }, 
    {
        question: "Who is the President of US?",
        a: "Florin Pop",
        b: "Donald Trump",
        c: "Ivan Saldano",
        d: "Mihai Andrei",
        correct: "b",
    }, 
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    }, 
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    }
]; 

const questionEl = document.getElementById('question'); 
const a_text = document.getElementById('a_text'); 
const b_text = document.getElementById('b_text'); 
const c_text = document.getElementById('c_text'); 
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');  
const answersEls = document.querySelectorAll(".answer"); 

let currentQuiz = 0; 
let score = 0; 

loadQuiz(); 

function loadQuiz(){

    deselectAnswers(); 

    currentQuizData = quizData[currentQuiz]; 

    questionEl.innerText = currentQuizData.question; 
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d; 

}

function getAnswer(){
    let answer = undefined; 

    answersEls.forEach( el => {
        if(el.checked){
            answer = el.id; 
        }
        return answer; 
    })
}

function deselectAnswers(){
    answersEls.forEach( el => {
        el.checked = false; 
    })
}

submitBtn.addEventListener('click', ()=> {
    const answer = getAnswer(); 

    if(answer){
        if(answer === quizdata[currentQuiz].correct){ score++ }
    }

    currentQuiz++; 

    if( currentQuiz < quizData.length ){
        loadQuiz(); 
    } else {
        //TODO: Show modal view results
        alert(' You finished. Congratulations! ' + score ); 
    }

    
}); 



