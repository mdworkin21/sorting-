function split(wholeArr) {
  const firstHalf = wholeArr.slice(0, wholeArr.length / 2);
  const secondHalf = wholeArr.slice(wholeArr.length / 2);

  return [firstHalf, secondHalf];
}

function merge(arr1, arr2) {
  let mergedArr = [];

  while (arr1.length || arr2.length) {
    if (arr1[0] < arr2[0]) {
      mergedArr.push(arr1.shift());
    } else if (arr2.length) {
      mergedArr.push(arr2.shift());
    } else if (arr1.length) {
      mergedArr.push(arr1.shift());
    }
  }
  return mergedArr;
}

// function mergeSort(arr) {
//   let firstHalf, secondHalf;
//   if (arr.length )
//   if (arr.length === 2) { // BASE CASE
//     [firstHalf, secondHalf] = split(arr);
//     return merge(firstHalf, secondHalf);
//   } else if (arr.length > 2) {

//   }

//   return mergeSort(mergeSort())
// }

function mergeSort(arr){
  if (arr.length <= 2){
    let splitArr = split(arr);
    return merge(splitArr[0], splitArr[1])
  } else {
    let firstHalf, secondHalf;
    [firstHalf, secondHalf] = split(arr);
    return merge(mergeSort(firstHalf), mergeSort(secondHalf))
  }
}
