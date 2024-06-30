import './App.css';
import Header from './components/header';
import Footer from './components/footer';

function createAlert() {
  alert('hello, i show here now...');
}

function App() {
    return (
      <div className="App">
        
        <Header info="This is message" myNumber="6" />
        
          <p>Main Conten</p>
        
        <Footer trademark="page by Giva" myalert={createAlert} />
        
      </div>
    );
    
  }

export default App;
