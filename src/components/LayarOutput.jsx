const LayarOutput = ({ input, cursorVisible }) => {
    return (
        <div className="w-full h-[60px] bg-[#1F1F1F] rounded-md shadow-inner text-white p-4 flex items-center justify-end">
            <div className="flex items-center text-lg font-Inter">
                <span>{input}</span>
                <span
                    className={`ml-1 ${
                        cursorVisible ? "visible" : "invisible"
                    }`}
                >
                    |
                </span>
            </div>
        </div>
    );
};

export default LayarOutput