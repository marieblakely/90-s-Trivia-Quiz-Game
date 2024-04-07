/*-------------------------------- Constants --------------------------------*/
import { getRandomTvShowQuestion } from "../data/questions.js"
import { getRandomMovieQuestion } from "../data/questions.js"
import { getRandomToyQuestion } from "../data/questions.js"
import { getRandomMusicQuestion } from "../data/questions.js"



/*-------------------------------- Variables (state)-----------------------------*/

const tvShowsQuestions = []
const moviesQuestions = []
const toyQuestions = []
const musicQuestions = []
let currentQuestionTextIndex = 0
let gameIsInPlay

/*------------------------ Cached Element References ---------------------------*/

const categoryCardContainerEl = document.querySelector('#category-card-container')
const cardEl = document.querySelector('#card')
const cardEl2= document.querySelector('#card2')
const cardEl3 = document.querySelector('#card3')
const cardEl4 = document.querySelector('#card4')
const resetButtonContainer = document.querySelector('.reset-button')
const resetBtn = document.getElementById('reset')
const nextQuestionBtn = document.getElementById('next-question')

/*----------------------------- Event Listeners --------------------------------*/


cardEl.addEventListener('click', createTvQuestion) 
cardEl2.addEventListener('click', createMovieQuestion)
cardEl3.addEventListener('click', createToyQuestion)
cardEl4.addEventListener('click', createMusicQuestion)
resetBtn.addEventListener('click', handleReset)
nextQuestionBtn.addEventListener('click', nextQuestion)
  

/*-------------------------------- Functions --------------------------------*/

// init()


function createTvQuestion(){
  const newTvQuestion = getRandomTvShowQuestion()
  tvShowsQuestions.push(newTvQuestion)
  render()
}

function createMovieQuestion(){
  const newMovieQuestion = getRandomMovieQuestion()
  moviesQuestions.push(newMovieQuestion)
  render()
}

function createToyQuestion(){
  const newToyQuestion = getRandomToyQuestion()
  toyQuestions.push(newToyQuestion)
  render()
}

function createMusicQuestion(){
  const newMusicQuestion = getRandomMusicQuestion()
  musicQuestions.push(newMusicQuestion)
  render()
}

function nextQuestion (){
  for (let i =0; i < tvShowsQuestions.length; i++) {
  currentQuestionTextIndex += 1
  if (currentQuestionTextIndex === tvShowsQuestions.length) {
    }
  }
}

function render() {
  if (gameIsInPlay) {
    resetButtonContainer.style.display = 'none'
    categoryCardContainerEl.style.display = ''
  }  
  categoryCardContainerEl.innerHTML = ''
  tvShowsQuestions.forEach((question, answer, idx) => {
    appendQuestion(question, answer, idx)
    })
  moviesQuestions.forEach((question, idx) => {
    appendQuestion(question, idx)
    }) 
  toyQuestions.forEach((question, idx) => {
    appendQuestion(question, idx)
    }) 
  musicQuestions.forEach((question, idx) => {
    appendQuestion(question, idx)
    })        
  }


function appendQuestion(question, answer, idx){
  let questionCard = document.createElement('div')
  let answerCard = document.createElement('div')
  questionCard.className = `card ${question.questionText}`
  answerCard.className = `card ${answer.correctAnswerText}`
  questionCard.innerHTML =
    `<div>
      <p>${question.questionText}</p>
    </div>
    `
  categoryCardContainerEl.appendChild(questionCard)
  answerCard.innerHTML =
    `<div>
    <p>${answer.correctAnswerText}</p>
    </div>
    `
  categoryCardContainerEl.appendChild(answerCard)  
}

function init(){
  gameIsInPlay = false
  render()
}

function handleReset (){
  gameIsInPlay = false
  render()
}


