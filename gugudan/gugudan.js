var question_el = document.getElementById("question");
var form_el = document.querySelector("form");
var input_el = document.querySelector("input");
var answer_el = document.getElementById("answer");
// while (true) {
function randomGugudan() {
    var random1 = Math.ceil(Math.random() * 9);
    var random2 = Math.ceil(Math.random() * 9);
    var answer = random1 * random2;
    return [random1, random2, answer];
}
var _a = randomGugudan(), random1 = _a[0], random2 = _a[1], answer = _a[2];
question_el.innerText = random1 + " \uACF1\uD558\uAE30 " + random2 + "\uB294?";
var current_answer = answer;
input_el === null || input_el === void 0 ? void 0 : input_el.focus();
// let is_right = false;
form_el === null || form_el === void 0 ? void 0 : form_el.addEventListener("submit", function (event) {
    event.preventDefault();
    // const user_input = prompt(`${random1} 곱하기 ${random2}는?`);
    var user_input = input_el.value;
    // while (!is_right) {
    if (parseInt(user_input, 10) === current_answer) {
        // alert("정답입니다.");
        answer_el.innerText = "정답입니다.";
        //   is_right = true;
        var _a = randomGugudan(), random1_1 = _a[0], random2_1 = _a[1], answer_1 = _a[2];
        question_el.innerText = random1_1 + " \uACF1\uD558\uAE30 " + random2_1 + "\uB294?";
        current_answer = answer_1;
    }
    else {
        // alert("오답입니다.");
        answer_el.innerText = "오답입니다.";
        //   is_right = false;
    }
    // }
    input_el.value = "";
    input_el === null || input_el === void 0 ? void 0 : input_el.focus();
});
// }
