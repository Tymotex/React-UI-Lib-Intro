import NotUglyButton from './components/NotUglyButton';
import Topnav from './components/Topnav';
import Carousel from './components/Carousel'
import './App.css';
import {
  Container
} from 'reactstrap';
import Deck from './components/Deck';
import { motion } from "framer-motion"
import CoolChart from './components/CoolChart';

function App() {
  return (
    <div className="App">
      <Topnav />
      <Carousel />
      <Container>
        <br />
        <Deck />
        <CoolChart />
      </Container>
    </div>
  );
}

export default App;
