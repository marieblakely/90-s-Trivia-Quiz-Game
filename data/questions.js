const tvShowsQuestions = [
  {questionText: 'Which tv show featured six friends, one of which is a nerd, navigating the ups and downs of high school while frequently frustrating their principal?', correctAnswerText: 'Saved By The Bell', incorrectAnswerText: ['Family Matters', 'Boy Meets World', 'All That']},
  {questionText: 'Which tv show featured a teenage male who got sent to live with his Aunt and Uncle for getting in one little fight?', correctAnswerText: 'The Fresh Prince of Bel-air', incorrectAnswerText: ['Will Smith', 'Jazzy Fresh of Bel-air', 'Kenan & Kel']},
  {questionText: 'In this tv show, twins separated at birth learn about each other as teenagers after running into each in the mall', correctAnswerText: 'Sister, Sister', incorrectAnswerText: ['Twins', 'The Suite Life of Zack & Cody', 'The Silent Twins']},
  {questionText: 'What spin-off of The Cosby Show centered the lives of students at Hillman College?', correctAnswerText: 'A Different World', incorrectAnswerText: ['Boy Meets World', 'Felicity', 'Grown-ish']},
  {questionText: 'What animated tv series focuses on a group of babies that find themselves in adventures both real and imaginary?', correctAnswerText: 'Rugrats', incorrectAnswerText: ['Little Bill', 'Sesame Street', 'Teletubbies']}
]

const moviesQuestions = [
  {questionText: 'A businessman and an escort fall hard for one another in what movie?', correctAnswerText: 'Pretty Woman', incorrectAnswerText: ['Great Expectations', 'Cruel Intentions', 'Indescent Exposure']},
  {questionText: 'A beautiful, popular, and rich high school student befriends a new student and gives her a makeover in this movie', correctAnswerText: 'Clueless', incorrectAnswerText: ['She All That', 'Grease', 'Princess Diaries']},
  {questionText: 'In what movie does a young boy have to fend for himself when his parents mistakenly leave him behind on a famiy trip?', correctAnswerText: 'Home Alone', incorrectAnswerText: ['Dennis the Menace', 'Problem Child', 'Jumanji']},
  {questionText: 'A teenage girl is terrorized by a masked killer with a knife who targets her and her friends by using scary movies in which movie?', correctAnswerText: 'Scary Movie', incorrectAnswerText: ['I Know What You Did Last Summer', 'Urban Legend', 'Texas Chainsaw Massacre']},
  {questionText: 'In this movie an extraterrestrial attack worldwide results in a group of people launching a counterattack on July 4', correctAnswerText: 'Independence Day', incorrectAnswerText: ['The Fifth Element', 'Men In Black', 'Predator II']}
]

const toysQuestions = [
  {questionText: 'What small, colorful handheld video game system was available in an array of colors with a catalog of over 1,000 games?', correctAnswerText: 'Game Boy Color', incorrectAnswerText: ['Super Nintendo', 'Sega Genasis', 'Atari']},
  {questionText: 'Which of these handheld games calls out commands randomly that increases in speed as the game progresses?', correctAnswerText: 'Bop It', incorrectAnswerText: ['Simon Says', 'Wheel of Fortune', 'Game Gear']},
  {questionText: 'What keychain-sized virtual simulation game allows you to feed, and take care of your own pet?', correctAnswerText: 'Tamagotchi', incorrectAnswerText: ['Robot Dog', 'Hatchimal', 'Littlest Pet Shop']},
  {questionText: 'What toy gun requires manually pumping air to shoot water with power and range?', correctAnswerText: 'Super Soaker', incorrectAnswerText: ['Summer Soaker', 'Tyco Motorized Water Gun', 'Nerf Gun']},
  {questionText: 'Arguably the most popular game console of the nineties, this console had a large range of games that included Mario Bros. and Donkey Kong', correctAnswerText: 'Super Nintendo', incorrectAnswerText: ['Sega Genasis', 'Playstation', 'Game Cube']}
]

const musicQuestions = [
  {questionText: 'A crazy-sexy-cool trio sung about a guy not getting any love from from them on this hit', correctAnswerText: 'No Scrubs', incorrectAnswerText: ['TLC', 'Destinys Child', 'Bills, Bills, Bills']},
  {questionText: 'The musical hit which featured the lyrics I want it that way was sung by what boy band?', correctAnswerText: 'Backstreet Boys', incorrectAnswerText: ['Blink 182', 'Nsync', 'LFO']},
  {questionText: 'This song by a young girl confessing her loneliness is killing her is named?', correctAnswerText: 'Baby One More Time', incorrectAnswerText: ['My Loneliness is Killing Me', 'Give Me A Sign', 'Brittney Spears']},
  {questionText: 'The California Love cali tempo rap song produced by Dr. Dre, performed by Tupac features which funk group?', correctAnswerText: 'Zapp', incorrectAnswerText: ['Earth Wind & Fire', 'The Parliament Funkadelic', 'The Gap Band']},
  {questionText: 'This song performed by a Canadian superstar was featured on the movie The Titanic', correctAnswerText: 'My Heart Will Go On', incorrectAnswerText: ['I Will Always Love You', 'I Have Had The Time Of My Life', 'Do Not Let Go']}
]

function getRandomTvShowQuestion (){
  return tvShowsQuestions[Math.floor(Math.random() * tvShowsQuestions.length)]
}

function getRandomMovieQuestion (){
  return moviesQuestions[Math.floor(Math.random() * moviesQuestions.length)]
}

function getRandomToyQuestion (){
  return toysQuestions[Math.floor(Math.random() * toysQuestions.length)]
}

function getRandomMusicQuestion (){
  return musicQuestions[Math.floor(Math.random() * musicQuestions.length)]
}

export {
  getRandomTvShowQuestion,
  getRandomMovieQuestion,
  getRandomToyQuestion,
  getRandomMusicQuestion
}