import logo from './logo.svg';
import './App.css';
import {Route, BrowserRouter, Routes} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar"
import Tasks from "./components/Tasks/Tasks"
import Profile from "./components/Profile/Profile"

function App() {
  return (
      <BrowserRouter>
  <div className="app">
        <Navbar />
      <div className="content-wrapper">

          <Routes>
              <Route path="http://localhost:3000/profile" component={Profile} />
              <Route path="http://localhost:3000/tasks" component={Tasks} />
          </Routes>
          {/*<Profile/>*/}

      </div>
    </div>
      </BrowserRouter>

  );
}

export default App;
