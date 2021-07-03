/* Create a button */
var buttonCounter = document.getElementById('btn');

/* What to do when the button is clicked */
buttonCounter.addEventListener('click', function() {
    /* Increment number on button's label by 1 */
    buttonCounter.innerHTML = +(buttonCounter.innerHTML) + 1;
});