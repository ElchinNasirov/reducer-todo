import React from "react";

const TodoForm = (props) => {

    return (
        <form>
            <div className="input-div" >
                <input className="input"
                    type="text"
                    name="todo"
                    value={props.newTodo}
                    onChange={props.handleChanges}
                />
                <button className="clear-btn" onClick={e => { props.addTodo(e) }}>ADD</button>
                <button className="clear-btn" onClick={e => { props.clearCompleted(e) }}>CLEAR</button>
            </div>
        </form>
    )
}
export default TodoForm;