const randomText = document.getElementById("random-text");

// Generate a random string of characters
function generateRandomString(length) {
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*()_+=-`<>?/\";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

// Animate the random text to look like an encryption cipher
function animateRandomText() {
  const randomString = generateRandomString(100);
  let currentIndex = 0;

  setInterval(() => {
    let newText = "";

    // Add a random character to the end of the current text
    for (let i = 0; i < currentIndex + 1; i++) {
      newText += generateRandomString(1);
    }

    // Add the rest of the random string
    newText += randomString.substring(currentIndex + 1);

    randomText.textContent = newText;
    currentIndex = (currentIndex + 1) % randomString.length;
  }, 50);
}

animateRandomText();
