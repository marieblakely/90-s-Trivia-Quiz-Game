/*-------------------------------- Constants --------------------------------*/
import { getRandomTvShowQuestion } from "../data/questions.js"
import { getRandomMovieQuestion } from "../data/questions.js"
import { getRandomToyQuestion } from "../data/questions.js"
import { getRandomMusicQuestion } from "../data/questions.js"
import { moviesQuestions, toysQuestions, tvShowsQuestions, musicQuestions } from "../data/questions.js"


/*-------------------------------- Variables (state)-----------------------------*/

// const tvShowsQuestions = []
// const moviesQuestions = []
// const toyQuestions = []
// const musicQuestions = []
let currentQuestionList = []
let currentQuestionTextIndex = 0
let gameIsInPlay
let score

/*------------------------ Cached Element References ---------------------------*/

const categoryCardContainerEl = document.querySelector('#category-card-container')
const questionCardContainerEl = document.querySelector('#question-card-container')
const cardEl = document.querySelector('#card')
const cardEl2= document.querySelector('#card2')
const cardEl3 = document.querySelector('#card3')
const cardEl4 = document.querySelector('#card4')
const resetButtonContainer = document.querySelector('.reset-button-container')
const resetBtn = document.getElementById('reset')
const nextQuestionBtn = document.getElementById('next-question')

/*----------------------------- Event Listeners --------------------------------*/


cardEl.addEventListener('click', createTvQuestion) 
cardEl2.addEventListener('click', createMovieQuestion)
cardEl3.addEventListener('click', createToyQuestion)
cardEl4.addEventListener('click', createMusicQuestion)
resetBtn.addEventListener('click', handleReset)
// nextQuestionBtn.addEventListener('click', nextQuestion)
  

/*-------------------------------- Functions --------------------------------*/

init()


function createTvQuestion(){
  // const newTvQuestion = getRandomTvShowQuestion()
  // tvShowsQuestions.push(newTvQuestion)
  currentQuestionList = [...tvShowsQuestions]
  gameIsInPlay = true
  render()
}

function createMovieQuestion(){
  // const newMovieQuestion = getRandomMovieQuestion()
  // moviesQuestions.push(newMovieQuestion)
  currentQuestionList = [...moviesQuestions]
  gameIsInPlay = true
  render()
}

function createToyQuestion(){
  // const newToyQuestion = getRandomToyQuestion()
  // toyQuestions.push(newToyQuestion)
  currentQuestionList = [...toysQuestions]
  gameIsInPlay = true
  render()
}

function createMusicQuestion(){
  // const newMusicQuestion = getRandomMusicQuestion()
  // musicQuestions.push(newMusicQuestion)
  currentQuestionList = [...musicQuestions]
  gameIsInPlay = true
  render()
}

function selectAnswer (evt){
  console.log(evt.target.textContent)
  if (evt.target.textContent === currentQuestionList[currentQuestionTextIndex].correctAnswer) {
    console.log('correct answer')
    score += 1
    // increase score by 1

  } else {
    console.log('incorrect answer')
  }
  currentQuestionTextIndex += 1
  if (currentQuestionTextIndex < currentQuestionList.length) {

    render()
  } else {
    console.log(`You got ${score} out of ${currentQuestionList.length} correct!`)

  }
  // for (let i =0; i < tvShowsQuestions.length; i++) {
  // currentQuestionTextIndex += 1
  // if (currentQuestionTextIndex === tvShowsQuestions.length) {
  //   currentQuestionTextIndex += 0
  // } 
  // appendQuestion(currentQuestionTextIndex)

}

function render() {
  console.log(currentQuestionList)
  if (gameIsInPlay) {
    resetButtonContainer.style.display = ''
    categoryCardContainerEl.style.display = 'none'
    questionCardContainerEl.style.display = ''
    appendQuestion()
  } else {
    resetButtonContainer.style.display = 'none'
    questionCardContainerEl.style.display = 'none'
    categoryCardContainerEl.style.display = ''

  }
  // categoryCardContainerEl.innerHTML = ''
  // tvShowsQuestions.forEach((question, idx) => {
  //   appendQuestion(question, idx)
  //   })
  // moviesQuestions.forEach((question, idx) => {
  //   appendQuestion(question, idx)
  //   }) 
  // toysQuestions.forEach((question, idx) => {
  //   appendQuestion(question, idx)
  //   }) 
  // musicQuestions.forEach((question, idx) => {
  //   appendQuestion(question, idx)
  //   })        
  }


function appendQuestion(){
  questionCardContainerEl.innerHTML = ''
  let questionCard = document.createElement('div')
  // let answerCard = document.createElement('div')
  questionCard.className = `card ${currentQuestionList[currentQuestionTextIndex].questionText}`
  // answerCard.className = `card ${answer.correctAnswerText}`
  questionCard.innerHTML = 
    `<div>
      <p>${currentQuestionList[currentQuestionTextIndex].questionText}</p>
    </div>
    `
    
  questionCardContainerEl.appendChild(questionCard)
  currentQuestionList[currentQuestionTextIndex].answers.forEach(answer => {
    let answerBtn = document.createElement('button')
    answerBtn.textContent = answer
    answerBtn.addEventListener('click', selectAnswer)
    questionCard.appendChild(answerBtn)
  })
  // answerCard.innerHTML = 
  //   `<div>
  //   <p>${answer.correctAnswerText1}</p>
  //   </div>
  //   `
  // categoryCardContainerEl.appendChild(answerCard)  
}

function init(){
  gameIsInPlay = false
  score = 0
  render()
}

function handleReset (){
  gameIsInPlay = false
  render()
}