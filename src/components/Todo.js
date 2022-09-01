import React from "react";
function Todo({ x,Task,Name,loadingData,setLoadingData }) {
  const deleteHandler = () => {
   // fetch to delete
      // setLoadingData(loadingData.filter((el) => el.id !== x.id));

   console.log("here delete ",x)
  };
  const completeHandler = () => {
    setLoadingData(
      loadingData.map((item) => {
        if (item.id === x.id) {
          return {
            ...item , completed: !item.completed
          };
        }
        return item;
      })
    );
  };
  return (
    <div className={`todoo ${x.completed ? 'opaaci' : ""}`}>
      <div className='content'>
        <li className={`task ${x.completed ? "completedd" : ""}`}>{Task}</li>
        <div className='marks'>
          <button onClick={completeHandler} className='btnCompleted'>
            <i className="fa-solid fa-check-double completed"></i>
          </button>
          <button onClick={deleteHandler} className='deletebtn'>
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
      <h5 className={`author ${x.completed ? "doneeee" : ""}`}>{Name}</h5>
    </div>
  );
}
export default Todo;
