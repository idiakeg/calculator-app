import React from 'react'
import { useState } from 'react'
import CalculatorTitle from './CalculatorTitle'
import Button from './Button'
import OutputScreen from './OutputScreen'

const Calculator = () => {
    // the question state is used to store the user input(questions)
    const [question, setQuestion] = useState("")
    // the answer state is used to store the result of the evaluated question
    const [answer, setAnswer] = useState("")
    // definiton of the handleClick function to handle each button click
    const handleClick = (event) => {
        // first thing is to get the target element value
        const value = event.target.value
        // switch statements will be used to check each of the values of he button and perform the required action
        switch(value){
            case "=": {
                // a check is done to make sure the questions state is not empty
                if(question !== ""){
                    // declare the ans variable to haold the answer to be assigned to the answer state after the evaluation
                    let ans = ""
                    try{
                        ans = eval(question)
                    }
                    catch(error){
                        setAnswer("Math Error")
                    }
                    if(ans === undefined){
                        setAnswer("Math Error")
                    }else{
                        setAnswer(ans)
                        setQuestion("")
                    }
                    // the break statement ensures that the script is only run for the cases that meet the criterion
                    break;
                }
            }
            case "Clear": {
                // if the user clicks the clear button, set the questions and answer state to be empty strings
                setAnswer("")
                setQuestion("")
                // break statement

                break;
            }
            case "Delete":{
                // when the user clicks the button, the last input should be removed one at a time
                let string = question
                string = string.substring(0, string.length - 1)
                // set the question to the new string value
                setQuestion(string)
                break;
            }
            default: {
                // for when none of the above consitions are not met, i.e a number fron 0-9 and period(.) the question state should be set to whatever button is pressed
                const currQuestion = question + value
                setQuestion(currQuestion)
            }
        }
    }
  return (
    <div className='frame'>
        <CalculatorTitle title="Godspower's Calculator" />
        <div className="main-calc">
            <OutputScreen question={question} answer={answer} />
            <div className="button-row">
                <Button handleClick={handleClick} label="Clear" />
                <Button handleClick={handleClick} label="Delete" />
                <Button handleClick={handleClick} label="." />
                <Button handleClick={handleClick} label="/" />
            </div>
            <div className="button-row">
                <Button label="7"  handleClick={handleClick} />
                <Button label="8"  handleClick={handleClick} />
                <Button label="9"  handleClick={handleClick} />
                <Button label="*"  handleClick={handleClick} />
            </div>
            <div className="button-row">
                <Button label="4"  handleClick={handleClick} />
                <Button label="5"  handleClick={handleClick} />
                <Button label="6" handleClick={handleClick}  />
                <Button label="-"  handleClick={handleClick} />
            </div>
            <div className="button-row">
                <Button label="1"  handleClick={handleClick} />
                <Button label="2" handleClick={handleClick}  />
                <Button label="3"  handleClick={handleClick} />
                <Button label="+"  handleClick={handleClick} />
            </div>
            <div className="button-row">
                <Button label="0" handleClick={handleClick} />
                <Button label="=" handleClick={handleClick} />
            </div>
        </div>
    </div>
  )
}

export default Calculator 