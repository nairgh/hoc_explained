import './App.css';
import HOCClass from './components/class-components/HOCClass';
import HocFunctional from './components/functional-components/HocFunctional';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <HocFunctional /> 
       <HOCClass />
      </header>
    </div>
  );
}

export default App;
