
// type NowWidgetProps = {

// }

export default function NowWidget() {
  return (
    <>
      <div className="now-widget">
        <div className="now-widget-titles">
          <h3 className="title active">Now in Media</h3>
          <h3 className="title inactive">Germany</h3>
          <h3 className="title inactive">Recommended</h3>
          <time>December 09, wednesday 13:41</time>
        </div>
        <div className="now-widget-body">
          <ul className="widget-news">
            <li className="news-item">
              <img
                className="fav-icon"
                src="/fav-icons/icons8-cute-puppy-icon-16.png"
                alt="fav"
              />
              Tech Giants Race to Launch Next-Gen AI Chips
            </li>
            <li className="news-item">
              <img
                className="fav-icon"
                src="/fav-icons/icons8-cute-approval-icon-16.png"
                alt="fav"
              />
              Global Markets Surge Amid Optimistic Forecasts
            </li>
            <li className="news-item">
              <img
                className="fav-icon"
                src="/fav-icons/icons8-cute-kitty-icon-16.png"
                alt="fav"
              />
              Scientists Announce Breakthrough in Clean Energy
            </li>
            <li className="news-item">
              <img
                className="fav-icon"
                src="/fav-icons/icons8-cute-play-icon-16.png"
                alt="fav"
              />
              New Study Reveals Sharp Decline in Social Media Use
            </li>
            <li className="news-item">
              <img
                className="fav-icon"
                src="/fav-icons/icons8-cute-puppy-icon-16.png"
                alt="fav"
              />
              Major Airline Unveils Ultra-Fuel-Efficient Fleet
            </li>
          </ul>
          <div className="currencies">
            <div className="currency">
              <span className="currency-name">USD</span>{" "}
              <span className="currency-exchange">MOEX</span>{" "}
              <span className="rate">63.52</span>
              <span className="сhange-level">+0.09</span>
            </div>
            <div className="currency">
              <span className="currency-name">EUR</span>{" "}
              <span className="currency-exchange">MOEX</span>{" "}
              <span className="rate">70.86</span>
              <span className="сhange-level">+0.14</span>
            </div>
            <div className="currency">
              <span className="currency-name">НЕФТЬ</span>{" "}
              <span className="currency-exchange">MOEX</span>{" "}
              <span className="rate">64.90</span>
              <span className="сhange-level">+1.63 %</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
