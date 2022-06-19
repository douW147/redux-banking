import React, {useEffect, useState} from "react";
import "./index.css";
import Collapsible from "../Collapsible/Collapsible.jsx";
import {useSelector, useDispatch} from "react-redux";
import actions from "../../actions";
import {prettifyData} from "../../utils/index.js"

function Tasks() {

    const [isOpen, setIsOpen] = useState(false);
    const tasks = useSelector(state => state.tasks.data);
    const loading = useSelector(state => state.tasks.loading);
    console.log(tasks)
    const [search, setSearch] = useState("");
    
    const dispatch = useDispatch();
    const [newTask, setNewTask] = useState({details: "", time: ""});

    useEffect(() => {
        dispatch(actions.fetchTasks())
    }, [dispatch])

    let filteredTasks = [];
    if (tasks.length > 0){
        filteredTasks = tasks.filter((task) => {return task.details.toLowerCase().includes(search)});
    }

    const handleCancelClick = () => {
        setIsOpen(false);

    };

    const handleSaveClick = () => {
        dispatch(actions.addTask({...newTask, id: Math.floor(Math.random() * 10000000)}));
        setNewTask({details: "", time: ""});
        setIsOpen(false);
    };

    const handleDeleteTask = (id) => {
        dispatch(actions.deleteTask(id));
    };

    return(
        <div className="row align-content-center justify-content-center align-items-center">
            <div className="col-lg-6 col-md-8 col-sm-10 col-10 shadow-lg main-box mt-4">
                <div className="card-own p-4">
                    <div className="card-heading-own pb-2">
                        <div className="head-load">
                            <h1>Tasks</h1>
                            {loading === true && <div class="lds-ring"><div></div><div></div><div></div><div></div></div>}
                        </div>
                        {isOpen=== false &&
                        <button className="btn shadow is-open-btn" 
                        onClick={() => {setIsOpen(true)}}>Add task <i className="fa fa-solid fa-circle-plus"></i></button>
                        }
                    </div>
                    <Collapsible isOpen={isOpen}>
                        <div className="card-new-task mt-5 mb-5">
                            <h3 className="new-task-heading --text-align-center">New task</h3>
                            <form className="mt-3">
                                <div className="form-group">
                                    <label className="p-0" htmlFor="details">Task details</label>
                                    <input className="form-control shadow" id="details" type="text"
                                        onChange={(event) => {setNewTask(state => {return {...state, [event.target.id]: event.target.value}})}}></input>
                                </div>
                                <div className="form-group mt-2">
                                    <label className="p-0" htmlFor="time">Scheduled time</label>
                                    <input 
                                        onChange={(event) => {setNewTask(state => {return {...state, [event.target.id]: event.target.value}})}}
                                        className="form-control shadow" id="time" type="datetime-local"></input>
                                </div>
                            </form>
                            <div className="new-task-buttons mt-3">
                                <button onClick={handleCancelClick} className="btn btn-cncl shadow">Cancel</button>
                                <button onClick={handleSaveClick} className="btn btn-sv shadow">Save</button>
                            </div>
                        </div>
                    </Collapsible>
                    <div className="card-tasks mt-3">
                        <div className="form-group">
                            <input value={search} onChange={(event) => {setSearch(event.target.value)}} className="form-control shadow" placeholder="Search"></input>
                        </div>
                        <div className="row tasks-box m-0 mt-3">
                            {filteredTasks.map(task => {
                                return(
                                    <div key={task.id} className="task col-12 p-4 shadow mb-3">
                                        <div className="row">
                                            <div className="col-10">
                                                <h5>{task.details}</h5>
                                                <h6>{prettifyData(task.time)}</h6>
                                            </div>
                                            <div className="col-2 --text-align-end">
                                                <i onClick={() => {handleDeleteTask(task.id)}} className="fa fa-solid fa-delete-left"></i>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tasks;