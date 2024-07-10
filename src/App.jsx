// eslint-disable-next-line no-unused-vars
import Counter from "./components/Counter";
import Title from "./components/Title";

import "./App.css";
import Fireworks from "./assets/fireworks-574739_1280.jpg";

import useCountdown from "./hocks/useCountdown";

function App() {
const [day, hour, minute, second] = useCountdown("Jan 1, 2025 00:00:00");

  return (
    <div className="App" style={{ backgroundImage: `url(${Fireworks})` }}>
      <div className="container">
        <Title title="Contagem regressiva para 2025" />
        <div className="countdown-container">
          <Counter title="Dias" number={day} />
          <Counter title="Horas" number={hour} />
          <Counter title="Minutos" number={minute} />
          <Counter title="Segundos" number={second} />
        </div>
      </div>
    </div>
  );
}

export default App;
