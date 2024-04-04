/*-------------------------------- Constants --------------------------------*/
import { getRandomTvShowQuestion } from "../data/questions.js"
import { getRandomMovieQuestion } from "../data/questions.js"
import { getRandomToyQuestion } from "../data/questions.js"
import { getRandomMusicQuestion } from "../data/questions.js"



/*-------------------------------- Variables --------------------------------*/

const tvShowsQuestions = []



/*------------------------ Cached Element References ------------------------*/

const categoryCardContainer = document.querySelector('#category-card-container')
const card = document.querySelector('#card')
const card2 = document.querySelector('#card2')
const card3 = document.querySelector('#card3')
const card4 = document.querySelector('#card4')

/*----------------------------- Event Listeners -----------------------------*/


card.addEventListener('click', handleClick)
card2.addEventListener('click', handleClick)
card3.addEventListener('click', handleClick)
card4.addEventListener('click', handleClick)

/*-------------------------------- Functions --------------------------------*/

//when a category card is clicked, display a question from that category

function handleClick(evt) {
  let categoryCard = evt.target;
  // let card = 'tvShowsQuestions'
  // let card2 = 'moviesQuestions'
  // make tv show card clickable
  if ((categoryCard.textContent) === ('tvShowsQuestions')){
    getRandomTvShowQuestion()}
    
  //once tv show card is clicked get a random question from tvShowsQuestion array
  
  console.log(categoryCard.textContent)
}

getRandomTvShowQuestion()
