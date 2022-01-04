module.exports = function reverse (n) {
    if (n > 0){
        return n.toString().split('').reverse().join('');
        }
      else {
        num = n.toString().split('');
        num.shift();
        return num.reverse().join('');
      }
    }
