import React from "react";

const ClearButton = ({ setInput, setResult, setIsValueInputted }) => {
    return (
        <button
            className="bg-green-600 w-full xl:w-1/2 py-2 rounded-lg text-white font-bold h-10 hover:scale-105 active:scale-95 transition transform"
            onClick={() => {
                setInput("");
                setResult("");
                setIsValueInputted(false);
            }}
        >
            AC
        </button>
    );
};

export default ClearButton;
