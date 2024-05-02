/**
 *
 * @param {number} n
 * @return {number}
 */
const viralAdvertising = (n) => {
  let people = 2;
  let recipientsPerDay = 2;
  if (n === 1) return recipientsPerDay;

  for (let i = 2; i <= n; i++) {
    const recipients = Math.floor((recipientsPerDay * 3) / 2);
    people += recipients;
    recipientsPerDay = recipients;
  }

  return people;
};

console.log(viralAdvertising(5));
