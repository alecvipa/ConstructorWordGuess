var country = require('./Letter.js');

var words = function() {
    this.letter = [];
    this.words = ['Mexico', 'USA' , 'Brazil'];
    this.randomword = this.words[Math.floor(Math.random() * this.words.length)]
    this.guesses = function (name, letter) {
        this.letter.push(new country(name, letter))
    };


};


words();

module.exports = words;