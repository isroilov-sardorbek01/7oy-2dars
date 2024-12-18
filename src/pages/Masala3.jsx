import axios from "axios";
import React, { useEffect, useState } from "react";
import { useFetcher } from "react-router-dom";

function Masala3() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                console.log(response);

                if (response.status == 200) {
                    setUsers(response.data);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <div className="container">
            <div className="text-center">
            <h1 className="text-[40px]">Filter the Users</h1>
            <input className="p-2 border-[2px] rounded-md border-black w-[50%]" type="text" placeholder="Enter the user name: " />
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-5 userWr dark:text-black">
                {users.length > 0 ? (
                    users.map((data, index) => {
                        return (
                            <div
                                className="w-[230px] bg-slate-200 p-3 rounded-md "
                                key={index}
                            >
                                <h1>{data.name}</h1>
                                <h1>{data.username}</h1>
                                <h1>{data.email}</h1>
                                <h1>{data.phone}</h1>
                            </div>
                        );
                    })
                ) : (
                    <h1>No users</h1>
                )}
            </div>
        </div>
    );
}

export default Masala3;
