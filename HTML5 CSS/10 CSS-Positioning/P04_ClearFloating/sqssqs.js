function star(sentence,startedWord) {

    let sentence1 = sentence.split('').join('');
    let startedWord1 = startedWord.split('').join('');

    let truee = sentence.indexOf(startedWord);

    if (truee === 0) {
        console.log('true');
    }
    else{
        console.log('false');
    }
}