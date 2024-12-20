import React, { useEffect, useState } from "react";
import { use } from "react";
import { ToastContainer, toast } from "react-toastify";

function Masala2() {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    const [user, setUser] = useState([]);

    function validate() {
        if (name.length < 2) {
            toast.error("Name is too short!", {
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
        if (lastName.length < 2) {
            toast.error("Lastname is too short!", {
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
        if (age < 0 || age > 110) {
            toast.error("Age is not valid!", {
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
        if (!email.includes("@")) {
            toast.error("Email is not valid!", {
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
    function handleReg(e) {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) {
            return;
        }
        const data = {
            name,
            lastName,
            age,
            email,
            id: Date.now(),
        };
        const copied = [...user, data];
        setUser(copied);
        localStorage.setItem("user", JSON.stringify(copied));
        toast.success("Your info added succesfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        setName("");
        setLastName("");
        setAge("");
        setEmail("");
    }
    useEffect(() => {
        const users = JSON.parse(localStorage.getItem("user")) || [];
        setUser(users);
    }, []);
    function onDel(id) {
        const con = confirm("Haqiqatan ham ochirmoqchimisiz?");
        if (con) {
            const filtUser = user.filter((item) => item.id !== id);
            setUser(filtUser);
            localStorage.setItem("user", JSON.stringify(filtUser));
        }
    }
    return (
        <div className="container">
            <div className="flex flex-col gap-3 p-4 rounded-md dark:text-black form bg-slate-200">
                <input
                    className="p-3 rounded-md"
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                    type="text"
                    placeholder="Enter the name"
                />
                <input
                    className="p-3 rounded-md"
                    value={lastName}
                    onChange={(e) => {
                        setLastName(e.target.value);
                    }}
                    type="text"
                    placeholder="Enter the lastname"
                />
                <input
                    className="p-3 rounded-md"
                    value={age}
                    onChange={(e) => {
                        setAge(e.target.value);
                    }}
                    type="number"
                    placeholder="Enter the age"
                />
                <input
                    className="p-3 rounded-md"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                    type="email"
                    placeholder="Enter the email"
                />
                <div className="flex justify-center">
                    <button
                        onClick={handleReg}
                        className="flex justify-center p-2 bg-white w-[150px] rounded-md active:scale-95"
                    >
                        SAVE
                    </button>
                </div>
            </div>
            <div className="flex flex-col items-center gap-4 pb-10 formWr dark:text-black">
                {user.length > 0 ? (
                    user.map((data, index) => {
                        return (
                            <div
                                className="flex justify-between w-[500px] bg-slate-200 p-3 rounded-md"
                                key={index}
                            >
                                <div className="fromSame">
                                    <h1>name: {data.name}</h1>
                                    <h1>lastname: {data.lastName}</h1>
                                </div>
                                <h1>email: {data.email}</h1>
                                <h1>Age: {data.age}</h1>
                                <button
                                    className="px-3 bg-red-500 rounded-md"
                                    onClick={() => {
                                        onDel(data.id);
                                    }}
                                >
                                    Delete
                                </button>
                            </div>
                        );
                    })
                ) : (
                    <h1>No users</h1>
                )}
            </div>
            <ToastContainer />
        </div>
    );
}

export default Masala2;
