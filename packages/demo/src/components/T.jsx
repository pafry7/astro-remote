import { useState } from "react";
export function T() {
  const [state, setState] = useState(0);
  return (
    <div>
      <div>{state}</div>
      <button onClick={() => setState(state + 1)}>+</button>
    </div>
  );
}
