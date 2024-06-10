import { useState } from "react"

export const SwitchMode = () => {

    const [toggle, setToggle] = useState(true);
    const toggleClass = " transform translate-x-5";
    return (
        <div
            className="md:w-14 md:h-7 w-12 h-6 flex items-center bg-grat-300 rounded-full p-1 cursor-pointer shadow-md drop-shadow-xl"
            onClick={() => {
                setToggle(!toggle)
            }}>
            <div
                className={"bg-custom-green-gradient md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform" + (toggle ? null : toggleClass)}>
                        {toggle ? "☀️" : "🌙"}
            </div>
        </div>
    )
}

