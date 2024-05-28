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
  { word: "Hurdle", hint: "An obstacle or difficulty that must be overcome" },
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
const hangmanImages = document.querySelectorAll("img");
const maxLives = document.querySelector(".LivesLeft");

console.log(maxLives);
console.log(inputs);
console.log(keyboard);
console.log(hangmanImages);
