// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword()
{
  var passLength = promptPasswordLength();
  if (passLength != null)
  {
    resetCharacterTypePreferences();
    getUserCharacterTypePreferences();
    
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

function resetCharacterTypePreferences()
{
  for(var a in characterTypeObj)
  {
    characterTypeObj[a].userSelected = false;
  }
}

function getUserCharacterTypePreferences()
{
  //setup variable that counts number of preferences from user
  var count = 0;
  //loop through char type object
  for(var a in characterTypeObj)
  {
    var shouldCharacterType = returnCharacterTypeFromUser(a);
    characterTypeObj[a].userSelected = shouldCharacterType;
    if (shouldCharacterType)
    {
      count++;
    }
  }
  if (count<1)
  {
    alert("At least one character type must be selected");
    getUserCharacterTypePreferences();  
  }
}

var characterTypeObj = {
  lowercase:
  {
    userSelected:false,
    possibleChars:["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
  },
  uppercase:
  {
    userSelected:false,
    possibleChars:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
  },
  numeric:
  {
    userSelected: false,
    possibleChars: ["0","1","2","3","4","5","6","7","8","9"],
  },
  special:
  {
    userSelected: false,
    possibleChars: [" ","!","\"","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"],
  }
}

function returnCharacterTypeFromUser(characterTypeLabel)
{
  var shouldCharacterType = confirm("Do you want " + characterTypeLabel + " characters in your password?")
  if (shouldCharacterType)
  {
    return true;
  }
    return false;
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
