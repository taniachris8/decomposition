import Banner from "./Banner";
import Input from "./Input";
import Links from "./Links";

export default function SearchWidget() {
    return (
      <>
        <div className="search-widget">
                <Links />
                <Input />
                <div className="search-suggestion">You can find anything. For example, <a className="search-suggestion-link"> today's moon phase</a></div>
                <Banner/>
        </div>
      </>
    );
 }