//----APP STATE
 
let time = 0;
let hunger = 1;
let sleepiness = 1;
let boredom = 1;
let image = document.getElementById('divImage');

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
sleepPet.addEventListener('click', sleepinessDecrease);
playPet.addEventListener('click', boredomDecrease);



//------FUNCTIONS

function imageChange() {
    const imageZero = $(`<image src="https://art.pixilart.com/541efd98c67051b.gif"></image>`);
    $('divImage').append(imageZero);
}

function changeName() {
    let namePet = $('#nameInput').innertext
    $('#name').append(namePet);
};

function startTimer() {
  const timer = setInterval(function () {
    if (time < 300) {
        time++;
        // console.log(time)
    }
  }, 1000)
};

function hungerIncrease() {
    const hungerup = setInterval(function () {
    if (hunger < 10) {
        hunger++;
        console.log(hunger);
        // $('hungerH').html("Hunger: ${hunger}");
    }
  }, 1000)
};

function hungerDecrease() {
    if (hunger > 2) {
        hunger-=2;
        console.log(hunger);
    }
};

function sleepinessIncrease() {
    const sleepinessup = setInterval(function () {
    if (sleepiness < 10) {
        sleepiness++;
        // console.log(sleepiness);
        // document.getElementById('sleepH').innertext = 'Sleepiness: ${sleepiness}';
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
        // console.log(boredom);
        // $('sleepH').html("Hunger: ${hunger}");
    }
  }, 1000)
};

function boredomDecrease() {
    if (boredom > 2) {
        boredom-=2;
        // console.log(boredom);
    }
};


// function increaseDeathDrop() {
//   if(deathDrop > 1 && deathDrop < 11) {
//     deathDrop+=2;
//     } else if (deathDrop >= 10) {
//         deathDrop+=0;
//   } 
// }

// function decreaseForDeathDrop() {
//         if (deathDrop > 1 && deathDrop < 11) {
//         deathDrop--;
//         console.log(deathDrop);
//         document.getElementById('deathDropPoints').innertext = `Deathdrop Points: ${deathDrop}`;
//     }
// }

// console.log(time);



// // function decreasePoints() {
// //     const points = setInterval(function () {
// //         if (time < 180) {
// //             deathDrop--;
// //             lipSync--;
// //             entertain--;
// //             // console.log(entertain);
// //             console.log(deathDrop);
// //             // updatePoints
// //     }
// //   }, 1000)
// // }

// // function increaseDeathDrop() {
// //   if(deathDrop > 1 && deathDrop < 9) {
// //     deathDrop+=2;
// //     } else if (deathDrop >= 10) {
// //         deathDrop+=0;
// //   } 
// // }


// // function increaseLipSync() {
// //     if(lipSync > 1 && lipSync < 9) {
// //         lipSync+=2;
// //     } else if (lipSync >= 10) {
// //         lipSync+=0;
// //     } 
// // }

// // function increaseEntertainment() {
// //     if(entertain > 1 && entertain < 9) {
// //         entertain+=2;
// //     } else if (entertain >= 10) {
// //         entertain+=0;
// //     } 
// // }

// // function updatePoints(deathDrop, lipSync, entertain) {
// //     document.getElementById('deathDropPoints').innertext = `Deathdrop Points: ${deathDrop}`;
// //     document.getElementById('lipSyncPoints').innertext = `Lip Sync Points: ${lipSync}`;
// //     document.getElementById('entertainPoints').innertext = `Entertainment Points: ${entertain}`;
// // }

// // function
// // if (time < 60) {
// //     const imageFirst = $(`<image src="(imageBegin)"></image>`);
// //     $('.middle').append(imageFirst);
// // } else if (time > 59 && time < 120) {
// //     const imageSecond = $(`<image src="`${imageOne}`"></image>`);
// //     $('.middle').append(imageSecond);
// // }  else if (time > 119 && time < 181) {
// //     const imagethird = $(`<image src="`${imageTwo}`"></image>`);
// //     $('.middle').append(imageThird);
// // }




