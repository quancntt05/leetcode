/**
 *
 * @param {number} n
 * @param {number} m
 * @param {number} s
 * @return {number}
 */
function saveThePrisoner(n, m, s) {
  if ((s + m - 1) % n == 0) return n;
  return (s + m - 1) % n;
}
