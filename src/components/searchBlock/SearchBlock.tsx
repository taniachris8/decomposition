/**
 * A unifying component for rendering the most popular search links, the main search input and the banner.
 *
 * @param links - Array of links.
 */

import Banner from "./Banner";
import Input from "./Input";
import Links from "./Links";
import type { searchLinksProps } from "../../data";

export type SearchBlockProps = {
  links: searchLinksProps[];
};

export default function SearchBlock({ links }: SearchBlockProps) {
  return (
    <>
      <div className="search-widget">
        <Links links={links} />
        <Input />
        <div className="search-suggestion">
          You can find anything. For example,{" "}
          <a className="search-suggestion-link"> today's moon phase</a>
        </div>
        <Banner />
      </div>
    </>
  );
}
