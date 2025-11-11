function guessNumber (guess = 25) {
    if(guess != '25') {
        return "not it";
    }

 if(guess != 25) {
        return "not it";
    } else {
        return null;
    }
};

function strictGuessNumber (guess = 25) {
    if(guess !== 25) {
        return "not it";
    }

    if(guess !== '25') {
        return null;
    }
}





