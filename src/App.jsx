import Swiper from "./components/Swiper";
import Location from "./pages/Location";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import { Forum } from "./pages/Forum";
import Pizza from "./pages/Pizza";
import Sushi from "./pages/Sushi";
import Zakuska from "./pages/Zakuska";
import Desert from "./pages/Desert";
import Drinks from "./pages/Drinks";
import Souce from "./pages/Souce";
import Kombo from "./pages/Kombo";
import Bottom from "./pages/Bottom";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-gray-200 pt-10 h-[auto] pb-20">
      <Location />
      <Sidebar />
      <Swiper />
      <Home />
      <Forum />
      <Pizza />
      <Sushi />
      <Zakuska />
      <Desert />
      <Drinks />
      <Souce />
      <Kombo />
      <Bottom />
      <Footer />
    </div>
  );
}

export default App;
