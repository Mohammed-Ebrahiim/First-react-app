// import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navs from './component/Nav/Nav';
import Header from './component/header/Header';
import Footer  from './component/footer/Footer';
import About from './component/about/About';





function App() {
  return (
    <div className="App">
      <Navs />
      <Header />
      <About/>
      <Footer />
    </div>
  );
}

export default App;
