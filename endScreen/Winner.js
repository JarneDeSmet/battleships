"use strict";

(function () {

    const winner = (new URLSearchParams(location.search)).get(`winner`);
    const h1 = document.querySelector('#winner')
    h1.innerHTML = `Well done player${winner}, you won!`;


})()