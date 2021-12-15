import './App.css'
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';
import {FcHome} from 'react-icons/fc'
import ProgressSteps from "./challenges/ProgressSteps";
import RotatingNavigation from './challenges/RotatingNavigation';
import SearchHidden from './challenges/SearchHidden';
import BlurryLoading from './challenges/BlurryLoading';
import Autocomplete from './challenges/Autocomplete';
import DragDrop from './challenges/DragDrop';
import HoverBoard from './challenges/HoverBoard';
import ScrollAnimation from './challenges/ScrollAnimation';
import FormWave from './challenges/FormWave';
import DadJokes from './challenges/DadJokes';
import Sounds from './challenges/Sounds';

import Cards from "./components/Cards";
import NavBar from './components/NavBar';


import { Grid, makeStyles } from "@material-ui/core";

function App() {
  return (
    <>
      <NavBar/>
      
   
      <Switch>
        <Route exact path = '/'><Cards/></Route>
        <Route path = '/progress-step'><ProgressSteps/></Route>
        <Route path = '/search-hidden'><SearchHidden/></Route>
        <Route path = '/rotating-navigation'><RotatingNavigation/></Route>
        <Route path = '/blurry-loading'><BlurryLoading/></Route>
        <Route path = '/autocomplete'><Autocomplete/></Route>
        <Route path = '/drag-drop'><DragDrop/></Route>
        <Route path = '/hover-board'><HoverBoard/></Route>
        <Route path = '/scroll-animation'><ScrollAnimation/></Route>
        <Route path = '/form-wave'><FormWave/></Route>
        <Route path = '/dad-jokes'><DadJokes/></Route>
        <Route path = '/sounds'><Sounds/></Route>
      </Switch>
      

      
     
    </>
  );
}

export default App;