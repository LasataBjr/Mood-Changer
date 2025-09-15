//Mood List
const moods = [
    {
        emoji: "😄",
        name: "Happy",
        text: "Life feels amazing, keep smiling bro!",
        color: "#ffe066"        
    },
    {
        emoji: "😢",
        name: "Sad",
        text: "It's okay to feel down sometimes.",
        color: "#90CAF9"        
    },
    {
        emoji: "😡",
        name: "Angry",
        text: "Take a deep breath... You got this!",
        color: "#FF8A80"        
    },
    {
        emoji: "😌",
        name: "Chill",
        text: "Relax & Chill...This is the moment.",
        color: "#B2DFDB"        
    },
    {
        emoji: "🤩",
        name: "Excited",
        text: "Energy level rising -- Celebrate something small!",
        color: "#FFD180"        
    },
    {
        emoji: "😱",
        name: "Dramatic",
        text: "Why always meeee.... The soap opera of life continues.",
        color: "#CE93D8"        
    },
    {
        emoji: "😈",
        name: "Mischievous",
        text: "GenZ pranks the whole world -- Serious & Unserious acts.. ",
        color: "#F48FB1"        
    }
];

const btn = document.getElementById("moodBtn");
const emoji = document.querySelector(".emoji");
const moodName = document.getElementById("moodName");
const moodDesc = document.getElementById("moodDesc");
const body = document.body;

let current = 0;
//Change mood function
function changeMood(){
    current = (current + 1) % moods.length;
    let mood = moods[current];

    //Update emoji, text & background
    emoji.textContent = mood.emoji;
    moodName.textContent = mood.name;
    moodDesc.textContent = mood.text;
    body.style.backgroundColor = mood.color; //Return the background color as document.body.style.backgroundColor
}

//Event listener
    btn.addEventListener("click", changeMood);

    //Change mood with Enter or Space
    document.addEventListener("keydown", (e) => {
        if (e.code === "Space" || e.code === "Enter") {
            changeMood();
        }
    });

