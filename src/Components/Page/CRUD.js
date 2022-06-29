import React, { useState } from "react";
import './CRUD.css'

function Crud() {

    const [title, setTitle] = useState("");
    const [todos, setTodos] = useState([]);
    const [count, setCount] = useState(todos.length);



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

    const handleTodoCount = (e) => {
        console.log(e.target)
        if (e.target.checked === true) {
            setCount(count - 1);
        }
        if (e.target.checked === false) {
            setCount(count + 1);
        }
    }

    const handleDelete = () => {
        console.log("hello")
    }

    // let printLocalStorage = () => {
    //     return localStorage.getItem("todos").map(item => {
    //         return(
    //             <div>
    //                 {item}
    //             </div>
    //         )
    //     })
    // }

    let printArr = () => {
        return todos.map(item => {
            return (
                <div className="ArrItem">
                    <div className="ArrItem__Buttons">
                        <input key={todos.indexOf(item)} type="checkbox" onChange={handleTodoCount}></input>
                    </div>
                    <div className="ArrItem__Item">
                        {item}
                    </div>
                </div>
            )
        })
    }

    return (
        <div className="Home">
            <div className="Home__Container">
                <h1 className="Home__Container__HeaderL">Wecome to Adam's ToDo List App</h1> <br />
                <h4 className="Home__Container__HeaderS">To clear the list, refresh the page</h4><br />
                <div className="Home__CreateItem">
                    <input placeholder="Write your ToDo here!" value={title} onChange={handleChangeTitle} onKeyDown={handleSubmit}></input>
                    <div className="Home__CreateItem__Buttons">
                        <button className="Home__CreateItem__Buttons__Submit" onClick={handleSubmit}>Submit ToDo</button>
                        <button className="Home__CreateItem__Buttons__Delete" onClick={handleDelete}>Clear Completed ToDos</button>
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