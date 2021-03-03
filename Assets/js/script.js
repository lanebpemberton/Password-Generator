// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword()
{
  var passLength = promptPasswordLength();
  if (passLength != null)
  {
    
  }else
  {
    return null;
  }
}

function promptPasswordLength()
{
  var passLengthPrompt = prompt("Enter desired length of password","");

  //evaluate response
  if (passLengthPrompt != null)
  {
    //setup regex to test for digit in user response to prompt
    if (/^\d+$/.test(passLengthPrompt))
    {
      var passLengthNum = parseInt(passLengthPrompt);
      if (passLengthNum>=8 && passLengthNum<=128)
      {
        return passLengthNum;
      }else
      {
        alert("Please enter a valid number least 8 characters and no more than 128 characters");
        //callback function
        promptPasswordLength();
      }
    }else
    {
      alert("Please enter a valid number least 8 characters and no more than 128 characters");
      //callback function
      promptPasswordLength();
    }
  }else
  {
    //exit out of function recursion because user has selected cancel
    return null;
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  if (password != null)
  {
    var passwordText = document.querySelector("#password");
    passwordText.value = password;

  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
