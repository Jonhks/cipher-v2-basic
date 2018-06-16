window.cipher = {
  offset: 33,
  encode: (offset, str) => {
    offset = parseInt(offset)
    let palCifrada = "";
    for (let i = 0; i< str.length; i++) {
      let palAscii = str[i].charCodeAt();
      if (palAscii == 32) {
        palCifrada += str[i];
      }else if (palAscii >= 65 && palAscii<= 90) {
        let formula = (palAscii - 65 +offset) % 26 + 65;
      let aString = String.fromCharCode(formula);
      palCifrada += aString; 
      }else if (palAscii >= 97 && palAscii<= 122) {
        let formula = (palAscii - 97 + offset) % 26 +97;
      let aString = String.fromCharCode(formula);
      palCifrada += aString; 
      }       
    } 
    return palCifrada;
  }, 
  decode: (offset, str) => {
    let palCifrada = "";
    offset = parseInt(offset);
    for(let i = 0; i <str.length; i++) {
      let palAscii = str[i].charCodeAt();
      if (palAscii == 32) {
        palCifrada += str[i];
      }else if(palAscii >= 65 && palAscii <= 90) {
        let formula = (palAscii + 65 -  offset) % 26 + 65;
          let aString = String.fromCharCode(formula);
        palCifrada += aString;
      }else if(palAscii >= 97 && palAscii <= 122) {
        let formula =(palAscii + 97 - offset ) % 26 + 97;
        let aString =String.fromCharCode(formula);
        palCifrada += aString;
      }
    }
    console.log(palCifrada)
    return palCifrada;
  },

  createCipherWithOffset: (offset) => {
    // return {
    //   encodeOff: (string)=>cipher.encode(string,offset),
    //   decodeOff: (string)=>cipher.decode(string,offset)
    // }
  }
};
