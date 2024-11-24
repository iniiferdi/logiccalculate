const LayarOutput = ({ input, result, cursorVisible }) => {
    return (
        <div className="w-full h-[64px] bg-[#1F1F1F] rounded-md shadow-inner text-white p-4 flex items-center justify-end">
            <div className="flex font-semibold items-center text-lg font-Inter">
                <span>{result ? result : input}</span>
                <span
                    className={`ml-1 ${cursorVisible ? "visible" : "invisible"}`}
                >
                    |
                </span>
            </div>
        </div>

    );
};

export default LayarOutput;
