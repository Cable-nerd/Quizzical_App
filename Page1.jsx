import React from "react";
import { useRef, useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

//import Quiz from "./Quiz";
import Template from "./Template";
import { nanoid } from "nanoid";

export default function Page1() {
  
  const [quizData, setQuizData] = useState([]);
  const [options, setOptions] = useState();
  const [bool, setBool] = useState(false);
  const [state, setState] = useState(false);
  const [score, setScore] = useState(0)
  const [correct, setCorrect] = useState(false)
  const [selectedAns, setSelectedAns] = useState("");
  const [correctAns, setCorrectAns] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  //const renderAfterCalled = useRef(false);

  React.useEffect(() => {
    if(quizData.length === 0) {
      fetch(`https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple`)
      .then((res) => res.json())
      .then((data) =>
        setQuizData(
          data.results.map((question) => {
            return {
              ...question,
              id: nanoid(),
              answers: handleShuffle([
                ...question.incorrect_answers,
                question.correct_answer
              ]),
              correctAns: question.correct_answer,
              
              selectedAns: ""
            };
          })

        )
      );
      
    console.log(quizData);
   
    } 
    //making difficulty etc a ${type} will be fun for the user
  
  }, [quizData]);
 
  //shuffling
  function handleShuffle(arr) {
    let array = arr.map((ans) => {
      return {
        id: nanoid(),
        answer: ans,
        isSelected: false
      };
    });

    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  console.log(quizData);


   const count = () => {
    setCorrectScore((prev) => prev + 1)
   }
  
  // function to click on single hbutton giving answer
  function handleSelect(id, selectedAnsId) {

    let newScore = score;
 

    setQuizData((prevQuizData) => {
      return prevQuizData.map((question) => {
        const correctAns = question.correct_answer;
        

        return question.id === id
          ? {
              ...question,
              answers: question.answers.map((i) => {
                const hasUserAnsweredCorrectly =
                i.id === selectedAnsId && i.answer === correctAns;

          if (hasUserAnsweredCorrectly) {
            setScore((prev) => prev + 1);
           }

              return i.id === selectedAnsId
                ? {
                    ...i,
                    selectedAns: i.answer,
                    isSelected: !i.isSelected,
                  }
                : 
                hasUserAnsweredCorrectly
                ? {
                    ...answer,
                    selectedAns: i.answer,
                    correctAns: selectedAns,
                    isSelected: !i.isSelected,
                  }
                : i.id === selectedAnsId && i.answer !== correctAns
                ? {
                    ...answer,
                    selectedAns: i.answer,
                    isSelected: true,
                  }
                : { ...i, isSelected: false };
              })
            }

          : question;
      });
     
   
      
    });
  
  }

  //check Score function by rendering the wrong and correct boxes color and telling the score
  const checkScore = () => {
     

    setBool(true);
    setShowResult(true);
  };

  const playAgain = () => {
    setQuizData([])
    setShowResult(false);
    setBool(false);
    setScore(0)

  };
  /*code here for singular manipulation*/
  const newQuizData = quizData.map((question) => {
    return (
      <Template
        key={question.id}
        id={question.id}
        quizData={quizData}
        question={question.question}
        answers={question.answers}
        handleSelect={handleSelect}
        correctAns={question.correct_answer}
        bool={bool}
        selectedAns={selectedAns}
        state={state}
        //change= {Change}
        // plusIfCorrect= {plusIfCorrect}
        // justPlus = {justPlus}
      />
    );
  });

 console.log(score);

  return (
    <div>
      {newQuizData}

      {showWarning && (
        <p className="warning-message">There are questions not answered yet^</p>
      )}

      {quizData.length > 0 && !showResult ? (
        <button onClick={() => checkScore()} className="checkButt">
          Check Answers
        </button>
      ) : null}

      {showResult && (
        <div className="result-container">
          <p className="result-message">
            You scored {score}/5 correct answers
          </p>
          <button className="play-again-btn" onClick={playAgain}>
            Play again
          </button>
        </div>
      )}
    </div>
  );
}
