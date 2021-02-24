// PASTA NO DESKTOP COM NOME DE "PROJETOS" CONTÉM PASTAS COM TODOS OS PROJETOS JÁ FEITO POR MIM.
function PastaProjetos(){
  document.getElementById("button-home").innerHTML="<button style='margin-top: 5px; margin-left: 5px;' onclick='PastaProjetos()'> <img src='img/home.png' width='100%'></button>";
  document.getElementById("pastaPrincipal").innerHTML="<div clas='row'>"+
  "<div class='col-12'>"+
  "<br><button onclick='abrirPastaUm()'><img src='img/img.png' width='70px'><br> Paginas <br> WEB </button> &nbsp;"+
  "<button onclick='abrirPastaDois()'><img src='img/img.png' width='70px'><br> Programação <br> em C</button>"+ 
  //"<button onclick='abrirPastaTres()'><img src='img/img.png' width='70px'><br> Projeto <br> Tres</button>"+
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
// PASTA NO DESKTOP COM NOME DE "PROJETOS" CONTÉM PASTAS COM TODOS OS PROJETOS JÁ FEITO POR MIM.

// CONTEUDOS DA PASTA "PROJETOS".
// PASTA COM NOME DE "PAGINAS WEB".
function abrirPastaUm(){
    document.getElementById("button-home").innerHTML="<button style='margin-top: 5px; margin-left: 5px;' onclick='PastaProjetos()'> <img src='img/home.png' width='100%'></button>";
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
// PASTA COM NOME DE "PAGINAS WEB".
// PASTA COM NOME DE "PROGRAMAÇÃO EM C"
function abrirPastaDois(){
    document.getElementById("button-home").innerHTML="<button style='margin-top: 5px; margin-left: 5px;' onclick='PastaProjetos()'> <img src='img/home.png' width='100%'></button>";
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
// PASTA COM NOME DE "PROGRAMAÇÃO EM C"
function abrirPastaTres(){
    document.getElementById("button-home").innerHTML="<button style='margin-top: 5px; margin-left: 5px;' onclick='PastaProjetos()'> <img src='img/home.png' width='100%'></button>"
	document.getElementById("pastaPrincipal").innerHTML=" <div class='container'> <div class='row'> <div class='col'> <h1> TEST </h1> </div><div class='col'> <h1> PASTA 3 </h1> </div><div class='col'> <h1> TEST </h1> </div> </div> </container> ";
    document.getElementById("janela-pesquisa").innerHTML="<img src='img/mini-pasta.png' width='22px'> &gt; <button data-dismiss='modal' aria-label='Close'> Desktop </button> &gt; <button onclick='PastaProjetos()'>Projetos</button> &gt; <button onclick='abrirPastaTres()'>Pasta Tres</button>";
}
function abrirPastaQuatro(){
    document.getElementById("button-home").innerHTML="<button style='margin-top: 5px; margin-left: 5px;' onclick='PastaProjetos()'> <img src='img/home.png' width='100%'></button>"
	document.getElementById("pastaPrincipal").innerHTML=" <div class='container'> <div class='row'> <div class='col'> <h1> TEST </h1> </div><div class='col'> <h1> PASTA 4 </h1> </div><div class='col'> <h1> TEST </h1> </div> </div> </container> ";
    document.getElementById("janela-pesquisa").innerHTML="<img src='img/mini-pasta.png' width='22px'> &gt; <button data-dismiss='modal' aria-label='Close'> Desktop </button> &gt; <button onclick='PastaProjetos()'>Projetos</button> &gt; <button onclick='abrirPastaQuatro()'>Pasta Quatro</button>";
}
function abrirPastaCinco(){
    document.getElementById("button-home").innerHTML="<button style='margin-top: 5px; margin-left: 5px;' onclick='PastaProjetos()'> <img src='img/home.png' width='100%'></button>"
	document.getElementById("pastaPrincipal").innerHTML=" <div class='container'> <div class='row'> <div class='col'> <h1> TEST </h1> </div><div class='col'> <h1> PASTA 5 </h1> </div><div class='col'> <h1> TEST </h1> </div> </div> </container> ";
    document.getElementById("janela-pesquisa").innerHTML="<img src='img/mini-pasta.png' width='22px'> &gt; <button data-dismiss='modal' aria-label='Close'> Desktop </button> &gt; <button onclick='PastaProjetos()'>Projetos</button> &gt; <button onclick='abrirPastaCinco()'>Pasta Cinco</button>";
}
function abrirPastaSeis(){
    document.getElementById("button-home").innerHTML="<button style='margin-top: 5px; margin-left: 5px;' onclick='PastaProjetos()'> <img src='img/home.png' width='100%'></button>"
	document.getElementById("pastaPrincipal").innerHTML=" <div class='container'> <div class='row'> <div class='col'> <h1> TEST </h1> </div><div class='col'> <h1> PASTA 6 </h1> </div><div class='col'> <h1> TEST </h1> </div> </div> </container> ";
    document.getElementById("janela-pesquisa").innerHTML="<img src='img/mini-pasta.png' width='22px'> &gt; <button data-dismiss='modal' aria-label='Close'> Desktop </button> &gt; <button onclick='PastaProjetos()'>Projetos</button> &gt; <button onclick='abrirPastaSeis()'>Pasta Seis</button>";
}
// CONTEUDOS DA PASTA "PROJETOS".

//PASTA CODE STRING
function abrirPastaCode(){
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
                                                                //code string .c //
                                                                "<button onclick='erroReprodizor()' data-toggle='modal' data-target='.bd-example-modal-sm' style='width:98%; margin-top: 5px; margin-left: 5px '>"+
                                                                "<div class='row' style='text-align:left'>"+
                                                                    "<div class='col-4'>"+
                                                                        "<img src='img/unknown.png' width='25px'> code_string.c"+
                                                                    "</div>"+
                                                                    "<div class='col-4'>"+
                                                                        " 02/12/2020 10:38pm"+
                                                                    "</div>"+
                                                                    "<div class='col-4'>"+
                                                                        "  Arquivo Fonte C"+
                                                                    "</div>"+
                                                                "</div>"+
                                                                "</button>"+
                                                                //code string .c//
                                                                //code string .c  github//
                                                                "<a href='https://github.com/srclayton/C-Programming/tree/master/code%20string' target='_blank'><button style='width:98%; margin-top: 5px; margin-left: 5px '>"+
                                                                "<div class='row' style='text-align:left'>"+
                                                                    "<div class='col-4'>"+
                                                                        "<img src='img/github.png' width='25px'> code_string.c"+
                                                                    "</div>"+
                                                                    "<div class='col-4'>"+
                                                                        " 02/12/2020 10:42pm"+
                                                                    "</div>"+
                                                                    "<div class='col-4'>"+
                                                                        "  HTML Document"+
                                                                    "</div>"+
                                                                "</div>"+
                                                                "</button></a>"+
                                                                //code string .c  github //
                                                            "</div>"+
                                                        "</div>";
    document.getElementById("barra-lateral-pasta").innerHTML="<br><button style='width: 100%; margin-left: 7px; text-align: left;' data-dismiss='modal' aria-label='Close'> <img src='img/mini-pasta.png' width='22px'>Desktop</button>"+
                                                            "<br><button style='width: 100%; margin-left: 7px; text-align: left;' onclick='PastaProjetos()'>    <img src='img/mini-pasta.png' width='22px'>Projetos</button>"+
                                                            "<br><button style='width: 100%; margin-left: 7px; text-align: left;' onclick='abrirPastaDois()'>    <img src='img/mini-pasta.png' width='22px'>Programação em...</button>"+
                                                            "<br><button style='width: 100%; margin-left: 7px; text-align: left;' onclick='abrirPastaCode()'>    <img src='img/mini-pasta.png' width='22px'>Code string</button>";
    document.getElementById("janela-pesquisa").innerHTML="<img src='img/mini-pasta.png' width='22px'> &gt; <button data-dismiss='modal' aria-label='Close'> Desktop </button> &gt; <button onclick='PastaProjetos()'>Projetos</button> &gt; <button onclick='abrirPastaDois()'>Programação em C</button> &gt; <button onclick='abrirPastaCode()'>Code string</button>";
}
//PASTA CODE STRING
// PASTA CREDIT CARD
function abrirPastaCredtCard(){
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
                                                                //credit card .c //
                                                                "<button onclick='erroReprodizor()' data-toggle='modal' data-target='.bd-example-modal-sm' style='width:98%; margin-top: 5px; margin-left: 5px '>"+
                                                                "<div class='row' style='text-align:left'>"+
                                                                    "<div class='col-4'>"+
                                                                        "<img src='img/unknown.png' width='25px'> card.c"+
                                                                    "</div>"+
                                                                    "<div class='col-4'>"+
                                                                        " 02/12/2020 10:38pm"+
                                                                    "</div>"+
                                                                    "<div class='col-4'>"+
                                                                        "  Arquivo Fonte C"+
                                                                    "</div>"+
                                                                "</div>"+
                                                                "</button>"+
                                                                //credit card .c//
                                                                //credit card .c  github//
                                                                "<a href='https://github.com/srclayton/Validador-de-cartao-de-credito' target='_blank'><button style='width:98%; margin-top: 5px; margin-left: 5px '>"+
                                                                "<div class='row' style='text-align:left'>"+
                                                                    "<div class='col-4'>"+
                                                                        "<img src='img/github.png' width='25px'> card.c"+
                                                                    "</div>"+
                                                                    "<div class='col-4'>"+
                                                                        " 02/12/2020 10:42pm"+
                                                                    "</div>"+
                                                                    "<div class='col-4'>"+
                                                                        "  HTML Document"+
                                                                    "</div>"+
                                                                "</div>"+
                                                                "</button></a>"+
                                                                //credit card .c  github //
                                                            "</div>"+
                                                        "</div>";
    document.getElementById("barra-lateral-pasta").innerHTML="<br><button style='width: 100%; margin-left: 7px; text-align: left;' data-dismiss='modal' aria-label='Close'> <img src='img/mini-pasta.png' width='22px'>Desktop</button>"+
                                                            "<br><button style='width: 100%; margin-left: 7px; text-align: left;' onclick='PastaProjetos()'>    <img src='img/mini-pasta.png' width='22px'>Projetos</button>"+
                                                            "<br><button style='width: 100%; margin-left: 7px; text-align: left;' onclick='abrirPastaDois()'>    <img src='img/mini-pasta.png' width='22px'>Programação em...</button>"+
                                                            "<br><button style='width: 100%; margin-left: 7px; text-align: left;' onclick='abrirPastaCredtCard()'>    <img src='img/mini-pasta.png' width='22px'>Credit card num...</button>";
    document.getElementById("janela-pesquisa").innerHTML="<img src='img/mini-pasta.png' width='22px'> &gt; <button data-dismiss='modal' aria-label='Close'> Desktop </button> &gt; <button onclick='PastaProjetos()'>Projetos</button> &gt; <button onclick='abrirPastaDois()'>Programação em C</button> &gt; <button onclick='abrirPastaCredtCard()'>Credit card number validator</button>";
}
// PASTA CREDIT CARD

// PASTA NO DESKTOP COM NOME "CV WEB" ESSA FUNÇÃO ABRE UM MODAL COM AS INFORMAÇÕES DA PASTA.
function abrirCvWeb(){
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
                                                        //pasta css//
                                                        "<button onclick='abrirPastaCss()'style='width:98%; margin-top: 5px; margin-left: 5px '>"+
                                                        "<div class='row' style='text-align:left'>"+
                                                            "<div class='col-4'>"+
                                                                "<img src='img/mini-pasta.png' width='25px'> css"+
                                                            "</div>"+
                                                            "<div class='col-4'>"+
                                                                " 26/04/2020 10:38pm"+
                                                            "</div>"+
                                                            "<div class='col-4'>"+
                                                                "  Pasta de Arquivos"+
                                                            "</div>"+
                                                        "</div>"+
                                                        "</button>"+
                                                        //pasta css//
                                                         //pasta js//
                                                         "<button onclick='abrirPastaJs()' style='width:98%; margin-top: 5px; margin-left: 5px '>"+
                                                         "<div class='row' style='text-align:left'>"+
                                                             "<div class='col-4'>"+
                                                                 "<img src='img/mini-pasta.png' width='25px'> js"+
                                                             "</div>"+
                                                             "<div class='col-4'>"+
                                                                 " 26/04/2020 18:48pm"+
                                                             "</div>"+
                                                             "<div class='col-4'>"+
                                                                 "  Pasta de Arquivos"+
                                                             "</div>"+
                                                         "</div>"+
                                                         "</button>"+
                                                         //pasta js//
                                                          //pasta img//
                                                        "<button onclick='abrirPastaImg()' style='width:98%; margin-top: 5px; margin-left: 5px '>"+
                                                        "<div class='row' style='text-align:left'>"+
                                                            "<div class='col-4'>"+
                                                                "<img src='img/mini-pasta.png' width='25px'> img"+
                                                            "</div>"+
                                                            "<div class='col-4'>"+
                                                                " 27/04/2020 17:43pm"+
                                                            "</div>"+
                                                            "<div class='col-4'>"+
                                                                "  Pasta de Arquivos"+
                                                            "</div>"+
                                                        "</div>"+
                                                        "</button>"+
                                                        //pasta img//
                                                         //pasta index//
                                                         "<button onclick='erroReprodizor()' data-toggle='modal' data-target='.bd-example-modal-sm' style='width:98%; margin-top: 5px; margin-left: 5px '>"+
                                                         "<div class='row' style='text-align:left'>"+
                                                             "<div class='col-4'>"+
                                                                 "<img src='img/navegador.png' width='25px'> index.html"+
                                                             "</div>"+
                                                             "<div class='col-4'>"+
                                                                 " 27/04/2020 17:43pm"+
                                                             "</div>"+
                                                             "<div class='col-4'>"+
                                                                 "  Pasta de Arquivos"+
                                                             "</div>"+
                                                         "</div>"+
                                                         "</button>";
                                                         //pasta index//

    document.getElementById("janela-pesquisa").innerHTML="<img src='img/mini-pasta.png' width='22px'> &gt; <button data-dismiss='modal' aria-label='Close'> Desktop </button> &gt;  <button onclick='abrirCvWeb()'>Cv Abril</button>";

    document.getElementById("barra-lateral-pasta").innerHTML="<br><button style='width: 100%; margin-left: 7px; text-align: left;' data-dismiss='modal' aria-label='Close'> <img src='img/mini-pasta.png' width='22px'>Desktop</button>"+
                                                             "<br><button style='width: 100%; margin-left: 7px; text-align: left;' onclick='abrirCvWeb()'>    <img src='img/mini-pasta.png' width='22px'>Cv Abril</button>";
}
function abrirPastaCss(){
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
                                                        //pasta css//
                                                        "<button onclick='erroReprodizor()' data-toggle='modal' data-target='.bd-example-modal-sm' style='width:98%; margin-top: 5px; margin-left: 5px '>"+
                                                        "<div class='row' style='text-align:left'>"+
                                                            "<div class='col-4'>"+
                                                                "<img src='img/css.png' style='margin-top:-5px' width='25px'> style.css"+
                                                            "</div>"+
                                                            "<div class='col-4'>"+
                                                                " 26/04/2020 10:38pm"+
                                                            "</div>"+
                                                            "<div class='col-4'>"+
                                                                "  Documento de fol..."+
                                                            "</div>"+
                                                        "</div>"+
                                                        "</button>";
                                                        //pasta css//

    document.getElementById("janela-pesquisa").innerHTML="<img src='img/mini-pasta.png' width='22px'> &gt; <button data-dismiss='modal' aria-label='Close'> Desktop </button> &gt; <button onclick='abrirCvWeb()'>Cv Abril</button> > <button onclick='abrirPastaCss()'>css</button>";

    document.getElementById("barra-lateral-pasta").innerHTML="<br><button style='width: 100%; margin-left: 7px; text-align: left;' data-dismiss='modal' aria-label='Close'> <img src='img/mini-pasta.png' width='22px'>Desktop</button>"+
                                                             "<br><button style='width: 100%; margin-left: 7px; text-align: left;' onclick='abrirCvWeb()'>    <img src='img/mini-pasta.png' width='22px'>Cv Abril</button>"+
                                                             "<br><button style='width: 100%; margin-left: 7px; text-align: left;' onclick='abrirPastaCss()'>    <img src='img/mini-pasta.png' width='22px'>css</button>";
}
function abrirPastaJs(){
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
                                                        //pasta css//
                                                        "<button onclick='erroReprodizor()' data-toggle='modal' data-target='.bd-example-modal-sm' style='width:98%; margin-top: 5px; margin-left: 5px '>"+
                                                        "<div class='row' style='text-align:left'>"+
                                                            "<div class='col-4'>"+
                                                                "<img src='img/js.png' style='margin-top:-5px' width='25px'> JavaS.js"+
                                                            "</div>"+
                                                            "<div class='col-4'>"+
                                                                " 26/04/2020 10:38pm"+
                                                            "</div>"+
                                                            "<div class='col-4'>"+
                                                                "  Documento de fol..."+
                                                            "</div>"+
                                                        "</div>"+
                                                        "</button>";
                                                        //pasta css//

    document.getElementById("janela-pesquisa").innerHTML="<img src='img/mini-pasta.png' width='22px'> &gt; <button data-dismiss='modal' aria-label='Close'> Desktop </button> &gt; <button onclick='abrirCvWeb()'>Cv Abril</button> > <button onclick='abrirPastaJs()'>js</button>";

    document.getElementById("barra-lateral-pasta").innerHTML="<br><button style='width: 100%; margin-left: 7px; text-align: left;' data-dismiss='modal' aria-label='Close'> <img src='img/mini-pasta.png' width='22px'>Desktop</button>"+
                                                             "<br><button style='width: 100%; margin-left: 7px; text-align: left;' onclick='abrirCvWeb()'>    <img src='img/mini-pasta.png' width='22px'>Cv Abril</button>"+
                                                             "<br><button style='width: 100%; margin-left: 7px; text-align: left;' onclick='abrirPastaJs()'>    <img src='img/mini-pasta.png' width='22px'>js</button>";
}
function abrirPastaImg(){
    document.getElementById("button-home").innerHTML="<button style='margin-top: 5px; margin-left: 5px;' onclick='abrirCvWeb()'> <img src='img/home.png' width='100%'></button>";

    document.getElementById("pastaPrincipal").innerHTML=
                                                            "<button onclick='erroReprodizor()' data-toggle='modal' data-target='.bd-example-modal-sm' style='margin-left:20px;margin-top:10px'><img src='img/3item.png' style='width:50px'> <br>3item </button>"+
                                                            "<button onclick='erroReprodizor()' data-toggle='modal' data-target='.bd-example-modal-sm' style='margin-left:10px;margin-top:10px'><img src='img/interface.png' style='width:50px'> <br>barra </button>"+
                                                            "<button onclick='erroReprodizor()' data-toggle='modal' data-target='.bd-example-modal-sm' style='margin-left:10px;margin-top:10px'><img src='img/interface.png' style='width:50px'> <br>bg </button>"+
                                                            "<button onclick='erroReprodizor()' data-toggle='modal' data-target='.bd-example-modal-sm' style='margin-left:10px;margin-top:10px'><img src='img/interface.png' style='width:50px'> <br>bgpc </button>"+
                                                            "<button onclick='erroReprodizor()' data-toggle='modal' data-target='.bd-example-modal-sm' style='margin-left:10px;margin-top:10px'><img src='img/css.png' style='width:50px'> <br>css </button>"+
                                                            "<button onclick='erroReprodizor()' data-toggle='modal' data-target='.bd-example-modal-sm' style='margin-left:10px;margin-top:10px'><img src='img/cv.png' style='width:50px'> <br>cv  </button>"+
                                                            "<button onclick='erroReprodizor()' data-toggle='modal' data-target='.bd-example-modal-sm' style='margin-left:10px;margin-top:10px'><img src='img/enviar.png' style='width:50px'> <br> enviar </button>"+
                                                            "<button onclick='erroReprodizor()' data-toggle='modal' data-target='.bd-example-modal-sm' style='margin-left:13px;margin-top:10px'><img src='img/facebook.png' style='width:50px'> <br> face </button>"+
                                                            "<button onclick='erroReprodizor()' data-toggle='modal' data-target='.bd-example-modal-sm' style='margin-left:10px;margin-top:10px'><img src='img/fullscreen.png' style='width:50px'> <br> full </button>"+
                                                            "<button onclick='erroReprodizor()' data-toggle='modal' data-target='.bd-example-modal-sm' style='margin-left:10px;margin-top:10px'><img src='img/guy.png' style='width:50px'> <br> guy </button>"+
                                                            "<button onclick='erroReprodizor()' data-toggle='modal' data-target='.bd-example-modal-sm' style='margin-left:10px;margin-top:10px'><img src='img/home.png' style='width:50px'> <br> home </button>"+
                                                            "<button onclick='erroReprodizor()' data-toggle='modal' data-target='.bd-example-modal-sm' style='margin-left:10px;margin-top:10px'><img src='img/icons8-gif-80.png' style='width:50px'> <br> icons </button>"+
                                                            "<button onclick='erroReprodizor()' data-toggle='modal' data-target='.bd-example-modal-sm' style='margin-left:10px;margin-top:10px'><img src='img/img.png' style='width:50px'> <br> img </button>"+
                                                            "<button onclick='erroReprodizor()' data-toggle='modal' data-target='.bd-example-modal-sm' style='margin-left:10px;margin-top:10px'><img src='img/imp.png' style='width:50px'> <br> imp </button>"+
                                                            "<button onclick='erroReprodizor()' data-toggle='modal' data-target='.bd-example-modal-sm' style='margin-left:13px;margin-top:10px'><img src='img/interface.png' style='width:50px'> <br> iniciar </button>"+
                                                            "<button onclick='erroReprodizor()' data-toggle='modal' data-target='.bd-example-modal-sm' style='margin-left:10px;margin-top:10px'><img src='img/text.png' style='width:50px'> <br> text </button>"+
                                                            "<button onclick='erroReprodizor()' data-toggle='modal' data-target='.bd-example-modal-sm' style='margin-left:10px;margin-top:10px'><img src='img/js.png' style='width:50px'> <br> js </button>"+
                                                            "<button onclick='erroReprodizor()' data-toggle='modal' data-target='.bd-example-modal-sm' style='margin-left:10px;margin-top:10px'><img src='img/print.png' style='width:50px'> <br> print </button>"+
                                                            "<button onclick='erroReprodizor()' data-toggle='modal' data-target='.bd-example-modal-sm' style='margin-left:10px;margin-top:10px'><img src='img/mini-pasta.png' style='width:50px'> <br> mpasta </button>"+
                                                            "<button onclick='erroReprodizor()' data-toggle='modal' data-target='.bd-example-modal-sm' style='margin-left:10px;margin-top:10px'><img src='img/outbutton.png' style='width:50px'> <br> outbtn </button>"+
                                                            "<button onclick='erroReprodizor()' data-toggle='modal' data-target='.bd-example-modal-sm' style='margin-left:10px;margin-top:10px'><img src='img/pasta.png' style='width:50px'> <br> pasta </button>"+
                                                            "<button onclick='erroReprodizor()' data-toggle='modal' data-target='.bd-example-modal-sm' style='margin-left:13px;margin-top:10px'><img src='img/interface.png' style='width:50px'> <br> memoria </button>"+
                                                            "<button onclick='erroReprodizor()' data-toggle='modal' data-target='.bd-example-modal-sm' style='margin-left:10px;margin-top:10px'><img src='img/interface.png' style='width:50px'> <br> interface </button>"+
                                                            "<button onclick='erroReprodizor()' data-toggle='modal' data-target='.bd-example-modal-sm' style='margin-left:10px;margin-top:10px'><img src='img/icons8-gif-80.png' style='width:50px'> <br> loading </button>"+
                                                        "</div>";

    document.getElementById("janela-pesquisa").innerHTML="<img src='img/mini-pasta.png' width='22px'> &gt; <button data-dismiss='modal' aria-label='Close'> Desktop </button> &gt; <button onclick='abrirCvWeb()'>Cv Abril</button> > <button onclick='abrirPastaImg()'>img</button>";

    document.getElementById("barra-lateral-pasta").innerHTML="<br><button style='width: 100%; margin-left: 7px; text-align: left;' data-dismiss='modal' aria-label='Close'> <img src='img/mini-pasta.png' width='22px'>Desktop</button>"+
                                                             "<br><button style='width: 100%; margin-left: 7px; text-align: left;' onclick='abrirCvWeb()'>    <img src='img/mini-pasta.png' width='22px'>Cv Abril</button>"+
                                                             "<br><button style='width: 100%; margin-left: 7px; text-align: left;' onclick='abrirPastaImg()'>    <img src='img/mini-pasta.png' width='22px'>img</button>";

}
// PASTA NO DESKTOP COM NOME "CV WEB" ESSA FUNÇÃO ABRE UM MODAL COM AS INFORMAÇÕES DA PASTA.
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
