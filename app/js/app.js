window.onload = () => {
    let user = prompt("Enter the size of diamond: ", "1");
    let size = parseInt(user);
    drawDiamond(size);
    runAnimation();
}

function drawDiamond(size) {

    if (size % 2 == 0) {        //If size is even, prints even-sized diamond

        let numStar = 0.5;
        let numSpace = size / 2;

        let x = document.getElementById("diamond-container");
        x.innerHTML = "";

        //Prints top half of diamond
        for (let row = 0; row <= (size / 2); row++) {
            for (let col = 0; col < numSpace; col++) {            //Prints spaces
                x.innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;";
            }
            numSpace--;
            numStar = row;
            if (numStar < 1) {
                x.innerHTML += "*";                         //Prints stars
            } else {
                for (let col = 0; col < numStar; col++) {         //Prints stars
                    x.innerHTML += "&nbsp;*&nbsp;";
                }
                x.innerHTML += "&nbsp;&nbsp;";
                for (let col = 0; col < numStar; col++) {         //Prints stars
                    x.innerHTML += "&nbsp;*&nbsp;";
                }
            }
            x.innerHTML += "<br />";
        }
        numSpace = 1;
        //Prints bottom half of diamond
        for (let row = 0; row < (size / 2); row++) {
            for (let col = 0; col < numSpace; col++) {            //Prints spaces
                x.innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;";
            }
            numStar = size - (numSpace * 2);
            numSpace++;
            if (numStar < 1) {                              //Prints stars
                x.innerHTML += "*";
            } else {
                for (let col = 0; col < (numStar / 2); col++) {   //Prints stars
                    x.innerHTML += "&nbsp;*&nbsp;";
                }
                x.innerHTML += "&nbsp;&nbsp;";
                for (let col = 0; col < (numStar / 2); col++) {   //Prints stars
                    x.innerHTML += "&nbsp;*&nbsp;";
                }
            }
            x.innerHTML += "<br / >";
        }
    } else {        //If size is odd, prints odd-sized diamond

        let numStar = 0;
        let numSpace = (size - 1) / 2;

        let x = document.getElementById("diamond-container");
        x.innerHTML = "";

        //Prints top half of diamond
        for (let row = 0; row < (size / 2); row++) {
            for (let col = 0; col < numSpace; col++) {       //Prints spaces
                x.innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;";
            }
            numSpace--;
            numStar = (row * 2) + 1;
            for (let col = 0; col < numStar; col++) {              //Prints stars
                x.innerHTML += "&nbsp;*&nbsp;";
            }
            x.innerHTML += "<br />";
        }
        numSpace = 1;
        //Prints bottom half of diamond
        for (let row = 1; row <= (size - 1) / 2; row++) {
            for (let col = 0; col < numSpace; col++) {       //Prints spaces
                x.innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;";
            }
            numSpace++;
            numStar = size - (row * 2);
            for (let col = 0; col < numStar; col++) {              //Prints stars
                x.innerHTML += "&nbsp;*&nbsp;";
            }
            x.innerHTML += "<br />";
        }
    }
}

function runAnimation() {
    let box = document.getElementById("diamond-container");
    let styleLeft = 0;
    let rightMost = false;

    function slide() {
        let border = document.querySelector(`html`).clientWidth - document.getElementById("diamond-container").clientWidth;

        //When left offset is less than border and
        //diamond has not yet hit the right most
        if(styleLeft < border && !rightMost) {
            styleLeft++;
        }
        //When diamond hit the right most or passed boundary
        if (styleLeft >= border) {
            styleLeft--;
            rightMost = true;
        }
        //When diamond hit the left most or passed boundary
        if (styleLeft <= 0) {
            styleLeft++;
            rightMost = false;
        }
        //When diamond has hit the right most and needs to be
        //pushed back all the way to the left
        if (rightMost) {
            styleLeft--;
        }

    };

    setInterval(slide,1);
    
}
