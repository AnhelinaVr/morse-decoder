const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    var a = [],
        prom = [],
        res = '',
        result = [];
    reg = /[01*]{1,10}/g;
    a = expr.match(reg);
    console.log(a);
    for (let i = 0; i < a.length; i++) {
        prom = a[i].split('');
        for (let j = 0; j < prom.length - 1; j++) {
            if (prom[j] == '0' && prom[j + 1] == '0') continue;
            else if (prom[j] == '1' && prom[j + 1] == '1') {
                result.push('-');
                j++;
            } else if (prom[j] == '1' && prom[j + 1] == '0') result.push('.');
            else if (prom[j] == "*") {
                res += ' ';
                break;
            }
        }
        result = result.join('');
        if (result) {
            res += MORSE_TABLE[result];
        }
        result = [];
    }
    return res;
}
module.exports = {
    decode
}