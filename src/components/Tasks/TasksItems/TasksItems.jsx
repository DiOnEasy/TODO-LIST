import "./TasksItems.css"

function TasksItems(){
    return(
        <div className="tasks_items">
            <ul>
                <li className="tasks-item">
                    <span><input type="checkbox"/></span>
                    <strong>Item 1</strong>
                    <button>&times;</button>
                    <button>&#9998;</button>
                </li>
            </ul>
        </div>
    )
}

export default TasksItems;