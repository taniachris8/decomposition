/**
 * Renders links to most popular broadcast shows.
 *
 * @param data - Array of shows.
 */

import Widget from "./Widget";
import type { broadcastProps } from "../../data";

type BroadcastProps = {
  data: broadcastProps[]
};

export default function Broadcast({ data }: BroadcastProps) {
  return (
    <>
      <Widget title="BroadCast">
        <ul className="content-container">
          {data &&
            data.map((item) => (
              <li key={item.id} className="content-item">
                <a href="" className="broadcast-link">
                  <img
                    src={item.img}
                    alt="broadcast"
                    className="broadcast-icon"
                  />
                  <span>{item.name}</span>
                  <span className="channel">{item.channel}</span>
                </a>
              </li>
            ))}
        </ul>
      </Widget>
    </>
  );
}
