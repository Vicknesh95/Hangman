const wordsList = [
  {
    word: "Tunnel",
    hint: "An underground passage",
  },
  {
    word: "Canvas",
    hint: "A strong, heavy-duty fabric used as a surface for painting or making sails and tents",
  },
  {
    word: "Meadow",
    hint: "A field habitat vegetated primarily by grass and other non-woody plants",
  },
  {
    word: "Fossil",
    hint: "Preserved remains of ancient organisms",
  },

  {
    word: "Barrel",
    hint: "A cylindrical container often made of wood, used for storing liquids",
  },
  {
    word: "Velvet",
    hint: "A type of woven fabric with a soft, smooth pile, often used in luxury clothing and furnishings",
  },
  {
    word: "Garlic",
    hint: "A pungent bulb used as a seasoning in cooking, known for its strong flavor and health benefits.",
  },
  {
    word: "Molten",
    hint: "Describes a substance, typically metal or rock, that is liquefied by heat",
  },
  {
    word: "Oyster",
    hint: "A marine mollusk with a rough, irregular shell, known for producing pearls",
  },
  {
    word: "Nectar",
    hint: "A sweet liquid produced by flowers to attract pollinators like bees and birds.",
  },
  {
    word: "Ledger",
    hint: "A book or other collection of financial accounts of a particular type",
  },
  {
    word: "Cradle",
    hint: "A small bed for an infant, often designed to rock gently",
  },
  {
    word: "Beacon",
    hint: "A guiding or warning signal, typically a light or fire, used especially at sea",
  },
  {
    word: "Banish",
    hint: "To send someone away from a place as an official punishment",
  },
  {
    word: "Frugal",
    hint: "Sparing or economical with regard to money or food",
  },
  {
    word: "Mingle",
    hint: "To mix or cause to mix together",
  },
  {
    word: "Parcel",
    hint: "A package or bundle of items wrapped and sent by mail",
  },
  {
    word: "Hurdle",
    hint: "An obstacle or difficulty that must be overcome",
  },
  {
    word: "Feline",
    hint: "Relating to or affecting cats or other members of the cat family",
  },
  {
    word: "Anemia",
    hint: "A medical condition in which the blood lacks enough healthy red blood cells",
  },
];

const wordsList2 = [
  {
    word: "Backpack",
    hint: "A bag carried on the back, often used by hikers and students",
  },
  {
    word: "Champion",
    hint: "A person who has defeated all rivals in a competition.",
  },
  {
    word: "Elephant",
    hint: "A large herbivorous mammal with a trunk.",
  },
  {
    word: "Jealousy",
    hint: "The state of being envious of someone else's achievements or advantages.",
  },
  {
    word: "Passport",
    hint: "An official document issued by a government, certifying the holder's identity and citizenship.",
  },
  {
    word: "Sanctity",
    hint: "The state or quality of being holy, sacred, or saintly.",
  },
  {
    word: "Wildlife",
    hint: "Animals that live and grow in natural conditions.",
  },
  {
    word: "Treasure",
    hint: "A quantity of precious metals, gems, or other valuable objects.",
  },
  {
    word: "Terminal",
    hint: "The end of a railroad, sections of an airport or other transport route, or a station at such a point.",
  },
  {
    word: "Vacation",
    hint: "An extended period of leisure and recreation, especially one spent away from home or traveling.",
  },
  {
    word: "Umbrella",
    hint: "A device for protection against the rain or sun",
  },
  {
    word: "Patience",
    hint: "The capacity to accept or tolerate delay, trouble, or suffering without getting angry or upset.",
  },
  {
    word: "Outreach",
    hint: "The act of extending services or assistance on the community",
  },
  {
    word: "Alliance",
    hint: "A union or association formed for mutual benefit.",
  },
  {
    word: "Backbone",
    hint: "The series of vertebrae extending from the skull to the pelvis; also means strength of character.",
  },
  {
    word: "Juvenile",
    hint: "Pertaining to young people or youth.",
  },
  {
    word: "Decorate",
    hint: "To add beauty to something, often with ornamental items.",
  },
  {
    word: "Clothing",
    hint: "Items or apparel worn to cover the body",
  },
  {
    word: "Disaster",
    hint: "A sudden event, such as an accident or natural catastrophe, that causes great damage or loss of life.",
  },
  {
    word: "Diplomat",
    hint: "An official representing a country abroad.",
  },
];

//Variables to store elements
const inputs = document.querySelectorAll("input");
const keyboard = document.querySelectorAll(".key");
let hangmanImages = document.querySelector(".hangmanImg");
const maxLives = document.querySelector(".Guesses");
let hint = document.querySelector(".hint");
let inputBox1 = document.createElement("input");
let inputBox2 = document.createElement("input");

//Variables
const totalLives = 6;
let livesUsed = 0;
let chosenWord;

let randomWordObject2 =
  wordsList2[Math.floor(Math.random() * wordsList2.length)];
let selectedWord2 = randomWordObject2.word.toUpperCase();
let randomWordObject = wordsList[Math.floor(Math.random() * wordsList.length)];
let selectedWord = randomWordObject.word.toUpperCase();

resetBoard();

document
  .querySelector("#keyboard")
  .addEventListener("click", (evt) => guessedWord(evt));

function guessedWord(evt) {
  let letter = evt.target.textContent;
  let chosenWord = selectedWord || selectedWord2;
  if (chosenWord.includes(letter)) {
    for (let i = 0; i < chosenWord.length; i++) {
      if (chosenWord[i] === letter) {
        inputs[i].value = letter;
      }
    }
  } else {
    livesUsed++;
    hangmanImages.src = `hangmanImages/hangman-${livesUsed}.svg`;
    maxLives.innerHTML = `LIVES USED: ${livesUsed}/${totalLives}`;
  }
  let guessedWord = "";
  for (let i = 0; i < inputs.length; i++) {
    guessedWord += inputs[i].value;
  }

  if (livesUsed === totalLives) {
    setTimeout(() => {
      alert(`GameOver! The word was ${chosenWord} . Better luck next time!`);
      resetBoard();
    }, 1000);
  } else if (chosenWord === guessedWord) {
    setTimeout(() => {
      alert(
        `Winner Winner Chicken Dinner, lets see if you can save the Hangman again!`
      );
      goToLevelTwo();
    }, 1000);
  }
}

function goToLevelTwo() {
  inputs = document.querySelectorAll("input");

  hangmanImages.src = "hangmanImages/hangman-0.svg";

  maxLives.innerHTML = `LIVES USED: 0/${totalLives}`;

  randomWordObject2 = wordsList2[Math.floor(Math.random() * wordsList2.length)];

  selectedWord2 = randomWordObject2.word.toUpperCase();
  console.log(selectedWord2);

  hint.innerHTML = `HINT: ${randomWordObject2.hint}`;

  console.log(randomWordObject2.hint);

  for (let i = 0; i < inputs.length; i++) {
    inputs[i].value = "";
  }
  let inputBox1 = document.createElement("input");
  inputBox1.disabled = true;
  inputBox1.maxLength = 1;
  inputBox1.classList.add("input-box");
  document.querySelector(".input").appendChild(inputBox1);

  let inputBox2 = document.createElement("input");
  inputBox2.disabled = true;
  inputBox2.maxLength = 1;
  inputBox2.classList.add("input-box");
  document.querySelector(".input").appendChild(inputBox2);

  selectedWord = undefined;

  if (livesUsed === totalLives) {
    setTimeout(() => {
      alert(`GameOver! The word was ${chosenWord} . Try again!`);
      resetBoard();
    }, 1000);
  } else if (chosenWord === guessedWord) {
    setTimeout(() => {
      alert(
        `Winner Winner Chicken Dinner, lets see if you can save the Hangman again!`
      );
      resetBoard();
    }, 1000);
  }
}

function resetBoard() {
  hangmanImages.src = "hangmanImages/hangman-0.svg";

  maxLives.innerHTML = `LIVES USED: 0/${totalLives}`;

  randomWordObject = wordsList[Math.floor(Math.random() * wordsList.length)];

  selectedWord = randomWordObject.word.toUpperCase();

  hint.innerHTML = `HINT: ${randomWordObject.hint}`;

  for (let i = 0; i < inputs.length; i++) {
    inputs[i].value = "";
  }
  const allInputs = document.querySelectorAll("input");
  if (inputs.length > 6) {
    inputs[6].remove();
    inputs[7].remove();
  }
}
