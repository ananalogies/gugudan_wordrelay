import * as React from "react";
import { Component, createRef } from "react";

interface State {
  random1: number;
  random2: number;
  value: string;
  result: string;
}

class GuGuDanClass extends Component<{}, State> {
  // 타입 추론이 되지 않는 경우는 제네릭을 작성하면 된다. (generics - props, state)
  state = {
    random1: Math.ceil(Math.random() * 9),
    random2: Math.ceil(Math.random() * 9),
    value: "",
    result: "",
  };

  onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    // 함수를 분리하는 경우에는 타입 추론이 정확이 되지 않기 때문에 명시해주어야 한다.
    e.preventDefault();
    const { random1, random2, value } = this.state;
    if (parseInt(value, 10) === random1 * random2) {
      this.setState((prevState) => {
        return {
          result: `정답 ${prevState.value}`,
          random1: Math.ceil(Math.random() * 9),
          random2: Math.ceil(Math.random() * 9),
          value: "",
        };
      });
    } else {
      this.setState({
        result: "오답",
        value: "",
      });
    }
    // this.input?.focus();
    // if (this.input) {
    //   this.input.focus();
    // }
    this.onRefInput.current?.focus();
  };

  onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      value: e.target.value,
    });
  };

  //   input: HTMLInputElement | null = null;
  //   onRefInput = (c: HTMLInputElement) => {
  //     this.input = c;
  //   };
  onRefInput = createRef<HTMLInputElement>();

  render() {
    const { random1, random2, value, result } = this.state;
    return (
      <>
        <div>
          {random1} 곱하기 {random2}는?
        </div>
        <form onSubmit={this.onSubmitForm}>
          <input
            ref={this.onRefInput}
            type="number"
            value={value}
            onChange={this.onChange}
          />
          <button>입력하기</button>
        </form>
        <div>{result}</div>
      </>
    );
  }
}

export default GuGuDanClass;
