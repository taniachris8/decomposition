/**
 * Renders the latest news stories and currency exchange rates.
 * 
 * @param news - Array of news items.
 * @param currency - Array of currency entries.
 */

type NewsNowProps = {
  news: {
    id: string;
    img: string;
    title: string;
  }[];

  currency: {
    id: string;
    name: string;
    exchange: string;
    rate: number;
    level: string;
  }[];
};

export default function NewsNow({ news, currency }: NewsNowProps) {
  return (
    <>
      <div className="news-now-container">
        <div className="news-now-titles">
          <h3 className="title active">Now in Media</h3>
          <h3 className="title inactive">Germany</h3>
          <h3 className="title inactive">Recommended</h3>
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
