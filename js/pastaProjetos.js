// PASTA NO DESKTOP COM NOME DE "PROJETOS" CONTÉM PASTAS COM TODOS OS PROJETOS JÁ FEITO POR MIM.
function PastaProjetos(){
    document.getElementById("button-home").innerHTML="<button style='margin-top: 5px; margin-left: 5px;' onclick='PastaProjetos()'> <img src='img/home.png' width='100%'></button>";
    document.getElementById("pastaPrincipal").innerHTML="<div clas='row'>"+
    "<div class='col-12'>"+
    "<br><button onclick='abrirPastaUm()'><img src='img/img.png' width='70px'><br> Paginas <br> WEB </button> &nbsp;"+
    "<button onclick='abrirPastaDois()'><img src='img/img.png' width='70px'><br> Programação <br> em C</button>"+ 
    "<button onclick='abrirPastaTres()'><img src='img/img.png' width='70px'><br> Programação <br> em Java</button>"+
    //"<button onclick='abrirPastaQuatro()'><img src='img/img.png' width='70px'><br> Projeto <br> Quatro</button>"+
    //"<button onclick='abrirPastaCinco()'><img src='img/img.png' width='70px'><br> Projeto <br> Cinco</button>"+
    //"<button onclick='abrirPastaSeis()'><img src='img/img.png' width='70px'><br> Projeto <br> Seis</button>"+
    "</div>"+
    "</div>" ;
    document.getElementById("janela-pesquisa").innerHTML="<img src='img/mini-pasta.png' width='22px'> &gt; <button data-dismiss='modal' aria-label='Close'> Desktop </button> &gt; <button onclick='PastaProjetos()'>Projetos</button>";
    document.getElementById("barra-lateral-pasta").innerHTML="<br><button style='width: 100%; margin-left: 7px; text-align: left;' data-dismiss='modal' aria-label='Close'> <img src='img/mini-pasta.png' width='22px'>Desktop</button>"+
                                                             "<br><button style='width: 100%; margin-left: 7px; text-align: left;' onclick='PastaProjetos'>    <img src='img/mini-pasta.png' width='22px'>Projetos</button>";//+
                                                            //"<button style='width: 100%; margin-left: 7px; text-align: left;' onclick='abrirPastaDois()'> <img src='img/mini-pasta.png' width='22px'>pasta dois</button>"+
                                                            //"<button style='width: 100%; margin-left: 7px; text-align: left;' onclick='abrirPastaTres()'><img src='img/mini-pasta.png' width='22px'>pasta tres</button>"+
                                                            //"<button style='width: 100%; margin-left: 7px; text-align: left;' onclick='abrirPastaQuatro()'><img src='img/mini-pasta.png' width='22px'>pasta quatro</button>"+
                                                            //"<button style='width: 100%; margin-left: 7px; text-align: left;' onclick='abrirPastaCinco()'><img src='img/mini-pasta.png' width='22px'>pasta cinco</button>"+
                                                            //"<button style='width: 100%; margin-left: 7px; text-align: left;' onclick='abrirPastaSeis()'><img src='img/mini-pasta.png' width='22px'>pasta seis</button>"
  }
// CONTEUDOS DA PASTA "PROJETOS".
// PASTA COM NOME DE "PAGINAS WEB".
function abrirPastaUm(){
    document.getElementById("pastaPrincipal").innerHTML=" <div class='container'>"+
                                                            "<div class='row'>"+
                                                                "<div class='col-2'>"+
                                                                    "<br> <a href='https://srclayton.github.io/Loja-Online/' target='_blank'><button><img src='loja/img/icone.jpg' width='80px'height='80px'><p>CTN Market</p></button></a>" +
                                                                "</div>"+
                                                                "<div class='col-2'>"+
                                                                    "<br> <a href='americanas/index.html' target='_blank'><button><img src='americanas/media/page_1.jpg' width='80px'height='80px'><p>Americanas</p></button></a>"+
                                                                "</div>"+
                                                                "<div class='col-2'>"+
                                                                    " <a href='G1.com/index.html' target='_blank'><br><button><img src='G1.com/media/G1.png' width='80px' height='80px'><br><p>G1.com<br></p></button></a>"+
                                                                "</div>"+
                                                                "<div class='col-2'>"+
                                                                    "<br> <a href='rainbow six/index.html' target='_blank'><button><img src='rainbow six/img/verso.jpg' width='80px' height='80px'><p>Jogo da memoria</p></button></a>" +
                                                                "</div>"+
                                                                "<div class='col-2'>"+
                                                                    "<br> <a href='https://srclayton.github.io/Kimi-Store/' target='_blank'><button><img src='Kimi-Mate/img/kimi3.png' width='80px' height='80px'><p>Kimi Store</p></button></a>" +
                                                                "</div>"+
                                                            "</div>"+
                                                        "</div>";
    document.getElementById("janela-pesquisa").innerHTML="<img src='img/mini-pasta.png' width='22px'> &gt; <button data-dismiss='modal' aria-label='Close'> Desktop </button> &gt; <button onclick='PastaProjetos()'>Projetos</button> &gt; <button onclick='abrirPastaUm()'>Paginas WEB</button>";
    document.getElementById("barra-lateral-pasta").innerHTML="<br><button style='width: 100%; margin-left: 7px; text-align: left;' data-dismiss='modal' aria-label='Close'> <img src='img/mini-pasta.png' width='22px'>Desktop</button>"+
                                                             "<br><button style='width: 100%; margin-left: 7px; text-align: left;' onclick='PastaProjetos()'>    <img src='img/mini-pasta.png' width='22px'>Projetos</button>"+
                                                             "<br><button style='width: 100%; margin-left: 7px; text-align: left;' onclick='abrirPastaUm()'>    <img src='img/mini-pasta.png' width='22px'>Paginas WEB</button>";
}
// PASTA COM NOME DE "PROGRAMAÇÃO EM C"
function abrirPastaDois(){
	  document.getElementById("pastaPrincipal").innerHTML="<div class='container'>"+
                                                            "<div class='row'>"+
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
                                                                //pasta code//
                                                                "<button onclick='abrirPastaCode()'style='width:98%; margin-top: 5px; margin-left: 5px '>"+
                                                                "<div class='row' style='text-align:left'>"+
                                                                    "<div class='col-4'>"+
                                                                        "<img src='img/mini-pasta.png' width='25px'> Code string"+
                                                                    "</div>"+
                                                                    "<div class='col-4'>"+
                                                                        " 02/12/2020 10:38pm"+
                                                                    "</div>"+
                                                                    "<div class='col-4'>"+
                                                                        "  Pasta de Arquivos"+
                                                                    "</div>"+
                                                                "</div>"+
                                                                "</button>"+
                                                                //pasta code//
                                                                //pasta decode//
                                                                "<button onclick='abrirPastaCredtCard()' style='width:98%; margin-top: 5px; margin-left: 5px '>"+
                                                                "<div class='row' style='text-align:left'>"+
                                                                    "<div class='col-4'>"+
                                                                        "<img src='img/mini-pasta.png' width='25px'> Credit card num..."+
                                                                    "</div>"+
                                                                    "<div class='col-4'>"+
                                                                        " 26/04/2020 18:48pm"+
                                                                    "</div>"+
                                                                    "<div class='col-4'>"+
                                                                        "  Pasta de Arquivos"+
                                                                    "</div>"+
                                                                "</div>"+
                                                                "</button>"+
                                                                //pasta decode//
                                                            "</div>"+
                                                        "</div>";
    document.getElementById("janela-pesquisa").innerHTML="<img src='img/mini-pasta.png' width='22px'> &gt; <button data-dismiss='modal' aria-label='Close'> Desktop </button> &gt; <button onclick='PastaProjetos()'>Projetos</button> &gt; <button onclick='abrirPastaDois()'>Programação em C</button>";
    document.getElementById("barra-lateral-pasta").innerHTML="<br><button style='width: 100%; margin-left: 7px; text-align: left;' data-dismiss='modal' aria-label='Close'> <img src='img/mini-pasta.png' width='22px'>Desktop</button>"+
                                                             "<br><button style='width: 100%; margin-left: 7px; text-align: left;' onclick='PastaProjetos()'>    <img src='img/mini-pasta.png' width='22px'>Projetos</button>"+
                                                             "<br><button style='width: 100%; margin-left: 7px; text-align: left;' onclick='abrirPastaDois()'>    <img src='img/mini-pasta.png' width='22px'>Programação em...</button>";
}
// PASTA COM NOME DE "PROGRAMAÇÃO EM Java"
function abrirPastaTres(){
	  document.getElementById("pastaPrincipal").innerHTML="<div class='container'>"+
                                                            "<div class='row'>"+
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
                                                                //pasta abreviar nomes//
                                                                "<button onclick='abrirPastaAbreviarNomes()'style='width:98%; margin-top: 5px; margin-left: 5px '>"+
                                                                "<div class='row' style='text-align:left'>"+
                                                                    "<div class='col-4'>"+
                                                                        "<img src='img/mini-pasta.png' width='25px'> Abreviar nomes"+
                                                                    "</div>"+
                                                                    "<div class='col-4'>"+
                                                                        " 02/12/2020 10:38pm"+
                                                                    "</div>"+
                                                                    "<div class='col-4'>"+
                                                                        "  Pasta de Arquivos"+
                                                                    "</div>"+
                                                                "</div>"+
                                                                "</button>"+
                                                                //pasta abreviar nomes//
                                                                //pasta decode//
                                                                "<button onclick='abrirPastaSistEstacionamento()' style='width:98%; margin-top: 5px; margin-left: 5px '>"+
                                                                "<div class='row' style='text-align:left'>"+
                                                                    "<div class='col-4'>"+
                                                                        "<img src='img/mini-pasta.png' width='25px'> Sistema de est..."+
                                                                    "</div>"+
                                                                    "<div class='col-4'>"+
                                                                        " 26/04/2020 18:48pm"+
                                                                    "</div>"+
                                                                    "<div class='col-4'>"+
                                                                        "  Pasta de Arquivos"+
                                                                    "</div>"+
                                                                "</div>"+
                                                                "</button>"+
                                                                //pasta decode//
                                                            "</div>"+
                                                        "</div>";
    document.getElementById("janela-pesquisa").innerHTML="<img src='img/mini-pasta.png' width='22px'> &gt; <button data-dismiss='modal' aria-label='Close'> Desktop </button> &gt; <button onclick='PastaProjetos()'>Projetos</button> &gt; <button onclick='abrirPastaTres()'>Programação em Java</button>";
    document.getElementById("barra-lateral-pasta").innerHTML="<br><button style='width: 100%; margin-left: 7px; text-align: left;' data-dismiss='modal' aria-label='Close'> <img src='img/mini-pasta.png' width='22px'>Desktop</button>"+
                                                             "<br><button style='width: 100%; margin-left: 7px; text-align: left;' onclick='PastaProjetos()'>    <img src='img/mini-pasta.png' width='22px'>Projetos</button>"+
                                                             "<br><button style='width: 100%; margin-left: 7px; text-align: left;' onclick='abrirPastaTres()'>    <img src='img/mini-pasta.png' width='22px'>Programação...</button>";
}