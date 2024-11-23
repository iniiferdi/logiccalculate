import React, { useState, useEffect, useRef } from "react";
import Gradient from "./assets/gd.svg"
import LanguageDropdown from "./components/LanguageDropdown";

function App() {
    const [input, setInput] = useState("");
    const [cursorVisible, setCursorVisible] = useState(true);
    const [selectedLanguage, setSelectedLanguage] = useState("EN");

    const handleBackspaceClick = () => {
        setInput((prev) => prev.slice(0, -1));
    };

    const buttonLabels = {
        EN: { true: "True", false: "False" },
        IN: { true: "Benar", false: "Salah" },
        ML: { true: "1", false: "0" },
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCursorVisible((prev) => !prev);
        }, 500);
        return () => clearInterval(interval);
    }, []);


    return (
        <main className="w-full min-h-screen  font-Inter overflow-hidden mx-auto bg-primary flex items-center justify-center px-4 xl:p-8 ">
            <img className="xl:hidden absolute bottom-0 w-full" src={Gradient} alt="" />

            <section
                className="flex flex-col gap-6 w-full xl:max-w-[479px] xl:p-8 border border-[#454040] px-6 py-6 justify-center items-center mx-auto shadow-xl rounded-2xl bg-opacity-50 backdrop-blur-lg">

                <div className="flex flex-row w-full justify-between items-center">
                    <svg
                        width="68"
                        height="16"
                        viewBox="0 0 68 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx="8" cy="8" r="8" fill="#FF5F5A" />
                        <circle cx="34" cy="8" r="8" fill="#FFBE2E" />
                        <circle cx="60" cy="8" r="8" fill="#2ACA44" />
                    </svg>


                    <LanguageDropdown
                        selectedLanguage={selectedLanguage}
                        setSelectedLanguage={setSelectedLanguage}
                    />

                </div>

                <div className="w-full h-[60px] bg-[#1F1F1F] rounded-md shadow-inner text-white p-2 flex items-center justify-end">
                    <div className="flex items-center">
                        <span>{input}</span>
                        <span className={`${cursorVisible ? "visible" : "invisible"} cursor`}>|</span>
                    </div>
                </div>


                <div className="flex flex-row justify-between w-full gap-6">
                    <div className="flex flex-col w-full gap-6">
                        <div className="flex flex-row gap-6  w-full justify-between">
                            <button
                                className="bg-green-600 w-1/2 py-2 rounded-lg text-white font-bold h-10 hover:scale-105 active:scale-95 transition transform"
                                onClick={() => setInput("")} // Hapus teks input
                            >
                                AC
                            </button>
                            <div className="xl:flex gap-4 hidden ">
                                <button
                                    className="text-white font-bold rounded-md bg-[#1F1F1F] px-4 h-10 hover:bg-[#2A2A2A] active:bg-[#454545] transition">(
                                </button>
                                <button
                                    className="text-white font-bold rounded-md bg-[#1F1F1F] px-4 h-10 hover:bg-[#2A2A2A] active:bg-[#454545] transition">)
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-col h-full gap-4 w-full">
                            <button
                                className="bg-[#1F1F1F] hover:shadow-lg active:shadow-md duration-200 h-full font-bold p-5 rounded-lg text-white hover:bg-[#2A2A2A] active:scale-95 transition transform"
                                onClick={() => setInput(buttonLabels[selectedLanguage].true)}
                            >
                                {buttonLabels[selectedLanguage].true}
                            </button>

                            <button
                                className="bg-[#1F1F1F] h-full font-bold p-5 rounded-lg text-white hover:bg-[#2A2A2A] active:scale-95 transition transform"
                                onClick={() => setInput(buttonLabels[selectedLanguage].false)}
                            >
                                {buttonLabels[selectedLanguage].false}
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col w-full items-end gap-6">

                        <button
                            onClick={handleBackspaceClick}
                            className="bg-red-600 hidden xl:flex items-center justify-center w-full h-10 rounded-lg text-white font-bold hover:bg-red-700 active:scale-95 transition transform"
                        >
                            <svg
                                width="20"
                                height="13"
                                viewBox="0 0 20 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M20 10.8333C20 12.0521 18.993 13 17.7778 13H7.11805C6.52779 13 5.97221 12.7969 5.55559 12.3906L0.312539 7.27864C0.104154 7.07554 0 6.80469 0 6.50004C0 6.22919 0.104154 5.95834 0.312539 5.75524L5.55559 0.643251C5.97221 0.236975 6.52779 0 7.11805 0H17.7778C18.993 0 20 0.981777 20 2.16673V10.8333ZM9.40974 4.90888L11.0417 6.50004L9.40974 8.09119C9.06254 8.42972 9.06254 8.93754 9.40974 9.24219C9.7222 9.58072 10.2431 9.58072 10.5556 9.24219L12.2222 7.65104L13.8542 9.24219C14.1667 9.58072 14.6875 9.58072 15 9.24219C15.3472 8.93754 15.3472 8.42972 15 8.09119L13.3681 6.50004L15 4.90888C15.3472 4.60416 15.3472 4.09641 15 3.75781C14.6875 3.45316 14.1667 3.45316 13.8542 3.75781L12.2222 5.38283L10.5556 3.75781C10.2431 3.45316 9.7222 3.45316 9.40974 3.75781C9.06254 4.09641 9.06254 4.60416 9.40974 4.90888Z"
                                    fill="white"
                                />
                            </svg>
                        </button>


                        <div className="flex flex-row xl:hidden w-full gap-4">
                            <div className=" gap-3  flex">
                                <button
                                    className="text-white font-bold rounded-md bg-[#1F1F1F] px-[10px] h-10 hover:bg-[#2A2A2A] active:bg-[#454545] transition">(
                                </button>
                                <button
                                    className="text-white font-bold rounded-md bg-[#1F1F1F] px-[10px] h-10 hover:bg-[#2A2A2A] active:bg-[#454545] transition">)
                                </button>
                            </div>

                            <button
                                className="bg-red-600 flex items-center justify-center w-full h-10 rounded-lg text-white font-bold hover:bg-red-700 active:scale-95 transition transform">
                                <svg width="20" height="13" viewBox="0 0 20 13" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M20 10.8333C20 12.0521 18.993 13 17.7778 13H7.11805C6.52779 13 5.97221 12.7969 5.55559 12.3906L0.312539 7.27864C0.104154 7.07554 0 6.80469 0 6.50004C0 6.22919 0.104154 5.95834 0.312539 5.75524L5.55559 0.643251C5.97221 0.236975 6.52779 0 7.11805 0H17.7778C18.993 0 20 0.981777 20 2.16673V10.8333ZM9.40974 4.90888L11.0417 6.50004L9.40974 8.09119C9.06254 8.42972 9.06254 8.93754 9.40974 9.24219C9.7222 9.58072 10.2431 9.58072 10.5556 9.24219L12.2222 7.65104L13.8542 9.24219C14.1667 9.58072 14.6875 9.58072 15 9.24219C15.3472 8.93754 15.3472 8.42972 15 8.09119L13.3681 6.50004L15 4.90888C15.3472 4.60416 15.3472 4.09641 15 3.75781C14.6875 3.45316 14.1667 3.45316 13.8542 3.75781L12.2222 5.38283L10.5556 3.75781C10.2431 3.45316 9.7222 3.45316 9.40974 3.75781C9.06254 4.09641 9.06254 4.60416 9.40974 4.90888Z"
                                        fill="white" />
                                </svg>
                            </button>
                        </div>

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

                        <button
                            className="bg-blue-600   w-full h-10  font-bold  rounded-lg  flex justify-center items-center  text-white  hover:scale-110 active:scale-95 transition transform">=</button>






                    </div>
                </div>
            </section>

        </main >
    );
}

export default App;
