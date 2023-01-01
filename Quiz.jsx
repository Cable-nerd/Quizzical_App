import React from "react";
import { useEffect, useRef, useState } from "react";
import Page1 from "./Page1";
import axios from "axios";
import Template from "./Template"

export default function Quiz({props}) {
  const [correct, setCorrect] = useState()
  const [currQues, setCurrQues] = useState(0);// i don't think we need thisin our project
  const [score, setScore] = useState(0) ;
  
  //below states are for quiz template
  //is selected state used to be here
  const [error, setError] = useState(false);

  

  React.useEffect(() => {
    
    
    //setting the ui of the quiz
    /* setOptions(
            quizData &&
              handleShuffle([
                question.correct_answer,
                ...question.incorrect_answers
              ]),
              correct_answer: questions.correct_answer,
          
          )
        }answers
        )
        setQuizData(data.results)
        setQuestions(data.results.question);
       
       // console.log(questions); */
  }, []);

  //console.log(answers);
  /*we finally rendered the fetch api data and now e are setting the ui maybe that's what u cna call it,

*/
  //this function will shuffle the correct and incorrect answers

  return (
    <div>
  
        <Template 

      />
     
    </div>
  );
}
//so we kinda nealry did rendered the data to our template
// but error ocurred

/**/