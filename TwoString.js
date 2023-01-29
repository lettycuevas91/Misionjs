function TwoString(str1, str2) {
  let l1 = {};
  let l2 = {};

  str1.split("").forEach((item) => {
    if (!l1[item]) {
      l1[item] = true;
    }
  });

  str2.split("").forEach((item) => {
    if (!l2[item]) {
      l2[item] = true;
    }
  });

  if (Object.keys(l1).length !== Object.keys(l2).length) return "NO";

  for (let key in l1) {
    if (l1[key] !== l2[key]) return "NO";
  }

  return "YES";
}
console.log(TwoString("hello", "eellloh")); //YES
console.log(TwoString("aa", "ab")); //NO
console.log(TwoString("aaa", "aba")); //NO
console.log(TwoString("abcd", "daabbcc")); //YES
console.log(TwoString("abcd", "aefgh")); //NO
