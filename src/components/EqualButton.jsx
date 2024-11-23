import React from "react";

const EqualButton = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className="bg-blue-600 w-full h-10 font-bold rounded-lg flex justify-center items-center text-white hover:scale-110 active:scale-95 transition transform"
        >
            =
        </button>
    );
};

export default EqualButton;
