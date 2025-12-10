/**
 * Renders most visited links.
 *
 * @param links - Array of most visited links.
 */

import Widget from "./Widget";
import type { mostVisitedLinksProps } from "../../data";

type MostVisitedLinksProps = {
  links: mostVisitedLinksProps[]
};

export default function MostVisitedLinks({ links }: MostVisitedLinksProps) {
  return (
    <>
      <Widget title="Most visited links">
        <ul className="content-container">
          {links &&
            links.map((link) => (
              <li key={link.id} className="content-item">
                <a href="" className="visited-link">
                  {link.category}
                  <span> - new styles</span>
                </a>
              </li>
            ))}
        </ul>
      </Widget>
    </>
  );
}
