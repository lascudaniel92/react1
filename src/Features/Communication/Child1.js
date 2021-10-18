export function Child1({ message, onMessage }) {
  return (
    <>
      <h2>Child 1</h2>
      <output>Output in child 1: {message}</output>
      <button onClick={(e) => onMessage('Din copil 1')}>
        Send Message to Child 2
      </button>
    </>
  );
}
