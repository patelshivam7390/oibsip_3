
var cel = document.getElementById("cel");
var feh = document.getElementById("feh");
var kelvin = document.getElementById("kelvin");


cel.addEventListener('input', function () {
    let c = this.value;
    let f = (c * 9 / 5) + 32;
    let k = c + 273.15;
    feh.value = f;
    kelvin.value = k;
})
feh.addEventListener('input', function () {
    let f = this.value;
    let c = (f - 32) * 5 / 9;
    let k = (c + 273.15);

    cel.value = c;
    kelvin.value = k;

})
kelvin.addEventListener('input', function () {
    let k = this.value;
    let c = k - 273.15;
    let f = (c * 9 / 5) + 32;
    cel.value = c;
    feh.value = f;
})
function reset() {
    document.getElementById("cel").value = 0;
    document.getElementById("feh").value = 0;
    document.getElementById("kelvin").value = 0;
}

