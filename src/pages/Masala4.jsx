import React, { useState } from "react";

function Masala4() {
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);
    const [counter3, setCounter3] = useState(0);

    function handleAdd() {
        setCounter1(counter1 + 1);
    }

    function handleMinus() {
        setCounter1(counter1 - 1);
    }

    function handleReset() {
        setCounter1(0);
    }

    function handleAddCounter() {
        setCounter2(counter2 + 1);
    }

    function handleMinusCounter() {
        setCounter2(counter2 - 1);
    }

    function handleResetCounter() {
        setCounter2(0);
    }

    function handleAddCounter3() {
        setCounter3(counter3 + 1);
    }

    function handleMinusCounter3() {
        setCounter3(counter3 - 1);
    }

    function handleResetCounter3() {
        setCounter3(0);
    }

    return (
        <>
            <div className="container">
                <div className="text-center top-content ">
                    <h1 className="text-[40px] mb-6">
                        Dynamic Counter Dashboard
                    </h1>
                </div>
                <div className="flex justify-around count">
                    <div className="p-4 rounded-md counter bg-slate-200 dark:text-black">
                        <h2>{counter1}</h2>
                        <div className="flex gap-4 buttons">
                            <button onClick={handleAdd} className="add-count">
                                +
                            </button>
                            <button onClick={handleMinus} className="minus-but">
                                -
                            </button>
                            <button onClick={handleReset} className="reset">
                                Reset
                            </button>
                        </div>
                    </div>
                    <div className="p-4 rounded-md counter bg-slate-200 dark:text-black">
                        <h2>{counter2}</h2>
                        <div className="flex gap-4 buttons">
                            <button
                                onClick={handleAddCounter}
                                className="add-count"
                            >
                                +
                            </button>
                            <button
                                onClick={handleMinusCounter}
                                className="minus-but"
                            >
                                -
                            </button>
                            <button
                                onClick={handleResetCounter}
                                className="reset"
                            >
                                Reset
                            </button>
                        </div>
                    </div>
                    <div className="p-4 rounded-md counter bg-slate-200 dark:text-black">
                        <h2>{counter3}</h2>
                        <div className="flex gap-4 buttons">
                            <button
                                onClick={handleAddCounter3}
                                className="add-count"
                            >
                                +
                            </button>
                            <button
                                onClick={handleMinusCounter3}
                                className="minus-but"
                            >
                                -
                            </button>
                            <button
                                onClick={handleResetCounter3}
                                className="reset"
                            >
                                Reset
                            </button>
                        </div>
                    </div>
                </div>
                <div className="global">
                    <h2 className="mt-10 text-center  text-[40px]">{counter1 + counter2 + counter3}</h2>
                </div>
            </div>
        </>
    );
}

export default Masala4;
