var buttonColors = ['red', 'blue', 'green', 'yellow'];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;

$(document).keypress( () => {
    if(!started) {

        $('#level-title').text('level '+ level);
        nextSequence();
        started = true;
    }
});

$('.btn').click(function () {

    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    animatePress(userChosenColor);

    playSound(userChosenColor);    
    checkAnswer(userClickedPattern.length-1);
});

let checkAnswer = (currentLevel) => {

    if(userClickedPattern[currentLevel] === gamePattern[currentLevel]) {

        console.log('Success')
        if(userClickedPattern.length === gamePattern.length) {
            setTimeout( () => {
                nextSequence();
            }, 1000)
        }
    }
    else {

        console.log('Failure, press F5');

        playSound('wrong');

        $('body').addClass('game-over');
        setTimeout( () => {
            $('body').removeClass('game-over')
        }, 200);

        $('#level-title').text('Game Over, Press Any Key to Restart');
        startOver();
    }
}

nextSequence = () => {

    userClickedPattern = [];
    $('#level-title').text("level "+ level);
    level++;
    
    //Pseudo_Random number generator
    let min = 0; //inclusive, initial range
    let max = 4; //exclusive, final range
    let randomNumber =  Math.floor(Math.random() * (max - min) + min);
    
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    $('#' + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100); //simulating flash
    playSound(randomChosenColor); //sound trigger
}

let playSound = (color) => {

    var audio = new Audio('sounds/' + color + '.mp3');
    audio.play();
}



let animatePress = (currentColor) => {

    $('#'+ currentColor).addClass('pressed')
   setTimeout(() => {   

       $('#' + currentColor).removeClass('pressed') 
   }, 100)
}

let startOver = () => {
    level = 0;
    gamePattern = [];
    started = false;
}
