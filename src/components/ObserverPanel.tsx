export function ObserverPanel() {
  return (
    <div className="observer-panel">
      <div className="observer-viewport">
        <div className="target-ring ring-outer" />
        <div className="target-ring ring-mid" />
      </div>

      <div className="identity-block">
        <div>
          <h1>
            <a className="identity-link" href="https://github.com/FelixtheFelinae" target="_blank" rel="noreferrer">
              FelixtheFelinae
            </a>
          </h1>
          <p className="identity-role">Robotics researcher</p>
        </div>
      </div>
    </div>
  );
}
