let time = 0;
let age = 0;
let hunger = 1;
let sleep = 1;
let bordem = 1;
let image = document.getElementById('image');
let imageDead = "https://www.tamatalk.com/IB/uploads/profile/photo-188759.gif";

const nameInput = document.getElementById('nameInput');
const nameButton = document.getElementById('enterName');
const feedButton = document.getElementById('feed');
const lightsButton = document.getElementById('lights');
const playButton = document.getElementById('play');



class tamaPet {
	constructor(name, age, sleep, bordem, image) {
		this.name = name;
		this.age = age;
		this.sleep = sleep;
		this.bordem = bordem;
		this.image = image;
	}
}

function isAlive {
    if (tamaPet.sleep < 10 && tamaPet.bordem < 10 && tamaPet.bordem < 10) {
        return true; 
    } else if (tamaPet.sleep == 10 || tamaPet.bordem == 10 || tamaPet.bordem == 10) {
        return false
        console.log
    }
}



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

