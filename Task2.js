/**
 * Students:
 * Bshara Karkaby [49-2]
 * Moner Makhouly [49-2]
 *
 */

"use strict";

/**
 * Function check if the number is prime.
 *
 * @param {number} num - Number To Check.
 * @returns {boolean} - Returns `true` if the number is prime - otherwise returns `false`.
 */
function isPrime(num) {
  if (num < 2)
    // Numbers smaller that 2 are not prime
    return false;
  for (let i = 2; i < num; i++) if (num % i === 0) return false; // If number divides without a remainder, it is not prime.
  return true;
}

for (let num = 0; num < 237; num++) {
  if (isPrime(num)) console.log(num);
}
