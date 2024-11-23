import React, { useState, useEffect} from "react";

import Gradient from "./assets/gd.svg"
import Titik from "./assets/titik.svg"

import LanguageDropdown from "./components/LanguageDropdown";
import LayarOutput from "./components/LayarOutput";
import OperatorButton from "./components/OperatorButton";
import ClearButton from "./components/ClearButton";
import ParenthesesButtons from "./components/ParenthesesButtons";
import BackspaceButton from "./components/BackspaceButton";
import EqualButton from "./components/EqualButton";
import InputButton from "./components/InputButton";

function App() {
    const [input, setInput] = useState("");
    const [cursorVisible, setCursorVisible] = useState(true);
    const [selectedLanguage, setSelectedLanguage] = useState("EN");

    const handleBackspaceClick = () => {
        setInput((prev) => prev.slice(0, -1));
    };

    const handleOpenParen = () => {
        console.log("(");
    };

    const handleCloseParen = () => {
        console.log(")");
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
            <img className="xl:hidden absolute top-0 w-full" src={Gradient} alt="" />

            <section
                className="flex flex-col gap-6 w-full xl:max-w-[479px] xl:p-8 border border-[#454040] px-6 py-6 justify-center items-center mx-auto shadow-xl rounded-2xl bg-opacity-50 backdrop-blur-lg">

                <div className="flex flex-row w-full justify-between items-center">
                    <img src={Titik} alt="titik" />

                    <LanguageDropdown
                        selectedLanguage={selectedLanguage}
                        setSelectedLanguage={setSelectedLanguage}
                    />

                </div>

                <LayarOutput input={input} cursorVisible={cursorVisible} />

                <div className="flex flex-row justify-between w-full gap-6">
                    <div className="flex flex-col w-full gap-6">

                        <div className="flex flex-row gap-6  w-full justify-between">

                            <ClearButton setInput={setInput} />

                            <ParenthesesButtons
                                handleOpenParen={handleOpenParen}
                                handleCloseParen={handleCloseParen}
                            />
                        </div>

                        <div className="flex flex-col h-full gap-4 w-full">
                            <InputButton
                                label={buttonLabels[selectedLanguage].true}
                                isTrue={true}
                            />
                            <InputButton
                                label={buttonLabels[selectedLanguage].false}
                                isTrue={false}
                            />
                        </div>

                    </div>

                    <div className="flex flex-col w-full items-end gap-6">
                        <BackspaceButton onClick={handleBackspaceClick} />
                        <OperatorButton />
                        <EqualButton />
                    </div>

                </div>
            </section>

        </main >
    );
}

export default App;
