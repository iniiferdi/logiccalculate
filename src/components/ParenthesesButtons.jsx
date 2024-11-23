const ParenthesesButtons = ({ handleOpenParen, handleCloseParen }) => {
    return (
        <div className="flex gap-4">
            <button
                className="text-white font-bold rounded-md bg-[#1F1F1F] px-4 h-10 hover:bg-[#2A2A2A] active:bg-[#454545] transition"
                onClick={handleOpenParen} // Fungsi saat tombol "(" ditekan
            >
                (
            </button>
            <button
                className="text-white font-bold rounded-md bg-[#1F1F1F] px-4 h-10 hover:bg-[#2A2A2A] active:bg-[#454545] transition"
                onClick={handleCloseParen} // Fungsi saat tombol ")" ditekan
            >
                )
            </button>
        </div>
    );
};

export default ParenthesesButtons;
