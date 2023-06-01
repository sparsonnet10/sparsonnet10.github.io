// Returns a random integer from 0 to 100:

document.getElementById("demo").innerHTML = Math.floor(Math.random() * 101);

function Random() {
    var rnd = Math.floor(Math.random() * 101);
    document.getElementById('random').value = rnd;
}