const tvShowsQuestions = [
  {questionText: 'Which tv show featured six friends, one of which is a nerd, navigating the ups and downs of high school while frequently frustrating their principal?', correctAnswer: 'Saved By The Bell', answers:['Family Matters', 'All That', 'Saved By The Bell', 'Boy Meets World']},
  {questionText: 'Which tv show featured a teenage male who got sent to live with his Aunt and Uncle for getting in one little fight?', correctAnswer: 'The Fresh Prince of Bel-air', answers:['Will Smith', 'Jazzy Fresh of Bel-air', 'Kenan & Kel', 'The Fresh Prince of Bel-air']},
  {questionText: 'In this tv show, twins separated at birth learn about each other as teenagers after running into each in the mall', correctAnswer: 'Sister, Sister', answers:['Twins','Sister, Sister', 'The Suite Life of Zack & Cody', 'The Silent Twins']},
  {questionText: 'What spin-off of The Cosby Show centered the lives of students at Hillman College?', correctAnswer: 'A Different World', answers:['Boy Meets World', 'Felicity', 'Grown-ish', 'A Different World']},
  {questionText: 'What animated tv series focuses on a group of babies that find themselves in adventures both real and imaginary?', correctAnswer: 'Rugrats', answers:['Little Bill', 'Sesame Street', 'Teletubbies', 'Rugrats']}
]

const moviesQuestions = [
  {questionText: 'A businessman and an escort fall hard for one another in what movie?', correctAnswer: 'Pretty Woman', answers:['Great Expectations', 'Cruel Intentions', 'Indescent Exposure']},
  {questionText: 'A beautiful, popular, and rich high school student befriends a new student and gives her a makeover in this movie', correctAnswer: 'Clueless', answers:['She All That', 'Grease', 'Princess Diaries', 'Clueless']},
  {questionText: 'In what movie does a young boy have to fend for himself when his parents mistakenly leave him behind on a famiy trip?', correctAnswer: 'Home Alone', answers:['Dennis the Menace','Home Alone', 'Problem Child', 'Jumanji']},
  {questionText: 'A teenage girl is terrorized by a masked killer with a knife who targets her and her friends by using scary movies in which movie?', correctAnswer: 'Scary Movie', answers: ['I Know What You Did Last Summer', 'Urban Legend', 'Scary Movie', 'Texas Chainsaw Massacre']},
  {questionText: 'In this movie an extraterrestrial attack worldwide results in a group of people launching a counterattack on July 4', correctAnswer: 'Independence Day', answers:['Independence Day', 'The Fifth Element', 'Men In Black', 'Predator II']}
]

const toysQuestions = [
  {questionText: 'What small, colorful handheld video game system was available in an array of colors with a catalog of over 1,000 games?', correctAnswer: 'Game Boy Color', answers: ['Super Nintendo', 'Game Boy Color', 'Sega Genasis', 'Atari']},
  {questionText: 'Which of these handheld games calls out commands randomly that increases in speed as the game progresses?', correctAnswer: 'Bop It', answers: ['Simon Says', 'Wheel of Fortune', 'Game Gear', 'Bop It']},
  {questionText: 'What keychain-sized virtual simulation game allows you to feed, and take care of your own pet?', correctAnswer: 'Tamagotchi', answers: ['Tamagotchi', 'Robot Dog', 'Hatchimal', 'Littlest Pet Shop']},
  {questionText: 'What toy gun requires manually pumping air to shoot water with power and range?', correctAnswer: 'Super Soaker', answers: ['Summer Soaker', 'Super Soaker', 'Tyco Motorized Water Gun', 'Nerf Gun']},
  {questionText: 'Arguably the most popular game console of the nineties, this console had a large range of games that included Mario Bros. and Donkey Kong', correctAnswer: 'Super Nintendo', answers: ['Sega Genasis', 'Playstation', 'Game Cube', 'Super Nintendo']}
]

const musicQuestions = [
  {questionText: 'A crazy-sexy-cool trio sung about a guy not getting any love from from them on this hit', correctAnswer: 'No Scrubs', answers: ['TLC', 'Destinys Child', 'Bills, Bills, Bills', 'No Scrubs']},
  {questionText: 'The musical hit which featured the lyrics I want it that way was sung by what boy band?', correctAnswer: 'Backstreet Boys', answers: ['Blink 182', 'Backstreet Boys', 'Nsync', 'LFO']},
  {questionText: 'This song by a young girl confessing her loneliness is killing her is named?', correctAnswer: 'Baby One More Time', answers: ['My Loneliness is Killing Me', 'Give Me A Sign', 'Brittney Spears', 'Baby One More Time']},
  {questionText: 'The California Love cali tempo rap song produced by Dr. Dre, performed by Tupac features which funk group?', correctAnswer: 'Zapp', answers: ['Earth Wind & Fire', 'Zapp', 'The Parliament Funkadelic', 'The Gap Band']},
  {questionText: 'This song performed by a Canadian superstar was featured on the movie The Titanic', correctAnswer: 'My Heart Will Go On', answers: ['I Will Always Love You', 'I Have Had The Time Of My Life', 'My Heart Will Go On', 'Do Not Let Go']}
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
  getRandomMusicQuestion,
  tvShowsQuestions,
  moviesQuestions,
  toysQuestions,
  musicQuestions
}