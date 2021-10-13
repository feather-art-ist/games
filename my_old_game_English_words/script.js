let allWords = [];

newWord("a job", "работа");
newWord("a neighbour", "сосед");
newWord("a mushroom", "гриб");
newWord("dirty", "грязный");
newWord("to bake", "печь");
newWord("to throw (threw, thrown)", "бросать");
newWord("a throw", "бросок");
newWord("nature", "природа");
newWord("natural", "естественный");
newWord("a reason", "причина");
newWord("a monkey", "обезьяна");
newWord("to be afraid", "быть напуганным");
newWord("deep", "глубокий");
newWord("to add", "добавлять");
newWord("an addition", "приложение");
newWord("a cathedral", "собор");
newWord("to arrive", "прибывать");
newWord("an arrival", "прибытие");
newWord("during", "во время");
newWord("to describe", "описывать");
newWord("a description", "описание");
newWord("a grape", "виноград");
newWord("grapes", "виноград (мн.ч.)");
newWord("neighbourhood", "соседство");
newWord("a kind", "тип");
newWord("to miss", "пропустить");
newWord("to include", "включать");
newWord("including", "включительно");
newWord("ever", "когда-нибудь");
newWord("everyday", "ежедневно");
newWord("a stepney", "запаска");
newWord("an engineer", "инженер");
newWord("a laptop", "ноутбук");
newWord("if", "если");
newWord("to build (built, built)", "строить");
newWord("a building", "здание");
newWord("an entrance", "вход");
newWord("an exit", "выход");
newWord("quick", "быстрый");
newWord("pink", "розовый");
newWord("thick", "толстый, густой");
newWord("to hurry", "спешить");
newWord("a hurry", "спешка");
newWord("a century", "век");
newWord("a song", "песня");
newWord("over", "над (чем-то)");
newWord("a car", "вагон");
newWord("to cost (cost, cost)", "стоить");
newWord("a cost", "стоимость");
newWord("a worker", "роботник");
newWord("a screen", "экран");
newWord("a windscreen", "лобовое стекло");
newWord("maybe", "возможно");
newWord("may", "мочь");
newWord("quiet", "покой");
newWord("be quiet", "спокойный");
newWord("along", "вдоль");
newWord("a trip", "путешествие");
newWord("hockey", "хокей");
newWord("a hockey stick", "хокейная клюшка");
newWord("hard", "твердый");
newWord("straight", "прямой");
newWord("the middle", "середина");
newWord("a calendar", "календарь");
newWord("a piano", "пианино");
newWord("a pianist", "пианист");
newWord("next to, beside", "рядом");
newWord("to turn", "повернуть");
newWord("own", "собственный");
newWord("a colleague", "коллега");
newWord("without", "без");
newWord("dear", "уважаемый");
newWord("electricity", "электричество");
newWord("an electrician", "электрик");
newWord("electric", "электрический");
newWord("a corner", "угол");
newWord("a tour", "тур");
newWord("chess", "шахматы");
newWord("a rubber", "ластик");
newWord("over", "более");
newWord("soon", "скоро");
newWord("to believe", "верить");
newWord("a story", "рассказ");
newWord("a storyteller", "рассказчик");
newWord("to fall (fell, fallen)", "падать");
newWord("a motorcycle", "мотоцикл");
newWord("to save", "экономить");
newWord("savings", "сбережения");
newWord("busy", "занятый");
newWord("a magazine", "журнал");
newWord("loud", "громкий");
newWord("a duck", "утка");
newWord("a way", "путь, дорога");
newWord("a journey", "путешествие");
newWord("strong", "сильный");
newWord("a pilot", "пилот");
newWord("a member", "член");
newWord("membership", "членство");
newWord("a last name, a surname", "фамилия");
newWord("a website", "сайт");
newWord("once", "раз");
newWord("twice", "дважды");
newWord("a goose", "гусь");
newWord("geese", "гуси");
newWord("busy", "подвижная (об улице)");
newWord("to exercise", "тренироваться");
newWord("an exercise", "упражнение");
newWord("silver", "серебро, серебрянный");
newWord("a tree", "дерево");


let indexInAllWords;
let oldIndex = -1;
let trueAnswerPosition;
newGame(0);

function newWord(enWord, ruWord){
    allWords.push({wordInEnglish: enWord, wordInRussian: ruWord})
};

function skip(s, g){
    if(s == 1){
        document.getElementById('sound').play();
    };
    if(g == 1){
        newGame();
    };
};

function newGame(s = 0){
    if(s == 1){
        document.getElementById('sound').play();
    };
    
    clearBgColAnswer();
    document.getElementById("newGame").setAttribute("onclick", "newGame(1, 1)");
    addAllClickForAnswers();

    indexInAllWords = getRandomIndexForMassive(allWords);
    document.getElementById("englishWord").innerHTML = allWords[indexInAllWords].wordInEnglish;

    trueAnswerPosition = getRandomIndexFromZeroTo(3);
    switch (trueAnswerPosition){
        case 0:
            document.getElementById("answer1").innerHTML = allWords[indexInAllWords].wordInRussian;
            document.getElementById("answer2").innerHTML = allWords[getRandomIndexFromZeroTo(allWords.length)].wordInRussian;
            document.getElementById("answer3").innerHTML = allWords[getRandomIndexFromZeroTo(allWords.length)].wordInRussian;
            break;
        case 1:
            document.getElementById("answer2").innerHTML = allWords[indexInAllWords].wordInRussian;
            document.getElementById("answer1").innerHTML = allWords[getRandomIndexFromZeroTo(allWords.length)].wordInRussian;
            document.getElementById("answer3").innerHTML = allWords[getRandomIndexFromZeroTo(allWords.length)].wordInRussian;
            break;
        case 2:
            document.getElementById("answer3").innerHTML = allWords[indexInAllWords].wordInRussian;
            document.getElementById("answer2").innerHTML = allWords[getRandomIndexFromZeroTo(allWords.length)].wordInRussian;
            document.getElementById("answer1").innerHTML = allWords[getRandomIndexFromZeroTo(allWords.length)].wordInRussian;
            break;
    }
};

function checkAnswer(n){
    document.getElementById('sound').play();

    if(n > -1){
        document.getElementById("newGame").setAttribute("onclick", "skip(1, 0)");

        if(n == trueAnswerPosition){
            document.getElementById(`answer${n + 1}`).style.backgroundColor = " rgba(35, 209, 93, 0.1)";
            setTimeout(newGame, 1100);
            clearAllClickForAnswer();
        }else{
            document.getElementById(`answer${n + 1}`).style.backgroundColor = " rgba(206, 0, 0, 0.2)";
            document.getElementById(`answer${trueAnswerPosition + 1}`).style.backgroundColor = " rgba(35, 209, 93, 0.1)";
            setTimeout(newGame, 2200);
            clearAllClickForAnswer();
        };
    };

};

function clearAllClickForAnswer(){
    for(let i = 0; i <  3; i++){
        document.getElementById(`answer${i + 1}`).setAttribute("onclick", "checkAnswer(-1)");
    };
};

function addAllClickForAnswers(){
    for(let i = 0; i < 3; i++){
        document.getElementById(`answer${i + 1}`).setAttribute("onclick", `checkAnswer(${i})`);
    };
};

function clearBgColAnswer(){
    for(let i = 1; i < 4; i++){
        document.getElementById(`answer${i}`).style.removeProperty("background-color");
    };
};

function getRandomIndexForMassive(m){
    let index;

    while(true){
        index = Math.floor(Math.random() * m.length);

        if(index != oldIndex) break;
    };
    
    oldIndex = index;
    return index;
};

function getRandomIndexFromZeroTo(n, x = 0){
    if(n != allWords.length){
        return Math.floor(Math.random() * n);
    }

    while(true){
        x = Math.floor(Math.random() * n);
        if(x == indexInAllWords){
            continue;
        }
        break;
    }

    return x;
};

console.log(window.innerHeight);
console.log(window.innerWidth);
console.log(document.querySelector('#englishWord').innerText)