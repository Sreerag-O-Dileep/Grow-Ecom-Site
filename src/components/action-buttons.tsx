import Button from "@/components/button"

type ButtonTypes = 'primary' | 'secondary' | 'negative';


interface ButtonProps {
    buttonType: ButtonTypes;
    label: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    disabled?: boolean;
}

interface ActionButtonsProps {
    button1: ButtonProps;
    button2: ButtonProps;
    className?: string;
    slimButton?: boolean;
}
const ActionButtons = ({ button1, button2, className = '', slimButton = false }: ActionButtonsProps) => {
    return (
        <div className={`flex flex-row gap-2 ${className}`} >
            <Button slim={slimButton} type={button1.buttonType} label={button1.label} onClick={button1.onClick} />
            <Button slim={slimButton} type={button2.buttonType} label={button2.label} onClick={button2.onClick} />
        </div >
    )
}

export default ActionButtons