(function(){
//armazena os objetos src e id de 1 a 8
var images = [];

var matchSign = document.querySelector("#match");

var modal = document.querySelector("#gameOver");

//array que armazena as cartas viradas
var flippedCards = [];

//variável contadora de acertos. ao chegar em 8 o jogo termina
var matches = 0;

//estrutura de atribiução das imagens aos card
for(var i = 0; i < 16; i++){
  //cria um objeto img com um src e um id
  var img = {
    src: "img/" + i + ".jpg",
    id: i%8
  };

  //inserer o objeto criado no array
  images.push(img);
}

//inicia o jogo
startGame();

function startGame(){
  //zera as cartas viradas
  flippedCards = [];

  //zera o contador de acertos
  matches = 0;

  //embaralhamento
  images = randomSort(images);

  //classes back e front
  var backFaces = document.getElementsByClassName("back");
  var frontFaces = document.getElementsByClassName("front");

  //posicionamento das cartas e adição do click
  for(var i = 0; i < 16; i++){
    //limpa as cartas marcadas
    backFaces[i].classList.remove("match","flipped");
    frontFaces[i].classList.remove("match","flipped");

    //posiciona as cartas no tabuleiro
    var card = document.querySelector("#card" + i);
    card.style.left = (i % 8) === 0 ? 5 + "px" : 5 + ((i % 8) * 165) + "px";
    card.style.top = i/8 >= 1 ? 250 + "px" : 5 + "px";

    //adiciona às cartas com click chamando a função que vira as cartas
    card.addEventListener("click",flipCard,false);

    //adiciona as imagens às cartas
    frontFaces[i].style.background = "url('" + images[i].src + "')";
    frontFaces[i].setAttribute("id",images[i].id);
  }

  modal.style.zIndex = "-2";

  modal.removeEventListener('click',function(){
    startGame();
  },false);
}//fim da inicialização do jogo


//função que vira as cartas
function flipCard(){
  //verifica se o número de cartas viradas é menor que 2
  if(flippedCards.length < 2){
    //pega as faces da carta clicada
    var faces = this.getElementsByClassName("face");

    //confere se a carta já está virada, impedindo que a mesma carta seja virada duas vezes
    if(faces[0].classList[2]){
      return;
    }

    //adiciona a classe fliped às faces da carta para que sejam viradas
    faces[0].classList.toggle("flipped");
    faces[1].classList.toggle("flipped");

    //adiciona a carta clicada ao array de cartas viradas
    flippedCards.push(this);

    //verifica se o número de cartas no array de cartas viradas é igual a 2
    if(flippedCards.length === 2){
      //compara o id das cartas viradas para ver se houve um acerto
      if(flippedCards[0].childNodes[3].id === flippedCards[1].childNodes[3].id){
        //em caso de acerto adiciona a classe match a todas as faces das duas cartas presentes no array de cartas viradas
        flippedCards[0].childNodes[1].classList.toggle("match");
        flippedCards[0].childNodes[3].classList.toggle("match");
        flippedCards[1].childNodes[1].classList.toggle("match");
        flippedCards[1].childNodes[3].classList.toggle("match");

        //função que exibe a mensagem MATCH
        matchCardsSign();

        //limpa
        flippedCards = [];

        //soma um ao contador de acertos
        matches++;

        //contador de acertos
        if(matches >= 8){
          //função que finaliza o jogo
          gameOver();
        }
      }
    }
  } else {
    //caso haver duas cartas no array de cartas viradas o terceiro click remove a classe flipped das cartas no array de cartas viradas
    flippedCards[0].childNodes[1].classList.toggle("flipped");
    flippedCards[0].childNodes[3].classList.toggle("flipped");
    flippedCards[1].childNodes[1].classList.toggle("flipped");
    flippedCards[1].childNodes[3].classList.toggle("flipped");

    //limpa o array de cartas viradas
    flippedCards = [];
  }
}


//função que embaralha as cartas
function randomSort(array){
  //cria um array vazio
  var newArray = [];

  //executa a estrutura enquanto o novo array não atingir o mesmo número de elementos do array passado por parâmetro
  while(newArray.length !== array.length){
    //cria uma variável 'i' recebe um n° aleatório entre 0 e o n° de elementos no array -1
    var i = Math.floor(Math.random()*array.length);

    //verifica se o elemento indicado pelo 'i' já existe no array novo
    if(newArray.indexOf(array[i]) < 0){
      //se não ele é inserido
      newArray.push(array[i]);
    }
  }

  //retorna o array novo
  return newArray;
}

//função do sinal de MATCH
function matchCardsSign(){
  //Mensagem MATCH em primeiro plano
  matchSign.style.zIndex = "1";

  //mensagem transparente
  matchSign.style.opacity = "0";

  //mensagem para cima
  matchSign.style.top = "150px";

  setTimeout(function(){
    //tira a mensagem de MATCH
    matchSign.style.zIndex = "-1";

    //tira a transparência da mansagem
    matchSign.style.opacity = "1";

    //move a mensagem para o centro da tela
    matchSign.style.top = "250px";
  },1500);
}

//função de fim do jogo
function gameOver(){
  //joga a mensagem de fim do jogo a frente
  modal.style.zIndex = "99";

  //adiciona click à imagem de game over
  modal.addEventListener('click',function(){
    //reinicia o jogo
    startGame();
  },false);
}
}());
