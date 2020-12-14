let sock = new WebSocket("ws://localhost:410");
let moves;
let foodpos;
let startpos;
let direction = "right";
const startdirections =  [, "right", "left",   "right", "left",   "down",  "up",     "down",  "up",     "down",  "up",     "right", "left"   ];
const color = [ "lightgreen", "orange", "blueviolet", "red", "royalblue", "cyan", "pink", "yellow", "burlywood", "coral", "brown", "darkgreen"];
let snakebody = [];
let userr = 1;
let timer = 300;
let snakelength = '8';

sock.onopen=()=>{wsocket(); main(setInterval(main, timer));}
function wsocket() {
    sock.onmessage=(message)=>{
        message=message.data;  
        if (message === "fail") {alert("Doof?"); sock.close()}        
        if (message.slice(0,1)==="u") {user(message.slice(1)); return;}
        if (message.slice(0,1)==="l") {snakelength=message.slice(1); return;}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
        if (message.slice(0,1)==="[") {message = JSON.parse(message)}
         console.log(message[0] + "\tFoodPos");
          console.log(message[1][userr] + "\tBody");
          console.log(message[0][3] + "Im Essen") 
        if (message[0][3]!==null) {document.getElementById(message[0][3]).classList.remove("food")}
        foodplace(message[0])
        bodyplace(message);
}}

document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft')  {moves = 1}
    if (event.key === 'ArrowUp')    {moves = 2}
    if (event.key === 'ArrowRight') {moves = 3}
    if (event.key === 'ArrowDown')  {moves = 4}
});
function movement() {
    if (moves === 1 && direction !== 'right')   {direction = 'left'}
    if (moves === 2 && direction !== 'down')    {direction = 'up'}
    if (moves === 3 && direction !== 'left')    {direction = 'right'}
    if (moves === 4 && direction !== 'up')      {direction = 'down'}
}
function main() {
movement();
send();
}

function user(input) {
    userr=input-1;
    direction =  startdirections [input]; console.log(startdirections[input] + "\t       Start Richtung")
	document.getElementById("Score").style.color = color[input - 1]
}

function foodplace(fpos) {
for(i=0; i!==3; i++) {
	document.getElementById(fpos[i]).classList.add("food")
}
}

function send(message) {
    message=[userr, snakelength, direction]
    sock.send(JSON.stringify (message));
}
function bodyplace(message) {
var snake0=message[1][0];
var snake1=message[1][1];
var snake2=message[1][2];
var snake3=message[1][3];
var snake4=message[1][4];
var snake5=message[1][5];
var snake6=message[1][6];
var snake7=message[1][7];
var snake8=message[1][8];
var snake9=message[1][9];
var snake10=message[1][10];
var snake11=message[1][11];

if (snake0[0]===snake1[0] || snake0[0]===snake2[0] || snake0[0]===snake3[0] || snake0[0]===snake4[0] || snake0[0]===snake5[0] ||
    snake0[0]===snake6[0] || snake0[0]===snake7[0] || snake0[0]===snake8[0] || snake0[0]===snake9[0] || snake0[0]===snake10[0] ||
    snake0[0]===snake11[0]&& 
    document.getElementById(snake0[0]).classList.contains("food") === false) {sock.close() + alert("ree11")}
if (document.getElementById(snake0[0]).classList.contains("snakebody0" || "snakebody1" || "snakebody2" || "snakebody3" || "snakebody4" || "snakebody5" || "snakebody6" || "snakebody7" || "snakebody8" || "snakebody9" || "snakebody10" || "snakebody11") && 
    document.getElementById(snake0[0]).classList.contains("food") === false) {sock.close() + alert("ree12")}

if (snake1[0]===snake0[0] || snake1[0]===snake2[0] || snake1[0]===snake3[0] || snake1[0]===snake4[0] || snake1[0]===snake5[0] ||
    snake1[0]===snake6[0] || snake1[0]===snake7[0] || snake1[0]===snake8[0] || snake1[0]===snake9[0] || snake1[0]===snake10[0] ||
    snake1[0]===snake11[0]&& 
    document.getElementById(snake1[0]).classList.contains("food") === false) {sock.close() + alert("ree21")}
if (document.getElementById(snake1[0]).classList.contains("snakebody0" || "snakebody1" || "snakebody2" || "snakebody3" || "snakebody4" || "snakebody5" || "snakebody6" || "snakebody7" || "snakebody8" || "snakebody9" || "snakebody10" || "snakebody11") && 
    document.getElementById(snake1[0]).classList.contains("food") === false) {sock.close() + alert("ree22")}

if (snake2[0]===snake0[0] || snake2[0]===snake1[0] || snake2[0]===snake3[0] || snake2[0]===snake4[0] || snake2[0]===snake5[0] ||
    snake2[0]===snake6[0] || snake2[0]===snake7[0] || snake2[0]===snake8[0] || snake2[0]===snake9[0] || snake2[0]===snake10[0] ||
    snake2[0]===snake11[0]&& 
    document.getElementById(snake2[0]).classList.contains("food") === false) {sock.close() + alert("ree31")}
if (document.getElementById(snake2[0]).classList.contains("snakebody0" || "snakebody1" || "snakebody2" || "snakebody3" || "snakebody4" || "snakebody5" || "snakebody6" || "snakebody7" || "snakebody8" || "snakebody9" || "snakebody10" || "snakebody11") && 
    document.getElementById(snake2[0]).classList.contains("food") === false) {sock.close() + alert("ree32")}

if (snake3[0]===snake0[0] || snake3[0]===snake1[0] || snake3[0]===snake2[0] || snake3[0]===snake4[0] || snake3[0]===snake5[0] ||
    snake3[0]===snake6[0] || snake3[0]===snake7[0] || snake3[0]===snake8[0] || snake3[0]===snake9[0] || snake3[0]===snake10[0] ||
    snake3[0]===snake11[0]&& 
    document.getElementById(snake3[0]).classList.contains("food") === false) {sock.close() + alert("ree41")}
if (document.getElementById(snake3[0]).classList.contains("snakebody0" || "snakebody1" || "snakebody2" || "snakebody3" || "snakebody4" || "snakebody5" || "snakebody6" || "snakebody7" || "snakebody8" || "snakebody9" || "snakebody10" || "snakebody11") && 
    document.getElementById(snake3[0]).classList.contains("food") === false) {sock.close() + alert("ree42")}

if (snake4[0]===snake0[0] || snake4[0]===snake1[0] || snake4[0]===snake2[0] || snake4[0]===snake3[0] || snake4[0]===snake5[0] ||
    snake4[0]===snake6[0] || snake4[0]===snake7[0] || snake4[0]===snake8[0] || snake4[0]===snake9[0] || snake4[0]===snake10[0] ||
    snake4[0]===snake11[0]&& 
    document.getElementById(snake4[0]).classList.contains("food") === false) {sock.close() + alert("ree51")}
if (document.getElementById(snake4[0]).classList.contains("snakebody0" || "snakebody1" || "snakebody2" || "snakebody3" || "snakebody4" || "snakebody5" || "snakebody6" || "snakebody7" || "snakebody8" || "snakebody9" || "snakebody10" || "snakebody11") && 
    document.getElementById(snake4[0]).classList.contains("food") === false) {sock.close() + alert("ree52")}

if (snake5[0]===snake0[0] || snake5[0]===snake1[0] || snake5[0]===snake2[0] || snake5[0]===snake3[0] || snake5[0]===snake4[0] ||
    snake5[0]===snake6[0] || snake5[0]===snake7[0] || snake5[0]===snake8[0] || snake5[0]===snake9[0] || snake5[0]===snake10[0] ||
    snake5[0]===snake11[0]&& 
    document.getElementById(snake5[0]).classList.contains("food") === false) {sock.close() + alert("ree61")}
if (document.getElementById(snake5[0]).classList.contains("snakebody0" || "snakebody1" || "snakebody2" || "snakebody3" || "snakebody4" || "snakebody5" || "snakebody6" || "snakebody7" || "snakebody8" || "snakebody9" || "snakebody10" || "snakebody11") && 
    document.getElementById(snake5[0]).classList.contains("food") === false) {sock.close( + alert("ree62"))}

if (snake6[0]===snake0[0] || snake6[0]===snake1[0] || snake6[0]===snake2[0] || snake6[0]===snake3[0] || snake6[0]===snake4[0] ||
    snake6[0]===snake5[0] || snake6[0]===snake7[0] || snake6[0]===snake8[0] || snake6[0]===snake9[0] || snake6[0]===snake10[0] ||
    snake6[0]===snake11[0]&& 
    document.getElementById(snake6[0]).classList.contains("food") === false) {sock.close() + alert("ree71")}
if (document.getElementById(snake6[0]).classList.contains("snakebody0" || "snakebody1" || "snakebody2" || "snakebody3" || "snakebody4" || "snakebody5" || "snakebody6" || "snakebody7" || "snakebody8" || "snakebody9" || "snakebody10" || "snakebody11") && 
    document.getElementById(snake6[0]).classList.contains("food") === false) {sock.close() + alert("ree72")}

if (snake7[0]===snake0[0] || snake7[0]===snake1[0] || snake7[0]===snake2[0] || snake7[0]===snake3[0] || snake7[0]===snake4[0] ||
    snake7[0]===snake5[0] || snake7[0]===snake6[0] || snake7[0]===snake8[0] || snake7[0]===snake9[0] || snake7[0]===snake10[0] ||
    snake7[0]===snake11[0]&& 
    document.getElementById(snake7[0]).classList.contains("food") === false) {sock.close() + alert("ree81")}
if (document.getElementById(snake7[0]).classList.contains("snakebody0" || "snakebody1" || "snakebody2" || "snakebody3" || "snakebody4" || "snakebody5" || "snakebody6" || "snakebody7" || "snakebody8" || "snakebody9" || "snakebody10" || "snakebody11") && 
    document.getElementById(snake7[0]).classList.contains("food") === false) {sock.close() + alert("ree82")}

if (snake8[0]===snake0[0] || snake8[0]===snake1[0] || snake8[0]===snake2[0] || snake8[0]===snake3[0] || snake8[0]===snake4[0] ||
    snake8[0]===snake5[0] || snake8[0]===snake6[0] || snake8[0]===snake7[0] || snake8[0]===snake9[0] || snake8[0]===snake10[0] ||
    snake8[0]===snake11[0]&& 
    document.getElementById(snake8[0]).classList.contains("food") === false) {sock.close() + alert("ree91")}
if (document.getElementById(snake8[0]).classList.contains("snakebody0" || "snakebody1" || "snakebody2" || "snakebody3" || "snakebody4" || "snakebody5" || "snakebody6" || "snakebody7" || "snakebody8" || "snakebody9" || "snakebody10" || "snakebody11") && 
    document.getElementById(snake8[0]).classList.contains("food") === false) {sock.close() + alert("ree92")}

if (snake9[0]===snake0[0] || snake9[0]===snake1[0] || snake9[0]===snake2[0] || snake9[0]===snake3[0] || snake9[0]===snake4[0] ||
    snake9[0]===snake5[0] || snake9[0]===snake6[0] || snake9[0]===snake7[0] || snake9[0]===snake8[0] || snake9[0]===snake10[0] ||
    snake9[0]===snake11[0]&& 
    document.getElementById(snake9[0]).classList.contains("food") === false) {sock.close() + alert("ree101")}
if (document.getElementById(snake9[0]).classList.contains("snakebody0" || "snakebody1" || "snakebody2" || "snakebody3" || "snakebody4" || "snakebody5" || "snakebody6" || "snakebody7" || "snakebody8" || "snakebody9" || "snakebody10" || "snakebody11") && 
    document.getElementById(snake9[0]).classList.contains("food") === false) {sock.close() + alert("ree102")}

if (snake10[0]===snake0[0] || snake10[0]===snake1[0] || snake10[0]===snake2[0] || snake10[0]===snake3[0] || snake10[0]===snake4[0] ||
    snake10[0]===snake5[0] || snake10[0]===snake6[0] || snake10[0]===snake7[0] || snake10[0]===snake8[0] || snake10[0]===snake9[0] ||
    snake10[0]===snake11[0]&& 
    document.getElementById(snake10[0]).classList.contains("food") === false) {sock.close() + alert("ree111")}
if (document.getElementById(snake10[0]).classList.contains("snakebody0" || "snakebody1" || "snakebody2" || "snakebody3" || "snakebody4" || "snakebody5" || "snakebody6" || "snakebody7" || "snakebody8" || "snakebody9" || "snakebody10" || "snakebody11") && 
    document.getElementById(snake10[0]).classList.contains("food") === false) {sock.close() + alert("ree112")}

if (snake11[0]===snake0[0] || snake11[0]===snake1[0] || snake11[0]===snake2[0] || snake11[0]===snake3[0] || snake11[0]===snake4[0] ||
    snake11[0]===snake5[0] || snake11[0]===snake6[0] || snake11[0]===snake7[0] || snake11[0]===snake8[0] || snake11[0]===snake9[0] ||
    snake11[0]===snake10[0] && 
    document.getElementById(snake11[0]).classList.contains("food") === false) {sock.close() + alert("ree121")}
if (document.getElementById(snake11[0]).classList.contains("snakebody0" || "snakebody1" || "snakebody2" || "snakebody3" || "snakebody4" || "snakebody5" || "snakebody6" || "snakebody7" || "snakebody8" || "snakebody9" || "snakebody10" || "snakebody11") && 
    document.getElementById(snake11[0]).classList.contains("food") === false) {sock.close() + alert("ree122")}


//Snake 1
    document.getElementById(snake0[0]).classList.add             ("snakehead")
if( snake0[1]!==undefined){
    document.getElementById(snake0[1]).classList.remove          ("snakehead")
for(i=1; i<message[1][i].length; i++) {
    document.getElementById(snake0[1]).classList.add             ("snakebody0");
}   document.getElementById(snake0
                           [snake0.length-1]).classList.remove   ("snakebody0")
}
//Snake 2
    document.getElementById(snake1[0]).classList.add             ("snakehead")
if( snake1[1]!==undefined){
    document.getElementById(snake1[1]).classList.remove          ("snakehead")
for(i=1; i<message[1][i].length; i++) {
    document.getElementById(snake1[1]).classList.add             ("snakebody1");
}   document.getElementById(snake1
                           [snake1.length-1]).classList.remove   ("snakebody1")
}
//Snake 3

    document.getElementById(snake2[0]).classList.add             ("snakehead")
if( snake2[1]!==undefined){
    document.getElementById(snake2[1]).classList.remove          ("snakehead")
for(i=1; i<message[1][i].length; i++) {
    document.getElementById(snake2[1]).classList.add             ("snakebody2");
}   document.getElementById(snake2
                           [snake2.length-1]).classList.remove   ("snakebody2")
}
//Snake 4
    document.getElementById(snake3[0]).classList.add             ("snakehead")
if( snake3[1]!==undefined){
    document.getElementById(snake3[1]).classList.remove          ("snakehead")
for(i=1; i<message[1][i].length; i++) {
    document.getElementById(snake3[1]).classList.add             ("snakebody3");
}   document.getElementById(snake3
                           [snake3.length-1]).classList.remove   ("snakebody3")
}
//Snake 5
    document.getElementById(snake4[0]).classList.add              ("snakehead")
if( snake4[1]!==undefined){
    document.getElementById(snake4[1]).classList.remove           ("snakehead")
for(i=1; i<message[1][i].length-1; i++) {
    document.getElementById(snake4[1]).classList.add              ("snakebody4");
}   document.getElementById(snake4
                           [snake4.length-1]).classList.remove    ("snakebody4")
}
//Snake 6
    document.getElementById(snake5[0]).classList.add              ("snakehead")
if( snake5[1]!==undefined){
    document.getElementById(snake5[1]).classList.remove           ("snakehead")
for(i=1; i<message[1][i].length-1; i++) {
    document.getElementById(snake5[1]).classList.add              ("snakebody5");
}   document.getElementById(snake5
                           [snake5.length-1]).classList.remove    ("snakebody5")
}
//Snake 7
    document.getElementById(snake6[0]).classList.add              ("snakehead")
if( snake6[1]!==undefined){
    document.getElementById(snake6[1]).classList.remove           ("snakehead")
for(i=1; i<message[1][i].length-1; i++) {
    document.getElementById(snake6[1]).classList.add              ("snakebody6");
}   document.getElementById(snake6
                           [snake6.length-1]).classList.remove    ("snakebody6")
}
//Snake 8
    document.getElementById(snake7[0]).classList.add              ("snakehead")
if( snake7[1]!==undefined){
    document.getElementById(snake7[1]).classList.remove           ("snakehead")
for(i=1; i<message[1][i].length-1; i++) {
    document.getElementById(snake7[1]).classList.add              ("snakebody7");
}   document.getElementById(snake7
                           [snake7.length-1]).classList.remove    ("snakebody7")
}
//Snake 9
    document.getElementById(snake8[0]).classList.add              ("snakehead")
if( snake8[1]!==undefined){
    document.getElementById(snake8[1]).classList.remove           ("snakehead")
for(i=1; i<message[1][i].length-1; i++) {
    document.getElementById(snake8[1]).classList.add              ("snakebody8");
}   document.getElementById(snake8
                           [snake8.length-1]).classList.remove    ("snakebody8")
}
//Snake 10
    document.getElementById(snake9[0]).classList.add              ("snakehead")
if( snake9[1]!==undefined){
    document.getElementById(snake9[1]).classList.remove           ("snakehead")
for(i=1; i<message[1][i].length-1; i++) {
    document.getElementById(snake9[1]).classList.add              ("snakebody9");
}   document.getElementById(snake9
                           [snake9.length-1]).classList.remove    ("snakebody9")
}
//Snake 11
    document.getElementById(snake10[0]).classList.add              ("snakehead")
if( snake10[1]!==undefined){
    document.getElementById(snake10[1]).classList.remove           ("snakehead")
for(i=1; i<message[1][i].length-1; i++) {
    document.getElementById(snake10[1]).classList.add              ("snakebody10");
}   document.getElementById(snake10
                           [snake10.length-1]).classList.remove    ("snakebody10")
}
//Snake 11
    document.getElementById(snake11[0]).classList.add              ("snakehead")
if( snake11[1]!==undefined){
    document.getElementById(snake11[1]).classList.remove           ("snakehead")
for(i=1; i<message[1][i].length-1; i++) {
    document.getElementById(snake11[1]).classList.add              ("snakebody11");
}   document.getElementById(snake11
                           [snake11.length-1]).classList.remove    ("snakebody11")
}}