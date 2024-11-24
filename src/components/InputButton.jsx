import React from "react";

const InputButton = ({ label, onClick, isTrue, disabled }) => {
    return (
        <button
            className={`bg-[#1F1F1F] font-bold p-5 rounded-lg text-white transition transform duration-200 h-full ${disabled
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-[#2A2A2A] hover:shadow-lg active:shadow-md active:scale-95"
                } ${isTrue ? "hover:shadow-lg active:shadow-md" : ""}`}
            onClick={disabled ? null : onClick}
            disabled={disabled}
            aria-pressed={isTrue}
            title={label}
        >
            {label}
        </button>
    );
};

export default InputButton;
