var sentences = [["The child liked the chocolate.",
                  "She was stopped by the bravest knight.",
                  "Mary baked a cake for his birthday.",
                  "She decorated the cake carefully.",
                  "Mary wore a dress with polka dots."],
                
                 ["राम ने सीता के लिए फल तोड़ा।",
                 "छोटे बच्चे पाठशाला जल्दी आयेंगे।",
                 "मेहनत का फल मीठा होता है।",
                 "वाह! वह खूबसूरत है।",
                 "पेड़ से पत्ते गिर गए।",]];

var langIndex; //variable to store id of lang chosen
var senIndex; //variable to store id of sentence chosen

var hindiDict = {
    "राम" : "Noun",
    "ने" : "Postposition",
    "सीता" : "Noun",
    "के" : "Postposition",
    "लिए" : "Postposition",
    "फल" : "Noun",
    "तोड़ा" : "Verb",
    "छोटे" : "Adjective",
    "बच्चे" : "Noun",
    "पाठशाला" : "Noun",
    "जल्दी" : "Adverb", 
    "आयेंगे" : "Verb",
    "मेहनत" : "Noun",
    "का" : "Postposition",
    "फल" : "Noun",
    "मीठा" : "Adjective",
    "होता" : "Verb",
    "है" : "Verb",
    "वाह" : "Interjection",
    "वह" : "Pronoun",
    "खूबसूरत" : "Adjective",
    "है" : "Verb",
    "पेड़" : "Noun",
    "से" : "Postposition",
    "पत्ते" : "Noun",
    "गिर" : "Verb",
    "गए" : "Verb"
};

function selectLang(value){

    if(value!="select"){

        clearDisplay();
        document.getElementById("select").selected = true;

        if(value == "english"){
            langIndex = 0;
        }
        else if (value == "hindi"){
            langIndex = 1;
        }

        for(var i=0; i<5; i++){
            document.getElementById(i).innerHTML = sentences[langIndex][i];
        }

        document.getElementById("sentence").classList.remove("hide");}

    else {
        alert("Select a Language!")
        }
};

function selectSentence(value){

    $("tbody tr").remove();
    document.form.classList.remove("hide");
    document.getElementById("answers").classList.add("hide");
    senIndex = value;
    var sentence = sentences[langIndex][value];

    //removing the full stop
    var str = sentence.replace(/[.।!]+/g , '');
    var str1 = str.replace(/\s\s+/g, ' ');

    var words = str1.split(" ");
    console.log(words);
    var length = words.length;
    
    for(var i=0; i<length; i++){
        var word = words[i];
        if (langIndex == 0){
            var markup = "<tr><td>"+word+"</td><td><select class='posMenu' onchange='selOption()'><option>Noun</option><option>Pronoun</option><option>Verb</option><option>Adjective</option><option>Adverb</option><option>Determiner</option><option>Preposition</option><option>Conjunction</option><option>Interjection</option></select></td><td class='img-disp'></td><td></td></tr>"
        }
        else if (langIndex ==1){
            var markup = "<tr><td>"+word+"</td><td><select class='posMenu' onchange='selOption()'><option>Noun</option><option>Pronoun</option><option>Verb</option><option>Adjective</option><option>Adverb</option><option>Determiner</option><option>Postposition</option><option>Conjunction</option><option>Interjection</option></select></td><td class='img-disp'></td><td></td></tr>"
        }
        $("table tbody").append(markup);
    }
};

function clearDisplay(){

    document.getElementById("sentence").classList.add("hide");
    document.getElementById("select").selected = true;
    $("tbody tr").remove();
    document.form.classList.add("hide");
    document.getElementById("answers").classList.add("hide");
    
};

function submitAnswers(){

    var str = sentences[langIndex][senIndex];
    var lexer = new Lexer();
    var tagger = new POSTagger();

    //removing the full stop
    var str1 = str.replace(/[.।!]+/g , '');
    var sentence = str1.replace(/\s\s+/g, ' ');

    var answers = selOption();
    var solutions = [];

    if (langIndex == 0){

        var words = lexer.lex(sentence);
        var tags = tagger.tag(words);

        for (i in tags) {
            
            var id = tags[i][1];

            if(id=="DT"){
                solutions[i] = "Determiner";
            }
            else if(id=="IN"){
                solutions[i] = "Preposition";
            }
            else if(id=="JJ" || id=="JJR" || id=="JJS"){
                solutions[i] = "Adjective";
            }
            else if(id=="NN" || id=="NNP" || id=="NNPS" || id=="NNS"){
                solutions[i] = "Noun";
            }
            else if(id=="VB" || id=="VBD" || id=="VBG" || id=="VBN" || id=="VBP" || id=="VBZ"){
                solutions[i] = "Verb";
            }
            else if(id=="PRP" || id=="PRP$"){
                solutions[i] = "Pronoun";
            }
            else if(id=="RB" || id=="RBR" || id=="RBS"){
                solutions[i] = "Adverb";
            }
        }
    }

    else if (langIndex == 1){
        var words = sentence.split(" ");
        for(var k=0; k<words.length; k++){
            solutions[k] = hindiDict[words[k]];
        }
    }
    console.log(solutions);
    var imgBoxes = $(".img-disp");
    var counter = 0;

    for(var j=0; j<answers.length; j++){
        if(answers[j].localeCompare(solutions[j]) == 0){
            imgBoxes[j].innerHTML = "<img src='../right.png'>";
            counter++;
        }
        else{
            imgBoxes[j].innerHTML = "<img src='../wrong.png'>"; 
        }
    }

    if(counter!=answers.length){
        document.getElementById("answers").classList.remove("hide");
    }
};

function selOption(){

    var option;
    var selValues = [];
    var selMenu = document.getElementsByClassName("posMenu");

    for(var i=0; i<selMenu.length; i++){
        option = selMenu[i];
        selValues[i] = option.options[option.selectedIndex].value;
    }

return selValues
};
 