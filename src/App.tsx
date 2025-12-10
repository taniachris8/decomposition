import "./App.css";
import Broadcast from "./components/widgets/Broadcast";
import GermanyMap from "./components/widgets/GermanyMap";
import LatestNews from "./components/LatestNews";
import SearchBlock from "./components/searchBlock/SearchBlock";
import TVProgram from "./components/widgets/TVProgram";
import MostVisitedLinks from "./components/widgets/MostVisitedLinkes";
import Weather from "./components/widgets/Weather";
import Article from "./components/widgets/Article";
import {
  latestNews,
  currencies,
  searchLinks,
  weatherInfo,
  mostVisitedLinks,
  tvProgramData,
  broadcastData,
} from "./data.ts";

function App() {
  return (
    <>
      <div className="blocks">
        <div className="upper-block">
          <LatestNews news={latestNews} currency={currencies} />
          <Article />
        </div>
        <SearchBlock links={searchLinks} />
        <div className="lower-block">
          <Weather data={weatherInfo} />
          <MostVisitedLinks links={mostVisitedLinks} />
          <GermanyMap />
          <TVProgram data={tvProgramData} />
          <Broadcast data={broadcastData} />
        </div>
      </div>
    </>
  );
}

export default App;
