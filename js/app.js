/*-------------------------------- Constants --------------------------------*/
import { getRandomTvShowQuestion } from "../data/questions.js"
import { getRandomMovieQuestion } from "../data/questions.js"
import { getRandomToyQuestion } from "../data/questions.js"
import { getRandomMusicQuestion } from "../data/questions.js"



/*-------------------------------- Variables (state)-----------------------------*/

const tvShowsQuestions = []
const moviesQuestions = []
const toysQuestions = []
const musicQuestions = []
let questionIndex = 0
let gameIsInPlay

/*------------------------ Cached Element References ---------------------------*/

const categoryCardContainerEl = document.querySelector('#category-card-container')
const cardEl = document.querySelector('#card')
const cardEl2= document.querySelector('#card2')
const cardEl3 = document.querySelector('#card3')
const cardEl4 = document.querySelector('#card4')
const resetButtonContainer = document.querySelector('.reset-button')
const resetBtn = document.getElementById('reset')

/*----------------------------- Event Listeners --------------------------------*/


cardEl.addEventListener('click', () => {
  const newTvQuestion = getRandomTvShowQuestion()
  tvShowsQuestions.push(newTvQuestion)
  // gameIsInPlay = true
  console.log(tvShowsQuestions)
})
cardEl2.addEventListener('click', handleClick)
// card3.addEventListener('click', handleClick)
// card4.addEventListener('click', handleClick)
resetBtn.addEventListener('click', handleReset)

/*-------------------------------- Functions --------------------------------*/

// init()

function handleClick(evt){
  let cardEl2 = getRandomMovieQuestion(evt.target.id)
  console.log(cardEl2)
}



// function generateQuestion(){
//   let questionsCopy = [...allQuestions]
//   let questionsToAdd = []

//   for (let i = 1; i <= questionsToAdd; i++ ){
//     let randIdx = Math.floor(Math.random() * questionsCopy.length)
//     let questionToAdd = questionsCopy.splice(randIdx, 1)
//     questionsToAdd.push(questionToAdd, questionToAdd)
//   }
//   return questionsToAdd
// }


function createTvQuestion(){
  const newTvQuestion = getRandomTvShowQuestion()
  tvShowsQuestions.push(newTvQuestion)
  render()
}

function render() {
  if (gameIsInPlay) {
    resetButtonContainer.style.display = ''
    categoryCardContainerEl.style.display = 'none'
  }  
  categoryCardContainerEl.innerHTML = ''
  tvShowsQuestions.forEach((question, idx) => {
    appendQuestion(question, idx)
    })
  }


function appendQuestion(question, idx){
  let questionCard = document.createElement('div')
  questionCard.className = `card ${question.questionText}`
  questionCard.innerHTML =
    `<div>
      <p>${question.questionText}</p>
    </div>
    `
  categoryCardContainerEl.appendChild(questionCard)
}

function init(){
  gameIsInPlay = false
  render()
}

function handleReset (){
  gameIsInPlay = false
  render()
}
// function render(){
//   if (gameIsInPlay){
//     resetButtonContainer.style.display = ''
//   }
// }


//when a category card is clicked
// function tvShows(evt) {
//   let card = evt.target;
//   // let card = 'tvShowsQuestions'
//   // let card2 = 'moviesQuestions'
//   // make tv show card clickable
//   if ((card.textContent) === ('tvShows')){
//     // append ('questionText')
//     // getRandomTvShowQuestion()
//   }
//     //once tv show card is clicked get a random question from tvShowsQuestion array
  
//   console.log(card.textContent)
// }

// create new question function

//append function

