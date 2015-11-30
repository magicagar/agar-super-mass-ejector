// ==UserScript==
// @name         agar-super-mass-ejector
// @namespace    http://github.com/magicagar/
// @version      0.01
// @description  A faster, continuous mass ejector for agar.
// @author       magicagar
// @license      MIT
// @match        http://agarz.com/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    var amount = 27;
    var duration = 50; //ms

    var overwriting = function(evt) {
        if (evt.keyCode === 69) { // KEY_R
            for (var i = 0; i < amount; ++i) {
                setTimeout(function() {
                    window.onkeydown({keyCode: 87}); // KEY_W
                    window.onkeyup({keyCode: 87});
                }, i * duration);
            }
        }
    };

    window.addEventListener('keydown', overwriting);
})();

