const warning = document.getElementById("warning");
const main = document.getElementById("main");
const proposal = document.getElementById("proposal");
const finalPage = document.getElementById("final");

const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");

const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");

const music = document.getElementById("music");

let typedStarted = false;

// Floating Hearts
const heartsContainer = document.querySelector(".hearts");

function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤";

    heart.style.left = Math.random() * 100 + "%";
    heart.style.fontSize = (15 + Math.random() * 25) + "px";
    heart.style.animationDuration = (4 + Math.random() * 4) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);
}

setInterval(createHeart, 400);

// Continue Button
startBtn.onclick = () => {

    warning.classList.add("hidden");
    main.classList.remove("hidden");

    music.play().catch(() => {});

    if (!typedStarted) {

        new Typed("#typeText", {

            strings: [

                "There are millions of girls in this world...",

                "Yet somehow... GOD Suddenly sent you to me randomly, you became my favourite one ❤️",

                "I made this little website because there is something I've wanted to ask you..."

            ],

            typeSpeed: 45,
            backSpeed: 20,
            backDelay: 1800,
            loop: true

        });

        typedStarted = true;
    }

};

// Next
nextBtn.onclick = () => {

    main.classList.add("hidden");
    proposal.classList.remove("hidden");

};

// Running No Button
noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("click", moveButton);

function moveButton() {

    const x = Math.random() * 250 - 125;
    const y = Math.random() * 250 - 125;

    noBtn.style.transform = `translate(${x}px,${y}px)`;

}

// YES
yesBtn.onclick = () => {

    confetti({

        particleCount: 250,
        spread: 140,
        origin: { y: 0.6 }

    });

    proposal.classList.add("hidden");
    finalPage.classList.remove("hidden");

};