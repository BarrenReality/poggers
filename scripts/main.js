

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/PauseChamp.png') {
        myImage.setAttribute ('src','images/Pog.png');
    }   else {
        myImage.setAttribute ('src','images/PauseChamp.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName();
    } else {    
    localStorage.setItem('name', myName);
    myHeading.textContent = 'You\'re pretty POGGERS, ' + myName;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
}   else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'You\'re pretty POGGERS, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}

