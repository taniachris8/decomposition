/**
 * Renders links to most popular TV shows.
 *
 * @param data - Array of TV shows.
 */

import Widget from "./Widget";
import type { tvProgramProps } from "../../data";

type TVProgramProps = {
  data: tvProgramProps[];
};

export default function TVProgram({ data }: TVProgramProps) {
  return (
    <>
      <Widget title="TV Program">
        <ul className="content-container">
          {data &&
            data.map((item) => (
              <li key={item.id} className="content-item">
                <a href="" className="program-link">
                  <span>{item.time}</span> <span>{item.name}</span>
                  <span className="channel">{item.channel}</span>
                </a>
              </li>
            ))}
        </ul>
      </Widget>
    </>
  );
}
