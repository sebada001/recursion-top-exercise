// FIBONACCI
const seq = (n, arr = [0], i = 1) =>
  i < n
    ? i >= 2
      ? seq(n, arr.concat(arr[i - 1] + arr[i - 2]), ++i)
      : seq(n, arr.concat(i), ++i)
    : n == 0
    ? []
    : arr;

console.table(seq(3));
console.table(seq(8));

// MERGE SORT
function mergeSort(arr) {
  if (arr.length < 2) return arr;
  const [a, b] = [
    mergeSort(arr.slice(0, arr.length / 2)),
    mergeSort(arr.slice(arr.length / 2)),
  ];
  let c = [];
  let [i, j] = [0, 0];
  while (i < a.length || j < b.length) {
    a[i] <= b[j] ? c.push(a[i++]) : c.push(b[j++]);
    // optimize if one side's biggest is smaller than the other side's smallest
    if (i == a.length) {
      c = c.concat(b.slice(j));
      break;
    }
    if (j == b.length) {
      c = c.concat(a.slice(i));
      break;
    }
  }
  return c;
}
console.log(mergeSort([4, 7, 8, 5, 6, 2, 3, 1, 7]));
console.log(mergeSort([3, 2, 3, 5, -1, 3, 3, 1, 7]));
