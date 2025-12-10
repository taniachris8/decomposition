import "./App.css";
import Broadcast from "./components/widgets/Broadcast";
import GermanyMap from "./components/widgets/GermanyMap";
import NewsNow from "./components/NewsNow";
import SearchBlock from "./components/searchBlock/SearchBlock";
import TVProgram from "./components/widgets/TVProgram";
import Visited from "./components/widgets/Visited";
import Weather from "./components/widgets/Weather";
import WorkOnMistakes from "./components/widgets/WorkOnMistakes";
import { nowNews, currencies } from "./data";

function App() {
  return (
    <>
      <div className="blocks">
        <div className="upper-block">
          <NewsNow news={nowNews} currency={currencies} />
          <WorkOnMistakes />
        </div>
        <SearchBlock />
        <div className="lower-block">
          <Weather />
          <Visited />
          <GermanyMap />
          <TVProgram />
          <Broadcast />
        </div>
      </div>
    </>
  );
}

export default App;
