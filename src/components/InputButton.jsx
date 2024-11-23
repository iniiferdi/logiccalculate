import React from "react";

const InputButton = ({ label, onClick, isTrue }) => {
    return (
        <button
            className={`bg-[#1F1F1F] ${isTrue ? "hover:shadow-lg active:shadow-md" : ""} duration-200 h-full font-bold p-5 rounded-lg text-white hover:bg-[#2A2A2A] active:scale-95 transition transform`}
            onClick={onClick}
        >
            {label}
        </button>
    );
};

export default InputButton;
