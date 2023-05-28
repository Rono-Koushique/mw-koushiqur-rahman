import React, { useEffect, useRef, useState } from "react";
import {
    filterActives,
    filterCompleteds,
    filterOthers,
} from "../utils/taskFilter";

const Problem1 = () => {
    const initialValue = {
        name: "",
        status: "",
    };

    /* ------------------------------- all states ------------------------------- */
    const [show, setShow] = useState("all");
    const [newTask, setNewTask] = useState(initialValue);
    const [allTask, setAllTask] = useState([]);
    const [displayTask, setDisplayTask] = useState([]);
    const ref = useRef(null);

    /* ------------------------- change show status type ------------------------ */
    const handleClick = (val) => {
        setShow(val);
    };

    /* ------------------------------ form handlers ----------------------------- */
    const handleChange = (e) => {
        const value = e.target.value;
        setNewTask((prevState) => ({
            ...prevState,
            [e.target.name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        ref.current.focus();
        setAllTask((prevState) => [...prevState, newTask]);
        setTask(initialValue);
    };

    /* ------------------------------ table updator ----------------------------- */
    useEffect(() => {
        switch (show) {
            case "all": {
                setDisplayTask([
                    ...filterActives(allTask),
                    ...filterCompleteds(allTask),
                    ...filterOthers(allTask),
                ]);
                break;
            }
            case "active": {
                setDisplayTask([...filterActives(allTask)]);
                break;
            }
            case "completed": {
                setDisplayTask([...filterCompleteds(allTask)]);
                break;
            }
            default:
                break;
        }
    }, [allTask, show]);

    

    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className="text-center text-uppercase mb-5">Problem-1</h4>
                <div className="col-6 ">
                    <form
                        className="row gy-2 gx-3 align-items-center mb-4"
                        onSubmit={handleSubmit}
                    >
                        <div className="col-auto">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Name"
                                name="name"
                                value={newTask.name}
                                onChange={handleChange}
                                ref={ref}
                            />
                        </div>
                        <div className="col-auto">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Status"
                                name="status"
                                value={newTask.status}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
                <div className="col-8">
                    <ul
                        className="nav nav-pills mb-3"
                        id="pills-tab"
                        role="tablist"
                    >
                        <li className="nav-item">
                            <button
                                className={`nav-link ${
                                    show === "all" && "active"
                                }`}
                                type="button"
                                onClick={() => handleClick("all")}
                            >
                                All
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className={`nav-link ${
                                    show === "active" && "active"
                                }`}
                                type="button"
                                onClick={() => handleClick("active")}
                            >
                                Active
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className={`nav-link ${
                                    show === "completed" && "active"
                                }`}
                                type="button"
                                onClick={() => handleClick("completed")}
                            >
                                Completed
                            </button>
                        </li>
                    </ul>
                    <div className="tab-content"></div>
                    <table className="table table-striped ">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {displayTask &&
                                displayTask.map((task) => {
                                    return (
                                        <tr key={task.name}>
                                            <td>{task.name}</td>
                                            <td>{task.status}</td>
                                        </tr>
                                    );
                                })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Problem1;
