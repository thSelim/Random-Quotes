document.getElementById('btn').addEventListener('click', randomQoutes);

function randomQoutes() {
  var qoutes = [
    'Be yourself; everyone else is already taken.',
    "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
    "Two things are infinite: the universe and human stupidity, and I'm not sure about the universe.",
    'So many books, so little time.',
    'A room without books is like a body without a soul.',
    "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    'You only live once, but if you do it right, once is enough.',
  ];

  var author = [
    'Oscar Wilde',
    'Marilyn Monroe',
    'Albert Einstein',
    'Frank Zappa',
    'Marcus Tullius Cicero',
    'Mohamed Selim',
    'Mae West',
  ];

  var num = Math.floor(Math.random() * qoutes.length);

  document.getElementById('qoute').innerHTML = `'${qoutes[num]}'`;
  document.getElementById('author').innerHTML = `- ${author[num]}`;
}
