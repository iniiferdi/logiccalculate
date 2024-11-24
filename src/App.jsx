import React, { useState, useEffect } from "react";

import Gradient from "./assets/gd.svg"
import Titik from "./assets/titik.svg"
import XlGradient from "./assets/xlgd.svg"

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
    const [result, setResult] = useState("");
    const [cursorVisible, setCursorVisible] = useState(true);
    const [selectedLanguage, setSelectedLanguage] = useState("EN");
    const [isValueInputted, setIsValueInputted] = useState(false);

    const buttonLabels = {
        EN: { true: "True", false: "False" },
        IN: { true: "Benar", false: "Salah" },
        ML: { true: "1", false: "0" },
    };

    const handleValueInput = (value) => {
        setInput((prev) => prev + value);
        setIsValueInputted(true);
    };

    const handleOperatorInput = (operator) => {
        setInput((prev) => prev + ` ${operator} `);
        setIsValueInputted(false);
    };

    const handleBackspaceClick = () => {
        setInput((prev) => prev.slice(0, -1));
    };

    const handleEqualClick = () => {
        const evaluatedResult = evaluateExpression(input);
        setResult(evaluatedResult);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCursorVisible((prev) => !prev);
        }, 500);
        return () => clearInterval(interval);
    }, []);


    return (
        <main className="w-full min-h-screen  font-Inter overflow-hidden mx-auto bg-black  flex items-center justify-center px-4 xl:p-8 ">
            <img className="xl:hidden absolute top-0 w-full" src={Gradient} alt="" />
            <img className=" absolute top-0 right-0 z-0" src={XlGradient} alt="" />

            <div className="flex xl:flex-row flex-col gap-6 items-center w-full max-w-6xl justify-between">
                <div className="xl:flex hidden flex-col xl:gap-4 w-full">
                    <h1 className="font-bold text-xl xl:text-5xl text-white">LogiCalculator</h1>
                    <h1 className="font-bold text-xl xl:text-5xl text-white">Hitung Logika Anda</h1>
                    <h2 className="font-medium opacity-65 text-lg xl:text-xl text-white">Cepat, Tepat, dan Mudah!</h2>
                </div>
                <section
                    className="flex flex-col gap-6 w-full  xl:max-w-[479px] xl:p-8 border border-[#454040] px-6 py-6 justify-center items-center bg-[#807878] bg-opacity-5  mx-auto shadow-xl rounded-2xl backdrop-blur-xl">

                    <div className="flex flex-row w-full justify-between items-center">
                        <img src={Titik} alt="titik" />

                        <LanguageDropdown
                            selectedLanguage={selectedLanguage}
                            setSelectedLanguage={setSelectedLanguage}
                        />

                    </div>

                    <LayarOutput input={input} result={result} cursorVisible={cursorVisible} />

                    <div className="flex flex-row justify-between w-full gap-6">
                        <div className="flex flex-col w-full gap-6">

                            <div className="flex flex-row xl:gap-6 gap-4  w-full xl:justify-between">

                                <ClearButton
                                    setInput={setInput}
                                    setResult={setResult}
                                    setIsValueInputted={setIsValueInputted}
                                />

                                <ParenthesesButtons

                                />
                            </div>

                            <div className="flex flex-col h-full gap-4 w-full">
                                <InputButton
                                    label={buttonLabels[selectedLanguage].true}
                                    onClick={() => handleValueInput(buttonLabels[selectedLanguage].true)}
                                    isTrue={true}
                                    disabled={isValueInputted}
                                />
                                <InputButton
                                    label={buttonLabels[selectedLanguage].false}
                                    onClick={() => handleValueInput(buttonLabels[selectedLanguage].false)}
                                    isTrue={false}
                                    disabled={isValueInputted}
                                />
                            </div>

                        </div>

                        <div className="flex flex-col w-full items-end gap-6">
                            <BackspaceButton
                                onClick={handleBackspaceClick}
                            />

                            <OperatorButton
                                onOperatorClick={(operator) => handleOperatorInput(operator)}
                                disabled={!isValueInputted}
                            />

                            <EqualButton
                                onClick={handleEqualClick}
                            />
                        </div>

                    </div>
                </section>
            </div>

        </main >
    );
}

export default App;
