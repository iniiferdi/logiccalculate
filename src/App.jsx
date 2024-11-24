import React, { useState, useEffect } from "react";

import Gradient from "./assets/gd.svg";
import Titik from "./assets/titik.svg";
import XlGradient from "./assets/xlgd.svg";

import LanguageDropdown from "./components/LanguageDropdown";
import LayarOutput from "./components/LayarOutput";
import OperatorButton from "./components/OperatorButton";
import ClearButton from "./components/ClearButton";
import ParenthesesButtons from "./components/ParenthesesButtons";
import BackspaceButton from "./components/BackspaceButton";
import EqualButton from "./components/EqualButton";
import InputButton from "./components/InputButton";

import LoadingPage from "./components/LoadingPage";

function App() {
    const [input, setInput] = useState("");
    const [result, setResult] = useState("");
    const [cursorVisible, setCursorVisible] = useState(true);
    const [selectedLanguage, setSelectedLanguage] = useState("EN");
    const [isValueInputted, setIsValueInputted] = useState(false);
    const [isOperatorSelected, setIsOperatorSelected] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const buttonLabels = {
        EN: { true: "True", false: "False" },
        IN: { true: "Benar", false: "Salah" },
        ML: { true: "1", false: "0" },
    };

    const handleValueInput = (value) => {
        if (value === "(" || value === ")") {
            setInput((prev) => prev + value);
            return; // Tidak mempengaruhi isValueInputted atau isOperatorSelected
        }
    
        setInput((prev) => prev + value);
        setIsValueInputted(true);
        setIsOperatorSelected(false);
    };
    

    const handleOperatorInput = (operator) => {
        if (!isOperatorSelected && isValueInputted) {
            setInput((prev) => `${prev} ${operator} `);
            setIsOperatorSelected(true);
            setIsValueInputted(false);
        }
    };

    const handleBackspaceClick = () => {
        setInput((prev) => prev.trimEnd().slice(0, -1));
    };

    const clearAll = () => {
        setInput("");
        setResult("");
        setIsValueInputted(false);
    };

    const convertToLogicExpression = (expression) => {
        return expression
            .replace(/\s∧\s/g, " && ")  // AND
            .replace(/\s∨\s/g, " || ")  // OR
            .replace(/\s⊕\s/g, " !== ") // XOR
            .replace(/\s→\s/g, " <= ")  // Implication
            .replace(/\s↔\s/g, " === ") // Biconditional
            .replace(/¬/g, "!")         // Negation
            .replace(/\bTrue\b|\bBenar\b/g, "true")  // Support both "True" and "Benar"
            .replace(/\bFalse\b|\bSalah\b/g, "false"); // Support both "False" and "Salah"
    };
    

    const calculateResult = () => {
        try {
            const logicExpression = convertToLogicExpression(input);
    
            // Validasi tanda kurung
            const openParens = (logicExpression.match(/\(/g) || []).length;
            const closeParens = (logicExpression.match(/\)/g) || []).length;
            if (openParens !== closeParens) {
                setResult("Invalid expression");
                return;
            }
    
            // Evaluasi ekspresi
            const evaluatedResult = new Function(`return ${logicExpression}`)();
            const output = evaluatedResult
                ? buttonLabels[selectedLanguage].true
                : buttonLabels[selectedLanguage].false;
            setResult(output);
        } catch {
            setResult("Invalid expression");
            console.error("Error: Invalid logical expression");
        }
    };
    

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => setCursorVisible((prev) => !prev), 500);
        return () => clearInterval(interval);
    }, []);

    if (isLoading) return <LoadingPage />;

    return (
        <main className="w-full min-h-screen font-Inter overflow-hidden mx-auto bg-black flex items-center justify-center px-4 xl:p-8">
            <img className="xl:hidden absolute top-0 w-full" src={Gradient} alt="" />
            <img className="absolute top-0 right-0 z-0" src={XlGradient} alt="" />

            <div className="flex xl:flex-row flex-col gap-6 items-center w-full max-w-6xl justify-between">
                <div className="xl:flex hidden flex-col xl:gap-4 w-full">
                    <h1 className="font-bold text-xl xl:text-5xl text-white">LogiCalculator</h1>
                    <h2 className="font-medium opacity-65 text-lg xl:text-xl text-white">Cepat, Tepat, dan Mudah!</h2>
                </div>

                <section className="flex flex-col gap-6 w-full xl:max-w-[479px] xl:p-8 border border-[#454040] px-6 py-6 justify-center items-center bg-[#807878] bg-opacity-5 mx-auto shadow-xl rounded-2xl backdrop-blur-xl">
                    <div className="flex flex-row w-full justify-between items-center">
                        <img src={Titik} alt="titik" />
                        <LanguageDropdown selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage} />
                    </div>

                    <LayarOutput input={input} result={result} cursorVisible={cursorVisible} />

                    <div className="flex flex-row justify-between w-full gap-6">
                        <div className="flex flex-col w-full gap-6">
                            <div className="flex flex-row xl:gap-6 gap-4 w-full xl:justify-between">
                                <ClearButton clearAll={clearAll} />
                                <ParenthesesButtons
                                    handleOpenParen={() => handleValueInput("(")}
                                    handleCloseParen={() => handleValueInput(")")}
                                />
                            </div>
                            <div className="flex flex-col h-full gap-4 w-full">
                                <InputButton
                                    label={buttonLabels[selectedLanguage].true}
                                    onClick={() => handleValueInput(buttonLabels[selectedLanguage].true)}
                                    disabled={isValueInputted}
                                />
                                <InputButton
                                    label={buttonLabels[selectedLanguage].false}
                                    onClick={() => handleValueInput(buttonLabels[selectedLanguage].false)}
                                    disabled={isValueInputted}
                                />
                            </div>
                        </div>

                        <div className="flex flex-col w-full items-end gap-6">
                            <BackspaceButton onClick={handleBackspaceClick} />
                            <OperatorButton onOperatorClick={handleOperatorInput} disabled={!isValueInputted} />
                            <EqualButton onClick={calculateResult} />
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}

export default App;
