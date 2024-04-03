/*-------------------------------- Constants --------------------------------*/
import { getRandomTvShowQuestion } from "../data/questions.js"
import { getRandomMovieQuestion } from "../data/questions.js"
import { getRandomToyQuestion } from "../data/questions.js"
import { getRandomMusicQuestion } from "../data/questions.js"



/*-------------------------------- Variables --------------------------------*/




/*------------------------ Cached Element References ------------------------*/

const categoryCardContainer = document.querySelector('#category-card-container')


/*----------------------------- Event Listeners -----------------------------*/




/*-------------------------------- Functions --------------------------------*/

function render(){
  categoryCardContainer.innerHTML = ''
  tvShowsQuestions.forEach(question => {
    appendQuestion(question)
  })
}

function appendQuestion(tvShowsQuestions){
  let questionCard = document.createElement('div')
  questionCard.className = `card`
  questionCard.innerHTML = 
    `<div>
      <p>${question.text}</p>
      <p>${question.questionText}</p>
    </div>`
      categoryCardContainer.appendChild(questionCard)
}