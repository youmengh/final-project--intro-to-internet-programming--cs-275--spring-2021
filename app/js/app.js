windows.onload = () => {
    console.log(`%c JavaScript works!`,
    `background-color: yellow; font-weight: bold;`);
}

function Draw() {

    let user = prompt("Enter the size of diamond: ", "1");

    let size = parseInt(user);
    let numStar = 0;
    let numSpace = (size-1)/2;

    let x = document.getElementById("diamond-container");
    x.innerHTML = "";

    for(let i = 0; i < (size/2); i++) {
        for(let j = 0; j < numSpace; j++) {
            x.innerHTML += "&nbsp;&nbsp;";
        }
        numSpace--;
        numStar = (i*2) + 1;
        for(let k = 0; k < numStar; k++) {
            x.innerHTML += "*";
        }
        x.innerHTML += "<br />";
    }

}
