//Create an ARRAY of possible questions. Separate each 'string' with a comma.
var questions = [
    'When am I going to be a billionaire?',
    'When is the birthday of my eldest grandchild?',
    'When will I buy my first apartment?',
    'When will I achieve my greatest accomplishment in my life?',
    'When will I get my first car?',
    'When should I tell my dad his fried rice is not the best in the world?',
    'When will I get my first full-time job?',
    'When is my cousin going to give me the blanket she promised me on my 19th birthday?',
    'When should I tell my mom her tuna salad was awful?',
    'When will I be good at cooking?',
    'When will I start to wake up early?',
    'When should I ask for a raise?',
    'When will I organize my room?',
    'When should I do my next wardrobe cleanout?',
    'When will I hold my first personal exhibition?',
    'When will I be able to hire a housemaid to do my laundries?',
    'When will I become a fortune teller?',
    'When should I reorganize my room?',
    'When should I buy a new scarf?',
    'When should I buy a pair of new gloves?'
]

//Create a variable that randomly selects a positive whole between 0 and the number of total questions.
//floor turns the data into the a integer(<or=the original data)
var randomQuestions = questions[Math.floor(Math.random() * questions.length)];

//Select the HTML element with the id '#display' and replace its contents with the result of the randomQuestions equation
//innerHTML replace the HTML content (inner HTML) of an element
document.querySelector('#questions').innerHTML = randomQuestions;


//
var answers = [
    'Tomorrow',
    'a month later',
    '3 years later',
    '10 years later',
    'When you are ready',
    'Whenever you want',
    'It depends on you',
    'On your next birthday',
    'In next September',
    'In next winter',
    'when things gets better',
    'when you deserve it',
    'In next year',
    'In 2022',
    'In 2050',
    'In 2045',
    'In 2099',
    'In 2030',
    'In next week',
    'On next Saturday'
]

var randomAnswers = answers[Math.floor(Math.random()*answers.length)];
document.querySelector('#answers').innerHTML = randomAnswers;

document.addEventListener('mousemove', function(e) {
  let body = document.querySelector('body');
  let answers = document.getElementById('answers');
  let left = e.offsetX;
  let top = e.offsetY;
  answers.style.left = left + 'px';
  answers.style.top = top + 'px';
});

document.addEventListener('mousemove', function(e) {
  let body = document.querySelector('body');
  let hand = document.getElementById('hand');
  let left = e.offsetX;
  let top = e.offsetY;
  hand.style.left = left + 'px';
  hand.style.top = top + 'px';
});



