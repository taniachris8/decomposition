import Widget from "./Widget";

export default function VisitedWidget() {
  return (
    <>
      <Widget title="Visited">
        <div className="visited-body">
          <ul className="visited-list">
            <li className="visited-item">
              <a href="" className="visited-link">
                Property - <span>new styles</span>
              </a>
            </li>
            <li className="visited-item">
              <a href="" className="visited-link">
                Market - <span>new styles</span>
              </a>
            </li>
            <li className="visited-item">
              <a href="" className="visited-link">
                BMW.com - <span>new styles</span>
              </a>
            </li>
          </ul>
        </div>
      </Widget>
    </>
  );
}
