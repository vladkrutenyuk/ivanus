import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import styled from "styled-components"
import LinkA from "./LinkA"
import OldButton from './OldButton'

export type NavBarItem = {
    label: string,
    href: string,
    subHref?: ''|string
}

const NavBar = ({ items }: { items: NavBarItem[] }) => {
    const [selectedHref, setSelectedHref] = useState('')
    const router = useRouter()

    useEffect(() => {
        setSelectedHref(router.asPath)
    }, [router])

    return (
        <nav>
            <List>
                {items?.map(item =>
                    <li key={item.href}>
                        <ListItemWrap 
                            className={selectedHref.startsWith(item.href) ? 'selected' : ''} 
                        >
                            <LinkA href={`${item.href}${item.subHref ? item.subHref : ''}`}>
                                <OldButton text={item.label}></OldButton>
                            </LinkA>
                        </ListItemWrap>
                    </li>)}
            </List>
        </nav>
    )
}

const List = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 32px;
    padding: 24px;
`

const ListItemWrap = styled.div`
    cursor: pointer;
    border: 4px rgba(0, 0, 0, 0) solid;

    &.selected {
        border: 4px #001AFF solid;
        pointer-events: none;
    }
`

export default NavBar