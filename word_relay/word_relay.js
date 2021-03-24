const start_word_el = document.getElementById("start_word");
const form_el = document.querySelector("form");
const input_el = document.querySelector("input");
const answer_el = document.getElementById("answer");

let start_word = "컴퓨터";
start_word_el.innerText = start_word;
input_el.focus();

// while (true) {
// const answer = prompt(start_word);
form_el.addEventListener("submit", (event) => {
  // input창에서 enter키 입력 시 동작하게 된다. 또는 button click.
  event.preventDefault(); // 기본 동작인 새로 고침을 하지 못하게 한다.
  const answer = input_el.value;
  if (answer[0] === start_word[start_word.length - 1]) {
    start_word = answer;
    answer_el.innerText = "정답입니다.";
    start_word_el.innerText = start_word;
  } else {
    // alert("땡!");
    answer_el.innerText = "오답입니다.";
  }
  input_el.value = "";
  input_el.focus();
});
// }
