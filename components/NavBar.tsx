import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { PHONE_DEVICE_TRESHOLD_PX } from "../styles/global-styles"
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
        <Nav>
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
        </Nav>
    )
}

const Nav = styled.nav`
    z-index: 1;
`

const List = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 32px;
    padding: 24px;
    flex-wrap: wrap;

    @media (max-width: 1000px) {
        gap: 0px;
        padding: 12px;
    }
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