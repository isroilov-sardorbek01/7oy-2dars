import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

function Masala1() {
    const [task, setTask] = useState("");
    const [res, setRes] = useState([]);

    function validate() {
        if (task === "") {
            toast.error("Enter the task", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return false;
        }
        if (task.length < 3) {
            toast.error("Task name is too short!", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return false;
        }
        return true;
    }
    function handleSave(e) {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) {
            return;
        }
        const data = {
            task,
            id: Date.now(),
        };
        const copied = [...res, data];
        setRes(copied);
        localStorage.setItem("res", JSON.stringify(copied));
        toast.success("Your task is Added", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        setTask("");
    }
    function handleDel(id) {
        const con = confirm("Rostdanham ochirmoqchimisiz?");
        if (con) {
            const filtRes = res.filter((item) => item.id !== id);
            setRes(filtRes);
            localStorage.setItem("res", JSON.stringify(filtRes));
        }
    }
    return (
        <div>
            <div className="container dark:bg-black dark:text-black">
                <div className="p-4 text-center rounded-md card bg-slate-200">
                    <h1 className="text-[40px] mb-3">TO DO List</h1>
                    <input
                        className="w-full p-3 mb-3 rounded-md"
                        value={task}
                        onChange={(e) => {
                            setTask(e.target.value);
                        }}
                        type="text"
                        placeholder="Enter the task name"
                    />
                    <button
                        onClick={handleSave}
                        className="p-3 bg-white rounded-md active:scale-[0.95] mb-3"
                    >
                        Add the Task
                    </button>

                    <div className="cardWr">
                        {res.length > 0 ? (
                            res.map((data, index) => {
                                return (
                                    <div
                                        className="flex justify-between p-3 bg-white rounded-md shadow-sm task"
                                        key={index}
                                    >
                                        <h1>{data.task}</h1>
                                        <button
                                            onClick={() => {
                                                handleDel(data.id);
                                            }}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                );
                            })
                        ) : (
                            <h1>Tasks not Yet</h1>
                        )}
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default Masala1;
