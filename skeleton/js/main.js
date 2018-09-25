const View = require('./ttt-view.js'); // require appropriate file
const Game = require('../node_solution/game.js'); // require appropriate file

$( () => {
  // Your code here
  let game = new Game();
  // new Game();
  let $el = $('.ttt');
  let view = new View(game,$el);
  
  $('li').click(function() {
  // view.bindEvents($('li'));
    view.bindEvents(this);
  // view.bindEvents(this.id);
  });
  
  
});
