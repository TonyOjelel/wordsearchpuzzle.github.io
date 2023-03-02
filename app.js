var countrygrid = [
    ['A', 'I', 'V', 'T', 'A', 'L', 'N', 'I', 'E', 'T', 'S', 'N', 'E', 'T', 'H', 'C', 'E', 'I', 'L'],
    ['G', 'N', 'E', 'T', 'H', 'E', 'R', 'L', 'A', 'N', 'D', 'S', 'N', 'P', 'V', 'A', 'A', 'P', 'D'],
    ['R', 'O', 'M', 'A', 'N', 'I', 'A', 'T', 'V', 'I', 'S', 'R', 'O', 'I', 'I', 'I', 'O', 'C', 'B'],
    ['U', 'T', 'E', 'J', 'V', 'I', 'E', 'T', 'Y', 'C', 'N', 'L', 'E', 'R', 'A', 'R', 'I', 'D', 'I'],
    ['O', 'V', 'P', 'M', 'J', 'J', 'S', 'C', 'O', 'B', 'A', 'A', 'T', 'C', 'T', 'P', 'N', 'E', 'G'],
    ['B', 'E', 'C', 'I', 'V', 'E', 'S', 'T', 'N', 'N', 'T', 'S', 'U', 'U', 'E', 'A', 'S', 'V', 'Y'],
    ['M', 'A', 'E', 'I', 'K', 'A', 'L', 'L', 'D', 'A', 'U', 'W', 'G', 'H', 'L', 'E', 'X', 'C', 'A'],
    ['E', 'G', 'J', 'N', 'L', 'A', 'T', 'V', 'O', 'A', 'R', 'A', 'B', 'R', 'T', 'B', 'R', 'Z', 'W'],
    ['X', 'E', 'J', 'W', 'N', 'B', 'S', 'L', 'E', 'V', 'L', 'F', 'E', 'N', 'U', 'I', 'V', 'G', 'R'],
    ['U', 'Y', 'P', 'D', 'I', 'V', 'U', 'S', 'A', 'E', 'A', 'Z', 'L', 'L', 'R', 'L', 'L', 'S', 'O'],
    ['L', 'R', 'R', 'M', 'A', 'C', 'T', 'P', 'N', 'M', 'T', 'K', 'G', 'T', 'N', 'V', 'P', 'N', 'N'],
    ['I', 'A', 'A', 'N', 'A', 'O', 'E', 'I', 'E', 'I', 'Y', 'A', 'I', 'J', 'N', 'S', 'K', 'D', 'J'],
    ['L', 'G', 'N', 'I', 'N', 'C', 'A', 'L', 'W', 'R', 'R', 'H', 'U', 'A', 'E', 'D', 'R', 'N', 'D'],
    ['I', 'N', 'I', 'I', 'T', 'R', 'E', 'S', 'A', 'I', 'H', 'V', 'M', 'L', 'J', 'N', 'A', 'A', 'J'],
    ['N', 'U', 'A', 'V', 'K', 'A', 'A', 'D', 'A', 'N', 'P', 'C', 'A', 'O', 'V', 'A', 'M', 'L', 'Y'],
    ['U', 'H', 'Z', 'U', 'V', 'J', 'O', 'G', 'O', 'R', 'D', 'W', 'E', 'V', 'J', 'L', 'N', 'G', 'L'],
    ['N', 'E', 'D', 'E', 'W', 'S', 'B', 'R', 'N', 'N', 'U', 'V', 'J', 'Z', 'T', 'E', 'E', 'N', 'A'],
    ['D', 'S', 'U', 'R', 'A', 'L', 'E', 'B', 'C', 'T', 'I', 'I', 'G', 'I', 'C', 'R', 'D', 'E', 'T'],
    ['D', 'N', 'A', 'L', 'N', 'I', 'F', 'G', 'E', 'R', 'M', 'A', 'N', 'Y', 'W', 'I', 'M', 'E', 'I']];

var countrynames = ['AUSTRIA', 'BELARUS', 'BELGIUM', 'BULGARIA', 'CROATIA', 'CZECHREPUBLIC', 'DENMARK', 'ENGLAND', 'ESTONIA',
    'FINLAND', 'FRANCE', 'GERMANY', 'GREECE', 'HUNGARY', 'ICELAND', 'IRELAND', 'ITALY', 'LATVIA', 'LIECHTENSTEIN',
    'LITHUANIA', 'LUXEMBOURG', 'MACEDONIA', 'MALTA', 'NETHERLANDS', 'NORWAY', 'POLAND', 'PORTUGAL', 'ROMANIA',
    'SCOTLAND', 'SLOVAKIA', 'SPAIN', 'SWEDEN', 'SWITZERLAND', 'UKRAINE', 'WALES'];

function getRandom(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}

var wordnames = getRandom(countrynames, 5)

ws = new WordSearch({
        "grid": countrygrid, // Your grid to search
        "words": wordnames, // The list of words to find
        "parentId": "mysearchtask",
        "onFindWord": function() { // When a word is found...
          console.log(this.getScore()); // Log score
          console.log(this.getTiming()); // Log time to find each word
        } 
    });