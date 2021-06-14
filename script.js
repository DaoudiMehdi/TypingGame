var list = ["Lionel Messi, né le 24 juin 1987 à Rosario en Argentine, est un footballeur international argentin évoluant au poste d'attaquant au FC Barcelone","Dogecoin est une crypto-monnaie avec une image du Shiba Inu chien du mème « Doge » comme logo. Présenté comme une blague le 6 décembre 2013, le Dogecoin a rapidement développé sa propre communauté en ligne et a atteint une capitalisation de 60 millions de dollars en janvier 2014","Clubhouse est une application logicielle de réseautage social pour appareils mobiles développée par Paul Davison et Rohan Seth qui permet via des chambres privées et sur invitation, de converser à plusieurs","Discord est un logiciel propriétaire gratuit de VoIP et de messagerie instantanée","Valorant est un jeu vidéo free-to-play de tir à la première personne en multijoueur développé et édité par Riot Games et sorti le 2 juin 2020","The Weeknd, de son vrai nom Abel Makkonen Tesfaye, né le 16 février 1990 à Toronto, au Canada, est un auteur-compositeur-interprète, musicien et producteur canadien"]
var k;
function tabl() {
    var x = Math.floor(Math.random() * list.length);
    document.getElementById("wri").innerHTML=list[x]
    k = list[x].toString();
}

tabl();
var second = 0,
    minute = 0,
    milli = 0;
var o = 1;
var inter;
var a;
var text = document.getElementById("text");
function timer() {
    milli++;
    if (milli >= 100) {
        second++;
        milli = 0
    } else if (second >= 59) {
        second = 0
        minute++;
    } else if (minute > 59) {
        minute = 0
    }
    document.getElementById("time").innerHTML = (minute < 10 ? '0' + minute : minute) + ":" + (second < 10 ? '0' + second : second) + ":" + (milli < 10 ? '0' + milli : milli);
    if (text.value == k) {
        clearTimeout(inter)
    }
}

text.addEventListener("keypress", function() {
    var border = text.getAttribute('border')
    if (o === 1) {
        inter = setInterval(timer, 10)
        o = 0;
    }
})
text.addEventListener('keyup', function() {
    if (k.search(text.value) != -1) {
        text.style.border = "9px solid green"
    } else {
        text.style.border = "9px solid red"
    }

})

btn.addEventListener("click", function() {
    tabl()
    clearTimeout(inter)
    o = 1;
    milli = 0;
    second = 0;
    minute = 0;
    document.getElementById("time").innerHTML ='00:00:00';
    text.value = null;
    text.style.border = "9px solid black"
})

