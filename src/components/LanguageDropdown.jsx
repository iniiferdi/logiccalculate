import React, { useState } from "react";

const LanguageDropdown = ({ selectedLanguage, setSelectedLanguage }) => {
    const [isOpen, setIsOpen] = useState(false);

    const languages = [
        { code: "EN", name: "English" },
        { code: "IN", name: "Indonesian" },
        { code: "ML", name: "Mechine" },
    ];

    const handleSelect = (code) => {
        setSelectedLanguage(code);
        setIsOpen(false);
    };

    return (
        <div className="relative z-50">
            <div
                className="flex  items-center space-x-2 cursor-pointer  px-3 py-2 rounded-lg transition-all duration-300"
                onClick={() => setIsOpen(!isOpen)}
            >
                <h1 className="text-white text-lg font-semibold">
                    {selectedLanguage}
                </h1>
                <svg
                    className={`w-5 h-5 text-white transform transition-transform ${isOpen ? "rotate-180" : ""
                        }`}
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                >
                    <path
                        d="M11.1808 15.8297L6.54199 9.20285C5.89247 8.27496 6.55629 7 7.68892 7L16.3111 7C17.4437 7 18.1075 8.27496 17.458 9.20285L12.8192 15.8297C12.4211 16.3984 11.5789 16.3984 11.1808 15.8297Z"
                        fill="currentColor"
                    />
                </svg>
            </div>
            {isOpen && (
                <div className="absolute right-0 mt-2 w-36 bg-primary bg-opacity-70 backdrop-blur-lg border border-[#454040] text-white rounded-lg shadow-lg transition-all duration-300 ease-in-out">
                    {languages.map((lang) => (
                        <div
                            key={lang.code}
                            className={`px-4 py-2 text-sm cursor-pointer hover:bg-primary hover:bg-opacity-80 transition-all ${lang.code === selectedLanguage
                                    ? "bg-primary bg-opacity-80 font-bold"
                                    : ""
                                }`}
                            onClick={() => handleSelect(lang.code)}
                        >
                            {lang.name}
                        </div>
                    ))}
                </div>
            )}
        </div>

    );
};

export default LanguageDropdown;
