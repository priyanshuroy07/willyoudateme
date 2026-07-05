const warning = document.getElementById("warning");
const letter = document.getElementById("letter");
const gallery = document.getElementById("gallery");
const proposal = document.getElementById("proposal");
const finalPage = document.getElementById("final");

const startBtn = document.getElementById("startBtn");
const showGallery = document.getElementById("showGallery");
const proposalBtn = document.getElementById("proposalBtn");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const introMusic = document.getElementById("introMusic");
const celebrationMusic = document.getElementById("celebrationMusic");

const galleryImage = document.getElementById("galleryImage");
const prevPhoto = document.getElementById("prevPhoto");
const nextPhoto = document.getElementById("nextPhoto");

// ---------- Floating Hearts ----------

const hearts = document.querySelector(".hearts");

function createHeart(){

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="❤";

    heart.style.left=Math.random()*100+"%";

    heart.style.fontSize=(15+Math.random()*25)+"px";

    heart.style.animationDuration=(4+Math.random()*3)+"s";

    hearts.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },7000);

}

setInterval(createHeart,400);

// ---------- Photos ----------

const photos=[

"images/photo1.jpg",
"images/photo2.jpg",
"images/photo3.jpg",
"images/photo4.jpg"

];

let current=0;

nextPhoto.onclick=()=>{

current++;

if(current>=photos.length){

current=0;

}

galleryImage.src=photos[current];

}

prevPhoto.onclick=()=>{

current--;

if(current<0){

current=photos.length-1;

}

galleryImage.src=photos[current];

}

// ---------- Start ----------

startBtn.onclick=()=>{

warning.classList.add("hidden");

letter.classList.remove("hidden");

introMusic.play().catch(()=>{});

new Typed("#typeText",{

strings:[

"Hi Parvati ❤️",

"I made this little website just for you...",

"Because every conversation with you makes my day better.",

"And today... I wanted to ask you something."

],

typeSpeed:45,

backSpeed:20,

backDelay:1500,

loop:true

});

}

// ---------- Gallery ----------

showGallery.onclick=()=>{

letter.classList.add("hidden");

gallery.classList.remove("hidden");

}

// ---------- Proposal ----------

proposalBtn.onclick=()=>{

gallery.classList.add("hidden");

proposal.classList.remove("hidden");

}

// ---------- NO Button ----------

let messages=[

"Are you sure? 🥺",

"Think again ❤️",

"Please 😭",

"You can't escape 😂"

];

let tries=0;

function moveNo(){

const x=Math.random()*250-125;

const y=Math.random()*250-125;

noBtn.style.transform=`translate(${x}px,${y}px)`;

if(tries<messages.length){

noBtn.innerText=messages[tries];

tries++;

}

}

noBtn.addEventListener("mouseover",moveNo);

noBtn.addEventListener("click",moveNo);

// ---------- YES ----------

yesBtn.onclick=()=>{

introMusic.pause();

celebrationMusic.play().catch(()=>{});

confetti({

particleCount:250,

spread:160,

origin:{y:.6}

});

proposal.classList.add("hidden");

finalPage.classList.remove("hidden");

}