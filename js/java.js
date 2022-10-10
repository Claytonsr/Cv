
function abrirContatos(){
  document.getElementById("button-home").innerHTML="<button style='margin-top: 5px; margin-left: 5px;' onclick='abrirCvWeb()'> <img src='img/home.png' width='100%'></button>";

  document.getElementById("pastaPrincipal").innerHTML="<div class='row'>"+
  "<div class='col-4'>"+
  " Nome"+
  "</div>"+
  "<div class='col-4'>"+
  "| Data de Modificação"+
  "</div>"+
  "<div class='col-4'>"+
  "| Tipo"+
  "</div>"+
  "</div>"+
  //GITHUB//
  "<a href='https://github.com/srclayton' target='_blank'> <button style='width:98%; margin-top: 5px; margin-left: 5px '>"+
  "<div class='row' style='text-align:left'>"+
  "<div class='col-4'>"+
  "<img src='img/github.png' width='25px'> GitHub"+
  "</div>"+
  "<div class='col-4'>"+
  "25/10/2020 14:09pm"+
  "</div>"+
  "<div class='col-4'>"+
  "  HTML Document"+
  "</div>"+
  "</div>"+
  "</button></a>"+
  //GITHUB//
  //linkedin//
  "<a href='https://www.linkedin.com/in/srclayton/' target='_blank' ><button style='width:98%; margin-top: 5px; margin-left: 5px '>"+
  "<div class='row' style='text-align:left'>"+
  "<div class='col-4'>"+
  "<img src='img/linkedin.png' width='25px'> Linkedin"+
  "</div>"+
  "<div class='col-4'>"+
  " 25/10/2020 14:12pm"+
  "</div>"+
  "<div class='col-4'>"+
  "  HTML Document"+
  "</div>"+
  "</div>"+
  "</button></a>"+
  //linkedin//
  //EMAIL//
  "<a href='mailto:claytonsilvar@hotmail.com'><button style='width:98%; margin-top: 5px; margin-left: 5px '>"+
  "<div class='row' style='text-align:left'>"+
  "<div class='col-4'>"+
  "<img src='img/enviar.png' width='25px'> Email"+
  "</div>"+
  "<div class='col-4'>"+
  " 27/04/2020 17:43pm"+
  "</div>"+
  "<div class='col-4'>"+
  "  Email"+
  "</div>"+
  "</div>"+
  "</button></a>"+
  //EMAIL//
  //WHATSAPP//
  "<a href='https://api.whatsapp.com/send?phone=5541984722329' target='_blank'><button style='width:98%; margin-top: 5px; margin-left: 5px '>"+
  "<div class='row' style='text-align:left'>"+
  "<div class='col-4'>"+
  "<img src='img/whatsapp.png' width='25px'> Whatsapp"+
  "</div>"+
  "<div class='col-4'>"+
  " 25/10/2020 17:43pm"+
  "</div>"+
  "<div class='col-4'>"+
  "  HTML Document"+
  "</div>"+
  "</div>"+
  "</button></a>";
  //WHATSAPP//

  document.getElementById("janela-pesquisa").innerHTML="<img src='img/mini-pasta.png' width='22px'> &gt; <button data-dismiss='modal' aria-label='Close'> Desktop </button> &gt;  <button onclick='abrirContatos()'>Contatos</button>";

  document.getElementById("barra-lateral-pasta").innerHTML="<br><button style='width: 100%; margin-left: 7px; text-align: left;' data-dismiss='modal' aria-label='Close'> <img src='img/mini-pasta.png' width='22px'>Desktop</button>"+
  "<br><button style='width: 100%; margin-left: 7px; text-align: left;' onclick='abrirContatos()'>    <img src='img/mini-pasta.png' width='22px'>Contatos</button>";
}
function desejaSair(){
    document.getElementById("conteudo-erro").innerHTML= "<div class='col-12'><br>"+
                                                            "<center><p> <strong style='color: grey;'> Confirmação de saida </strong> </p>  <hr>"+
                                                                "Tem certeza que deseja sair desta <br> pagina? </center>"+
                                                                "<div class='row'>"+
                                                                    "<div class='col-6'> <br>"+
                                                                        "<center>  <a href='https://www.google.com.br/'><button type='button' class='btn btn-danger' > Sim  </button> </a> </center>"+
                                                                    "</div>"+
                                                                    "<div class='col-6'> <br>"+
                                                                    "<center> <button type='button' class='btn btn-secondary' aria-label='Close' data-dismiss='modal'>Cancelar</button> </center>"+
                                                                    "</div>"+
                                                                "</div>"+
                                                            "<br>"+
                                                         "</div>";
}
function erroReprodizor(){
    document.getElementById("conteudo-erro").innerHTML="<div class='col-12'><br>"+
                                                            "<center><p> <strong style='color: grey;'> Não é possível reproduzir </strong> </p>  <hr>"+
                                                                "Este item foi codificado num formato que não é suportado. <hr></center>"+
                                                                "0xc0000334dx"+
                                                                "<br><button type='button' class='btn-link' data-toggle='collapse' data-target='#collapseExample' aria-expanded='false' aria-controls='collapseExample'>Detalhes</button>"+
                                                                "<div class='collapse' id='collapseExample'>"+
                                                                    "<div class='card card-body'>"+
                                                                        "Cá entre nós, as vezes da preguiça de fazer certos detalhes haha."+
                                                                    "</div>"+
                                                                "</div>"+
                                                                "<br><br><center><button type='button' class='btn btn-danger' aria-label='Close' data-dismiss='modal'>Fechar</button></center>"+
                                                            "<br>"+
                                                        "</div>";
}

function getTempoTrabalho(){
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = today.getFullYear();
  today = mm + '/' + dd + '/' + yyyy;
  today = new Date(today);
  let dateIni = new Date('5/5/2021');
  let dateAtu = new Date(today.toString());
  let timeDiff = Math.abs(dateIni.getTime() - dateAtu.getTime());
  let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
  mm = parseInt(diffDays/30);
  dd = diffDays%30;
  div = document.getElementById("tempo-de-servico");
  if(mm > 0 && mm <= 12){
    div.innerHTML= mm + ' meses e ' + dd + ' dias.';
  }else if(mm > 12){
    yyyy = parseInt(mm/12);
    mm = parseInt(mm%12);
    if(yyyy > 1 && mm > 1)
      div.innerHTML= yyyy + ' anos e ' + mm + ' meses.';
    else if(yyyy > 1 && mm == 1)
      div.innerHTML= yyyy + ' anos e ' + mm + ' mes.';
    else if(yyyy == 1 && mm == 1)
      div.innerHTML= yyyy + ' ano e ' + mm + ' mes.';
    else
      div.innerHTML= yyyy + ' ano e ' + mm + ' meses.';
  }else {
    div.innerHTML= dd + ' dias.';
  }
}

//JS MOBILE
function cProgramas() {
  document.getElementById('pasta-projetos').innerHTML="<div class='modal-body'>"+
                                                            "<div class='projetos'>"+
                                                              "<div class='row' style='padding-top: 65px;'>"+
                                                                "<div class='col-4'>"+
                                                                  "<a href='https://github.com/srclayton/Validador-de-cartao-de-credito' target='_blank'><button><img class='img' src='img/github.png' width='70px'></button></a>"+
                                                                  "card.c"+
                                                                "</div>"+
                                                                "<div class='col-4'>"+
                                                                  "<a href='https://github.com/srclayton/C-Programming/tree/master/code%20string' target='_blank'><button><img class='img' src='img/github.png' width='70px'></button></a>"+
                                                                  "codeString.c"+
                                                                "</div>"+
                                                              "</div>"+
                                                            "</div>"+
                                                          "</div>";
}
function pSites() {
  document.getElementById('pasta-projetos').innerHTML= "<div class='modal-body'>"+
                                                "<div class='projetos'>"+
                                                  "<div class='row' style='padding-top: 65px;'>"+
                                                    "<div class='col-4'>"+
                                                      "<a href='https://srclayton.github.io/Loja-Online/' target='_blank'><button><img class='img' src='loja/img/icone.jpg' width='70px'></button></a>"+
                                                      "Market"+
                                                    "</div>"+
                                                    "<div class='col-4'>"+
                                                      "<a href='G1.com/index.html' target='_blank'><button onclick='Alerta()'><img class='img' src='G1.com/media/G1.png' width='70px'></button></a>"+
                                                      "G1.com"+
                                                    "</div>"+
                                                    "<div class='col-4'>"+
                                                      "<a href='americanas/index.html' target='_blank'><button onclick='Alerta()'><img class='img' src='americanas/media/page_1.jpg' width='70px'></button></a>"+
                                                      "Americanas"+
                                                    "</div>"+
                                                    "<div class='col-4' style='padding-top: 15px;'>"+
                                                      "<a href='https://srclayton.github.io/Kimi-Store/' target='_blank'><button><img class='img' src='Kimi-Mate/img/kimi3.png' width='70px'></button></a>"+
                                                      "Kimi Store"+
                                                    "</div>"+
                                                  "</div>"+
                                                "</div>"+
                                              "</div>";
}
function pContatos() {
  document.getElementById('pasta-projetos').innerHTML="<div class='modal-body'>"+
                                                        "<div class='projetos'>"+
                                                          "<div class='row' style='padding-top: 65px;'>"+
                                                            "<div class='col-4'>"+
                                                              "<a href='https://www.linkedin.com/in/srclayton/' target='_blank'><button><img class='img' src='img/in.png' width='70px'></button></a>"+
                                                              "Linkedin"+
                                                            "</div>"+
                                                            "<div class='col-4'>"+
                                                              "<a href='mailto:claytonsilvar@hotmail.com' target='_blank'><button><img class='img' src='img/enviar.png' width='70px'></button></a>"+
                                                              "Email"+
                                                            "</div>"+
                                                            "<div class='col-4'>"+
                                                              "<a href='https://github.com/srclayton' target='_blank'><button><img class='img' src='img/3842828341530103314-128.png' width='70px'></button></a>"+
                                                              "GitHub"+
                                                            "</div>"+
                                                            "<div class='col-4' style='padding-top: 15px;'>"+
                                                              "<a href='https://api.whatsapp.com/send?phone=5541984722329' target='_blank'><button><img class='img' src='img/whatsapp.png' width='70px'></button></a>"+
                                                              "Whatsapp"+
                                                            "</div>"+
                                                          "</div>"+
                                                        "</div>"+
                                                      "</div>";

}
function myFunction() {
    alert("Função de Imprimir em desenvolvimento, caso esta ferramente não funcione corretamente, experimente baixar o arquivo!");
  }
function Alerta(){
    alert("Atenção, algum dos sites a seguir podem não funcionar corretamente no celular, os mesmos não foram orientados a serem totalmente responsivos.");
}
function startTime() {
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    m=checkTime(m);
	s=checkTime(s);
	document.getElementById('relogio').innerHTML=h+":"+m+":"+s;
    document.getElementById('horas').innerHTML=h+":"+m+":"+s;
    document.getElementById('horas2').innerHTML=h+":"+m+":"+s;
    document.getElementById('hora').innerHTML=h+":"+m;
    t=setTimeout('startTime()',500);
}
function checkTime(i){
if (i<10) {
    i="0" + i;
}
    return i;
}
function dataHora(){
    var hoje = new Date()
    var dia = hoje.getDate()
    var mes = hoje.getMonth()
    var ano = hoje.getFullYear()
    var dia_semana = hoje.getDay()
    var mes_str = ""
    if(dia_semana == 0 ){
        dia_semana = "Dom";
    }
    else if(dia_semana == 1 ){
        dia_semana = "Seg";
    }
    else if(dia_semana == 2 ){
        dia_semana = "Ter";
    }
    else if(dia_semana == 3 ){
        dia_semana = "Qua";
    }
    else if(dia_semana == 4 ){
        dia_semana = "Qui";
    }
    else if(dia_semana == 5 ){
        dia_semana = "Sex";
    }
    else{
        dia_semana = "Sab";
    }

    if(mes == 0){
        mes = "Janeiro"
    } else if(mes == 1){
        mes = "Fevereiro"
    } else if(mes == 2){
        mes = "Março"
    } else if(mes == 3){
        mes = "Abril"
    } else if(mes == 4){
        mes = "Maio"
    } else if(mes == 5){
        mes = "Junho"
    } else if(mes == 6){
        mes = "Julho"
    } else if(mes == 7){
        mes = "Agosto"
    } else if(mes == 8){
        mes = "Setembro"
    } else if(mes == 9){
        mes = "Outubro"
    } else if(mes == 10){
        mes = "Novembro"
    } else{
        mes = "Dezembro"
    }
    document.getElementById('data-f').innerHTML= dia_semana + ", " + dia + " de " + mes;
}

/* Get the documentElement (<html>) to display the page in fullscreen */
var elem = document.documentElement;

/* View in fullscreen */
var on
function openFullscreen() {
    on = 1;
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem.msRequestFullscreen();
  }
}

function ButtonFull() {
    if (on==0)
    {
        on=1;
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
          } else if (elem.mozRequestFullScreen) { /* Firefox */
            elem.mozRequestFullScreen();
          } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
            elem.webkitRequestFullscreen();
          } else if (elem.msRequestFullscreen) { /* IE/Edge */
            elem.msRequestFullscreen();
          }
    }
    else{
        on=0;
        if (document.exitFullscreen) {
            document.exitFullscreen();
          } else if (document.mozCancelFullScreen) { /* Firefox */
            document.mozCancelFullScreen();
          } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
            document.webkitExitFullscreen();
          } else if (document.msExitFullscreen) { /* IE/Edge */
            document.msExitFullscreen();
          }
    }
  }

  window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");
    loader.className += " hidden"; // class "loader hidden"
});
