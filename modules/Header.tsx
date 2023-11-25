import { PT_Serif } from "next/font/google"

const ptSerif = PT_Serif({ subsets: ['latin'], weight: ['400'] })

const Header = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <header className={`${className} ${ptSerif.className}`}>{children}</header>
    )
}

export default Header