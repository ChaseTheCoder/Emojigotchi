//----APP STATE
let time = 180;
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
    if (time > 0) {
        time--;
        console.log('time');
    }
  }, 1000)
};

// updateTime() {
//     document.getElementById('time').innerText = `Minutes until song ends: ${timer}`
// }

class tamaPet {
	constructor(name, age, sleep, bordem, image) {
		this.name = name;
		this.age = age;
		this.sleep = sleep;
		this.bordem = bordem;
		this.image = image;
	}
}



// function isAlive {
//     if (tamaPet.sleep < 10 && tamaPet.boredem < 10 && tamaPet.bordem < 10) {
//         return true; 
//     } else if (tamaPet.sleep == 10 || tamaPet.bordem == 10 || tamaPet.boredem == 10) {
//         return false
//         console.log
//     }
// }
// console.log(isAlive);



// function timer() {
// }

// function changeImage(){
// }



// gameStart{
// }

// class time {
// }

// class imageChange {
// }

// class imageChangePerm {
// }

// class ageUp {
// }

// class metricIncrease {
// }

// class metricDecrease {
// }

