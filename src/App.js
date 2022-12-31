import './App.css';
import Navbar from './components/Navbar/Navbar'
import Background from './components/Background/Background'
import Hero from './components/Hero/Hero'
import Projects from './components/Projects/Proyects';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <main>
        <Background />
        <Hero />
        <Projects />
      </main>
    </div>
  );
}

export default App;
