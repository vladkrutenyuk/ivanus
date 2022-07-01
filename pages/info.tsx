import styled from "styled-components"

const InfoPage = () => {
    return (
        <>
            <img width='300px' src='/images/kvy-production.jpg' alt='kvy turbo the best production mega skill vlad krutenyuk' />
            <MadeBy>Made by <SiteLink href="https://vladkrutenyuk.com">vladkrutenyuk.com</SiteLink> </MadeBy> 
        </>
    )
}

export default InfoPage

const MadeBy = styled.span`
    margin-top: 60px;
    font-size: 22px;
    color: white;
    text-shadow: 0px 4px 8px #000000;
`

const SiteLink = styled.a`
    color: #59ff00;
    cursor: pointer;
    text-decoration: underline;

    &:hover {
        color: #23aa50;
    }
`