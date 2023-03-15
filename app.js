const messages = [
    "This can wait",
    "Good things take time",
    "You should know more than anyone",
    "Trust your instincts",
    "Take a step back and reassess",
    "The answer lies within",
    "Follow your heart",
    "Patience is a virtue",
    "Believe in yourself",
    "Seek advice from a trusted friend",
    "Embrace the journey",
    "Listen to your inner voice",
    "Everything happens for a reason",
    "Stay true to your path",
    "Focus on the present moment",
    "You are stronger than you think",
    "Keep an open mind",
    "Find balance in all things",
    "Let go of what you can't control",
    "Success is a journey, not a destination",
    "Trust the process",
    "Your intuition is your guide",
    "Be kind to yourself and others",
    "Look for the silver lining",
    "Stay persistent and resilient",
    "Happiness is an inside job",
    "Find your inner peace",
    "Accept change and adapt",
    "Embrace your uniqueness",
    "Take time for self-reflection",
    "Acknowledge your growth",
    "Stay grounded and humble",
    "Have faith in your abilities",
    "Turn obstacles into opportunities",
    "Always keep learning",
];

const messageElement = document.getElementById("message");
const generateBtn = document.getElementById("generate-btn");

function getRandomMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
}

// When the user starts holding the button
generateBtn.addEventListener("mousedown", () => {
    messageElement.textContent = "Waiting...";
});

// When the user releases the button
generateBtn.addEventListener("mouseup", () => {
    messageElement.textContent = getRandomMessage();
});

// For touch devices
generateBtn.addEventListener("touchstart", (event) => {
    event.preventDefault();
    messageElement.textContent = "Waiting...";
});

generateBtn.addEventListener("touchend", (event) => {
    event.preventDefault();
    messageElement.textContent = getRandomMessage();
});
