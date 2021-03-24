const question_el = document.getElementById("question");
const form_el = document.querySelector("form");
const input_el = document.querySelector("input");
const answer_el = document.getElementById("answer");

// while (true) {
function randomGugudan() {
  const random1 = Math.ceil(Math.random() * 9);
  const random2 = Math.ceil(Math.random() * 9);
  const answer = random1 * random2;
  return [random1, random2, answer];
}
const [random1, random2, answer] = randomGugudan();
question_el!.innerText = `${random1} 곱하기 ${random2}는?`;
let current_answer = answer;
input_el?.focus();
// let is_right = false;

form_el?.addEventListener("submit", (event) => {
  event.preventDefault();
  // const user_input = prompt(`${random1} 곱하기 ${random2}는?`);
  const user_input = input_el!.value;
  // while (!is_right) {
  if (parseInt(user_input, 10) === current_answer) {
    // alert("정답입니다.");
    answer_el!.innerText = "정답입니다.";
    //   is_right = true;
    const [random1, random2, answer] = randomGugudan();
    question_el!.innerText = `${random1} 곱하기 ${random2}는?`;
    current_answer = answer;
  } else {
    // alert("오답입니다.");
    answer_el!.innerText = "오답입니다.";
    //   is_right = false;
  }
  // }
  input_el!.value = "";
  input_el?.focus();
});
// }
