// ==UserScript==
// @name         Hide Annoying YouTube Controls & Title Bar
// @description  Ctrl + M to HIDE/UNHIDE annoying YouTube Controls & Title Bar
// @author       WEIRD :|
// @match        *://www.youtube.com/*
// @version      0.1
// @icon         https://www.google.com/s2/favicons?domain=youtube.com
// ==/UserScript==

(function() {
    'use strict';









    // Go to https://keycode.info to get keycode value
    // CHANGE KEYS VALUE
    const KEY_CODE = 77 // 'm' key


    // DO YOU ALLOW CTRL KEY? IF YES, true, if no, false.
    const ALLOW_CTRL_KEY = true

















    var HIDE = false;
    document.addEventListener('keydown', function(evt) {
        if (!evt) evt = event;
        if (ALLOW_CTRL_KEY === false) {
            if (evt.keyCode === KEY_CODE) {
                if (HIDE === false) {
                    HIDE = true;
                    hide()
                } else {
                    HIDE = false;
                    show()
                }
            }
        } else {
            if (evt.keyCode === KEY_CODE && evt.ctrlKey) {
                if (HIDE === false) {
                    HIDE = true;
                    hide()
                } else {
                    HIDE = false;
                    show()
                }
            }
        }
    })
})();

function hide() {
    document.getElementsByClassName('ytp-chrome-top')[0].style.visibility = 'hidden';
    document.getElementsByClassName('ytp-chrome-controls')[0].style.visibility = 'hidden';
    document.getElementsByClassName('ytp-gradient-top')[0].style.visibility = 'hidden';
    document.getElementsByClassName('ytp-gradient-bottom')[0].style.visibility = 'hidden';
    document.getElementsByClassName('ytp-progress-bar')[0].style.visibility = 'hidden';
    document.getElementsByClassName('ytp-progress-bar-container')[0].style.visibility = 'hidden';
    document.getElementsByClassName('ytp-pause-overlay ytp-scroll-min')[0].style.visibility = 'hidden';
    if (document.getElementsByClassName('annotation annotation-type-custom iv-branding')) {document.getElementsByClassName('annotation annotation-type-custom iv-branding')[0].style.visibility = 'hidden'}
    if (document.getElementsByClassName('ytp-paid-content-overlay')) {document.getElementsByClassName('ytp-paid-content-overlay')[0].style.visibility = 'hidden'}
}

function show() {
    document.getElementsByClassName('ytp-chrome-top')[0].style.visibility = 'visible';
    document.getElementsByClassName('ytp-chrome-controls')[0].style.visibility = 'visible';
    document.getElementsByClassName('ytp-gradient-top')[0].style.visibility = 'visible';
    document.getElementsByClassName('ytp-gradient-bottom')[0].style.visibility = 'visible';
    document.getElementsByClassName('ytp-progress-bar')[0].style.visibility = 'visible';
    document.getElementsByClassName('ytp-progress-bar-container')[0].style.visibility = 'visible';
    document.getElementsByClassName('ytp-pause-overlay ytp-scroll-min')[0].style.visibility = 'visible';
    if (document.getElementsByClassName('annotation annotation-type-custom iv-branding')) {document.getElementsByClassName('annotation annotation-type-custom iv-branding')[0].style.visibility = 'visible'}
    if (document.getElementsByClassName('ytp-paid-content-overlay')) {document.getElementsByClassName('ytp-paid-content-overlay')[0].style.visibility = 'visible'}
}