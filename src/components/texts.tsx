type TextType = 'heading' | 'subHeading' | 'description' | 'sectionHeading' | 'paragraph';

interface TextSectionProps {
    textType: TextType;
    textContent: string;
    className?: string;
}

const TextSection = ({ textType, textContent, className = 'text-black' }: TextSectionProps) => {
    const textStyles = {
        heading: "text-xl md:text-2xl font-bold ",
        subHeading: "text-md md:text-lg ",
        description: "text-sm md:text-md ",
        sectionHeading: "text-md md:text-lg font-semibold ",
        paragraph: "text-sm "
    };
    return (<p className={textStyles[textType] + className}>{textContent}</p>)

};

export default TextSection;
