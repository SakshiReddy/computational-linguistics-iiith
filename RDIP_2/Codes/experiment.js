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

    document.getElementById("select").selected = true;

    if(value == "english"){
        langIndex = 0;
    }
    else if (value == "hindi"){
        langIndex = 1;
    }
    else {
        clearDisplay();
        return;
    }

    for(var i=0; i<5; i++){
        document.getElementById(i).innerHTML = sentences[langIndex][i];
    }

    document.getElementById("sentence").classList.remove("hide");

};

function clearDisplay(){

    document.getElementById("sentence").classList.add("hide");
    document.getElementById("select").selected = true;
}