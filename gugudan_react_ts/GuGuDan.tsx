import * as React from "react";
import { useState, useRef, useCallback } from "react";

const GuGuDan = () => {
  const [random1, setRandom1] = useState<number>(Math.ceil(Math.random() * 9));
  const [random2, setRandom2] = useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = useState<string>(""); // 타입 추론이 되지 않는 경우는 제네릭을 작성하면 된다.
  const [result, setResult] = useState("");
  const refInput = useRef<HTMLInputElement>(null);

  const onSubmitForm = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      // 함수를 분리하는 경우에는 타입 추론이 정확이 되지 않기 때문에 명시해주어야 한다.
      e.preventDefault();
      const input = refInput.current;
      if (parseInt(value, 10) === random1 * random2) {
        setResult("정답");
        setRandom1(Math.ceil(Math.random() * 9));
        setRandom2(Math.ceil(Math.random() * 9));
        setValue("");
      } else {
        setResult("오답");
        setValue("");
      }
      if (input) {
        input.focus();
      }
    },
    [value, random1, random2]
  ); // [] 안에 있는 아이가 바뀌면 다시 실행하고, 바뀌지 않으면 캐싱해 놓은 것을 가져다 쓴다.

  const onChangeInput = useCallback<
    (e: React.ChangeEvent<HTMLInputElement>) => void
  >((e) => setValue(e.target.value), [value]);

  return (
    <>
      <div>
        {random1} 곱하기 {random2}는?
      </div>
      <form onSubmit={onSubmitForm}>
        <input
          ref={refInput}
          type="number"
          value={value}
          onChange={onChangeInput}
        />
        <button>입력하기</button>
      </form>
      <div>{result}</div>
    </>
  );
};

export default GuGuDan;
