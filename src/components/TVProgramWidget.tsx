import Widget from "./Widget";

export default function TVProgramWidget() {
  return (
    <>
      <Widget title="TV Program">
        <div className="program-body">
          <ul className="program-list">
            <li className="program-item">
              <a href="" className="program-link">
                <span>02:00</span> <span>Morning Spotlight</span>
                <span className="channel-name">CNN</span>
              </a>
            </li>
            <li className="program-item">
              <a href="" className="program-link">
                <span>03:00</span> <span>Cooking in 10 Minutes</span>
                <span className="channel-name">BBC</span>
              </a>
            </li>
            <li className="program-item">
              <a href="" className="program-link">
                <span>04:10</span> <span>Fitness Break</span>
                <span className="channel-name">7</span>
              </a>
            </li>
          </ul>
        </div>
      </Widget>
    </>
  );
}
