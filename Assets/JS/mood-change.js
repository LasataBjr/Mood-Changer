//Mood List
const moods = [
    {
        emoji: "😄",
        name: "Happy",
        text: "Life feels amazing, keep smiling bro!",
        color: "#ffe066",
        sound: "Assets/Sounds/happy.mp3"        
    },
    {
        emoji: "😢",
        name: "Sad",
        text: "It's okay to feel down sometimes.",
        color: "#90CAF9",
        sound: "Assets/Sounds/sad.mp3"        
    },
    {
        emoji: "😡",
        name: "Angry",
        text: "Take a deep breath... You got this!",
        color: "#FF8A80",
        sound: "Assets/Sounds/angry.mp3"        
    },
    {
        emoji: "😌",
        name: "Chill",
        text: "Relax & Chill...This is the moment.",
        color: "#B2DFDB",
        sound: "Assets/Sounds/chill.mp3"       
    },
    {
        emoji: "🤩",
        name: "Excited",
        text: "Energy level rising -- Celebrate something small!",
        color: "#FFD180",
        sound: "Assets/Sounds/excited.mp3"       
    },
    {
        emoji: "😱",
        name: "Dramatic",
        text: "Why always meeee.... The soap opera of life continues.",
        color: "#CE93D8",
        sound: "Assets/Sounds/dramatic.mp3"       
    },
    {
        emoji: "😈",
        name: "Mischievous",
        text: "GenZ pranks the whole world -- Serious & Unserious acts.. ",
        color: "#F48FB1",
        sound: "Assets/Sounds/mischievous.mp3"        
    }
];

const btn = document.getElementById("moodBtn");
const emoji = document.querySelector(".emoji");
const moodName = document.getElementById("moodName");
const moodDesc = document.getElementById("moodDesc");
const body = document.body;

let current = 0;
let audio = new Audio();

//Change mood function
function changeMood(){
    current = (current + 1) % moods.length;
    // let mood = moods[current];
    let mood = moods[Math.floor(Math.random() * moods.length)];
    //Update emoji, text & background
    emoji.textContent = mood.emoji;
    moodName.textContent = mood.name;
    moodDesc.textContent = mood.text ;
    body.style.backgroundColor = mood.color; //Return the background color as document.body.style.backgroundColor

     //Stop any current playing audio
    audio.pause();
    audio.currentTime = 0;

    //Play Sound
    audio.src = mood.sound;
    audio.play();

}

//Event listener
    btn.addEventListener("click", changeMood);

    //Change mood with Enter or Space
    document.addEventListener("keydown", (e) => {
        if (e.code === "Space" || e.code === "Enter") {
            changeMood();
        }
    });

