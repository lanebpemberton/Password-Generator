// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword()
{
  var passLength = promptPasswordLength();
  if (passLength != null)
  {
    //ask user for their preference in character types
    var characterTypes = getUserCharacterTypePreferences();
    //check for null value
    if(characterTypes == null)
    {
      return null;
    }
    //setup password that will be added to inside the array
    var password = "";
    //loop until passLength
    for(var a = 0;a<passLength;a++)
    {
      //on each loop randomly pull from one of the character arrays
      if (characterTypes.length>1)
      {
        //randomly choose one of the character type array indexes
        var randomCharacterTypeIndex = Math.floor(Math.random() * characterTypes.length);
        var randomSelectedArray = characterTypes[randomCharacterTypeIndex];
        //push char to password
        password += returnRandomCharFromArray(randomSelectedArray);
      }else //don't randomly select an array because there is only one array that is selected by user
      {
        //push char to password
        password += returnRandomCharFromArray(characterTypes[0]);
      }
    }
    //return password now that loop has finished its work
    return password;
  }else
  {
    return null;
  }
}

function returnRandomCharFromArray(array)
{
  //randomly retrieve one of the items out of the array
  var randomCharIndex = Math.floor(Math.random() * array.length);
  //return random char
  return array[randomCharIndex]
}

function promptPasswordLength()
{
  //return desired password length from user
  var passLengthPrompt = prompt("Enter desired length of password","");

  //evaluate response
  if (passLengthPrompt != null)
  {
    //setup regex to test for digit in user response to prompt
    if (/^\d+$/.test(passLengthPrompt)) //tests string for ONLY one or more digits
    {
      //since passlengthPrompt is known int continue to parse
      var passLengthNum = parseInt(passLengthPrompt);
      if (passLengthNum>=8 && passLengthNum<=128)
      {
        return passLengthNum;
      }else
      {
        alert("Please enter a valid number least 8 characters and no more than 128 characters");
      }
    }else
    {
      alert("Please enter a valid number least 8 characters and no more than 128 characters");
    }
  }else
  {
    //exit out of function because user has selected cancel
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
    //returns true/false from user
    var shouldCharacterType = returnCharacterTypeFromUser(a);
    if (shouldCharacterType)
    {
      //append user selected array of character types to global array
      characterTypes.push(characterTypeObj[a].possibleChars)
      count++;
    }
  }
  if (count<1)
  {
    alert("At least one character type must be selected");
    return null;
  }
  return characterTypes;
}

//setup global object that loginally associates character arrays 
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

//argument is property name from global character type object that is passed to user confirmation
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
function writePassword() 
{
  var password = generatePassword();
  //if password generated successfully set generated password to password textarea ELSE reset to blank
  if (password != null)
  {
    setPassword(password);
  }else
  {
    setPassword("");
  }
}

//set password textarea in function below instead of repeating code in writePassword() 
function setPassword(password)
{
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);