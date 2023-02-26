//Denne funktion bruges til at finde det ønskede element
function feedback(x){
    return document.getElementById(x);
}

//variabler for bubble array, bubble index & setInterval()
let ba, bi=0, intrvl;

//bca - bubble content Array
let bca = [
    '<div class="slide-indhold"><h2><b>LÆKKERT UR</b></h2><br><p>Meget behageligt at have på - plejer altid at skulle vænne mig til et ur, men læderremmen er virkelig behagelig. Var lidt i tvivl om jeg måtte åbne poserne med rem, urskive etc. og om jeg i så fald stadig kunne bytte uret, men det skulle bestemt ikke byttes- så problemet udeblev :-)<br><br><br>ULLA M.O.O<br>03/01/2023<br><br><br>Arbor, Steel/Blue - 41mm</p></div>',
    '<div class="slide-indhold"><h2><b>TOP SERVICE</b></h2><br><p>Klasse service, ingen problemer - modtog varerne dagen efter!<br><br>JONAS S.<br>16/12/2022<br><br><br>Mare, Steel/Brown & Black - 40mm</p></div>',
    '<div class="slide-indhold"><h2><b>FREMRAGENDE</b></h2><br><p>Fuldkommen fantastisk kvalitet, specielt med den relativt billig pris taget i betragning.<br>Hurtig levering, rem var let og monterer og så ser uret bare fuldstændig ud som vist i shoppen. 100% tilfredshed, det er ikke det sidste Oliver Green jeg har købt!<br><br>IDA B.<br>06/03/2022<br><br><br>Arbor Steel/Blue - 36mm</p></div>',
    '<div class="slide-indhold"><h2><b>LEVER 100% OP TIL FORVENTNINGERNE</b></h2><br><p>Oliver Green har gjort det umulige. Det er et fantastisk flot ur, og tulmed i en prisklasse, hvor selv en studerende kan være med. Jeg bestilte to remme med, og det er skønt at have et ur, der kan gå både til hverdag og festlige lejligheder. Jeg har kun ros til teamet bag Oliver Green.<br><br>LOUISE N.<br>21/01/2022<br><br><br>Caeli Gold/Green - 32mm</p></div>',  
];

function slideshow(bi){
    //fade-out tekst
    feedback("indhold").style.opacity = 0;

    //loop hen over bobblerne + skift baggrundsfarve
    for(let i=0; i < ba.length; i++){
        ba[i].style.background = "rgba (0,0,0.1)";
    }


//skifter baggrundsfarven på den bobble der er i fokus til at være mørkere end de andre
ba[bi].style.background = "#999";

//timer så koden skifter efter 300ms
setTimeout(function(){
    //skift indholdet 
    feedback("indhold").innerHTML = bca[bi];
    //fade-in tekst
    feedback("indhold").style.opacity = 1;
}, 300);
}

//Ny funktionen som skal køre hver 5 sekund
function bubbleslide(){
   //øger bubble index tallet
    bi++; 
    //hvis bubble index er i lig med det totale antal bobbler
    if (bi==ba.length){
        bi= 0; //nulstiller bubble index til 0 så den laver et loop tilbage til starten
    }
    slideshow(bi);
}

//tilføjer en event så slideshow starter når documentet er loadet 
window.addEventListener("load", function(){
    //forbinder til ... array
    ba = feedback("slideshow").children,
    //indstiller hastigheden på interval timingen til slideshowet
    intrvl = setInterval (bubbleslide, 5000);
});  

