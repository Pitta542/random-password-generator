function GeneratePassword(length, includeLowerCase, includeUpperCase, includeNums, includeSymbols){
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numChars = "0123456789";
    const symbolChars = "!@#$%^&*_";

    let allowedChars = ""
    let password = " ";

    allowedChars += includeLowerCase ? lowercaseChars : "";
    allowedChars += includeUpperCase ? uppercaseChars : "";
    allowedChars += includeNums ? numChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    if(length <= 0){
        return `(Password length must at least be 1)`;
    }
    if(allowedChars.length === 0){
        return `(At least 1 set of characters needs to be selected)`;
    }

    for(let i = 0; i < length; ++i){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }
    
    return password;
}


const passwordLength = 12;
const includeLowerCase = true;
const includeUpperCase = true;
const includeNums = true;
const includeSymbols = true;

const Password = GeneratePassword(passwordLength, includeLowerCase, 
                    includeUpperCase, includeNums, includeSymbols)

console.log(`generated password: ${Password}`);