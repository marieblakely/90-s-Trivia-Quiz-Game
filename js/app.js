/*-------------------------------- Constants --------------------------------*/
import { getRandomTvShowQuestion } from "../data/questions.js"
import { getRandomMovieQuestion } from "../data/questions.js"
import { getRandomToyQuestion } from "../data/questions.js"
import { getRandomMusicQuestion } from "../data/questions.js"
import { moviesQuestions, toysQuestions, tvShowsQuestions, musicQuestions } from "../data/questions.js"

const correctAnswerSays = new Audio("audio/retro-video-game-coin-pickup-38299.mp3")
const answerSays = new Audio("audio/089684_retro-you-lose-sfx-85557.mp3")
/*-------------------------------- Variables (state)-----------------------------*/

let currentQuestionList = []
let currentQuestionTextIndex = 0
let gameIsInPlay
let score
let winner

/*------------------------ Cached Element References ---------------------------*/

const categoryCardContainerEl = document.querySelector('#category-card-container')
const questionCardContainerEl = document.querySelector('#question-card-container')
const chooseCategoryContainerEl = document.querySelector('#choose-category-container')
const resetButtonContainer = document.querySelector('.reset-button-container')
const messageContainer = document.querySelector('#message-container')
const cardEl = document.querySelector('#card')
const cardEl2= document.querySelector('#card2')
const cardEl3 = document.querySelector('#card3')
const cardEl4 = document.querySelector('#card4')
const resetBtn = document.getElementById('reset')
const messageEl = document.querySelector('#message')


/*----------------------------- Event Listeners --------------------------------*/

cardEl.addEventListener('click', createTvQuestion)
cardEl2.addEventListener('click', createMovieQuestion)
cardEl3.addEventListener('click', createToyQuestion)
cardEl4.addEventListener('click', createMusicQuestion)
resetBtn.addEventListener('click', handleReset)

/*-------------------------------- Functions --------------------------------*/

init()


function createTvQuestion(){
  currentQuestionTextIndex = 0
  currentQuestionList = [...tvShowsQuestions]
  gameIsInPlay = true
  render()
}

function createMovieQuestion(){
  currentQuestionTextIndex = 0
  currentQuestionList = [...moviesQuestions]
  gameIsInPlay = true
  render()
}

function createToyQuestion(){
  currentQuestionTextIndex = 0
  currentQuestionList = [...toysQuestions]
  gameIsInPlay = true
  render()
}

function createMusicQuestion(){
  currentQuestionTextIndex = 0
  currentQuestionList = [...musicQuestions]
  gameIsInPlay = true
  render()
}

function selectAnswer(evt) {
  
  if (currentQuestionTextIndex < currentQuestionList.length) {
    if (evt.target.textContent === currentQuestionList[currentQuestionTextIndex].correctAnswer) {
      correctAnswerSays.volume = .05
      correctAnswerSays.play()
      messageEl.textContent = `Correct!`
      score += 1 
      } else {
      (evt.target.textContent === currentQuestionList[currentQuestionTextIndex].answers)
      answerSays.volume = .05
      answerSays.play()
      messageEl.textContent = `Incorrect!`
    } 
    currentQuestionTextIndex += 1
    if (currentQuestionTextIndex < currentQuestionList.length) {
      render()
    } else {
      messageEl.textContent = `You got ${score} out of ${currentQuestionList.length} correct!`
    }
  }
}

// function checkForWinner(){
//   // currentQuestionTextIndex += 1
//     if (currentQuestionTextIndex === currentQuestionList.length) {
//       winningScore === 20
//       winner = true
//   }
// }

// function updateMessage() {
//   if (!winner) {
//     messageEl.textContent = `You Lose! Try again!`
//   } else {
//     messageEl.textContent = `Congrats! You Win! You're a 90's Wiz!`
//   }
// }

function render() {
  // console.log(currentQuestionList)
  if (gameIsInPlay) {
    resetButtonContainer.style.display = ''
    categoryCardContainerEl.style.display = 'none'
    questionCardContainerEl.style.display = ''
    chooseCategoryContainerEl.style.display = 'none'
    appendQuestion()
      } else {
    resetButtonContainer.style.display = 'none'
    questionCardContainerEl.style.display = 'none'
    categoryCardContainerEl.style.display = ''
    chooseCategoryContainerEl.style.display = ''
    }
}


function appendQuestion(){
  questionCardContainerEl.innerHTML = ''
  let questionCard = document.createElement('div')
  questionCard.className = `card ${currentQuestionList[currentQuestionTextIndex].questionText}`
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
}

function init(){
  gameIsInPlay = false
  score = 0
  winner = false
  render()
}

function handleReset (){
  gameIsInPlay = false
  // checkForWinner()
  // updateMessage()
  render()
}