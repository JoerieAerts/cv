import logo from './logo.svg';
import './App.css';
import KNOPNeKnop from "./Coponents/Atoms/KNOPNeKnop";
import {Heading1, Heading2, Paragraph} from "./Coponents/Shared/Typography";
import NeCooleKnop from "./Coponents/Atoms/KNOPNeCooleKnop";
import NeNavBar from "./Coponents/Atoms/NeNavBar";
import NavBar from "./Coponents/Molecules/NavBar";
function App() {
  return (
    <div className="App">
      <KNOPNeKnop />
        <Heading1>Fuck you</Heading1>
        <Paragraph>Kust mn kloten</Paragraph>
        <Heading2>Neje</Heading2>
        <Paragraph>Okeje</Paragraph>
        <NeCooleKnop buttonColor="#ff0000"></NeCooleKnop>
        <NeNavBar>Oke</NeNavBar>
        <NavBar></NavBar>
    </div>
  );
}

export default App;
