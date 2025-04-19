import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar title1="Home" title2="Products" title3="Gallery"/>
      <TextForm header="Your Uppercase Buddy"/>
    </>
  );
}

export default App;
