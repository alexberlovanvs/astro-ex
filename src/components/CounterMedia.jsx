import { useState } from 'react';

const CounterMedia = ({ title }) => {
  const [count, setCounter] = useState(0);
  return (
    <button
      style={{ background: '#eee', border: '1px solid blue', borderRadius: '3px', padding: '0.5em 1em' }}
      onClick={() => setCounter((a) => a + 1)}
    >
      {title}: {count}
    </button>
  );
};

export default CounterMedia;
