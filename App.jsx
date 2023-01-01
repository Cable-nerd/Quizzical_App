import { useState, useEffect } from "react";
import React from "react";
import Page1 from "./Page1";
import { Start } from "./Start";
import "./App.css";
import {
  Link,
  Navigate,
  useNavigate,
  Router,
  Route,
  BrowserRouter,
  Routes
} from "react-router-dom";

function App() {
  //const [questions, setQuestions] = React.useState({});
  //const navigate = useNavigate();
  var isAtFirstPage = true;
  //const [goToPage, setGoToPage] = useState(false)
  
 
  
  return (
    <BrowserRouter>
      <div>
        
        <Start
        
        />
        
        
      
      </div>
    </BrowserRouter>
  );
}

export default App;
