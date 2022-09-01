import React , {useState , useEffect} from "react";
import Todo from "./Todo";
function ShowData({filterTodos,insertData,setLoadingData,loadingData}) {

  const [isLoading , setIsLoading] = useState(true);
  console.log(insertData)
  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://todolist-react-new-default-rtdb.firebaseio.com/InputDataEnterz.json"
    ).then(response => {
      return response.json();
    }).then( data => {
      const Inputs = [];
      for (const k in data) {
        const Input = {
          id: k,
          ...data[k]
        };
        Inputs.push(Input);
      }
      setIsLoading(false);
      setLoadingData(Inputs);
    });
  }, [insertData , setLoadingData])
  if(isLoading) {
    return <div className="spinner">
    <div className="double-bounce1"></div>
    <div className="double-bounce2"></div>
  </div>
  }
  return (
    <div className="showD">
      <ul className="listUl">
        {loadingData.map((x) => (
          <Todo
            x={x}
            key ={x.id}
            Task={x.Task}
            Name={x.Name}
            loadingData={loadingData}
          />
        ))}
      </ul>
    </div>
  );
}
export default ShowData;
