var server = require('ws').Server;
var s = new server({port: 410});
let user = 1;
var usercount = 0;
var usercountmax = 12;
let snakelength, direction;
var foodpos = [,,,];
var newheadpos;
var x;
var y;
var snakebody = [["z13s3"],["z39s50"],["z39s3"],["z13s50"],["z3s26"],["z50s26"],["z3s13"],["z50s39"],["z3s39"],["z50s13"],["z26s3"],["z26s50"]];
s.on('connection', (ws) => {
    if (usercount === 0) {main(setInterval( main, 5)); }
    if (usercount>usercountmax) {usercount=0}                    //Wenn alles doof weg hauen. 
    if (usercount>usercountmax) {ws.send("fail"); ws.close; return}
    ws.send ('u' + ++usercount);
    ws.on('message', (message) => {
    main(JSON.parse(message));
    foodpos[3]=null;

    ws.on('close', function() {
        console.log("I lost a client");
    });
});
function main(data) {
    if (data === undefined) {return}
    snakelength = data[1]; console.log(data[1] + " Länge")
    direction = data[2]; console.log(direction + " Richtung")
    console.log(data)
    foodeat();
    foodfunky();
    if (data[0]!==null) {user=data[0];
    movement();
    ws.send('l' + snakelength)
    message=[foodpos, snakebody];
        s.clients.forEach((client) => {
        ws.send(JSON.stringify(message))
    });
}}
});
function foodeat() {
    for(i=0; i<12; i++) {
       if (snakebody[i][0]===foodpos[0]) {foodpos[3]=foodpos[0]; foodpos[0]=null; snakelength++}
       if (snakebody[i][0]===foodpos[1]) {foodpos[3]=foodpos[1]; foodpos[1]=null; snakelength++}
       if (snakebody[i][0]===foodpos[2]) {foodpos[3]=foodpos[2]; foodpos[2]=null; snakelength++}
       }
    }

function foodfunky() {
    for(i=0;i<3;i++) {
        if (foodpos[i] === undefined || foodpos[i]===null) {
            numx = Math.floor(Math.random() * 52+1);
            numy = Math.floor(Math.random() * 52+1);
            foodpos[i] = 'z' + numy + 's' + numx;
        }
    }   
}
function movement() {
    for(i=0;i<12;i++){
        if(i===user){
            headpos=snakebody[i][0];
            if (headpos.slice (3,4)==="s") {x = headpos.slice(4)}
            else {x = headpos.slice(3)}
            if (headpos.slice (3,4)==="s"){y = headpos.slice(1,3)}
            else{y = headpos.slice(1,2)}
            if (direction === 'left') {x--}  
            if (direction === 'up') {y--}
            if (direction === 'right') {x++}
            if (direction === 'down') {y++}
            if (x<=0 || x>=53 || y<=0 || y>=53) {console.log("Drecksdepp"); return;}
            newheadpos="z" + y + "s" + x; console.log(newheadpos + "Newheadpos");
            snakebody[i].unshift(newheadpos)
    if(snakebody[i].length>=snakelength){snakebody[i].pop()}
}}}


/*start */
 //[0=length,1=foodpos,2=snakebody]                                 [0,1,[20,21,22,23],3]