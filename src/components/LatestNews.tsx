/**
 * Renders the latest news and currency exchange rates.
 *
 * @param news - Array of news items.
 * @param currency - Array of currency entries.
 */

import type { latestNewsProps } from "../data";
import type { currencyProps } from "../data";

type LatestNewsProps = {
  news: latestNewsProps[];
  currency: currencyProps[];
};

export default function LatestNews({ news, currency }: LatestNewsProps) {
  return (
    <>
      <div className="news-now-container">
        <div className="news-now-titles">
          <h3>
            <a href="" className="title">
              Now in Media
            </a>
          </h3>
          <h3>
            <a href="" className="title inactive">
              Germany
            </a>
          </h3>
          <h3>
            <a href="" className="title inactive">
              Recommended
            </a>
          </h3>
          <time>December 09, Wednesday 13:41</time>
        </div>
        <div className="news-now-body">
          <ul className="news">
            {news &&
              news.map((item) => (
                <li key={item.id} className="news-item">
                  <a href="" className="news-link">
                    <img className="fav-icon" src={item.img} alt="fav" />
                    {item.title}
                  </a>
                </li>
              ))}
          </ul>
          <div className="currencies">
            {currency &&
              currency.map((item) => (
                <div key={item.id} className="currency">
                  <a href="" className="currency-link">
                    <span className="currency-name">{item.name}</span>
                    <span className="currency-exchange">{item.exchange}</span>
                    <span className="rate">{item.rate}</span>
                    <span className="level">{item.level}</span>
                  </a>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
