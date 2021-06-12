import './App.css';
import ChatsComponent from './ChatsComponent'
import Header from './Header';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TinderCards from './TinderCards'
import { useEffect } from 'react';
import SwipeButtons from './SwipeButtons'
import ChatScreen from './ChatScreen'

function App() {


  return (
    <div>    
      <Router>

        <Switch>

          <Route path="/chat/:person">
            <Header backButton="/chat" />
            <ChatScreen />
          </Route>

          <Route path="/chat">
            <Header backButton="/" />
            <ChatsComponent />
          </Route>

          <Route path="/">
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>

        </Switch>
        
      </Router>
    </div>
  );
}

export default App;


{/*Header
   Tinder Cards
      Buttons Below Tinder Cards*/}
      
{/* Chat Screen
    Individual chat screen */}
