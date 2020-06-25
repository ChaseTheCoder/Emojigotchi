//----APP STATE
 
let time = 0;
let hunger = 1;
let sleepiness = 1;
let boredom = 1;
let image = document.getElementById('image');

//------CASHED DOM ELEMENTS
const feedPet = document.getElementById('deathDropButton');
const sleepPet = document.getElementById('lipSyncButton');
const playPet = document.getElementById('entertainButton');
const startButton = document.getElementById('enterName');

//-------EVENT LISTENERS
startButton.addEventListener('click', startTimer);
startButton.addEventListener('click', hungerPoints);

//------FUNCTIONS

function startTimer() {
  const timer = setInterval(function () {
    if (time < 300) {
        time++;
        // console.log(time)
    }
  }, 1000)
}

function hungerPoints() {
    const hungerup = setInterval(function () {
    if (hunger < 10) {
        hunger++;
        console.log(hunger);
        document.getElementById('hungerH').innertext = `Hunger: ${hunger}`;
    }
  }, 1000)
}



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




