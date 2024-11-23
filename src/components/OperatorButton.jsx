const OperatorButton = () => {
    return (
        <>
            <div className="grid xl:grid-cols-3 grid-cols-2 gap-4 w-full">
                <button
                    className="bg-[#1F1F1F] font-bold rounded-lg flex items-center justify-center w-full xl:w-[55px] h-10 text-white hover:scale-110  hover:shadow-lg active:shadow-md  duration-200 active:scale-95 transition transform">
                    ∧
                </button>

                <button
                    className="bg-[#1F1F1F] font-bold rounded-lg flex items-center justify-center w-full xl:w-[55px] h-10 text-white hover:scale-110 active:scale-95 transition transform">
                    ∨
                </button>

                <button
                    className="bg-[#1F1F1F] font-bold rounded-lg flex items-center justify-center w-full xl:w-[55px] h-10 text-white hover:scale-110 active:scale-95 transition transform">
                    ⊕
                </button>

                <button
                    className="bg-[#1F1F1F] font-bold rounded-lg flex items-center justify-center w-full xl:w-[55px] h-10 text-white hover:scale-110 active:scale-95 transition transform">
                    →
                </button>

                <button
                    className="bg-[#1F1F1F] font-bold rounded-lg flex items-center justify-center w-full xl:w-[55px] h-10 text-white hover:scale-110 active:scale-95 transition transform">
                    ↔
                </button>

                <button
                    className="bg-[#1F1F1F] font-bold rounded-lg flex items-center justify-center w-full xl:w-[55px] h-10 text-white hover:scale-110 active:scale-95 transition transform">
                    ¬
                </button>
            </div>

        </>

    )
}

export default OperatorButton