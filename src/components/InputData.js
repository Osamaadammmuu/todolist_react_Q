import React from "react";
import {useRef} from "react";
import classes from "../styles/input.module.scss";
function InputData({insertData , setInsertData , setDisplayRes ,setInputTask , setInputName , inputTask , inputname , setStatus}) {
  const inputTaskRe = useRef();
  const inputNameRe = useRef();
  const displayMessage = () => {
    console.log('the data sended successfully')
    setDisplayRes("true");
  }
  const inputTaskHandler = (e) => {
    setInputTask(e.target.value);
  }
  const inputNameHandler = (e) => {
    setInputName(e.target.value);
  }
  const submitInputHandler = (e) => {
    e.preventDefault();
    const enterInput = inputTaskRe.current.value;
    const enterName  = inputNameRe.current.value;
    const DataInputs = {
      id: Math.random()*2000 , 
      Task : enterInput , 
      Name : enterName , 
      completed : ""
    }
    
    fetch('https://todolist-react-new-default-rtdb.firebaseio.com/InputDataEnterz.json',
      {
        method : 'POST' , 
        body   : JSON.stringify(DataInputs) , 
        headers : {
          'Content-Type' : 'application/json'
        }
      }
    ).then((response) => {
      displayMessage();
      setInsertData(true);
      console.log(insertData)
      if( insertData === true) {
        console.log('yes you are true')
      }
      setInputName('');
      setInputTask('');  
      return response.json();
    }).catch((err) => {
      throw(err);
    })
    setDisplayRes('');
    
  }
  const statusHandler = (e) => {
    e.preventDefault();
    setStatus(e.target.value);
    
  }
  return (
    <form className={classes.mainForm}>
      <div className={classes.conInputt}>
        <input value={inputTask} onChange={inputTaskHandler} ref={inputTaskRe}  className={classes.enteredDataTask} type="text" placeholder="Enter Your Task..." />
        <input value={inputname} onChange={inputNameHandler} ref={inputNameRe} className={classes.enteredDataName} type="text" placeholder="Enter Your Name" />
        <button onClick={submitInputHandler} className={classes.btnIn}>Add Task</button>
      </div>
      <div className={classes.btns}>
        <button onClick={statusHandler}  className={classes.btnC} value="all">All</button>
        <button onClick={statusHandler}  className={classes.btnC} value="completed">Completed</button>
        <button onClick={statusHandler}  className={classes.btnC} value="uncompleted">UnCompleted</button>
      </div>
    </form>
  );
}
export default InputData;
