function  funzioneMenuPiccolo (){
  try {
    if (nav.className.includes("nascondiMenu")) {
      nav.classList.remove("nascondiMenu");
      nodo_tasto_mini.className = "fas fa-times-circle miniTimes";
    } else {
      nav.classList.add("nascondiMenu");
      nodo_tasto_mini.className = "fa fa-bars mini";
    }
  } catch (e) {
    alert("funzioneMenuPiccolo" + e);
  }
}
function funzioneScorrimento() {
  try {
    var finestra_scorsa = document.body.scrollTop || document.documentElement.scrollTop;
    var altezza = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    nodo_barra_progresso.style.width = (finestra_scorsa / altezza) * 100 + "%";
  } catch (e) {
    alert("funzioneScorrimento" + e);
  }
}
function funzioneAvanti () {
  try {
    if (slide_attuale < (nodi_slide.length-1)) {
      nodi_slide[slide_attuale].classList.add("no");
      nodi_spiegazione[slide_attuale].classList.add("no");
      slide_attuale++;
      nodi_slide[slide_attuale].classList.remove("no");
      nodi_spiegazione[slide_attuale].classList.remove("no");
    }
  } catch (e) {
    alert("funzioneAvanti" + e);
  }
}
function funzioneIndietro () {
  try {
    if (slide_attuale != 0) {
      nodi_slide[slide_attuale].classList.add("no");
      nodi_spiegazione[slide_attuale].classList.add("no");
      slide_attuale--;
      nodi_slide[slide_attuale].classList.remove("no");
      nodi_spiegazione[slide_attuale].classList.remove("no");
    }
  } catch (e) {
    alert ("funzioneIndietro" + e)
  }
}
function funzioneGetRandom() {
  try {
    var ran = Math.floor(Math.random() * 9);
    while (posizioni_random.includes(ran)) {
      ran = Math.floor(Math.random() * 9);
    }
    posizioni_random.push(ran);
    return ran;
  } catch (e) {
    alert ("funzioneGetRandom" + e);
  }
}
function funzioneResetta (quanti) {
  try {
    posizioni_random = [];
    for(i = 0; i < quanti; i++){
      nodi_posizione[i].removeChild(nodi_posizione[i].childNodes[0]);
    }
  } catch (e) {
    alert ("funzioneResetta" + e);
  }
}
function funzioneNuovaPartita () {
  try {
    if (riavvio == 0){
      funzioneResetta(9);
      riavvio++;
    } else {
      funzioneResetta(8);
    }
    for(i in nodi_posizione) {
      var ran =  funzioneGetRandom();
      nodi_posizione[i].appendChild(nodi_img[ran]);
      if (nodi_posizione[i].firstChild.classList.contains("nascondi")) {
        nodi_posizione[i].firstChild.classList.remove("nascondi");
      }
    }
    nodi_posizione[8].firstChild.classList.add("nascondi");
    casella_vuota = 8;
  } catch (e) {
    alert ("nuova partita" + e);
  }
}
function funzioneSwap(nodo1, nodo2) {
  try {
    var temp = document.createElement("div");
    nodo1.parentNode.insertBefore(temp, nodo1);
    nodo2.parentNode.insertBefore(nodo1, nodo2);
    temp.parentNode.insertBefore(nodo2, temp);
    temp.parentNode.removeChild(temp);
  } catch (e) {
    alert("funzioneSwap" + e);
  }
}
function funzioneFrecciaGiu () {
  try {
    if (casella_vuota == -1) {
      var confirm = window.confirm("Prima devi inziare una nuova partita. Vuoi iniziare una nuova partita?");
      if (confirm) {
        funzioneNuovaPartita();
      }
    } else if (casella_vuota != 0 && casella_vuota != 1 && casella_vuota != 2) {
      var nuova_casella_vuota = casella_vuota - 3;
      nodo1 = nodi_posizione[nuova_casella_vuota].firstChild;
      nodo2 = nodi_posizione[casella_vuota].firstChild;
      funzioneSwap(nodo1, nodo2);
      casella_vuota = nuova_casella_vuota;
    }
    funzioneVinto();
  } catch (e) {
    alert("funzioneFrecciaGiu" + e);
  }
}
function funzioneFrecciaSu () {
  try {
    if (casella_vuota == -1) {
      var confirm = window.confirm("Prima devi inziare una nuova partita. Vuoi iniziare una nuova partita?");
      if (confirm) {
        funzioneNuovaPartita();
      }
    } else if (casella_vuota != 6 && casella_vuota != 7 && casella_vuota != 8) {
      var nuova_casella_vuota = casella_vuota + 3;
      nodo1 = nodi_posizione[nuova_casella_vuota].firstChild;
      nodo2 = nodi_posizione[casella_vuota].firstChild;
      funzioneSwap(nodo1, nodo2);
      casella_vuota = nuova_casella_vuota;
    }
    funzioneVinto ();
  } catch (e) {
    alert ("funzioneFrecciaSu" + e);
  }
}
function funzioneFrecciaSinistra () {
  try {
    if (casella_vuota == -1) {
      var confirm = window.confirm("Prima devi inziare una nuova partita. Vuoi iniziare una nuova partita?");
      if (confirm) {
        funzioneNuovaPartita();
      }
    } else if (casella_vuota != 2 && casella_vuota != 5 && casella_vuota != 8) {
      var nuova_casella_vuota = casella_vuota + 1;
      nodo1 = nodi_posizione[nuova_casella_vuota].firstChild;
      nodo2 = nodi_posizione[casella_vuota].firstChild;
      funzioneSwap(nodo1, nodo2);
      casella_vuota = nuova_casella_vuota;
    }
    funzioneVinto();
  } catch (e) {
    alert ("funzioneFrecciaSinistra" + e)
  }
}
function funzioneFrecciaDestra () {
  try {
    if (casella_vuota == -1) {
      var confirm = window.confirm("Prima devi inziare una nuova partita. Vuoi iniziare una nuova partita?");
      if (confirm) {
        funzioneNuovaPartita();
      }
    } else if (casella_vuota != 0 && casella_vuota != 3 && casella_vuota != 6) {
      var nuova_casella_vuota = casella_vuota - 1;
      nodo1 = nodi_posizione[nuova_casella_vuota].firstChild;
      nodo2 = nodi_posizione[casella_vuota].firstChild;
      funzioneSwap(nodo1, nodo2);
      casella_vuota = nuova_casella_vuota;
    }
    funzioneVinto();
  } catch (e) {
    alert ("funzioneFrecciaDestra" + e);
  }
}
function funzioneVinto () {
  try {
    var controllo = 1;
    for (i in nodi_posizione) {
      if (!nodi_posizione[i].firstChild.src.includes("/" + i +".png")) {
        controllo = 0;
        break;
      }
    }
    if (controllo) {
      nodo_modal.style.display = "initial";
    }
  } catch (e) {
    alert ("funzioneVinto" + e);
  }
}
function funzioneRegole () {
  try {
    nodo_modal_regole.style.display = "initial";
  } catch (e) {
    alert ("funzioniRegole" + e);
  }
}
function funzioneChiudi () {
  try {
    nodo_modal.style.display = "none";
    nodo_modal_regole.style.display = "none";
  } catch (e) {
    alert("funzioneChiudi" + e);
  }
}

var nodo_tasto_mini;
var nodo_nav;
var nodo_barra_progresso;
var nodi_slide = new Array;
var nodi_spiegazione = new Array;
var slide_attuale;
var nodoPrev;
var nodoNext;
var nodi_posizione = new Array;
var nodi_puzzle = new Array;
var nodo_nuova_partita;
var nodo_freccia_su;
var nodo_freccia_giu;
var nodo_freccia_destra;
var nodo_freccia_sinistra;
var nodo_regole;
var nodo_croce;
var nodo_croce2;
var nodo_modal;
var nodo_modal_regole;
var posizioni_random = new Array;
var nodi_img = new Array;
var riavvio;
var casella_vuota;

window.onload = function (){
  try
  {
    nodo_tasto_mini = document.getElementById("mini");
    nodo_nav = document.getElementById("nav");
    nav.classList.add("nascondiMenu");
    nodo_tasto_mini.onclick = funzioneMenuPiccolo;
    nodo_barra_progresso = document.getElementById("barra_progresso");
    if (nodo_barra_progresso != null) {
      window.addEventListener("scroll", funzioneScorrimento);
    }
    nodi_slide[0] = document.getElementById("aviatore");
    nodi_slide[1] = document.getElementById("geografo");
    nodi_slide[2] = document.getElementById("lampionaio");
    nodi_slide[3] = document.getElementById("piccolo_principe");
    nodi_slide[4] = document.getElementById("re");
    nodi_slide[5] = document.getElementById("rosa");
    nodi_slide[6] = document.getElementById("serpente");
    nodi_slide[7] = document.getElementById("ubriacone");
    nodi_slide[8] = document.getElementById("uomo_daffari");
    nodi_slide[9] = document.getElementById("vanitoso");
    nodi_slide[10] = document.getElementById("volpe");
    nodi_spiegazione[0] = document.getElementById("aviatore_spiegazione");
    nodi_spiegazione[1] = document.getElementById("geografo_spiegazione");
    nodi_spiegazione[2] = document.getElementById("lampionaio_spiegazione");
    nodi_spiegazione[3] = document.getElementById("piccolo_principe_spiegazione");
    nodi_spiegazione[4] = document.getElementById("re_spiegazione");
    nodi_spiegazione[5] = document.getElementById("rosa_spiegazione");
    nodi_spiegazione[6] = document.getElementById("serpente_spiegazione");
    nodi_spiegazione[7] = document.getElementById("ubriacone_spiegazione");
    nodi_spiegazione[8] = document.getElementById("uomo_daffari_spiegazione");
    nodi_spiegazione[9] = document.getElementById("vanitoso_spiegazione");
    nodi_spiegazione[10] = document.getElementById("volpe_spiegazione");
    nodoPrev = document.getElementById("prev");
    nodoNext = document.getElementById("next");
    slide_attuale = 0;
    if (nodoNext != null && nodoPrev != null) {
      nodoPrev.onclick = funzioneIndietro;
      nodoNext.onclick = funzioneAvanti;
    }
    nodo_nuova_partita = document.getElementById("nuova_partita");
    nodo_freccia_su = document.getElementById("su");
    nodo_freccia_giu = document.getElementById("giu");
    nodo_freccia_destra = document.getElementById("destra");
    nodo_freccia_sinistra = document.getElementById("sinistra");
    nodo_regole = document.getElementById("regole");
    nodo_croce = document.getElementById("croce");
    nodo_croce2 = document.getElementById("croce2");
    nodo_modal = document.getElementById("modal");
    nodo_modal_regole = document.getElementById("modalRegole");
    riavvio = 0;
    casella_vuota = -1;
    for (i = 0; i < 9; i++) {
      nodi_posizione[i] = document.getElementById(i);
      nodi_puzzle[i] = document.getElementById("img" + i);
      nodi_img[i] = document.createElement("IMG");
      nodi_img[i].setAttribute("src", "./images/puzzle/" + (i) +".png");
    }
    if (nodo_nuova_partita != null) {
      nodo_regole.onclick = funzioneRegole;
      nodo_nuova_partita.onclick = funzioneNuovaPartita;
      nodo_freccia_su.onclick = funzioneFrecciaSu;
      nodo_freccia_giu.onclick = funzioneFrecciaGiu;
      nodo_freccia_destra.onclick = funzioneFrecciaDestra;
      nodo_freccia_sinistra.onclick = funzioneFrecciaSinistra;
      nodo_croce.onclick = funzioneChiudi;
      nodo_croce2.onclick = funzioneChiudi;
    }
  }
  catch (e) { alert("On Load: " + e); }
}
