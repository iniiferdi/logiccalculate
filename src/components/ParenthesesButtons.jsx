const ParenthesesButtons = ({ handleOpenParen, handleCloseParen }) => {
    return (
        <div className="flex xl:gap-4 gap-2">
            <button
                className="text-white font-bold rounded-md bg-[#1F1F1F] xl:px-4 px-3 h-10 hover:bg-[#2A2A2A] active:bg-[#454545] transition"
                onClick={handleOpenParen}
            >
                (
            </button>
            <button
                className="text-white font-bold rounded-md bg-[#1F1F1F] xl:px-4 px-3 h-10 hover:bg-[#2A2A2A] active:bg-[#454545] transition"
                onClick={handleCloseParen}
            >
                )
            </button>
        </div>
    );
};

export default ParenthesesButtons;
