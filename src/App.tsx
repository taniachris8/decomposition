import './App.css'
import BroadcastWidget from './components/BroadcastWidget';
import GermanyMapWidget from './components/GermanyMapWidget';
import NowWidget from './components/NowWidget'
import SearchWidget from './components/searchWidget/SearchWidget';
import TVProgramWidget from './components/TVProgramWidget';
import VisitedWidget from './components/VisitedWidget';
import WeatherWidget from './components/WeatherWidget';
import WorkOnMistakesWidget from './components/WorkOnMistakesWidget';

function App() {

  return (
    <>
      <img src="/yandex-logo.png" alt="logo" className="logo" />
      <div className="blocks">
        <div className="upper-block">
          <NowWidget />
          <WorkOnMistakesWidget />
        </div>
        <SearchWidget />
        <div className="lower-block">
          <WeatherWidget />
          <VisitedWidget />
          <GermanyMapWidget />
          <TVProgramWidget />
          <BroadcastWidget />
        </div>
      </div>
    </>
  );
}

export default App
