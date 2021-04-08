//-------------------PROGRAMAÇÃO EM C PASTA --------------------------------//

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

//-------------------PROGRAMAÇÃO EM C PASTA --------------------------------//

//-------------------PROGRAMAÇÃO EM JAVA PASTA --------------------------------//
function abrirPastaAbreviarNomes(){
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
                                                                //abreviar nomes .java //
                                                                "<button onclick='erroReprodizor()' data-toggle='modal' data-target='.bd-example-modal-sm' style='width:98%; margin-top: 5px; margin-left: 5px '>"+
                                                                "<div class='row' style='text-align:left'>"+
                                                                    "<div class='col-4'>"+
                                                                        "<img src='img/unknown.png' width='25px'> AbreviaNome.java"+
                                                                    "</div>"+
                                                                    "<div class='col-4'>"+
                                                                        " 02/12/2020 10:38pm"+
                                                                    "</div>"+
                                                                    "<div class='col-4'>"+
                                                                        "  Arquivo Fonte Java"+
                                                                    "</div>"+
                                                                "</div>"+
                                                                "</button>"+
                                                                //abreviar nomes .java //
                                                                //abreviar nomes .java   github//
                                                                "<a href='https://github.com/srclayton/Validador-de-cartao-de-credito' target='_blank'><button style='width:98%; margin-top: 5px; margin-left: 5px '>"+
                                                                "<div class='row' style='text-align:left'>"+
                                                                    "<div class='col-4'>"+
                                                                        "<img src='img/github.png' width='25px'>AbreviarNome.java"+
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
                                                            "<br><button style='width: 100%; margin-left: 7px; text-align: left;' onclick='abrirPastaTres()'>    <img src='img/mini-pasta.png' width='22px'>Programação...</button>"+
                                                            "<br><button style='width: 100%; margin-left: 7px; text-align: left;' onclick='abrirPastaAbreviarNomes()'>    <img src='img/mini-pasta.png' width='22px'>Abreviar...</button>";
    document.getElementById("janela-pesquisa").innerHTML="<img src='img/mini-pasta.png' width='22px'> &gt; <button data-dismiss='modal' aria-label='Close'> Desktop </button> &gt; <button onclick='PastaProjetos()'>Projetos</button> &gt; <button onclick='abrirPastaTres()'>Programação em Java</button> &gt; <button onclick='abrirPastaAbreviarNomes()'>Abreviar omes</button>";
}

function abrirPastaSistEstacionamento(){
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
                                                                //abreviar nomes .java //
                                                                "<button onclick='erroReprodizor()' data-toggle='modal' data-target='.bd-example-modal-sm' style='width:98%; margin-top: 5px; margin-left: 5px '>"+
                                                                "<div class='row' style='text-align:left'>"+
                                                                    "<div class='col-4'>"+
                                                                        "<img src='img/unknown.png' width='25px'> SistDeEst.java"+
                                                                    "</div>"+
                                                                    "<div class='col-4'>"+
                                                                        " 02/12/2020 10:38pm"+
                                                                    "</div>"+
                                                                    "<div class='col-4'>"+
                                                                        "  Arquivo Fonte Java"+
                                                                    "</div>"+
                                                                "</div>"+
                                                                "</button>"+
                                                                //abreviar nomes .java //
                                                                //abreviar nomes .java   github//
                                                                "<a href='https://github.com/srclayton/Validador-de-cartao-de-credito' target='_blank'><button style='width:98%; margin-top: 5px; margin-left: 5px '>"+
                                                                "<div class='row' style='text-align:left'>"+
                                                                    "<div class='col-4'>"+
                                                                        "<img src='img/github.png' width='25px'>SistDeEst.java"+
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
                                                            "<br><button style='width: 100%; margin-left: 7px; text-align: left;' onclick='abrirPastaTres()'>    <img src='img/mini-pasta.png' width='22px'>Programação...</button>"+
                                                            "<br><button style='width: 100%; margin-left: 7px; text-align: left;' onclick='abrirPastaSistEstacionamento()'>    <img src='img/mini-pasta.png' width='22px'>Sistema...</button>";
    document.getElementById("janela-pesquisa").innerHTML="<img src='img/mini-pasta.png' width='22px'> &gt; <button data-dismiss='modal' aria-label='Close'> Desktop </button> &gt; <button onclick='PastaProjetos()'>Projetos</button> &gt; <button onclick='abrirPastaTres()'>Programação em Java</button> &gt; <button onclick='abrirPastaSistEstacionamento()'>Sistema de estacionamento</button>";
}
//-------------------PROGRAMAÇÃO EM JAVA PASTA --------------------------------//