import Widget from "./Widget";

export default function Weather() {
  return (
    <>
      <Widget title="Weather">
        <div className="weather-info">
          <img
            src="/icons8-partly-cloudy-day-48.png"
            className="weather-icon"
            alt="weather"
          />
          <p className="weather-degree">+19°</p>
          <p style={{ whiteSpace: "pre-line" }}>
            {`day +19,
            night +13`}
          </p>
        </div>
      </Widget>
    </>
  );
}
