import Link from "next/link"

const LinkA = ({ children, href } : { children: JSX.Element, href: string }) => {
    return <Link href={ href } passHref>
        <a>
            { children }
        </a>
    </Link>
}

export default LinkA