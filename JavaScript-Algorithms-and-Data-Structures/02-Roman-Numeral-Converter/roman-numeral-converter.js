function convertToRoman(num) {
    let numerals = [["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
                    ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
                    ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
                    ["M", "MM", "MMM"]
    ];
    let number = num.toString();
    let romanNum = [];
    number = number.split("").reverse();
    for (let i =0; i < number.length; i++) {
      number[i] = Number.parseInt(number[i]);
    }
    for (let i = 0; i < number.length; i++) {
      romanNum.unshift(numerals[i][number[i]-1]);
      
    }
    romanNum = romanNum.join("");
    console.log(romanNum);
    return romanNum;
  }
  
  convertToRoman(36);