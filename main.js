var points=0;
function decrease(){
    points=points-5;
    document.getElementById("labelpoints").textContent=points;
}
function increase(){
    points=points+5;
    document.getElementById("labelpoints").textContent=points;
}