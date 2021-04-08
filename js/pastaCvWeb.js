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

// CONTEUDO DA PASTA

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