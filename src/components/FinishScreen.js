export default function FinishButton({ points, maxPossiblePoints, dispatch }) {
  const percent = (points / maxPossiblePoints) * 100;

  return (
    <>
      <p className="result">
        You Scored <strong>{points}</strong> of out of {maxPossiblePoints} (
        {Math.ceil(percent)} %)
      </p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart
      </button>
    </>
  );
}
