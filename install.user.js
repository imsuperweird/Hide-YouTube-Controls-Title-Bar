// ==UserScript==
// @name         YouTube Hide Annoying Controls & Title Bar
// @description  Ctrl + M to HIDE/UNHIDE annoying YouTube Controls & Title Bar
// @author       WEIRD :|
// @match        *://www.youtube.com/*
// @version      0.1
// @icon         https://www.google.com/s2/favicons?domain=youtube.com
// ==/UserScript==


/*
DO YOU WISH TO CHANGE THE SHORTCUT KEY?
Go to https://keycode.info to get the keycode value
For Example: keycode 77 = 'm' key
*/
var KEY_CODE = 77

/*
DO YOU ALLOW CTRL KEY?
If yes, true.
If no, false.
*/
var ALLOW_CTRL_KEY = true

// DON'T CHANGE ANYTHING DOWN HERE IF YOU DON'T KNOW HOW TO CODE 🤓
var HIDE = false
var ELEMENTS = ['ytp-chrome-top', 'ytp-chrome-controls', 'ytp-gradient-top', 'ytp-gradient-bottom', 'ytp-progress-bar', 'ytp-progress-bar-container', 'ytp-pause-overlay ytp-scroll-min', 'annotation annotation-type-custom iv-branding', 'ytp-paid-content-overlay']
document.addEventListener('keydown', (evt) => {
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
function hide() {
    ELEMENTS.forEach((elements) => {
        if (document.getElementsByClassName(elements)[0] !== undefined) {
            document.getElementsByClassName(elements)[0].style.visibility= 'hidden'
        }
    })
}
function show() {
    ELEMENTS.forEach((elements) => {
        if (document.getElementsByClassName(elements)[0] !== undefined) {
            document.getElementsByClassName(elements)[0].style.visibility= 'visible'
        }
    })
}
