function rot13(str) {
    let string = str;
    string = string.split("");
    for (let i =0; i < string.length; i++) {
      string[i] = string[i].charCodeAt(0);
      if(string[i] >= 65 && string[i] <= 90) {
        string[i] = string[i] + 13;
        if( string[i] > 90) {
          string[i] -= 26;
        }
      }
    }
    for (let i =0; i< string.length; i++) {
      string[i] = String.fromCharCode(string[i]);
    }
    string = string.join("");
  
    console.log(string)
    return string;
  }
  
  rot13("SERR PBQR PNZC");