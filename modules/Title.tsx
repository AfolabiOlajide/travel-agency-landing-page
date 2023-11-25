import { Syne } from 'next/font/google'

const font = Syne({ subsets: ['latin'], weight: ["400"] })
// import { Questrial } from 'next/font/google'

// const questrial = Questrial({ subsets: ['latin'], weight: ["400"] })

const Title = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <header className={`${className} ${font.className}`}>{children}</header>
    )
}

export default Title