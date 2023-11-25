import { Bree_Serif } from "next/font/google"

const font = Bree_Serif({ subsets: ['latin'], weight: ['400'] })

const Header = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <header className={`${className} ${font.className} text-grey`}>{children}</header>
    )
}

export default Header