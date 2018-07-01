// ==== 3. Caesars Cipher ====
// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
// Write a function which takes a ROT13 encoded string as input and returns a decoded string.
// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

function rot13(str) { // LBH QVQ VG!
	var alphabet = [
    'A','B','C','D','E','F','G','H','I','J','K','L','M',
    'N','O','P','Q','R','S','T','U','V','W','X','Y','Z'
  ];
	return str.split("").map((item, idx) => (/[A-Z]/).test(item) ? alphabet[(alphabet.indexOf(item) + 13) % 26] : item).join("");
};

// == Advanced Code Solution: ==

// function rot13(str) { // LBH QVQ VG!
//   return str.replace(/[A-Z]/g, L => String.fromCharCode((L.charCodeAt(0) % 26) + 65));
// }

console.log(rot13("SERR PBQR PNZC")); // should decode to FREE CODE CAMP
console.log(rot13("LBH QVQ VG!")); // should decode to YOU DID IT!
console.log(rot13("SERR CVMMN!")); // should decode to FREE PIZZA!
console.log(rot13("SERR YBIR?")); // should decode to FREE LOVE?
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")); // should decode to THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
