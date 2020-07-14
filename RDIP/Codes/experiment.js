var corpus_eng =  [
    ["John ate an apple before afternoon",
    "before afternoon John ate an apple",	
    "John before afternoon ate an apple"],

    ["some students like to study in the night",
        "at night some students like to study"],

    ["John and Mary went to church",
    "Mary and John went to church"],

    ["John went to church after eating",	
    "after eating John went to church",
    "John after eating went to church"],

    ["did he go to market",	
    "he did go to market"],

    ["the woman who called my sister sells cosmetics",
    "the woman who sells cosmetics called my sister",
    "my sister who sells cosmetics called the woman",
    "my sister who called the woman sells cosmetics"],

    ["John goes to the library and studies",
    "John studies and goes to the library"],

    ["John ate an apple so did she",
    "she ate an apple so did John"],

    ["the teacher returned the book after she noticed the error",
    "the teacher noticed the error after she returned the book",
    "after the teacher returned the book she noticed the error",
    "after the teacher noticed the error she returned the book",
    "she returned the book after the teacher noticed the error",
    "she noticed the error after the teacher returned the book",
    "after she returned the book the teacher noticed the error",
    "after she noticed the error the teacher returned the book"],

    ["I told her that I bought a book yesterday",
    "I told her yesterday that I bought a book",
    "yesterday I told her that I bought a book",
    "I bought a book that I told her yesterday",
    "I bought a book yesterday that I told her",	
    "yesterday I bought a book that I told her"]];

var corpus_hin = [
    ["राम और श्याम बाजार गयें",
     "राम और श्याम गयें बाजार",
     "बाजार गयें राम और श्याम",
     "गयें बाजार राम और श्याम"],

    ["राम सोया और श्याम भी",
     "श्याम सोया और राम भी",
     "सोया श्याम और राम भी",
     "सोया राम और श्याम भी"],

    ["मैंने उसे बताया कि राम सो रहा है",
     "मैंने उसे बताया कि सो रहा है राम",
     "उसे मैंने बताया कि राम सो रहा है",
     "उसे मैंने बताया कि सो रहा है राम",
     "मैंने बताया उसे कि राम सो रहा है",
     "मैंने बताया उसे कि सो रहा है राम",
     "उसे बताया मैंने कि राम सो रहा है",
     "उसे बताया मैंने कि सो रहा है राम",
     "बताया मैंने उसे कि राम सो रहा है",
     "बताया मैंने उसे कि सो रहा है राम",
     "बताया उसे मैंने कि राम सो रहा है",
     "बताया उसे मैंने कि सो रहा है राम"],

    ["राम खाकर सोया",
     "खाकर राम सोया",
     "राम सोया खाकर",
     "खाकर सोया राम",
     "सोया राम खाकर",
     "सोया खाकर राम"],

    ["बिल्लियों को मारकर कुत्ता सो गया",
     "मारकर बिल्लियों को कुत्ता सो गया", 
     "बिल्लियों को मारकर सो गया कुत्ता",
     "मारकर बिल्लियों को सो गया कुत्ता",
     "कुत्ता सो गया बिल्लियों को मारकर",
     "कुत्ता सो गया मारकर बिल्लियों को",
     "सो गया कुत्ता बिल्लियों को मारकर",
     "सो गया कुत्ता मारकर बिल्लियों को"],

    ["एक लाल किताब वहाँ है",
     "एक लाल किताब है वहाँ",
     "वहाँ है एक लाल किताब",
     "है वहाँ एक लाल किताब"],

    ["एक बड़ी सी किताब वहाँ है",
     "एक बड़ी सी किताब है वहाँ",
     "बड़ी सी एक किताब वहाँ है",
     "बड़ी सी एक किताब है वहाँ",
     "वहाँ है एक बड़ी सी किताब",
     "वहाँ है बड़ी सी एक किताब",
     "है वहाँ एक बड़ी सी किताब",
     "है वहाँ बड़ी सी एक किताब"]];

     function dispInitial(value){

        document.getElementById("initialMsg").innerHTML = "Form a sentence (Declarative or Interrogative or any other type) from the given words";
        document.getElementById("subMsg").innerHTML = "(select the buttons in proper order)";
        randSentence(value);

        if(document.getElementById("wordsSel").childNodes.length!=0){
            clearDisplay();
        }

     };

     function randSentence(value){

        var buttons = document.getElementById("wrd-buttons"); //removing buttons when option value is changed
        while (buttons.hasChildNodes()) {  
        buttons.removeChild(buttons.firstChild);
        }

         if (value == "english"){
            var str = corpus_eng[Math.floor(Math.random() * corpus_eng.length)][0]; //Picking a random sentence from the corpus
            console.log(str);
            var words = randWords(str);//Generating random words from the sentence
        }

        else if (value == "hindi"){
            var str = corpus_hin[Math.floor(Math.random() * corpus_hin.length)][0];
            console.log(str);
            var words = randWords(str);
        }

        for(var i=0; i<words.length; i++){
            var btn = document.createElement("BUTTON"); 
            btn.className = "wrd-btn";
            btn.value = words[i];
            btn.id = i;
            btn.onclick = function() {dispWords(this.id); };
            btn.innerHTML = words[i];
            document.getElementById("wrd-buttons").appendChild(btn); 
        }
     }

     function randWords(string){
        var words = string.split(" "); //Converting the sentence to an array of words
        var arr = shuffle(words);
        console.log(arr);

        return arr;
     }

     function shuffle(array) { //Function to shuffle the array to generate words in random order
        var currentIndex = array.length, temporaryValue, randomIndex;
      
        // While there remain elements to shuffle
        while (0 !== currentIndex) {
      
          // Pick a remaining element
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          // And swap it with the current element
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
      
        return array;
      }

     function dispWords(id){ //Used to display sentence being formed as the buttons are clicked
            var value = document.getElementById(id).value;
            var sentence = document.getElementById("wordsSel");
            var words = sentence.innerHTML.split(" ");
            var word_count = words.length;
            
            var word_limit = document.getElementById("wrd-buttons").childElementCount;

            if (sentence.childNodes.length==0) { //Un-hiding the section when the first word is selected

                if(document.getElementById("second-portion").classList.contains("hide")){

                    document.getElementById("second-portion").classList.remove("hide");
                }
                
                sentence.innerHTML = value;
                var element = document.getElementById(id);
                element.classList.add("hide");  
            }
            else if(word_count==word_limit-1){ //Generating the check button when last word is selected

                document.getElementById("checkBtn").classList.remove("hide");
                sentence.innerHTML += " " + value;
                var element = document.getElementById(id);
                element.classList.add("hide");  
            }
            else {
                sentence.innerHTML += " " + value;
                var element = document.getElementById(id);
                element.classList.add("hide");          
            }
     }

     function clearDisplay(){
        var sentence = document.getElementById("wordsSel");

        var children = document.getElementById("wrd-buttons").childElementCount;

        for(var i=0; i<children; i++){ //Loop that gets the buttons back by un-hiding them if hidden
            if(document.getElementById("wrd-buttons").childNodes[i].classList.contains("hide")){

                document.getElementById("wrd-buttons").childNodes[i].classList.remove("hide");
            }
        }
               
        sentence.innerHTML = "";//clears the string
        document.getElementById("second-portion").classList.add("hide");
        document.getElementById("checkBtn").classList.add("hide");
        document.getElementById("solsBtn").classList.add("hide");
        document.getElementById("solution").innerHTML = "";
     
     }

     function checkCorrectness(){
        var sentence = document.getElementById("wordsSel").innerHTML;

        for(var i = 0; i < corpus_eng.length; i++) {

            for(var j = 0; j < corpus_eng[i].length; j++) {

                if(sentence == corpus_eng[i][j]){
                    document.getElementById("solution").style.color = "green";
                    document.getElementById("solution").innerHTML = "Right Answer!";
                    return true;
                }
            }
        }

        for(var i = 0; i < corpus_hin.length; i++) {

            for(var j = 0; j < corpus_hin[i].length; j++) {

                if(sentence == corpus_hin[i][j]){
                    document.getElementById("solution").style.color = "green";
                    document.getElementById("solution").innerHTML = "Right Answer!!!";
                    return true;
                }
            }
        }
        document.getElementById("solution").innerHTML = "Wrong Answer!!!";
        document.getElementById("solution").style.color = "red";
        document.getElementById("solsBtn").classList.remove("hide");
        return false;
     }