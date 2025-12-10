import Widget from "./Widget";

export default function Broadcast() {
  return (
    <>
      <Widget title="BroadCast">
        <div className="broadcast-body">
          <ul className="broadcast-list">
            <li className="broadcast-item">
              <a href="" className="broadcast-link">
                <img
                  src="/fav-icons/icons8-video-16.png"
                  alt="broadcast"
                  className="broadcast-icon"
                />
                <span>Global Trends</span>
                <span className="channel">BBC World</span>
              </a>
            </li>
            <li className="broadcast-item">
              <a href="" className="broadcast-link">
                <img
                  src="/fav-icons/icons8-video-16.png"
                  alt="broadcast"
                  className="broadcast-icon"
                />
                <span>Tech Today</span>
                <span className="channel">CNN</span>
              </a>
            </li>
            <li className="broadcast-item">
              <a href="" className="broadcast-link">
                <img
                  src="/fav-icons/icons8-video-16.png"
                  alt="broadcast"
                  className="broadcast-icon"
                />
                <span>Morning Vibes</span>
                <span className="channel">Discovery Life</span>
              </a>
            </li>
          </ul>
        </div>
      </Widget>
    </>
  );
}
