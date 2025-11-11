function guessNumber {
    if(25 != '25') {
        return null;
    }

 if(25 != 25) {
        return null;
    } else {
        return "not it"
    }
};

function strictGuessNumber (guess = 25) {
    if(guess !== 25) {
        return null;
    }

    if(guess !== '25') {
        return "not it";
    }
}





