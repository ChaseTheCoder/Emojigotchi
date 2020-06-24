//----APP STATE
let time = 0;
let deathDrop = 10;
let lipSync = 10;
let entertain = 10;
let imageNormal = document.getElementById('image');
let imageDead = "https://www.tamatalk.com/IB/uploads/profile/photo-188759.gif";


//------CASHED DOM ELEMENTS
const deathDropButton = document.getElementById('deathDropButton');
const lipSyncButton = document.getElementById('lipSyncButton');
const entertainButton = document.getElementById('entertainButton');
const startButton = document.getElementById('enterName');

// function namePet() {
//     const nameInput = document.getElementById('nameInput');
//     const nameButton = document.getElementById('enterName');
// }

//-------EVENT LISTENERS
startButton.addEventListener('click', startTimer);

function startTimer() {
  const timer = setInterval(function () {
    if (time < 180) {
        time++;
        document.getElementById('timeSeen').innerText = `Time: ${time};`
    }
  }, 1000)
};

// function updateTime() {
//     document.getElementById('timeSeen').innerText = `Time: ${time};`
// }

function decreasePoints() {
    if (time < 180) {
        deathdrop--;
        lipSync--;
        entertain--;
        updatePoints();
    }
};

function updatePoints() {
    document.getElementById('deathDropPoints').innertext = `Deathdrop Points: ${deathDrop};`
    document.getElementById('lipSyncPoints').innertext = `Lip Sync Points: ${lipSync};`
    document.getElementById('entertainmentPoints').innertext = `Lip Sync Points: ${entertain};`
}

// class tamaPet {
// 	constructor(name, deathDrop, lipSync, entertain, image) {
// 		this.name = name,
// 		this.deathDrop = deathDrop,
// 		this.lipSync = lipSync,
// 		this.entertain = entertain,
// 		this.image = image,
// 	}
// }



// function sha {
//     if (tamaPet.sleep < 10 && tamaPet.boredem < 10 && tamaPet.bordem < 10) {
//         return true; 
//     } else if (tamaPet.sleep == 10 || tamaPet.bordem == 10 || tamaPet.boredem == 10) {
//         return false
//         console.log
//     }
// }
// console.log(isAlive);