import { React, useState, useEffect } from "react";
import "./ExerciseTracker.css";

function ExerciseTracker({ clickedDate, token, setExeDates}) {
  const [exeList, setExeList] = useState([{name:"bicep curls", sets: 12, reps: 12}, {name:"squats", sets: 2, reps: 10}]);
  const [newExe, setNewExe] = useState("")
  const [newSet, setNewSet] = useState("")
  const [newRep, setNewRep] = useState("")

  
  useEffect(() => {
    const formattedDate = clickedDate.format("YYYY-MM-DD");
    const url = `${process.env.REACT_APP_API_URL}/user/exercises?date=${formattedDate}`;

    fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "x-access-token": token,
        }
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        setExeList(data.exeList);
        setExeDates(data.exeDates)
    })
    .catch(error => {
        console.error("Error:", error);
    });
}, [clickedDate]);


  function handleSave() {

    fetch(`${process.env.REACT_APP_API_URL}/user/exercises`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "x-access-token": token
        },
        body: JSON.stringify(
            {
                "date": clickedDate.format("YYYY-MM-DD"),
                "exercises": exeList
            }
        )
    }).then(res => res.json()).then(data => console.log(data))

  }

  function handleAdd() {

    if (newExe == ""){
        alert("Enter Exercise Name...")
        return
    }

    if (newSet == "" || newRep == ""){
        alert("Enter Sets and Reps...")
        return
    }

    if (newSet < 0 || newRep < 0){
        alert("Type Positive values only")
        return
    }

    var temp = [...exeList]
    temp.push({name: newExe, sets: newSet, reps: newRep})
    setExeList(temp)
    setNewExe("")
    setNewRep("")
    setNewSet("")
  }

  function handleRemove(index) {
    var temp = [...exeList];
    temp.pop(index);
    console.log(temp);
    setExeList(temp);
  }

  return (
    <div className="exe--container">
      

      <div className="exe--list">
        {exeList.map((exe, index) => (
          <div key={index} className="exe--li">
            <div className="exe--info">
            <div className="exe--name">{exe.name}</div>
            <div className="exe--reps">({exe.sets} X {exe.reps})</div>
            </div>
            <button
              onClick={() => {
                handleRemove(index);
              }}
            >
              X
            </button>
          </div>
        ))}

        <div className="exe--li">
            <input type="text" placeholder="New Exercise" value={newExe} onChange={(e)=> {setNewExe(e.target.value)}}/>
            <input type="number" placeholder="Sets" value={newSet} onChange={(e)=> {setNewSet(e.target.value)}}/>
            <input type="number" placeholder="Reps" value={newRep} onChange={(e)=> {setNewRep(e.target.value)}}/>
            
            <button
              onClick={() => {handleAdd()}}
              className="add-btn"
            >
              Add
            </button>
          </div>


      </div>

      <div className="exe--bottom">
        <button onClick={handleSave}>Save</button>
      </div>
    </div>
  );
}

export default ExerciseTracker;
