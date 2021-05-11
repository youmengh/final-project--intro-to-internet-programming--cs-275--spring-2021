windows.onload = () => {
    console.log(`%c colavaScript works!`,
        `background-color: yellow; font-weight: bold;`);
}

function drawDiamond() {

    let user = prompt("Enter the size of diamond: ", "1");
    let size = parseInt(user);

    if (size % 2 == 0) {        //If size is even, prints even-sized diamond

        let numStar = 0.5;
        let numSpace = size / 2;

        let x = document.getElementById("diamond-container");
        x.innerHTML = "";

        //Prints top half of diamond
        for (let i = 0; i <= (size / 2); i++) {
            for (let j = 0; j < numSpace; j++) {            //Prints spaces
                x.innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;";
            }
            numSpace--;
            numStar = i;
            if (numStar < 1) {
                x.innerHTML += "*";                         //Prints stars
            } else {
                for (let k = 0; k < numStar; k++) {         //Prints stars
                    x.innerHTML += "&nbsp;*&nbsp;";
                }
                x.innerHTML += "&nbsp;&nbsp;";
                for (let l = 0; l < numStar; l++) {         //Prints stars
                    x.innerHTML += "&nbsp;*&nbsp;";
                }
            }
            x.innerHTML += "<br />";
        }
        numSpace = 1;
        //Prints bottom half of diamond
        for (let i = 0; i < (size / 2); i++) {
            for (let j = 0; j < numSpace; j++) {            //Prints spaces
                x.innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;";
            }
            numStar = size - (numSpace * 2);
            numSpace++;
            if (numStar < 1) {                              //Prints stars
                x.innerHTML += "*";
            } else {
                for (let k = 0; k < (numStar / 2); k++) {   //Prints stars
                    x.innerHTML += "&nbsp;*&nbsp;";
                }
                x.innerHTML += "&nbsp;&nbsp;";
                for (let l = 0; l < (numStar / 2); l++) {   //Prints stars
                    x.innerHTML += "&nbsp;*&nbsp;";
                }
            }
            x.innerHTML += "<br / >";
        }
    } else {        //If size is odd, prints odd-sized diamond

        let numStar = 0;
        let numSpace = (size-1)/2;

        let x = document.getElementById("diamond-container");
        x.innerHTML = "";

        //Prints top half of diamond
        for(let row = 0; row < (size/2); row++) {
            for(let col = 0; col < numSpace; col++) {       //Prints spaces
                x.innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;";
            }
            numSpace--;
            numStar = (row*2) + 1;
            for(let k = 0; k < numStar; k++) {              //Prints stars
                x.innerHTML += "&nbsp;*&nbsp;";
            }
            x.innerHTML += "<br />";
        }
        numSpace = 1;
        //Prints bottom half of diamond
        for(let row = 1; row <= (size-1)/2; row++) {
            for(let col = 0; col < numSpace; col++) {       //Prints spaces
                x.innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;";
            }
            numSpace++;
            numStar = size - (row*2);
            for(let k = 0; k < numStar; k++) {              //Prints stars
                x.innerHTML += "&nbsp;*&nbsp;";
            }
            x.innerHTML += "<br />";
        }
    }
}
