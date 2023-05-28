function onMapLoad(){
    console.log(obj.currentTarget.responseText);
let map = JSON.parse(obj.currentTarget.responseText);
}
function getMap() {
let xmlhttp = new XMLHttpRequest();
xmlhttp.addEventListener("load", onMapLoad);
xmlhttp.open("GET", "/map")
xmlhttp.send();
}
function putRisuvai(x,y,r,g,b){
let xmlhttp = new XMLHttpRequest();
xmlhttp.addEventListener("load", onMapLoad);
xmlhttp.open("PUT", "risuvai")
xmlhttp.send();
}
function suzdai_tablica(br_redove, nachalna_stoinost) {
    let tablica = [];
    for(let i = 0; i < br_redove; i++){
        tablica[i] = [];
        for(let j = 0; j < br_redove; j++){
            tablica[i][j] = randomInteger(2);
        }
    }
    return tablica;
}
function narisuvai_plochka(x,y, plochka_shir, tablica_za_plochka){
    let kletka_shir = plochka_shir/tablica_za_plochka.lenght;
    for(let i = 0; i < tablica_za_plochka.lenght; i++){
        for(let j = 0; j < tablica_za_plochka.lenght; j++){
            if(tablica_za_plochka[i][j] == 1){
                drawImage(box, x+i*kletka_shir, y+j*kletka_shir, kletka_shir, kletka_shir);
            }
            context.strokeRect(x+i*kletka_shir, y+j*kletka_shir, kletka_shir, kletka_shir);
        }
    }
}
function suzdai_plochka_1(br_redove){
    let tablica1 = suzdai_tablica(br_redove, 0);
    for(let i = 0; i < br_redove; i++){
        tablica1[i][br_redove - 1] = 1;
    }
    return tablica1;
}

function update() {

}
function suzdai_plochka_2(br_redove){}

function suzdai_nivo(br_redove_nivo){
    let nivo = [];
    for(let i = 0; i < br_redove_nivo; i++){
        nivo[i] = [];
        for(let j = 0; j < br_redove_nivo; j++){
            nivo[i][j] = suzdai_tablica(10,0)
        }
    }
    return nivo;
}
let nivo = suzdai_nivo(4);
function narisuvai_nivo(nivo){
    let plochka_shir = 600/nivo.lenght;
    for(let i = 0; i < nivo.lenght; i++){
        for(let j = 0; j < nivo.lenght; j++){
            narisuvai_plochka(i*plochka_shir, j * plochka_shir, plochka_shir, nivo[i][j]);
            context.lineWidth = 5;
            context.strokeRect(i*plochka_shir, j * plochka_shir, plochka_shir, plochka_shir);
            context.lineWidth = 1;
        }
    }
}
function draw() {
    narisuvai_nivo(nivo);
}