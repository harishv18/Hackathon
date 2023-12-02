let word = "leetcode";

let word_dict = ["leet", "word"];
function wordBreak(word,word_dict) {
  let newWord1 = word_dict[0];
  let newWord2 = word_dict[1];
  let check1 = word.split(newWord1);
  let check2 = word.split(newWord2);
  if (check1.length > 1 && check1.length > 1) {
    console.log(true);
  } else {
    console.log(false);
  }
}
wordBreak(word, word_dict)


