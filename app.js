//----APP STATE
let time = 0;
let deathDrop = 10;
let lipSync = 10;
let entertain = 10;
let image = document.getElementById('image');

const imageBegin = "https://thumbs.gfycat.com/MixedVelvetyChafer-size_restricted.gif";
const imageOne = "https://media1.tenor.com/images/08f55a6cc812ca3acb91b83e313e3c05/tenor.gif?itemid=5958201";
const imageTwo = "https://imageresizer.static9.net.au/-zKDg1zPK7TTnHk4yB-mwrxc-yk=/396x0/https%3A%2F%2Fprod.static9.net.au%2Ffs%2F23d2e23b-0f8e-4e47-85e6-2503a69cf6c5";
const imageWon= "https://78.media.tumblr.com/f21e43e03cbf9ef02da0cff3a8985d0d/tumblr_p5p7omKuG41vev4f2o4_250.gif";
const imageLipSync = "https://thumbs.gfycat.com/SpectacularBrilliantIlladopsis-small.gif";
const imageEntertain = "https://media3.giphy.com/media/H1xgQcpqJFIUU/giphy.gif";
const imageDeathDrop = "https://3r36xa14nkfk34uqku13185l-wpengine.netdna-ssl.com/wp-content/uploads/2019/09/shangela.gif";
const imageLost = "https://78.media.tumblr.com/680e16cd70dab98fe97ab37b33283347/tumblr_p5q0mcyIcf1s2u73uo2_400.gif";

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
startButton.addEventListener('click', decreasePoints);
startButton.addEventListener('click', updateImage);
deathDropButton.addEventListener('click', increaseDeathDrop);
lipSyncButton.addEventListener('click', increaseLipSync);
entertainButton.addEventListener('click', increaseEntertainment);


//------FUNCTIONS

function startTimer() {
  const timer = setInterval(function () {
    if (time < 180) {
        time++;
        document.getElementById('timeSeen').innerText = `Time: ${time};`
    }
  }, 1000)
}

// function updateTime() {
//     document.getElementById('timeSeen').innerText = `Time: ${time};`
// }

function decreasePoints() {
    const points = setInterval(function () {
        if (time < 180) {
            deathDrop--;
            lipSync--;
            entertain--;
            // console.log(entertain);
            // console.log(deathDrop);
            updatePoints();
    }
  }, 1000)
    // function updateImage() {
    if (time < 60) {
        const imageFirst = $(`<image src="${imageBegin}"></image>`);
        $('.middle').append(imageFirst);
    } else if (time > 59 && time < 120) {
        const imageSecond = $(`<image src="${imageOne}"></image>`);
        $('.middle').append(imageSecond);
    }  else if (time > 119 && time < 181) {
        const imagethird = $(`<image src="${imageTwo}"></image>`);
        $('.middle').append(imageThird);
}
}
// }

function increaseDeathDrop() {
  if(deathDrop > 1 && deathDrop < 9) {
    deathDrop+=2;
    ('imageDeathDrop').show(2000);
    } else if (deathDrop >= 10) {
        deathDrop+=0;
    } 
}

function increaseLipSync() {
    if(lipSync > 1 && lipSync < 9) {
        lipSync+=2;
    } else if (lipSync >= 10) {
        lipSync+=0;
    } 
}

function increaseEntertainment() {
    if(entertain > 1 && entertain < 9) {
        entertain+=2;
    } else if (entertain >= 10) {
        entertain+=0;
    } console.log(entertain);
}

function updatePoints() {
    document.getElementById('deathDropPoints').innertext = `Deathdrop Points: ${deathDrop};`
    document.getElementById('lipSyncPoints').innertext = `Lip Sync Points: ${lipSync};`
    document.getElementById('entertainPoints').innertext = `Entertainment Points: ${entertain};`
}







