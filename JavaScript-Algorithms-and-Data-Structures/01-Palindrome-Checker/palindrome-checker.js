function palindrome(str) {
    str = str.toLowerCase();
    str = str.replace(/[^a-z0-9]/gi, "");
    let rString = str.split("").reverse().join("");
    console.log(str);
    console.log(rString);
    return str === rString;
  }
  
  palindrome("1 eye for of 1 eye.");