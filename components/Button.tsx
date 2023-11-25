

const Button = ({ text, variant }: { text: string, variant?: boolean }) => {
    return (
        <button className={`px-[1.5rem] py-[1rem] shadow-or text-white ${variant ? "bg-myOrange" : "bg-[#e79310]"} rounded-md`}>{text}</button>
    )
}

export default Button