describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect(split([1,2,3,4])).toEqual([[1,2], [3,4]]);
  });
});
describe('Merge function', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    expect(merge([1, 3, 5], [2, 4, 6])).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
describe('mergeSort function', function(){
  it('is able to split one unsorted array (n length) into single element arrays', function(){
    expect(mergeSort([1, 3, 5, 2, 4, 6])).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
