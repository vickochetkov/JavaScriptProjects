// ==== 2. Roman Numeral Converter ====
// Convert the given number into a roman numeral.
// All roman numerals answers should be provided in upper-case.

function convertToRoman(num) {
	var roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'],
	digits = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
	rslt = "";

	for (var i =0; i < digits.length; i++) {
		while (digits[i] <= num) {
			rslt += roman[i];
			num -= digits[i];
		}
	}
 return rslt;
}

// === Intermediate Code Solution: ===
function convertToRoman(num) {
  var romans = [
  // 10^i 10^i*5
    ["I", "V"], // 10^0
    ["X", "L"], // 10^1
    ["C", "D"], // 10^2
    ["M"]       // 10^3
  ],
      digits = num.toString()
        .split('')
        .reverse()
        .map(function(item, index) {
          return parseInt(item);
        }),
      numeral = "";

  // Loop through each digit, starting with the ones place
  for (var i=0; i<digits.length; i++) {
    // Make a Roman numeral that ignores 5-multiples and shortening rules
    numeral = romans[i][0].repeat(digits[i]) + numeral;
    // Check for a Roman numeral 5-multiple version
    if (romans[i][1]) {
      numeral = numeral
        // Change occurrences of 5 * 10^i to the corresponding 5-multiple Roman numeral
        .replace(romans[i][0].repeat(5), romans[i][1])
        // Shorten occurrences of 9 * 10^i
        .replace(romans[i][1] + romans[i][0].repeat(4), romans[i][0] + romans[i+1][0])
        // Shorten occurrences of 4 * 10^i
        .replace(romans[i][0].repeat(4), romans[i][0] + romans[i][1]);
    }
  }

  return numeral;
}

// === Code Explanation: ===
// Use an array (romans) to create a matrix containing the Roman numeral for a given power of 10 and, if available, the Roman numeral for that power of 10 times 5.
// Convert the input number (num) to a reversed array of digits (digits) so that we can loop through those digits starting with the ones position and going up.
// Loop through each digit, starting with the ones place, and create a Roman numeral string by adding each higher-power Roman numeral to the start of the numeral string a number of times equal to digit. This initial string ignores the Roman numerals that are a power of 10 times 5 and also ignores shortening rules.
// If the relevant power of 10 has a 5-multiple Roman numeral, in numeral, replace 5-in-a-row occurrences with the relevant 5-multiple Roman numeral (i.e., V, L, or D) and shorten occurrences of 9 * 10^i (e.g., VIIII to VIX) and 4 * 10^i (e.g., XXXX to XL). Order is important here!
// Finally, return numeral.

// console.log(convertToRoman(36)); // XXXVI
// console.log(convertToRoman(2)); // should return "II".
// console.log(convertToRoman(3)); // should return "III".
// console.log(convertToRoman(4)); // should return "IV".
// console.log(convertToRoman(5)); // should return "V".
// console.log(convertToRoman(9)); // should return "IX".
// console.log(convertToRoman(12)); // should return "XII".
// console.log(convertToRoman(16)); // should return "XVI".
// console.log(convertToRoman(29)); // should return "XXIX".
// console.log(convertToRoman(44)); // should return "XLIV".
// console.log(convertToRoman(45)); // should return "XLV"
// console.log(convertToRoman(68)); // should return "LXVIII"
// console.log(convertToRoman(83)); // should return "LXXXIII"
// console.log(convertToRoman(97)); // should return "XCVII"
// console.log(convertToRoman(99)); // should return "XCIX"
// console.log(convertToRoman(400)); // should return "CD"
// console.log(convertToRoman(500)); // should return "D"
// console.log(convertToRoman(501)); // should return "DI"
// console.log(convertToRoman(649)); // should return "DCXLIX"
// console.log(convertToRoman(798)); // should return "DCCXCVIII"
// console.log(convertToRoman(891)); // should return "DCCCXCI"
// console.log(convertToRoman(1000)); // should return "M"
// console.log(convertToRoman(1004)); // should return "MIV"
// console.log(convertToRoman(1006)); // should return "MVI"
// console.log(convertToRoman(1023)); // should return "MXXIII"
// console.log(convertToRoman(2014)); // should return "MMXIV"
// console.log(convertToRoman(3999)); // should return "MMMCMXCIX"
