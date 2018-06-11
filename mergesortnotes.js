// mergesort([1, 4, 5, 2, 6, 3, 2, 11])

//     split(1, 4, 5, 2, 6, 3, 2, 11)
//       return [1, 4, 5, 2], [6, 3, 2, 11]
//   return merge (mergesort (arr1), mergesort(arr2))




//   mergesort(1, 4, 5, 2)

//     split (1, 4   5, 2)
//       return [1, 4]      [5, 2]
//     return merge (mergesort (1, 4), mergesort(5, 2))





//       mergesort(1, 4)
//         split(1, 4)
//           return 1        4
//         return merge([1],[4])


//       mergesort(5, 2)
//         split(5, 2)
//           return 5        2
//         return merge([5],[2])



//   mergesort (6, 3, 2, 11)
