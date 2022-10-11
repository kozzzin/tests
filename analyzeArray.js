function analyzeArray(arr) {
  const avg = arr.reduce((acc,curr) => acc + curr, 0) / arr.length;
  return {
    average: avg,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length
  }
}



module.exports = { analyzeArray }