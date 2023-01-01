import React from "react";
import Page1 from "./Page1"
import { Navigate } from "react-router-dom"
import { useState, useEffect } from "react";



export  function Start(props) {
    
    const [goToPage, setGoToPage] = useState(false)
    //condiitoin to go to page1 (fetch pai. and all other sorts of stuffs page)
    if(goToPage) {
      return <Page1 to= "/Page1" />
    }
   return (
      <div className="start-css">
        <h1>Quizzical</h1>
        <p>Click to start playing</p>

        <button type="submit" onClick={() => setGoToPage(true)}>
          Start Quiz
        </button>
      </div>
    );
  } 