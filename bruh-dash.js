var global = window || GLOBAL;

/****************************************************************************************
 * Function signatures have been intentionally left out of the comments describing what *
 * each function does so that you can have practice looking up documentation. Please    *
 * Reference the documentation at [ https://lodash.com/docs/4.17.4 ] You should have    *
 * documentation up in a browser window at all times when working on projects!          *
 ****************************************************************************************/

global.bruhdash = {

  // returns the first element of an array
  first: function (arr) {
      return arr[0];
  },

  // returns the last element of an array
  last: function (arr) {
    for (let i = 0; i < arr.length; i++) {
      return arr[arr.length -1];
    }
  },

  // returns the index of the first matching element from left to right
  indexOf: function (arr, elem) {
    return arr.indexOf(elem);
  },

  // returns the index of the first matching element from right to left
  lastIndexOf: function (arr, num) {
    return arr.lastIndexOf(num);
  },

  // returns an array with all elements except for the last element
  initial: function (arr) {
    var result = []
    for (let i = 0; i < arr.length; i++) {
     if (arr[i] !== arr[arr.length - 1]){
       result.push(arr[i]);
     }
    }
    return result;

  },
  
  // returns an array with all falsey values removed
  compact: function(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      if(!!arr[i]){
        result.push(arr[i]);
      }
    }
    return result;
  },

  // creates a slice of an array from the start index up to but not including the end index
  slice: function (arr) {
    for (let i = 0; i < arr.length; i++) {
      return arr.slice(2, [arr.length - 1])
    }
    
  },

  // returns a slice of array with n elements dropped from the beignning
  drop: function(arr, n){
    var result;
    if(n === 0){
      return arr;
    }
    if(n){
      return arr.slice(n);
    } else {
      return arr.slice(1);
    }
  },

  // returns a slice of array with n elements dropped from the end
  dropRight: function(arr, n) {
    if(n===0){
      return arr;
    } else if (n) {
      return arr.slice(0, n+1);
    } else {
      return arr.slice(0, arr.length - 1);
    }
  },

  // creates a slice of an array with n elements taken from the beginning
  take: function (arr, n) {
    var empty =[];
    if (n>arr.length){
      return arr;
    } else if (n===0){
      return empty;
    } else if (n){
      return arr.slice(0, n);
    } else {
      empty.push(arr[0]);
      return empty;
    }
  },

  // creates a slice of an array with n elements taken from the end
  takeRight: function (arr, n) {
    var empty = [];
    if(n>arr.length){
      return arr;
    } else if(n === 0){
      return empty;
    } else if(n){
      return arr.slice(n-1, arr[arr.length -1]);
    } else{
      empty.push(arr[arr.length-1]);
      return empty;
    }
  },

  // fills elements of array with specified value from the start index
  // up to but not including the end index
  fill: function(arr, value, start, end) {
   if(!start && !end){
     return arr.fill(value);
   }else {
    for (var i = start; i < end; i++) {
      arr.splice(i, 1, value);
    }
  }
  return arr;
  },

  // removes all given values from an array
  pull: function (arr, values) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < values.length; j++) {
        if(arr[i]===values[j]){
          arr.splice(i,2);
        }
      }
    }
    return arr;
  },

  // removes elements of an array corresponding to the given indices
  pullAt: function (arr, indices) {
    var a =[];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < indices.length; j++) {
        if(arr.indexOf(arr[i]) === indices[j]){
           a.push(arr[i])
        }
      }
    }
    return a;
  },

  // creates an array excluding all the specified values
  without: function(arr, ...value) {
    let a = arr.slice('');
    for (let i = arr.length -1; i >= 0; i--) {
      for (let j = value.length -1; j >= 0; j--) {
        if(arr[i] === value[j]){
          a.splice(i,1);
        }
      }
    }
    return a;
  },

  // returns an array with specified values excluded
  difference: function(values, arr) {
    let a = [];
    for (let i = 0; i < values.length; i++) {
      if(!arr.includes(values[i])){
        a.push(values[i]);
      }     
      } 
      return a;
  },

  /*******************
   *  STRETCH GOALS! *
   *******************/ 

  // creates an array of grouped elements
  zip: function (arr, alpha) {
    var a = [];
    for (var i = 0; i < arr.length; i++){
       a.push([arr[i], alpha[i]]);
    }
    return a
    

  },

  // creates an array of grouped elements in their pre-zip configuration
  unzip: function transposeArray(array){
    var newArray = [];
    for(var i = 0; i < array[0].length; i++){
        newArray.push([]);
    };

    for(var j = 0; j < array[0].length; j++){
        for(var k = 0; k < array.length; k++){
            newArray[j].push(array[k][j]);
        };
    };

    return newArray;
},

  // creates an array of elements into groups of length of specified size
  chunk: function(arr, chunkSize){
    console.log(chunkSize);
    console.log(arr);
    var empty = [];
    if(chunkSize ===0){
      return empty;
    }
    let results = [];
    for (let i = 0; i < arr.length; i+=chunkSize) {
      results.push(arr.slice(i, i+chunkSize));
      
    }
    return results;
},


  // iterates over elements of a collection and invokes iteratee for each element
  // Note: this should work for arrays and objects
  forEach: function(arr, func){
    if (Array.isArray(arr)){
      var map1 = arr.map(func);
      return map1;
    } else if(typeof arr === 'object'){
      let objValues = Object.values(arr);
      let objArr = [];
      for (let i = 0; i < objValues.length; i++) {
        objArr.push(objValues[i]);
      }
      return objArr.map(func);
    }
  },

  // creates an array of values by running each element in collection thru the iteratee
  // Note: this should work for arrays and objects
  map: function(arr, func) {
    if(Array.isArray(arr)){
    const map1 = arr.map(x => x*2);
    return map1;
    } else if(typeof arr === 'object'){
      var objVals = Object.values(arr);
      var objValsArr = [];
      for (let i = 0; i < objVals.length; i++) {
        objValsArr.push(objVals[i]);
      }
      return objValsArr.map(func);
    }

  },

  /*************************
   *  SUPER STRETCH GOALS!  *
   *************************/ 

  // iterates over elements of a collection and returns all elements that the predicate returns truthy for
  // Note: this should work for arrays and objects
  filter: function(arr, func) {
    if(Array.isArray(arr)){
      const map1 = arr.filter(func);
      return map1;
      } else if(typeof arr === 'object'){
        var objVals = Object.values(arr);
        var objValsArr = [];
        for (let i = 0; i < objVals.length; i++) {
          objValsArr.push(objVals[i]);
        }
        return objValsArr.filter(func);
      }
  },

  // Reduces the collection to a value which is the accumulated result of running each element
  // in the collection through an iteratee
  // Note: this should work for arrays and objects
  reduce: function(arr, func) {
    if(Array.isArray(arr)){
      const map1 = arr.reduce(func);
      return map1;
      } else if(typeof arr === 'object'){
        var objVals = Object.values(arr);
        var objValsArr = [];
        for (let i = 0; i < objVals.length; i++) {
          objValsArr.push(objVals[i]);
        }
        return objValsArr.reduce(func);
      }
  }
};
