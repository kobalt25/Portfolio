"use client";
import React from "react";

interface LanguageFilterProps {
    languages: string[];
    selectedLanguage: string | null;
    onSelectLanguage: (lang: string | null) => void;
}

const LanguageFilter: React.FC<LanguageFilterProps> = ({
                                                           languages,
                                                           selectedLanguage,
                                                           onSelectLanguage,
                                                       }) => {
    return (
        <div className="sticky top-0 z-10 w-full flex flex-wrap gap-3 items-center mb-4 p-4 bg-[#2C7A7B]/90 backdrop-blur-md">
            {/* "All" Button */}
            <button
                onClick={() => onSelectLanguage(null)}
                className={`
          px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 transform
          border border-[#186162]
          hover:bg-[#a2f5e9] hover:text-[#1f5e5f] hover:scale-105
          ${selectedLanguage === null ? "bg-white text-[#1f5e5f] shadow-md" : "bg-[#1f6b6c] text-white"}
        `}
            >
                All
            </button>

            {/* Language Buttons */}
            {languages.map((lang) => (
                <button
                    key={lang}
                    onClick={() => onSelectLanguage(lang)}
                    className={`
            px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 transform
            border border-[#186162]
            hover:bg-[#a2f5e9] hover:text-[#1f5e5f] hover:scale-105
            ${selectedLanguage === lang ? "bg-white text-[#1f5e5f] shadow-md" : "bg-[#1f6b6c] text-white"}
          `}
                >
                    {lang}
                </button>
            ))}
        </div>
    );
};

export default LanguageFilter;
