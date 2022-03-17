const wordSearch = (letters, word) => { 
    //created by Mveer100 && Farles6
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
        
    }
        let arr = [];
        for (let i = 0; i < letters[0].length; i++){
          arr.push([]);
      }
      for (let a = 0; a < letters.length; a++){
        for (let b = 0; b < letters[a].length; b++){
          arr[b][a] = letters[a][b];
        }
        
        const verticalJoin = arr.map(as => as.join(''))
        console.log(verticalJoin)
        for (x of verticalJoin) {
            if (x.includes(word)) return true
      }
    }
    return false;
    }


module.exports = wordSearch

wordSearch([
    ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
    ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['F', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
    ['R', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
    ['A', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
    ['N', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
    ['K', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
    ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
     ], 'FRANK');
   
    

    
