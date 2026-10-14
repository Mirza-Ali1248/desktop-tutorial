const screens = [...document.querySelectorAll(".screen")];

function showScreen(id) {
  screens.forEach((screen) => {
    screen.classList.toggle("active", screen.id === id);
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Flying hearts and flowers
function flyRomanticEmojis(total = 35) {
  const emojis = ["❤️", "💕", "💖", "🌸", "🌷", "🌹", "💗", "✨", "🦋", "💞"];

  for (let i = 0; i < total; i++) {
    const item = document.createElement("span");

    item.className = "flying-love";
    item.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    item.style.left = Math.random() * 100 + "vw";
    item.style.fontSize = 18 + Math.random() * 22 + "px";
    item.style.animationDelay = Math.random() * 0.7 + "s";
    item.style.setProperty("--drift", Math.random() * 180 - 90 + "px");
    item.style.setProperty("--spin", Math.random() * 360 - 180 + "deg");

    document.body.appendChild(item);

    item.addEventListener("animationend", () => item.remove());
  }
}

// All buttons that navigate to another screen
document.querySelectorAll("[data-next]").forEach((button) => {
  button.addEventListener("click", () => {
    flyRomanticEmojis();
    showScreen(button.dataset.next);
  });
});

// YES button
document.getElementById("yesBtn").addEventListener("click", () => {
  flyRomanticEmojis(60);
  showScreen("celebration");
});

// NO button messages
let nc = 0;

document.getElementById("noBtn").addEventListener("click", () => {
  const messages = [
    "Okay button tumhara hai, lekin please soch lo 🙈💗",
    "Are you sure? 🥺💗",
    "Ek baar phir soch lo na! 🌸",
    "Mera dil keh raha hai YES! 😭💕",
    "Please thora aur soch lo na 🥹💞",
    "I Love You 💞💗"
  ];

  document.getElementById("noMessage").textContent =
    messages[nc % messages.length];

  nc++;
  flyRomanticEmojis(12);
});

// Quiz questions
const qs = [
  {
    q: "What makes my days brighter?",
    o: ["Chocolate 🍫", "You, of course! 🥰", "Sleeping 😴"],
    a: 1,
    f: "Obviously, tumhari smile! 🥹💗"
  },
  {
    q: "A perfect day together would be…",
    o: [
      "Laughing and talking together 💞",
      "Ignoring each other 😶",
      "Arguing all day 😤"
    ],
    a: 0,
    f: "Little moments together can become the sweetest memories. 🌸"
  },
  {
    q: "What should we always give each other?",
    o: [
      "Silence forever 🤐",
      "Care, respect and honesty 🤍",
      "Only gifts 🎁"
    ],
    a: 1,
    f: "Care, respect aur honesty relationship ko strong banate hain. 🤍"
  },
  {
    q: "When one of us feels sad, what is lovely to do?",
    o: [
      "Make fun of them 🙈",
      "Listen and offer comfort 🫶",
      "Pretend nothing happened 😶"
    ],
    a: 1,
    f: "Kabhi kabhi pyaar se sun lena hi bohat hota hai. 🫶"
  },
  {
    q: "What is the sweetest part of this website?",
    o: [
      "A surprise made with love 💌",
      "The loading screen 😅",
      "Closing it immediately 😂"
    ],
    a: 0,
    f: "Yeh chhota sa surprise tumhare liye dil se banaya gaya hai. 💖"
  }
];

let qi = 0;
let score = 0;
let answered = false;

const title = document.getElementById("quizQuestion");
const opts = document.getElementById("quizOptions");
const msg = document.getElementById("quizMessage");
const next = document.getElementById("quizNext");
const cont = document.getElementById("quizContinue");

function render() {
  answered = false;

  const q = qs[qi];

  document.getElementById("quizProgress").textContent =
    `Question ${qi + 1} of ${qs.length}`;

  document.getElementById("quizScore").textContent = `Score: ${score}`;

  title.textContent = q.q;
  msg.textContent = "";
  next.classList.add("hidden");
  cont.classList.add("hidden");
  opts.innerHTML = "";

  q.o.forEach((text, i) => {
    const button = document.createElement("button");

    button.className = "quiz-option";
    button.textContent = text;
    button.addEventListener("click", () => answer(i));

    opts.appendChild(button);
  });
}

function answer(i) {
  if (answered) return;

  answered = true;

  const q = qs[qi];

  if (i === q.a) score++;

  [...opts.children].forEach((button, j) => {
    button.disabled = true;

    if (j === q.a) {
      button.style.border = "2px solid #70b88a";
    }
  });

  document.getElementById("quizScore").textContent = `Score: ${score}`;

  msg.textContent =
    (i === q.a ? "Yesss! 💗 " : "Almost! 💕 ") + q.f;

  flyRomanticEmojis(12);

  if (qi < qs.length - 1) {
    next.classList.remove("hidden");
  } else {
    cont.classList.remove("hidden");
  }
}

// Next quiz question
next.addEventListener("click", () => {
  if (qi >= qs.length - 1) return;

  flyRomanticEmojis();
  qi++;
  render();
});

// Song picker
const songPicker = document.getElementById("songPicker");

if (songPicker) {
  songPicker.addEventListener("change", (event) => {
    const file = event.target.files[0];

    if (file) {
      const audio = document.getElementById("loveSong");
      audio.src = URL.createObjectURL(file);
      audio.load();
      audio.play().catch(() => {});
    }
  });
}
// Happy End button: replay the surprise
document.querySelector("#final .primary").addEventListener("click", () => {
  flyRomanticEmojis(60);
  qi = 0;
  score = 0;
  render();
  showScreen("welcome");
});

render();
/* Continuously flying hearts and flowers */
const loveEmojis = [
  "❤️", "💕", "💖", "🌸", "🌷",
  "🌹", "💗", "🦋", "✨", "💞"
];

function createFlyingEmoji() {
  const item = document.createElement("span");

  item.className = "flying-love";
  item.textContent =
    loveEmojis[Math.floor(Math.random() * loveEmojis.length)];

  item.style.left = Math.random() * 100 + "vw";
  item.style.fontSize = 16 + Math.random() * 22 + "px";
  item.style.animationDuration = 4 + Math.random() * 4 + "s";

  document.body.appendChild(item);

  item.addEventListener("animationend", () => {
    item.remove();
  });
}

// Naye flowers aur hearts lagataar create honge
setInterval(createFlyingEmoji, 600);