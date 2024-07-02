import React, { useState } from "react";

const SubmitButton = ({ onSubmit, label, disabled }) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(true);
        onSubmit(); // Call onSubmit function passed as prop
    };

    return (
        <button
            type="submit"
            onClick={handleClick}
            disabled={disabled || isClicked} // Disable if already clicked or disabled externally
            className={`block mx-auto py-3 px-6 font-bold rounded-md ${disabled || isClicked ? 'bg-gray-400' : 'bg-yellow-500 hover:bg-yellow-600'} text-black`}
        >
            {label}
        </button>
    );
};

export default SubmitButton;
