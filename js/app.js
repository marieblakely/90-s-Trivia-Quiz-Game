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

/*------------------------ Cached Element References ---------------------------*/

const categoryCardContainer = document.querySelector('#category-card-container')
const cardEl = document.querySelector('#card')
const cardEl2= document.querySelector('#card2')
const cardEl3 = document.querySelector('#card3')
const cardEl4 = document.querySelector('#card4')

/*----------------------------- Event Listeners --------------------------------*/


cardEl.addEventListener('click', () => {
  const newQuestion = getRandomTvShowQuestion()
  tvShowsQuestions.push(newQuestion)
  console.log(tvShowsQuestions)
})
// card2.addEventListener('click', handleClick)
// card3.addEventListener('click', handleClick)
// card4.addEventListener('click', handleClick)

/*-------------------------------- Functions --------------------------------*/


//when a category card is clicked
function tvShows(evt) {
  let card = evt.target;
  // let card = 'tvShowsQuestions'
  // let card2 = 'moviesQuestions'
  // make tv show card clickable
  if ((card.textContent) === ('tvShows')){
    // append ('questionText')
    // getRandomTvShowQuestion()
  }
    //once tv show card is clicked get a random question from tvShowsQuestion array
  
  console.log(card.textContent)
}

// create new question function

//append function

