'use client'

import { useEffect, useState } from "react";

export function Filter() {
    const [filterOption, setFilterOption] = useState(false);
    const options = ['Outdoor', 'Indoor'];

    const toggleMenu = () => {
        setFilterOption(prev => !prev);
    }

    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

    const handleChange = (option: string) => {
        setSelectedOptions((prev) =>
            prev.includes(option)
                ? prev.filter((o) => o !== option)
                : [...prev, option]
        );
    };

    useEffect(() => {
        console.log(selectedOptions)
    }, [selectedOptions])

    return (
        <div className="relative">
            <button
                onClick={toggleMenu}
                className="flex items-center p-2 focus:outline-none"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                </svg>
            </button>
            {filterOption && (
                <div className="absolute right-0 bg-white rounded-lg shadow-md overflow-hidden p-4 w-60 z-10">
                    <p className="text-sm pb-2">Apply Filters</p>
                    <hr></hr>
                    <div className="my-4">
                        {options.map((option) => (
                            <label key={option} className="flex items-center mb-2 text-sm">
                                <input
                                    type="checkbox"
                                    className="form-checkbox h-5 w-5 text-blue-600 transition duration-150 ease-in-out"
                                    checked={selectedOptions.includes(option)}
                                    onChange={() => handleChange(option)}
                                />
                                <span className="ml-2 text-gray-700">{option}</span>
                            </label>
                        ))}
                    </div>
                    <div className="flex flex-row gap-2 text-sm mt-4">
                        <button className=" w-full bg-white py-1 rounded-lg hover:bg-gray-50 transition duration-200" onClick={toggleMenu}>
                            Cancel
                        </button>
                        <button className=" w-full bg-orange-100 py-1 rounded-lg hover:bg-orange-200 transition duration-200">
                            Apply
                        </button>
                    </div>
                </div>
            )}
        </div>

    );
}