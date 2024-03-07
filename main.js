import { KEPEK } from "./adatok.js";
import { htmlOsszeAllit } from "./fuggvenyek.js";

/*1. feladat:  galéria kisképeinek elhelyezése */
/* fogd meg a .galeria elemet */
const galeriaElem = document.getElementsByClassName("galeria")[0];
console.log(galeriaElem);
/* írd bele az összeálíltott html képsorozatot */
galeriaElem.innerHTML = htmlOsszeAllit(KEPEK);

/*2. feladat  A .nagykep divben lévő img elem megfogása */
const nagykepImg = document.querySelector(".nagykep img");
const nagykepElem = document.querySelector(".nagykep");

/* A .nagykep div megfogása */


/*3. feladat-  eseménykezelő hozzáadása a kisképekhez  */
/* Az előzőekben létrehozott kisképek megfogása (querySelectorAll) - ez egy lista lesz */
const kiskepElemek = document.querySelectorAll(".kep");

/* eseménykezelő hozzáadása a kisképekhez, ciklussal
Az eseménykezelő függvényében: ha a kisképre kattintunk, akkor a nagykép src attribútumát le kell cserélni a kiskép src attribútumában megadott elérési útvonalra  */
for (let index = 0; index < kiskepElemek.length; index++) {
    kiskepElemek[index].addEventListener("click", katt)
    
}

function katt(event){
    console.log(event.target.src)
    nagykepImg.src = event.target.src
    nagykepElem.classList.remove("rejtett")
}



/* 4. feladat .bal és a .jobb gombokra kattintva léptessük a galériát */
let aktIndex =  0;

const jobbgombElem = document.querySelectorAll(".jobb")
for (let index = 0; index < jobbgombElem.length; index++) {
    jobbgombElem[index].addEventListener("click", function() {
        if (aktIndex < KEPEK.length - 1) {
            aktIndex++;
        } else {
            aktIndex = 0;
        }
        nagykepImg.src = KEPEK[aktIndex].kep;
    });
}



const balgombElem = document.querySelectorAll(".bal")
for (let index = 0; index < balgombElem.length; index++) {
    balgombElem[index].addEventListener("click", function() {
        if (aktIndex > 0) {
            aktIndex--;
        } else {
            aktIndex = KEPEK.length - 1; 
        }
        nagykepImg.src = KEPEK[aktIndex].kep;
    });
}

const zarElem= document.querySelector(".zar button")
zarElem.addEventListener("click", function(){
    nagykepElem.classList.add("rejtett")
})



