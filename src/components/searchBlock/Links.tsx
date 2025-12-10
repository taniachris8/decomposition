/**
 * Renders the most popular links for better user experience.
 *
 * @param links - Array of links.
 */

import type { SearchBlockProps } from "./SearchBlock";

export default function Links({ links }: SearchBlockProps) {
  return (
    <>
      <ul className="links">
        {links &&
          links.map((link) => (
            <li key={link.id} className="link-item">
              <a href="" className="link">
                {link.name}
              </a>
            </li>
          ))}
      </ul>
    </>
  );
}
