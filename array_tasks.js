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

	// sum: function (arr) {

	// },

	// removeAndClone: function (arr, valueToRemove) {

	// },

	// findIndexesOf: function (arr, itemToFind) {

	// },

	// sumOfAllEvenNumbersSquared: function (arr) {

	// }

	// ----------- EXTENSION ------------

	// findDuplicates: function (arr) {

	// },

}

module.exports = arrayTasks
