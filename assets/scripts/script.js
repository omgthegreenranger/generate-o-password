var generateBtn = document.querySelector("#generate");

function writePassword() {
  let lengthPrompt = prompt("How long do you want the password to be? (8-128)");
  if (lengthPrompt < 8 || lengthPrompt > 128 || isNaN(lengthPrompt)) return alert("Hey, that doesn't work! Please try again!");

  let uCasePrompt = confirm("Would you like capitals in your password?");
  let lCasePrompt = confirm("Would you like lower-case in your password?");
  let sCasePrompt = confirm("Would you like special characters in your password?");
  let nCasePrompt = confirm("Would you like numbers in your password?");

  let temp = "";
  if (uCasePrompt) temp += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (lCasePrompt) temp += "abcdefghijklmnopqrstuvwxyz";
  if (sCasePrompt) temp += "!@#$%^&*()_+-=\|?/>.<,";
  if (nCasePrompt) temp += "1234567890";

  let passwd = "";
  for (let i = 0; i < lengthPrompt; i++) {
    passwd += temp[Math.floor(Math.random() * temp.length)];
  };

  password.innerText = passwd;
  console.log(temp);
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
