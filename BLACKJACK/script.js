//Montando tela com alta resolução
var screens = document.getElementById("screens");
screens.width = 1220 * 2;
screens.height = 400 * 2;
screens.style.width = 1220 + "px";
screens.style.height = 400 + "px";
var ctx = screens.getContext("2d");

//classe carta
class card {
    
    static x = 50;
    static y = 50;

    constructor(value, suit) {
        this.img = new Image();
        this.value = value;
        this.suit = suit;
    }
}


var cards = [];
var playerCards = [];
var Croupiercards = [];
var cardIndex = 0;
var suits = ["S", "H", "D", "C"];
// Geramos as cartas com atributos valor e suit.
for (i = 0; i < 4; i++) {
    for (j = 1; j <= 13; j++) {
        cards.push(new card(j, suits[i])); // mudei C para c
    }
}

// Embaralhamos as cartas
for (i = 0; i < 100; i++) {
    cards.splice(Math.random() * 52, 0, cards[0]);
    cards.shift();
}

function drawCard(CJ) {
    // Precisamos primeiro carregar a carta e depois definir o src
	// Se não, as cartas não carregam na página
    CJ.img.onload = () => {
        ctx.drawImage(CJ.img, card.x, card.y, 239, 335);

        card.x += 300;
    };
    // Para carregar a imagem correta, concatenamos o número e o suit, que correspondem ao nome do arquivo
    CJ.img.src = "images/cards/" + CJ.value.toString() + CJ.suit + ".svg"; // É CJ em vez de C
}



function requestCard() {    
    if (cardIndex < 9) {
        let CJ = cards[cardIndex];
        playerCards.push(CJ);

        CJ.img.onload = () => {
            ctx.drawImage(CJ.img, card.x, card.y, 239, 335);
            card.x += 300;
        };

        CJ.img.src = "images/cards/" + CJ.value.toString() + CJ.suit + ".svg";
        cardIndex++;
    }
}


function stand() {
    console.log("Card:");
    document.getElementById("hit").disabled = true;
    document.getElementById("stand").disabled = true;
    document.getElementById("reset").style.visibility = "visible";
    let Playerpoints = 0;
    let Croupierpoints = 0;
    let info = document.getElementById("info");
     // Contamos e imprimimos os pontos do jogad
    for (i in playerCards) {
        Playerpoints += playerCards[i].value;
    }
     // Contamos e imprimimos os pontos do jogador
    while (Croupierpoints < 17) {
        Croupiercards.push(cards[cardIndex]);
        Croupierpoints += cards[cardIndex].value;
        cardIndex++;
    }
    // Game points are displayed in the info section
    info.innerHTML = "Player's score: " + Playerpoints + "<br>Dealer's score: " + Croupierpoints;
    // Desenhamos as cartas do croupiê
    card.x = 50;
    card.y = 400;
    console.log("Tamanho", Croupiercards.length) ;
    for (i in Croupiercards) {
        console.log(i) ;
        drawCard(Croupiercards[i]);
    }
    // Verificamos o vencedor
    if (Playerpoints == 21) {
        info.innerHTML += "<br><b>Blackjack!!! You win!</b>";
    } else if (Playerpoints > 21) {
        info.innerHTML += "<br><b>You lose... You've gone over the points</b>";
    } else if (Croupierpoints > 21) {
        info.innerHTML += "<br><b>You win!!! The dealer has gone over the points</b>";
    } else if (Croupierpoints >= Playerpoints) {
        info.innerHTML += "<br><b>The dealer wins...</b>";
    } else {
        info.innerHTML += "<br><b>You win!!!</b>";
    }
}

// Recarrega a página quando o botão é pressionado
function playAgain() {
    location.reload(true);
}




