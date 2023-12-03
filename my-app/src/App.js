import './App.css';
import Header from './components/Header';
import Train_betwn_stations from './components/Train/Train_betwn_stations';
import Train_no from './components/Train/Train_no.js';
import {  Route, Switch, BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
            <Switch> 
                <Route exact path="/">
                    <Train_no />
                </Route>
                <Route exact path="/train/train_no">
                    <Train_no />
                </Route>
                <Route exact path="/train/betweenstation">
                    <Train_betwn_stations/>
                </Route>
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
