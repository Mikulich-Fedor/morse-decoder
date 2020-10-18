const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    ' ': ' ',
};

function decode(expr) {
    let decoder;    /*Change code on morse( key "MORSE_TABLE")*/
    let leter;     /*10 simbol*/
    let result = '';
    /*looking for key for "MORSE_TABLE"*/
    for (let i = 0; i < expr.length; i = i + 10) {
    leter = expr.substring(i, i + 10);
    decoder = leter
                .replace(/10/g, '.')
                .replace(/11/g, '-')
                .replace(/\*{10}/, ' ')
                .replace(/00/g, '');
    
    result += MORSE_TABLE[decoder];
    } 
    return result;
}

module.exports = {
    decode
}