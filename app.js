//----APP STATE
 
let hunger = 1;
let sleepiness = 1;
let boredom = 1;
// let image = document.getElementById('divImage');
const imageLifeCycle = ['👶', '🧒', '🧔', '👴'];
const imageInteractions = ['🤗', '😴', '🥳', '💀'];
let imageAge = 0;

//------CASHED DOM ELEMENTS
const feedPet = document.getElementById('feed');
const sleepPet = document.getElementById('sleep');
const playPet = document.getElementById('play');
const startButton = document.getElementById('enterName');

//-------EVENT LISTENERS
startButton.addEventListener('click', startTimer);
startButton.addEventListener('click', hungerIncrease);
startButton.addEventListener('click', sleepinessIncrease);
startButton.addEventListener('click', boredomIncrease);
startButton.addEventListener('click', changeName);
startButton.addEventListener('click', imageChange);
feedPet.addEventListener('click', hungerDecrease);
// feedPet.addEventListener('click', imageHunger);
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

// function imageHunger(event, hunger) {
//     if (hunger--) {
//         document.getElementById('divImage').innerHTML = imageInteractions[0];
//     } else if (imageAge < 7) {
//         imageChange();
//   }
// };

function changeName() {
    const x = document.getElementById('nameInput').value;
    document.getElementById('name').innerHTML = x;
};

function startTimer() {
  const timer = setInterval(function () {
    imageAge++;
    imageChange(event, imageAge);
    if (imageAge > 1) {
        $('#retirement').html(`🎉 Happy Retirement! 🎉`);
    }
    // console.log(imageAge);
  }, 10000)
};

function hungerIncrease() {
    const hungerup = setInterval(function () {
    if (hunger < 10) {
        hunger++;
        // console.log(hunger);
        // console.log($('#hungerH'));
        $('#hungerH').html(`Hunger: ${hunger}`);
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
    }
  }, 1000)
};

function sleepinessDecrease() {
    if (sleepiness > 2) {
        sleepiness-=2;
        // console.log(sleepiness);
    }
};

function boredomIncrease() {
    const boredomup = setInterval(function () {
    if (boredom < 10) {
        boredom++;
        $('#boredomH').html(`Boredom: ${boredom}`);
    }
  }, 1000)
};

function boredomDecrease() {
    if (boredom > 2) {
        boredom-=2;
        // console.log(boredom);
    }
};

// function retirement() {
//     if (imageAge > 1) {
//         $('#retirement').html(`Happy Retirement`);
//     }
// };




