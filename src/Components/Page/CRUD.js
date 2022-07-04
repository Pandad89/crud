import React, { useState, useEffect } from "react";
import './CRUD.css'

function Crud() {

    
    const [title, setTitle] = useState("");
    const [todos, setTodos] = useState([]);
    const localArr = localStorage.getItem("todos");
    const [count, setCount] = useState(todos.length);

    if(!localStorage.getItem("todos")){
        localStorage.setItem("todos", JSON.stringify(todos));
        setCount(JSON.parse(localArr).length)
    }

    useEffect(() => {
        setTodos(JSON.parse(localArr));
        setCount(JSON.parse(localArr).length)
    }, [localArr]);

    const handleChangeTitle = (e) => {
        setTitle(e.target.value);
    }

    const handleSubmit = (e) => {
        if ((e.keyCode === 13 && e.target.value !== "") || (e.type === "click" && title !== "")) {
            todos.push(title);
            setTodos(todos);
            localStorage.setItem("todos", JSON.stringify(todos));
            setCount(todos.length);
            setTitle('');
        }
    }

    const handleDelete = (e) => {
        todos.splice(e.target.id, 1);
        setTodos(todos);
        setCount(todos.length);
        localStorage.setItem("todos", JSON.stringify(todos));
    }

    // const handleLogs = () => {
    //     console.log("Count", count)
    // }

    let printArr = () => {
        return todos.map((item, e) => {
            return (
                <div key={e} className="ArrItem">
                    <div className="ArrItem__Buttons">
                        <button id={e} className="ArrItem__Buttons__Checkbox" onClick={handleDelete}>✓</button>
                    </div>
                    <p className="ArrItem__Item">{item}</p>
                </div>
            )
        })
    }

    return (
        <div className="Home">
            <div className="Home__Container">
                <h1 className="Home__Container__HeaderL">Welcome to AEOTDLA</h1> <br />
                <h6 className="Home__Container__HeaderS">(Adam's Extremely Original ToDo List App)</h6>
                <div className="Home__CreateItem">
                    <input className="Home__CreateItem__Input" placeholder="Write your ToDo here!" value={title} onChange={handleChangeTitle} onKeyDown={handleSubmit}></input>
                    <div className="Home__CreateItem__Buttons">
                        <button className="Home__CreateItem__Buttons__Submit" onClick={handleSubmit}>Submit ToDo</button>
                        {/* <button onClick={handleLogs}>Logs</button> */}
                    </div>
                    <p className="Home__Counter">You have {count} ToDos left to complete</p>
                </div>
                <div className="Home__ToDos">
                    {printArr()}
                </div>

            </div>
        </div>
    )
}

export default Crud;