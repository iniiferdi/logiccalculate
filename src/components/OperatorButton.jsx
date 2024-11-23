const OperatorButton = () => {
    return (
        <>
            <div className="grid xl:grid-cols-3 grid-cols-2 gap-4 w-full">
                <button
                    className="bg-[#1F1F1F] font-bold rounded-lg flex items-center justify-center w-full xl:w-[55px] h-10 text-white hover:scale-110  hover:shadow-lg active:shadow-md  duration-200 active:scale-95 transition transform">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M3.11364 0.363636L5.92614 9.20455H6.03409L8.85227 0.363636H11.5795L7.56818 12H4.39773L0.380682 0.363636H3.11364Z"
                            fill="white" />
                    </svg>
                </button>

                <button
                    className="bg-[#1F1F1F] font-bold rounded-lg flex items-center justify-center w-full xl:w-[55px] h-10 text-white hover:scale-110 active:scale-95 transition transform">
                    <svg width="13" height="12" viewBox="0 0 13 12" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M9.38636 11.6364L6.57386 2.79546L6.46591 2.79546L3.64773 11.6364L0.920454 11.6364L4.93182 6.61631e-07L8.10227 3.84462e-07L12.1193 11.6364L9.38636 11.6364Z"
                            fill="white" />
                    </svg>
                </button>

                <button
                    className="bg-[#1F1F1F] font-bold rounded-lg flex items-center justify-center w-full xl:w-[55px] h-10 text-white hover:scale-110 active:scale-95 transition transform">
                    <svg width="15" height="14" viewBox="0 0 15 14" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M1 6.1C0.502944 6.1 0.1 6.50294 0.1 7C0.1 7.49706 0.502944 7.9 1 7.9L1 6.1ZM14.6364 7.6364C14.9879 7.28493 14.9879 6.71508 14.6364 6.36361L8.90883 0.63604C8.55736 0.284568 7.98751 0.284568 7.63604 0.63604C7.28457 0.987512 7.28457 1.55736 7.63604 1.90883L12.7272 7L7.63604 12.0912C7.28457 12.4426 7.28457 13.0125 7.63604 13.364C7.98751 13.7154 8.55736 13.7154 8.90883 13.364L14.6364 7.6364ZM1 7.9L14 7.9L14 6.1L1 6.1L1 7.9Z"
                            fill="white" />
                    </svg>
                </button>

                <button
                    className="bg-[#1F1F1F] font-bold rounded-lg flex items-center justify-center w-full xl:w-[55px] h-10 text-white hover:scale-110 active:scale-95 transition transform">
                    <svg width="22" height="14" viewBox="0 0 22 14" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0.363604 6.3636C0.0121321 6.71508 0.012132 7.28492 0.363604 7.6364L6.09117 13.364C6.44264 13.7154 7.01249 13.7154 7.36396 13.364C7.71543 13.0125 7.71543 12.4426 7.36396 12.0912L2.27279 7L7.36396 1.90883C7.71543 1.55736 7.71543 0.987512 7.36396 0.63604C7.01249 0.284568 6.44264 0.284568 6.09117 0.63604L0.363604 6.3636ZM21.6364 7.6364C21.9879 7.28493 21.9879 6.71508 21.6364 6.36361L15.9088 0.63604C15.5574 0.284569 14.9875 0.284569 14.636 0.63604C14.2846 0.987512 14.2846 1.55736 14.636 1.90883L19.7272 7L14.636 12.0912C14.2846 12.4426 14.2846 13.0125 14.636 13.364C14.9875 13.7154 15.5574 13.7154 15.9088 13.364L21.6364 7.6364ZM1 7.9L21 7.9L21 6.1L1 6.1L1 7.9Z"
                            fill="white" />
                    </svg>
                </button>

                <button
                    className="bg-[#1F1F1F] font-bold rounded-lg flex items-center justify-center w-full xl:w-[55px] h-10 text-white hover:scale-110 active:scale-95 transition transform">
                    <svg width="13" height="4" viewBox="0 0 13 4" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H12V3" stroke="white" stroke-width="2" stroke-linecap="round" />
                    </svg>
                </button>

                <button
                    className="bg-[#1F1F1F] font-bold rounded-lg flex items-center justify-center w-full xl:w-[55px] h-10 text-white hover:scale-110 active:scale-95 transition transform">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7 1V7H0.517582C0.773955 3.36736 3.80212 0.5 7.5 0.5C11.1979 0.5 14.226 3.36736 14.4824 7H8V1H7ZM0.517582 8H7V14.4824C3.53251 14.2377 0.7623 11.4675 0.517582 8ZM14.4824 8C14.2377 11.4675 11.4675 14.2377 8 14.4824V8H14.4824Z"
                            stroke="white" />
                    </svg>
                </button>
            </div>

        </>

    )
}

export default OperatorButton