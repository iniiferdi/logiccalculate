const OperatorButton = ({ onOperatorClick, disabled }) => {
    const operators = [
        { symbol: "∧", description: "Conjunction (AND)" },
        { symbol: "∨", description: "Disjunction (OR)" },
        { symbol: "⊕", description: "Exclusive OR (XOR)" },
        { symbol: "→", description: "Implication (IF-THEN)" },
        { symbol: "↔", description: "Equivalence (IFF)" },
        { symbol: "¬", description: "Negation (NOT)" },
    ];

    return (
        <div className="grid xl:grid-cols-3 grid-cols-2 gap-4 w-full">
            {operators.map(({ symbol, description }) => (
                <button
                    key={symbol}
                    className={`bg-[#1F1F1F] font-bold rounded-lg flex items-center justify-center w-full xl:w-[55px] h-10 text-white ${
                        disabled && symbol !== "¬" // Negasi tidak terpengaruh disabled
                            ? "opacity-50 cursor-not-allowed"
                            : "hover:scale-110 hover:shadow-lg active:shadow-md duration-200 active:scale-95 transition transform"
                    }`}
                    onClick={() => (symbol === "¬" || !disabled) && onOperatorClick(symbol)}
                    disabled={disabled && symbol !== "¬"} // Negasi tidak pernah disable
                    title={description}
                >
                    {symbol}
                </button>
            ))}
        </div>
    );
};

export default OperatorButton;
