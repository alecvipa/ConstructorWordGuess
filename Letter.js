
function country (name, letter) {
    this.name = name;
    this.letter = letter;
    flag = false;
    name2 = this.name;
    letter2 = this.letter;
    
    this.unders = function () {
        underscores = [];

        for (var i = 0; i < name2.length; i++) {
            underscores.push("_");
        }
        console.log(underscores);

    }
    this.letters = function () {
        if (name2.includes(letter2)) {
            flag = true;

            var index = name2.indexOf(letter2);

            underscores.splice(index,1,letter2)

        } else {
            flag = false;
        }
        console.log(underscores);
        if (flag === false) {
            console.log("-1 life")

        }
    }
};

// var NewCont = new country("Mexico", "e");

// NewCont.unders();
// NewCont.letters();

module.exports = country;