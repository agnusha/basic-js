module.exports = function countCats(matrix) {
  let count = 0;
  matrix.forEach(function(item) {
    count+=item.filter(x=> x=="^^").length;
  });
  return count;
};
