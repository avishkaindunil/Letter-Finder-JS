function letterFinder(word, match) {
    var word, match;
    for(var i=0; i<word.length; i++){
        if(word[i]==match){
            console.log("Founded the", match, "at", i);
        }
        else{
            console.log("---No match found at", i);
        }
    }
}

letterFinder("test","t");
