'use client'
import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Button from "@/components/button";
import ActionButtons from "./action-buttons";
import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';

type SortType = string | null;

export function Filter() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
    const [selectedSort, setSelectedSort] = useState<SortType>(null);
    const [openFilter, setOpenFilter] = useState(false);

    const filterOptions = ['Outdoor', 'Indoor'];
    const sortOptions = ['Price low to high', 'Price high to low'];


    const toggleMenu = () => {
        setOpenFilter(prev => !prev);
    }

    const handleChange = (option: string) => {
        setSelectedOptions((prev) =>
            prev.includes(option)
                ? prev.filter((o) => o !== option)
                : [...prev, option]
        );
    };

    const handleSortChange = (option: SortType) => {
        setSelectedSort(option);
    };

    const cancel = () => {
        setSelectedOptions([]);
        setSelectedSort(null);
        setOpenFilter(false);
    };

    useEffect(() => {
        const params = new URLSearchParams(searchParams);

        params.set('page', '1');

        if (selectedOptions.length) {
            params.set('category', selectedOptions.join(','));
        } else {
            params.delete('category');
        }

        if (selectedSort) {
            params.set('sort', selectedSort);
        } else {
            params.delete('sort');
        }
        replace(`${pathname}?${params.toString()}`);
    }, [selectedOptions, selectedSort]);

    return (
        <div className="relative h-full">
            <Button type='icon-only' icon={<AdjustmentsHorizontalIcon className="h-6 w-6 text-black" />} onClick={toggleMenu} />
            {openFilter && (
                <div className="absolute md:right-0 bg-white rounded-lg shadow-md overflow-hidden p-4 w-60 z-10">
                    <p className="text-sm pb-2">Filter</p>
                    <hr />
                    <div className="my-4">
                        {filterOptions.map((option) => (
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
                    <p className="text-sm pb-2">Sort</p>
                    <hr />
                    <div className="my-4">
                        {sortOptions.map((option) => (
                            <label key={option} className="flex items-center mb-2 text-sm">
                                <input
                                    type="radio"
                                    className="form-radio h-5 w-5 text-blue-600 transition duration-150 ease-in-out"
                                    checked={selectedSort === option}
                                    onChange={() => handleSortChange(option)}
                                />
                                <span className="ml-2 text-gray-700">{option}</span>
                            </label>
                        ))}
                    </div>
                    <ActionButtons slimButton={true} button1={{ buttonType: 'negative', label: 'Cancel', onClick: cancel }} button2={{ buttonType: 'primary', label: 'Done', onClick: toggleMenu }} />
                </div>
            )}
        </div>
    );
}
