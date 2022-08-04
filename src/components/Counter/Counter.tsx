import React, { useState } from "react";

export interface CounterProps {
  description: string;
  defaultCount: number;
}

export function Counter({ description, defaultCount }: CounterProps) {
  const [count, setCount] = useState(defaultCount);
  const [incrementor, setIncrementor] = useState(1);
  return (
    <div>
      <h2>
        DESC: {description} - DC: {defaultCount}
      </h2>
      <label>
        Incrementor
        <input
          value={incrementor}
          onChange={(evt) => {
            setIncrementor(parseInt(evt.target.value) || 0);
          }}
          type="number"
        />
      </label>
      <button
        onClick={() => setCount(count - incrementor)}
        aria-label="Decrement"
      >
        -
      </button>
      Current count: {count}
      <button
        onClick={() => setTimeout(() => setCount(count + incrementor), 200)}
        aria-label="Add to Counter"
      >
        +
      </button>
    </div>
  );
}
