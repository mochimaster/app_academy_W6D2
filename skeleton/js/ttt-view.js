class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
  }

  bindEvents(li) {
    // console.log(li.id);
    this.makeMove(li);
    
    // const $tile = $('li.id'); // ASK TA WHY THIS WONT WORK
    // console.log("$tile: ", $tile);
      
      let pos_hash = {
        0: [0,0],
        1: [0,1],
        2: [0,2],
        3: [1,0],
        4: [1,1],
        5: [1,2],
        6: [2,0],
        7: [2,1],
        8: [2,2]
      };
    this.game.playMove(pos_hash[li.id]);
  }

  makeMove(li) {
    const $tile = $(`#${li.id}`);
    const symbol = this.game.currentPlayer;
    $tile.css('background-color', 'green');
    li.append(this.game.currentPlayer);
    
    
  }

  setupBoard() {
  
    const ul = $('<ul></ul>');
    const li = $('<li></li>');
    this.$el.append(ul);
    for (let i = 0; i < 9; i++) {
    ul.append(`<li id='${i}'></li>`);
    }
  }
}

module.exports = View;
