var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array){
  array = ["foo",...array]
  return array
}

function destructivelyAddElementToBeginningOfArray(array){
  array.unshift("foo");
  return array
}

function addElementToEndOfArray(chocolateBars){
  chocolateBars = [...chocolateBars, "foo"]
  return chocolateBars
}

function destructivelyAddElementToEndOfArray(chocolateBars){
  chocolateBars.push("foo");
  return chocolateBars
}

function accessElementInArray(array){
  return array[2];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array
}

function removeElementFromBeginningOfArray(chocolateBars){
  chocolateBars = chocolateBars.slice(1)
  return chocolateBars
}

function destructivelyRemoveElementFromEndOfArray(chocolateBars){
  chocolateBars.pop();
  return chocolateBars
}

function removeElementFromEndOfArray(chocolateBars){
  chocolateBars = chocolateBars.slice(0, chocolateBars.length - 1)
  return chocolateBars
}
