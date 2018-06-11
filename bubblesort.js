function bubbleSort(arr) {
  let max = arr.length - 1;
  while (max > 1) {
    for (let i = 0; i < max; i++) {
      [arr[i], arr[i + 1]] = swap(arr[i], arr[i + 1]);
    }
    max--;
  }
  return arr;
}

function swap(a, b) {
  // let a = arr[i]
  if (a > b) {
    [a, b] = [b, a];
  }
  return [a, b];
}

// swap(arr[i], arr[i+1])
