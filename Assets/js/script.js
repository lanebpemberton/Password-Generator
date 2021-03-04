// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword()
{
  var passLength = promptPasswordLength();
  if (passLength != null)
  {
    //ask user for their preference in character types
    var characterTypes = getUserCharacterTypePreferences();
    //loop until passLength
    for(var a = 0;a<passLength;a++)
    {
      //on each loop randomly pull from one of the character arrays
      if (characterTypes.length>1)
      {
        
      }
    }
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

function getUserCharacterTypePreferences()
{
  //setup variable that counts number of preferences from user
  var count = 0;
  //reset global array of character types
  var characterTypes = [];
  //loop through char type object
  for(var a in characterTypeObj)
  {
    var shouldCharacterType = returnCharacterTypeFromUser(a);
    if (shouldCharacterType)
    {
      characterTypes.push(characterTypeObj[a].possibleChars)
      count++;
    }
  }
  if (count<1)
  {
    alert("At least one character type must be selected");
    getUserCharacterTypePreferences();  
  }
  return characterTypes;
}

var characterTypeObj = {
  lowercase:
  {
    possibleChars:["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
  },
  uppercase:
  {
    possibleChars:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
  },
  numeric:
  {
    possibleChars: ["0","1","2","3","4","5","6","7","8","9"],
  },
  special:
  {
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
