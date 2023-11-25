

const Button = ({ text, variant, className }: { text: string, variant?: boolean, className?: string }) => {
    return (
        <button className={`px-[1.5rem] py-[1rem] ${className} text-white ${variant ? "bg-myOrange" : "bg-[#e79310]"} rounded-md`}>{text}</button>
    )
}

export default Button