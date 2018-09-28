
  function newway(anarray) {
    var result = 0;
    for(var i = 0; i < anarray.length; i++) {
     result += anarray[i];
    }
    return result;
   };
   module.exports = { newway }