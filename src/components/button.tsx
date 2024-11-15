import clsx from "clsx"
import { ReactNode } from "react";

type ButtonType = 'primary' | 'secondary' | 'negative' | 'icon-only';
interface ButtonProps {
    type: ButtonType;
    label?: string;
    slim?: boolean;
    icon?: ReactNode;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    disabled?: boolean;
    className?:string;
}

const Button = ({ type, label, slim = false, icon, onClick, disabled = false, className='w-full' }: ButtonProps) => {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className={clsx(
                `h-full text-white rounded-lg transition duration-200 ${className}`,
                {
                    "bg-green-600 hover:bg-green-700": type === "primary",
                    "bg-gray-600 hover:bg-gray-700": type === "secondary",
                    "bg-red-600 hover:bg-red-700": type === "negative",
                    "py-1 md:py-2": slim,
                    "py-2 md:py-3": !slim && type !== 'icon-only',
                    "px-5 md:px-7": type !== 'icon-only'
                }
            )}
        >
            {type === 'icon-only' ? (
                <span className="text-black">
                    {icon}
                </span>
            ) : (
                label
            )}
        </button>

    )
}

export default Button

