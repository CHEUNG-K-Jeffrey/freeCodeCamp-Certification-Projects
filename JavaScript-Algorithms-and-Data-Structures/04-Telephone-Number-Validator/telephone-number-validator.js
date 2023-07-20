function telephoneCheck(str) {
    let number = str.match(/^1? ?(\([0-9]{3}\)|[0-9]{3})(-| )?[0-9]{3}(-| )?[0-9]{4}$/gi);;
    console.log(number);
    
    return number !== null ? true: false;
  }
  
  telephoneCheck("555-555-5555");