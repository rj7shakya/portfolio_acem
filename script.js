const hobbies = ["Freelancer", "Software Developer", "Cricket Lover"];

let hobbiesIndex = 0;
let letterPointerIndex = 0;
let currentHobby = "";
let displayText = "";

const typing = () => {
  if (hobbiesIndex === hobbies.length) {
    hobbiesIndex = 0;
  }

  currentHobby = hobbies[hobbiesIndex];
  displayText = currentHobby.slice(0, ++letterPointerIndex);

  document.querySelector(".hero__text__dynamic").textContent = displayText;

  if (displayText.length === currentHobby.length) {
    hobbiesIndex++;
    letterPointerIndex = 0;
  }

  setTimeout(typing, 150);
};

typing();
