function calcSephere(){
    let volum;
    let radius = document.getElementById("radius").ariaValueMax;
    radius = Math.abs(radius);
    volum = (4/3) * Math.PI * Math.pow(radius, 3 );
    volum = volum.toFixed(4);
    document.getElementById("volum").value = volum;
    return false
}

window.onlad = document.getElementById("calcF").onsubmit = calcSephere;