import "./Tasks.css"


import TasksItems from "./TasksItems/TasksItems"
function Tasks() {
    return (
        <div className="tasks">
        <div className="tasks_creator">
            <input type="text"/>
            <button type="submit" >Подтвердить</button>
        </div>
        <TasksItems/>
        </div>
    );
}

export default Tasks;