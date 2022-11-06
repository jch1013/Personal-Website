/* Creates typewriter effect by displaying text letters one at a time */
function type(initial, speed, inuptElement, outputElement) {
    input = inuptElement;
    document.getElementById(outputElement).innerHTML += input.charAt(initial);
    setTimeout(function(){
        ((initial < input.length - 1) ? type(initial+1, speed, inuptElement, outputElement) : false);
    }, speed);
}




/* Displaying lines, with delay between each line */
const speed = 50;

type(0, speed, "> Welcome to my website! ;", "greeting");

setTimeout(() => {
    type(0,speed, "> My name is Jackson Hayward ; ", "introduction");}, 3000);

setTimeout(() => {
    type(0,speed, "> I'm an aspiring software engineer ; ", "about");}, 6300);

setTimeout(() => {
    type(0,speed, "> Scroll down to learn more about me ; ", "closing");}, 9000);