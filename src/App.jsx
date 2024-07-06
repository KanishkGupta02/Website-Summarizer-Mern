import Hero from "./components/Hero";
import Demo from "./components/Demo";
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./App.css";

const App = () => {
  return (
    <main>
      <div className='main'>
        <div/>
      </div>

      <div className='app'>
        <Hero />
        <Demo />
      </div>
      <SpeedInsights />
    </main>
  );
};

export default App;
