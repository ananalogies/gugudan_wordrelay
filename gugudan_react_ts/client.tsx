import * as React from "react";
import * as ReactDOM from "react-dom";

import GuGuDan from "./GuGuDan"; // export default하면 불러 올때도 * as 없이 불러올 수 있다.
import GuGuDanClass from "./GuGuDanClass";

ReactDOM.render(
  <>
    <GuGuDan />
    <GuGuDanClass />
  </>,
  document.querySelector("#root")
);
