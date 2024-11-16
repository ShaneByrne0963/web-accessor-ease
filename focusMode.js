// Variable to track focus mode state
let isFocusModeOn = false;

function setFocusMode(data) {
  const focusMode = data.focusMode;
  console.log(focusMode);
  isFocusModeOn = !isFocusModeOn;

  if (isFocusModeOn) {
    focusModeButton.textContent = "Deactivate Focus Mode";
    console.log("Focus Mode is now ON");
  } else {
    focusModeButton.textContent = "Activate Focus Mode";
    console.log("Focus Mode is now OFF");
  }
}

// JavaScript
const focusModeButton = document.getElementById("focusModeButton");

focusModeButton.addEventListener("click", setFocusMode);
