import { useState, ChangeEvent, HTMLInputTypeAttribute } from "react";



type InputProps = {
    id: string;
    label: string;
    type: HTMLInputTypeAttribute;
    placeholder: string;
    className?: string;
    error?: string;
};

export const Input = (props: InputProps) => {
    const { className, label, placeholder, type } = props;

    const [value, setValue] = useState("");

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    return (
        <div className={"max-h-20 flex flex-1 flex-col gap-2 " + " " + className}>
            <label className="font-bold ">
                {label}
            </label>
            <input
                className="p-5 h-full max-h-14 bg-input rounded-xl"
                type={type}
                placeholder={placeholder}
                value={value} 
                onChange={handleChange}/>
        </div>
    )
}
