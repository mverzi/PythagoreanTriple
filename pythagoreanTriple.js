/**
 * This function determines if a pythagorean triple is possbile given the numbers from the input array
 * @param {array} integers 
 * @returns true if a triple is possible, false otherwise
 */
function isPythagoreanTriple(integers) {
    integers = integers.sort((a,b)=>a-b)
    return integers[0]**2 + integers[1]**2 === integers[2]**2
  }