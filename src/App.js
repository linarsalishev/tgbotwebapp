import { useEffect } from 'react';
import './App.css';
import { useTelegram } from "./hooks/useTelegram";


function App() {
  const {onToggleButton, tg} = useTelegram();
  useEffect(() => {
    tg.ready();
  }, [])


const onClose = () => {
tg.close()
}

  return (
    <div className="App">
      <Header />
      <button onClick={onToggleButton}>toggle</button>
    </div>
  );
}

export default App;
