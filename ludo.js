const display = document.getElementById("display");



const yc1 = document.getElementById("yellow-circle-1");
const yc2 = document.getElementById("yellow-circle-2");
const yc3 = document.getElementById("yellow-circle-3");
const yc4 = document.getElementById("yellow-circle-4");

const bc1 = document.getElementById("blue-circle-1");
const bc2 = document.getElementById("blue-circle-2");
const bc3 = document.getElementById("blue-circle-3");
const bc4 = document.getElementById("blue-circle-4");

const gc1 = document.getElementById("green-circle-1");
const gc2 = document.getElementById("green-circle-2");
const gc3 = document.getElementById("green-circle-3");
const gc4 = document.getElementById("green-circle-4");

const rc1 = document.getElementById("red-circle-1");
const rc2 = document.getElementById("red-circle-2");
const rc3 = document.getElementById("red-circle-3");
const rc4 = document.getElementById("red-circle-4");

const graph = [];
for (let i = 0; i < 131; i++) graph[i] = [];

for (let i = 0; i < 52; i++) {
  for (let j = 1; j < 7; j++) {
    if (i + j <= 52) graph[i].push(i + j);
  }
}
graph[48].push(1);
graph[48].push(2);

graph[49].push(1);
graph[49].push(2);
graph[49].push(3);

graph[50].push(1);
graph[50].push(2);
graph[50].push(3);
graph[50].push(4);

graph[51].push(1);
graph[51].push(2);
graph[51].push(3);
graph[51].push(4);
graph[51].push(5);

graph[52].push(1);
graph[52].push(2);
graph[52].push(3);
graph[52].push(4);
graph[52].push(5);
graph[52].push(6);

graph[41].push("100");
graph[42].push("100");
graph[42].push("101");

graph[43].push("100");
graph[43].push("101");
graph[43].push("102");

graph[44].push("100");
graph[44].push("101");
graph[44].push("102");
graph[44].push("103");

graph[45].push("100");
graph[45].push("101");
graph[45].push("102");
graph[45].push("103");
graph[45].push("104");

graph[46].push("100");
graph[46].push("101");
graph[46].push("102");
graph[46].push("103");
graph[46].push("104");
graph[46].push("130");//edited

graph[100].push(101);
graph[100].push(102);
graph[100].push(103);
graph[100].push(104);
graph[100].push(130);

graph[101].push(102);
graph[101].push(103);
graph[101].push(104);
graph[101].push(130);

graph[102].push(103)
graph[102].push(104)
graph[102].push(130)

graph[103].push(104)
graph[103].push(130)    //130 is for win

graph[104].push(130)

graph[15].push(110);

graph[16].push(110);
graph[16].push(111);

graph[17].push(110);
graph[17].push(111);
graph[17].push(112);

graph[18].push(110);
graph[18].push(111);
graph[18].push(112);
graph[18].push(113);

graph[19].push(110);
graph[19].push(111);
graph[19].push(112);
graph[19].push(113);
graph[19].push(114);
graph[19].push(130);

graph[20].push(110);
graph[20].push(111);
graph[20].push(112);
graph[20].push(113);
graph[20].push(114);
graph[20].push(130);

graph[110].push(111)
graph[110].push(112)
graph[110].push(113)
graph[110].push(114)
graph[110].push(130)

graph[111].push(112)
graph[111].push(113)
graph[111].push(114)
graph[111].push(130)

graph[112].push(113)
graph[112].push(114)
graph[112].push(130)

graph[113].push(114)
graph[113].push(130)

graph[114].push(130)

//for green
graph[2].push(116);

graph[3].push(116);
graph[3].push(117);

graph[4].push(116);
graph[4].push(117);
graph[4].push(118);

graph[5].push(116);
graph[5].push(117);
graph[5].push(118);
graph[5].push(119);

graph[6].push(116);
graph[6].push(117);
graph[6].push(118);
graph[6].push(119);
graph[6].push(120);

graph[7].push(116);
graph[7].push(117);
graph[7].push(118);
graph[7].push(119);
graph[7].push(120);
graph[7].push(130);

graph[116].push(117);
graph[116].push(118);
graph[116].push(119);
graph[116].push(120);
graph[116].push(130);

graph[117].push(118);
graph[117].push(119);
graph[117].push(120);
graph[117].push(130);

graph[118].push(119);
graph[118].push(120);
graph[118].push(130);

graph[119].push(120);
graph[119].push(130);

graph[120].push(130);

//for blue
graph[28].push(122);

graph[29].push(122);
graph[29].push(123);

graph[30].push(122);
graph[30].push(123);
graph[30].push(124);

graph[31].push(122);
graph[31].push(123);
graph[31].push(124);
graph[31].push(125);

graph[32].push(122);
graph[32].push(123);
graph[32].push(124);
graph[32].push(125);
graph[32].push(126);

graph[33].push(122);
graph[33].push(123);
graph[33].push(124);
graph[33].push(125);
graph[33].push(126);
graph[33].push(130);

graph[122].push(123);
graph[122].push(124);
graph[122].push(125);
graph[122].push(126);
graph[122].push(130);

graph[123].push(124);
graph[123].push(125);
graph[123].push(126);
graph[123].push(130);

graph[124].push(125);
graph[124].push(126);
graph[124].push(130);

graph[125].push(126);
graph[125].push(130);

graph[126].push(130);


// }
// rc1.innerHTML = "R";
y=window.scrollY + document.getElementById('red-circle-1').getBoundingClientRect().top-60 // Y
x=window.scrollX + document.getElementById('red-circle-1').getBoundingClientRect().left+10 // X
var reddana= document.getElementById("reddana")
reddana.style.position='absolute';
reddana.style.left=x+"px";
reddana.style.top=y+"px";


// gc1.innerHTML = "G";
y=window.scrollY + document.getElementById('green-circle-1').getBoundingClientRect().top-60 // Y
x=window.scrollX + document.getElementById('green-circle-1').getBoundingClientRect().left+10 // X
var greendana= document.getElementById("greendana")
greendana.style.position='absolute';
greendana.style.left=x+"px";
greendana.style.top=y+"px";


// yc1.innerHTML = "Y";
y=window.scrollY + document.getElementById('yellow-circle-1').getBoundingClientRect().top-60 // Y
x=window.scrollX + document.getElementById('yellow-circle-1').getBoundingClientRect().left+10 // X
var yellowdana= document.getElementById("yellowdana")
yellowdana.style.position='absolute';
yellowdana.style.left=x+"px";
yellowdana.style.top=y+"px";

// bc1.innerHTML = "B";
y=window.scrollY + document.getElementById('blue-circle-1').getBoundingClientRect().top-60 // Y
x=window.scrollX + document.getElementById('blue-circle-1').getBoundingClientRect().left+10 // X
var bluedana= document.getElementById("bluedana")
bluedana.style.position='absolute';
bluedana.style.left=x+"px";
bluedana.style.top=y+"px";

const dice = document.getElementById("dice");
var toggler = 1;
var previousturn = -1;

const redstack = [];
const yellowstack = [];
const greenstack = [];
const bluestack = [];

redstack.push(48);
yellowstack.push(22);
greenstack.push(9);
bluestack.push(35);

var ifCanMoveRed = 0; //red can move after 6
var ifCanMoveYellow = 0;  // yellow can move after 6
var ifCanMoveBlue = 0;  // blue can move after 6
var ifCanMoveGreen = 0;  // green can move after 6

var redCounter = 0  //to check when the red throws for first time
var yellowCounter = 0
var blueCounter = 0
var greenCounter = 0
display.innerHTML = "Red roll the dice!!"

dice.innerHTML=`<img style="width:50%; height: 50%;" src='assets/dice/dice-${1}.png' alt="">`

dice.addEventListener("click", func = () => {
  let j=0
  var cleartime = setInterval(() => {
    j += 1;
  
    html = `<img style="width:60%; height: 60%;" src='assets/dice/dice-${j}.png' alt="">`
    dice.innerHTML = html
  
  
    if (j == 6) {
      clearInterval(cleartime)
    }
  }, 100)

  let diceVal = Math.floor(Math.random() * 6 + 1);
  setTimeout(() => {
    // let val = Math.floor((Math.random() * 6) + 1)
    dice.innerHTML = `<img style="width:50%; height: 50%;" src='assets/dice/dice-${diceVal}.png' alt="">`
    // console.log("f")
    switch (toggler) {
        case 1:
          display.innerHTML = "Green roll the dice!!";
          break;
        case 2:
          display.innerHTML = "Yellow roll the dice!!";
          break;
        case 3:
          display.innerHTML = "Blue roll the dice!!";
          break;
        case 4:
          display.innerHTML = "Red roll the dice!!";
          break;
      }
  }, 600)


  
  setTimeout(() => {
    var currPos
    console.log(toggler)
    

    if (toggler == 1) {

      if (diceVal == 6 && toggler == 1 && redstack[0] == 48 && redCounter == 0) {   // for setting ifCanMoveRed
        ifCanMoveRed = 1;
        redCounter = 1;
      }

      toggler = 2
      previousturn = 1;
      if (ifCanMoveRed == 1 && redstack[0] == 48 && redCounter == 1) {
        console.log("ho")
        currPos = redstack.pop();
        y=window.scrollY + document.getElementById('id'+currPos).getBoundingClientRect().top // Y
        x=window.scrollX + document.getElementById('id'+currPos).getBoundingClientRect().left // X
        var reddana= document.getElementById("reddana")
        reddana.style.position='absolute';
        reddana.style.left=x+"px";
        reddana.style.top=y+"px";
        
        redstack.push(currPos)
        redCounter++
        // rc1.innerHTML = ""
        return
      }
      if (ifCanMoveRed != 1)
        return;

      if (diceVal == 6) {
        toggler = 1
      }
      currPos = redstack.pop();
      document.getElementById("id" + currPos).innerHTML = "";
      let newPos = graph[currPos][diceVal - 1];
      if (currPos >= 41 && currPos <= 46) {
        if (newPos > 46) {
          switch (currPos) {
            case 41:
              diceVal += 0;
              break;
            case 42:
              diceVal += 1;
              break;
            case 43:
              diceVal += 2;
              break;
            case 44:
              diceVal += 3;
              break;
            case 45:
              diceVal += 4;
              break;
            case 46:
              diceVal += 5;
              break;
          }
          newPos = graph[currPos][diceVal];

          console.log("gfsfdf", newPos);
        }
      }
      if (newPos == undefined) {
        console.log("j")
        newPos = currPos
      }
      // console.log(currPos, graph[currPos]);
      // console.log(newPos, graph[newPos]);
      const id = "id" + newPos;


      if (newPos == 130) {
        dice.removeEventListener("click", func)
        dice.innerHTML = "Red wins"
        y=window.scrollY + document.getElementById("dice").getBoundingClientRect().top // Y
        x=window.scrollX + document.getElementById("dice").getBoundingClientRect().left // X
        var reddana= document.getElementById("reddana")
        reddana.style.position='absolute';
        reddana.style.left=x+"px";
        reddana.style.top=y+"px";
      }
      else {
        y=window.scrollY + document.getElementById(id).getBoundingClientRect().top // Y
        x=window.scrollX + document.getElementById(id).getBoundingClientRect().left // X
        var reddana= document.getElementById("reddana")
        reddana.style.position='absolute';
        reddana.style.left=x+"px";
        reddana.style.top=y+"px";

        redstack.push(newPos);
      }
    }

    else if (toggler == 2) { //green

      if (diceVal == 6 && toggler == 2 && greenstack[0] == 9 && greenCounter == 0) {   // for setting ifCanMoveRed
        ifCanMoveGreen = 1;
        greenCounter = 1;
      }

      toggler = 3 //setting for yellow
      previousturn = 2
      if (ifCanMoveGreen == 1 && greenstack[0] == 9 && greenCounter == 1) {
        console.log("green")
        currPos = greenstack.pop();
        // document.getElementById("id" + currPos).innerHTML = "G";
        y=window.scrollY + document.getElementById('id'+currPos).getBoundingClientRect().top // Y
        x=window.scrollX + document.getElementById('id'+currPos).getBoundingClientRect().left // X
        var greendana= document.getElementById("greendana")
        greendana.style.position='absolute';
        greendana.style.left=x+"px";
        greendana.style.top=y+"px";
        greenstack.push(currPos)
        greenCounter++
        gc1.innerHTML = ""
        return
      }
      if (ifCanMoveGreen != 1)
        return;
      if (diceVal == 6) {
        toggler = 2
      }
      currPos = greenstack.pop();
      document.getElementById("id" + currPos).innerHTML = "";
      let newPos = graph[currPos][diceVal - 1];
      if (currPos >= 2 && currPos <= 7) {
        if (newPos > 7) {
          switch (currPos) {
            case 2:
              diceVal += 0;
              break;
            case 3:
              diceVal += 1;
              break;
            case 4:
              diceVal += 2;
              break;
            case 5:
              diceVal += 3;
              break;
            case 6:
              diceVal += 4;
              break;
            case 7:
              diceVal += 5;
              break;
          }
          newPos = graph[currPos][diceVal];

          console.log("gfsfdf", newPos);
        }
      }
      if (newPos == undefined) {
        console.log("j")
        newPos = currPos
      }
      // console.log(currPos, graph[currPos]);
      // console.log(newPos, graph[newPos]);
      const id = "id" + newPos;


      if (newPos == 130) {
        dice.removeEventListener("click", func)
        dice.innerHTML = "Green wins"
        y=window.scrollY + document.getElementById("dice").getBoundingClientRect().top // Y
        x=window.scrollX + document.getElementById("dice").getBoundingClientRect().left // X
        var greendana= document.getElementById("greendana")
        greendana.style.position='absolute';
        greendana.style.left=x+"px";
        greendana.style.top=y+"px";
      }
      else {
        // document.getElementById(id).innerHTML = "G";
        y=window.scrollY + document.getElementById(id).getBoundingClientRect().top // Y
        x=window.scrollX + document.getElementById(id).getBoundingClientRect().left // X
        var greendana= document.getElementById("greendana")
        greendana.style.position='absolute';
        greendana.style.left=x+"px";
        greendana.style.top=y+"px";
        greenstack.push(newPos);
      }
    }

    else if (toggler == 3) {

      if (diceVal == 6 && toggler == 3 && yellowstack[0] == 22 && yellowCounter == 0) {
        ifCanMoveYellow = 1;
        yellowCounter = 1;
      }
      toggler = 4
      previousturn = 3;
      if (ifCanMoveYellow == 1 && yellowstack[0] == 22 && yellowCounter == 1) {
        currPos = yellowstack.pop();
        document.getElementById("id" + currPos).innerHTML = "Y";
        y=window.scrollY + document.getElementById('id'+currPos).getBoundingClientRect().top // Y
        x=window.scrollX + document.getElementById('id'+currPos).getBoundingClientRect().left // X
        var yellowdana= document.getElementById("yellowdana")
        yellowdana.style.position='absolute';
        yellowdana.style.left=x+"px";
        yellowdana.style.top=y+"px";
        yellowstack.push(currPos)
        yellowCounter++
        yc1.innerHTML = ""
        return;
      }
      if (ifCanMoveYellow != 1)
        return;
      if (diceVal == 6) {
        toggler = 3
      }
      currPos = yellowstack.pop();
      document.getElementById("id" + currPos).innerHTML = "";
      let newPos = graph[currPos][diceVal - 1];
      if (currPos >= 15 && currPos <= 20) {
        if (newPos > 20) {
          switch (currPos) {
            case 15:
              diceVal += 0;
              break;
            case 16:
              diceVal += 1;
              break;
            case 17:
              diceVal += 2;
              break;
            case 18:
              diceVal += 3;
              break;
            case 19:
              diceVal += 4;
              break;
            case 20:
              diceVal += 5;
              break;
          }
          newPos = graph[currPos][diceVal];

          console.log("gfsfdf", newPos);
        }
      }
      if (newPos == undefined) {
        console.log("j")
        newPos = currPos
      }
      // console.log(currPos, graph[currPos]);
      // console.log(newPos, graph[newPos]);
      const id = "id" + newPos;


      if (newPos == 130) {
        dice.removeEventListener("click", func)
        dice.innerHTML = "Yellow wins"
        y=window.scrollY + document.getElementById("dice").getBoundingClientRect().top // Y
        x=window.scrollX + document.getElementById("dice").getBoundingClientRect().left // X
        var yellowdana= document.getElementById("yellowdana")
        yellowdana.style.position='absolute';
        yellowdana.style.left=x+"px";
        yellowdana.style.top=y+"px";
      }
      else {
        y=window.scrollY + document.getElementById(id).getBoundingClientRect().top // Y
        x=window.scrollX + document.getElementById(id).getBoundingClientRect().left // X
        var yellowdana= document.getElementById("yellowdana")
        yellowdana.style.position='absolute';
        yellowdana.style.left=x+"px";
        yellowdana.style.top=y+"px";
        yellowstack.push(newPos);
      }
    }

    else if (toggler == 4) {

      if (diceVal == 6 && toggler == 4 && bluestack[0] == 35 && blueCounter == 0) {
        ifCanMoveBlue = 1;
        blueCounter = 1;
      }
      toggler = 1
      previousturn = 4;
      if (ifCanMoveBlue == 1 && bluestack[0] == 35 && blueCounter == 1) {
        currPos = bluestack.pop();
        // document.getElementById("id" + currPos).innerHTML = "B";
        y=window.scrollY + document.getElementById('id'+currPos).getBoundingClientRect().top // Y
        x=window.scrollX + document.getElementById('id'+currPos).getBoundingClientRect().left // X
        var bluedana= document.getElementById("bluedana")
        bluedana.style.position='absolute';
        bluedana.style.left=x+"px";
        bluedana.style.top=y+"px";
        bluestack.push(currPos)
        blueCounter++
        bc1.innerHTML = ""
        return;
      }
      if (ifCanMoveBlue != 1)
        return;
      if (diceVal == 6) {
        toggler = 4
      }
      currPos = bluestack.pop();
      document.getElementById("id" + currPos).innerHTML = "";
      let newPos = graph[currPos][diceVal - 1];
      if (currPos >= 28 && currPos <= 33) {
        if (newPos > 33) {
          switch (currPos) {
            case 28:
              diceVal += 0;
              break;
            case 29:
              diceVal += 1;
              break;
            case 30:
              diceVal += 2;
              break;
            case 31:
              diceVal += 3;
              break;
            case 32:
              diceVal += 4;
              break;
            case 33:
              diceVal += 5;
              break;
          }
          newPos = graph[currPos][diceVal];

          console.log("gfsfdf", newPos);
        }
      }
      if (newPos == undefined) {
        console.log("j")
        newPos = currPos
      }
      // console.log(currPos, graph[currPos]);
      // console.log(newPos, graph[newPos]);
      const id = "id" + newPos;


      if (newPos == 130) {
        dice.removeEventListener("click", func)
        dice.innerHTML = "Blue wins"
        y=window.scrollY + document.getElementById("dice").getBoundingClientRect().top // Y
        x=window.scrollX + document.getElementById("dice").getBoundingClientRect().left // X
        var bluedana= document.getElementById("bluedana")
        bluedana.style.position='absolute';
        bluedana.style.left=x+"px";
        bluedana.style.top=y+"px";
      }
      else {
        y=window.scrollY + document.getElementById(id).getBoundingClientRect().top // Y
        x=window.scrollX + document.getElementById(id).getBoundingClientRect().left // X
        var bluedana= document.getElementById("bluedana")
        bluedana.style.position='absolute';
        bluedana.style.left=x+"px";
        bluedana.style.top=y+"px";
        bluestack.push(newPos);
      }
    }
    //red cuts
    if (previousturn == 1 && redstack[0] != 4 && redstack[0] != 9 && redstack[0] != 17 && redstack[0] != 22 && redstack[0] != 30 && redstack[0] != 35 && redstack[0] != 43 && redstack[0] != 48) {
        //cuts yellow
        if (redstack[0] == yellowstack[0]) {
          // yc1.innerHTML = "Y";
          let pos = yellowstack.pop();
          y=window.scrollY + document.getElementById('yellow-circle-1').getBoundingClientRect().top // Y
          x=window.scrollX + document.getElementById('yellow-circle-1').getBoundingClientRect().left // X
          var yellowdana= document.getElementById("yellowdana")
          yellowdana.style.position='absolute';
          yellowdana.style.left=x+"px";
          yellowdana.style.top=y+"px";
  
          
          yellowstack.push(22)
          yellowCounter = 0;
          ifCanMoveYellow = 0
        }
        //cuts blue
        if (redstack[0] == bluestack[0]) {
          bc1.innerHTML = "B";
          let pos = bluestack.pop();
          // document.getElementById("id" + pos).innerHTML = "R";
          y=window.scrollY + document.getElementById('blue-circle-1').getBoundingClientRect().top // Y
          x=window.scrollX + document.getElementById('blue-circle-1').getBoundingClientRect().left // X
          var bluedana= document.getElementById("bluedana")
          bluedana.style.position='absolute';
          bluedana.style.left=x+"px";
          bluedana.style.top=y+"px";
          bluestack.push(35)
          blueCounter = 0;
          ifCanMoveBlue = 0
        }
        //cuts green
        if (redstack[0] == greenstack[0]) {
          gc1.innerHTML = "G";
          let pos = greenstack.pop();
          // document.getElementById("id" + pos).innerHTML = "R";
          y=window.scrollY + document.getElementById('green-circle-1').getBoundingClientRect().top // Y
          x=window.scrollX + document.getElementById('green-circle-1').getBoundingClientRect().left // X
          var greendana= document.getElementById("greendana")
          greendana.style.position='absolute';
          greendana.style.left=x+"px";
          greendana.style.top=y+"px";
          greenstack.push(9)
          greenCounter = 0;
          ifCanMoveGreen = 0
        }
      }
      //green cuts
      else if (previousturn == 2 && greenstack[0] != 4 && greenstack[0] != 9 && greenstack[0] != 17 && greenstack[0] != 22 && greenstack[0] != 30 && greenstack[0] != 35 && greenstack[0] != 43 && greenstack[0] != 48) {
        //cuts yellow
        if (greenstack[0] == yellowstack[0]) {
          // yc1.innerHTML = "Y";
          let pos = yellowstack.pop();
          // document.getElementById("id" + pos).innerHTML = "G";
          y=window.scrollY + document.getElementById('yellow-circle-1').getBoundingClientRect().top // Y
          x=window.scrollX + document.getElementById('yellow-circle-1').getBoundingClientRect().left // X
          var yellowdana= document.getElementById("yellowdana")
          yellowdana.style.position='absolute';
          yellowdana.style.left=x+"px";
          yellowdana.style.top=y+"px";
          yellowstack.push(22)
          yellowCounter = 0;
          ifCanMoveYellow = 0
        }
        //cuts blue
        if (greenstack[0] == bluestack[0]) {
          // bc1.innerHTML = "B";
          let pos = bluestack.pop();
          // document.getElementById("id" + pos).innerHTML = "G";
          y=window.scrollY + document.getElementById('blue-circle-1').getBoundingClientRect().top // Y
          x=window.scrollX + document.getElementById('blue-circle-1').getBoundingClientRect().left // X
          var bluedana= document.getElementById("bluedana")
          bluedana.style.position='absolute';
          bluedana.style.left=x+"px";
          bluedana.style.top=y+"px";
          bluestack.push(35)
          blueCounter = 0;
          ifCanMoveBlue = 0
        }
        //cuts red
        if (redstack[0] == greenstack[0]) {
          // rc1.innerHTML = "R";
          let pos = redstack.pop();
          // document.getElementById("id" + pos).innerHTML = "G";
          y=window.scrollY + document.getElementById('red-circle-1').getBoundingClientRect().top // Y
          x=window.scrollX + document.getElementById('red-circle-1').getBoundingClientRect().left // X
          var reddana= document.getElementById("reddana")
          reddana.style.position='absolute';
          reddana.style.left=x+"px";
          reddana.style.top=y+"px";
          redstack.push(48)
          redCounter = 0;
          ifCanMoveRed = 0
        }
      }
      //yellow cuts
      else if (previousturn == 3 && yellowstack[0] != 4 && yellowstack[0] != 9 && yellowstack[0] != 17 && yellowstack[0] != 22 && yellowstack[0] != 30 && yellowstack[0] != 35 && yellowstack[0] != 43 && yellowstack[0] != 48) {
        //cuts green
        if (greenstack[0] == yellowstack[0]) {
          // gc1.innerHTML = "G";
          let pos = greenstack.pop();
          // document.getElementById("id" + pos).innerHTML = "Y";
          y=window.scrollY + document.getElementById('green-circle-1').getBoundingClientRect().top // Y
          x=window.scrollX + document.getElementById('green-circle-1').getBoundingClientRect().left // X
          var greendana= document.getElementById("greendana")
          greendana.style.position='absolute';
          greendana.style.left=x+"px";
          greendana.style.top=y+"px";
          greenstack.push(9)
          greenCounter = 0;
          ifCanMoveGreen = 0
        }
        //cuts blue
        if (yellowstack[0] == bluestack[0]) {
          // bc1.innerHTML = "B";
          let pos = bluestack.pop();
          // document.getElementById("id" + pos).innerHTML = "Y";
          y=window.scrollY + document.getElementById('blue-circle-1').getBoundingClientRect().top // Y
          x=window.scrollX + document.getElementById('blue-circle-1').getBoundingClientRect().left // X
          var bluedana= document.getElementById("bluedana")
          bluedana.style.position='absolute';
          bluedana.style.left=x+"px";
          bluedana.style.top=y+"px";
          bluestack.push(35)
          blueCounter = 0;
          ifCanMoveBlue = 0
        }
        //cuts red
        if (redstack[0] == yellowstack[0]) {
          // rc1.innerHTML = "R";
          let pos = redstack.pop();
          // document.getElementById("id" + pos).innerHTML = "Y";
          y=window.scrollY + document.getElementById('red-circle-1').getBoundingClientRect().top // Y
          x=window.scrollX + document.getElementById('red-circle-1').getBoundingClientRect().left // X
          var reddana= document.getElementById("reddana")
          reddana.style.position='absolute';
          reddana.style.left=x+"px";
          reddana.style.top=y+"px";
          redstack.push(48)
          redCounter = 0;
          ifCanMoveRed = 0
        }
      }
      //blue cuts
      else if (previousturn == 4 && bluestack[0] != 4 && bluestack[0] != 9 && bluestack[0] != 17 && bluestack[0] != 22 && bluestack[0] != 30 && bluestack[0] != 35 && bluestack[0] != 43 && bluestack[0] != 48) {
        //cuts yellow
        if (bluestack[0] == yellowstack[0]) {
          // yc1.innerHTML = "Y";
          let pos = yellowstack.pop();
          // document.getElementById("id" + pos).innerHTML = "B";
          y=window.scrollY + document.getElementById('yellow-circle-1').getBoundingClientRect().top // Y
          x=window.scrollX + document.getElementById('yellow-circle-1').getBoundingClientRect().left // X
          
          var yellowdana= document.getElementById("yellowdana")
          yellowdana.style.position='absolute';
          yellowdana.style.left=x+"px";
          yellowdana.style.top=y+"px";
          yellowstack.push(22)
          yellowCounter = 0;
          ifCanMoveYellow = 0
        }
        //cuts green
        if (greenstack[0] == bluestack[0]) {
          // gc1.innerHTML = "G";
          let pos = greenstack.pop();
          // document.getElementById("id" + pos).innerHTML = "B";
          y=window.scrollY + document.getElementById('green-circle-1').getBoundingClientRect().top // Y
          x=window.scrollX + document.getElementById('green-circle-1').getBoundingClientRect().left // X
          var greendana= document.getElementById("greendana")
          greendana.style.position='absolute';
          greendana.style.left=x+"px";
          greendana.style.top=y+"px";
          greenstack.push(9)
          greenCounter = 0;
          ifCanMoveGreen = 0
        }
        //cuts red
        if (redstack[0] == bluestack[0]) {
          // rc1.innerHTML = "R";
          let pos = redstack.pop();
          // document.getElementById("id" + pos).innerHTML = "B";
          y=window.scrollY + document.getElementById('red-circle-1').getBoundingClientRect().top // Y
          x=window.scrollX + document.getElementById('red-circle-1').getBoundingClientRect().left // X
          var reddana= document.getElementById("reddana")
          reddana.style.position='absolute';
          reddana.style.left=x+"px";
          reddana.style.top=y+"px";
          redstack.push(48)
          redCounter = 0;
          ifCanMoveRed = 0
        }
      }
  }, 600)
});