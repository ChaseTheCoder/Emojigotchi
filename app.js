//----APP STATE
 
let hunger = 1;
let sleepiness = 1;
let boredom = 1;
// let image = document.getElementById('divImage');
const imageLifeCycle = ['👶', '👦', '👨', '👨‍🦳'];
const imageDead = "🧟‍♂️";
let imageAge = 0;

//------CASHED DOM ELEMENTS
const feedPet = document.getElementById('feed');
const sleepPet = document.getElementById('sleep');
const playPet = document.getElementById('play');
const startButton = document.getElementById('enterName');
const image = document.getElementById('divImage');

//-------EVENT LISTENERS
startButton.addEventListener('click', startTimer);
startButton.addEventListener('click', hungerIncrease);
startButton.addEventListener('click', sleepinessIncrease);
startButton.addEventListener('click', boredomIncrease);
startButton.addEventListener('click', changeName);
startButton.addEventListener('click', imageChange);
feedPet.addEventListener('click', hungerDecrease);
sleepPet.addEventListener('click', sleepinessDecrease);
playPet.addEventListener('click', boredomDecrease);


//------FUNCTIONS

function imageChange(event, imageAge = 0) {
    console.log(imageAge);
    let image = imageLifeCycle[imageAge];
    if (!image) {
        image = imageLifeCycle[imageLifeCycle.length-1];
    }
    document.getElementById('divImage').innerHTML = image;
};

function changeName() {
    const x = document.getElementById('nameInput').value;
    document.getElementById('name').innerHTML = x;
};

function death(hunger) {
    $('#divImage').html(`💀`);
    $('#retirement').html(`R.I.P...Refresh If you want to Play again...`);
    clearInterval(hunger);
};

function startTimer() {
  const timer = setInterval(function () {
    imageAge++;
    imageChange(event, imageAge);
    $('#ageH').html(`Age: ${imageAge}`);
    if (imageAge > 4) {
        $('#retirement').html(`🎉 Happy Retirement! 🎉`);
    } else if (imageAge = 4) {
    }
  }, 10000)
};

function hungerIncrease() {
    const hungerup = setInterval(function () {
    if (hunger < 10) {
        hunger++;
        $('#hungerH').html(`Hunger: ${hunger}`);
    } else if (hungerIncrease = 10) {
        death();
    }
  }, 1000)
};

function hungerDecrease() {
    if (hunger > 2) {
        hunger-=2;
        // console.log(hunger);
        $('#hungerH').html(`Hunger: ${hunger}`);
    }
};

function sleepinessIncrease() {
    const sleepinessup = setInterval(function () {
    if (sleepiness < 10) {
        sleepiness++;
        $('#sleepinessH').html(`Sleepiness: ${sleepiness}`);
    } else if (sleepiness = 10) {
        death();
    }
  }, 1000)
};

function sleepinessDecrease() {
    if (sleepiness > 2) {
        sleepiness-=2;
    }
};

function boredomIncrease() {
    const boredomup = setInterval(function () {
    if (boredom < 10) {
        boredom++;
        $('#boredomH').html(`Boredom: ${boredom}`);
    } else if (boredom == 10) {
        death();
    }
  }, 1000)
};

function boredomDecrease() {
    if (boredom > 2) {
        boredom-=2;
    }
};




