const moodMap = {
  happy: {
    color: "#FFF9C4", // Soft Yellow
    quote: "Keep smiling, it makes people wonder what you're up to."
  },
  sad: {
    color: "#B3E5FC", // Light Blue
    quote: "It's okay to feel not okay."
  },
  angry: {
    color: "#FFCDD2", // Light Red
    quote: "Take a deep breath and let it go."
  },
  tired: {
    color: "#E0E0E0", // Pale Grey
    quote: "Rest if you must, but don’t quit."
  },
  excited: {
    color: "#E1BEE7", // Light Purple
    quote: "Let your excitement be louder than your fears."
  }
};

function setMood(mood) {
  const moodInfo = moodMap[mood];
  document.body.style.backgroundColor = moodInfo.color;
  document.getElementById("moodText").textContent = mood.charAt(0).toUpperCase() + mood.slice(1);
  document.getElementById("quoteText").textContent = moodInfo.quote;
  localStorage.setItem("lastMood", mood);
}

// Restore last mood on page load
window.onload = function () {
  const lastMood = localStorage.getItem("lastMood");
  if (lastMood && moodMap[lastMood]) {
    setMood(lastMood);
  }
};
