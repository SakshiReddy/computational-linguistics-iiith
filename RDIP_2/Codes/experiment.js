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

var langIndex;

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

    var sentence = sentences[langIndex][value];
    var str = sentence.replace(/[.।]+/g , '');
    var str1 = str.replace(/\s\s+/g, ' ');
    var words = str1.split(" ");
    console.log(words);
    var length = words.length;
    
    for(var i=0; i<length; i++){
        var word = words[i];
        var markup = "<tr><td>"+word+"</td><td><select><option>Noun</option><option>Pronoun</option><option>Verb</option><option>Adjective</option><option>Adverb</option><option>Determiner</option><option>Preposition</option><option>Conjunction</option><option>Interjection</option></select></td><td></td><td></td></tr>"
        $("table tbody").append(markup);
    }
};

function clearDisplay(){

    document.getElementById("sentence").classList.add("hide");
    document.getElementById("select").selected = true;
    $("tbody tr").remove();
    document.form.classList.add("hide");
    
};