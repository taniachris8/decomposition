/**
 * Renders current weather information.
 *
 * @param data - Object that contains the weather info for today.
 */

import Widget from "./Widget";
import type { weatherInfoProps } from "../../data";

type WeatherProps = {
  data: weatherInfoProps
};

export default function Weather({ data }: WeatherProps) {
  return (
    <>
      <Widget title="Weather">
        <div className="weather-info">
          <img src={data.img} className="weather-icon" alt="weather" />
          <p className="weather-degree">{data.degree}</p>
          <p style={{ whiteSpace: "pre-line" }}>
            {`day ${data.day},
            night ${data.night}`}
          </p>
        </div>
      </Widget>
    </>
  );
}
