const arrayTasks = {

	concat: function (arr1, arr2) {
    // const newArray = [];
    // arr1.forEach(function (element) {
    //   newArray.push(element);
    // });
    // arr2.forEach(function (element) {
    //   newArray.push(element)
    // });
    // return newArray;
    const newArray = arr1.concat(arr2);
    return newArray;
	},

	insertAt: function (arr, itemToAdd, index) {
    const newArray = [itemToAdd];
    const firstHalf = arr.slice(0, index);
    const lastHalf = arr.slice(index);
    const array = firstHalf.concat(newArray)
    const result = array.concat(lastHalf);
    return result;
	},

	square: function (arr) {
      const squaredArray = arr.map(function (number) {
        return number ** 2;
      })
      return squaredArray;
	},

	sum: function (arr) {
      const total = arr.reduce(function (acc, number) {
        return acc + number;
      })
      return total;
	},

	removeAndClone: function (arr, valueToRemove) {
    const valuesToKeep = arr.filter(function (value) {
      return value !== valueToRemove;
    })
    return valuesToKeep;
	},

	findIndexesOf: function (arr, itemToFind) {
    const indexArray = [];
    arr.forEach(function (item, index) {
        if(item === itemToFind){
          indexArray.push(index);
        }
    })
    return indexArray;
	},

	sumOfAllEvenNumbersSquared: function (arr) {
    const result = arr.filter(function (number) {
    return number % 2 === 0;
  })
  return result.reduce(function (acc, number) {
    return acc + number ** 2;
  }, 0);
	}

	// ----------- EXTENSION ------------

	// findDuplicates: function (arr) {

	// },

}

module.exports = arrayTasks
