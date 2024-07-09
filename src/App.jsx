// eslint-disable-next-line no-unused-vars
import Counter from "./components/Counter";
import Title from "./components/Title";

import "./App.css";
import Fireworks from "./assets/fireworks-574739_1280.jpg";

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${Fireworks})` }}>
      <div className="container">
        <Title title="Contagem regressiva para 2025" />
        <div className="countdown-container">
          <Counter title="Dias" number={2} />
          <Counter title="Horas" number={2} />
          <Counter title="Minutos" number={2} />
          <Counter title="Segundos" number={2} />
        </div>
      </div>
    </div>
  );
}

export default App;
