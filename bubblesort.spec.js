describe('Bubble Sort', function() {
  it('handles an empty array', function() {
    expect(bubbleSort([])).toEqual([]);
  });
  it('sorts unsorted array', function() {
    expect(bubbleSort([4, 6, 1, 7, 10, 2, 3])).toEqual([1, 2, 3, 4, 6, 7, 10]);
  });
  it('addresses same value elements', function() {
    expect(bubbleSort([2, 1, 2, 3])).toEqual([1, 2, 2, 3]);
  });
  it('returns same array if already sorted', function() {
    expect(bubbleSort([1, 2, 3])).toEqual([1, 2, 3]);
  });
});
