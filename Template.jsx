import React from "react";
import { useState, useEffect } from "react";
import { decode } from "html-entities";

const Template = (props) => {
  // const [error, setError] = useState(false);
  const [isSelected, setIsIsSelected] = useState(false);

  //we have to change the logic of className to change colors it here to change colors dummy
  //console.log(props.count)
  /*Code written here will be rendeed 5 times*/
  

  return (
    <>
      <div className="Page1">
        
        <h3>{decode(props.question)}</h3>
        <div className="options">
          {props.answers.map((i) => {
            return (
              <button
                key={i.id}
                className={`${
                  i.isSelected && props.bool === false
                    ? "isSelected"
                  :i.isSelected && i.answer === props.correctAns 
                  ?
                  "correctColor"
                  : i.isSelected && i.answer !== props.correctAns 
                  ? 
                  "falseColor"
                 
                    : "transparent"
                }`}
                onClick={() => props.handleSelect(props.id, i.id)}
                disabled={props.bool}
              >
                {decode(i.answer)}{" "}
              </button>
            );
          })}
        </div>
      </div>

      <hr />
    </>
  );
};

export default Template;
/*ShouldComponentUpdate() method, we need to find a way to use it to render our button singluarly, use props maybe*/
