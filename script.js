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

let inputs = document.querySelectorAll("input");
const keyboard = document.querySelectorAll(".key");
let hangmanImages = document.querySelector(".hangmanImg");
const maxLives = document.querySelector(".Guesses");

const totalLives = 6;
let livesUsed = 0;
// let inputIndex = 0;
let randomWordObject = wordsList[Math.floor(Math.random() * wordsList.length)];
let selectedWord = randomWordObject.word.toUpperCase();
let hint = document.querySelector(".hint");
hint.innerHTML = `HINT: ${randomWordObject.hint}`;

console.log(randomWordObject);
console.log(selectedWord);

// function keyboardInput(evt) {
//   if (inputIndex < inputs.length) {
//     inputs[inputIndex].value = evt.target.textContent;
//     inputIndex++;
//   }
// }

document
  .querySelector("#keyboard")
  .addEventListener("click", (evt) => guessedWord(evt));

function guessedWord(evt) {
  let letter = evt.target.textContent;
  // console.log(letter);
  if (selectedWord.includes(letter)) {
    for (let i = 0; i < selectedWord.length; i++) {
      if (selectedWord[i] === letter) {
        inputs[i].value = letter;
      }
    }
  } else {
    livesUsed++;
    hangmanImages.src = `hangmanImages/hangman-${livesUsed}.svg`;
    maxLives.innerHTML = `LIVES: ${livesUsed}/${totalLives}`;
  }
  if (livesUsed === totalLives) {
    alert(`GameOver! The word was ${selectedWord} . Better luck next time!`);
  }
}

// console.log(hangmanImages);
