export default function Progress({
  index,
  numQuestion,
  points,
  maxPossiblePoints,
}) {
  return (
    <header className="progress">
      <p>
        Question: <strong>{index + 1}</strong> / {numQuestion}
      </p>

      <p>
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
}
