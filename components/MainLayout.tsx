import styled from 'styled-components'
import LinkA from './LinkA'
import NavBar, { NavBarItem } from './NavBar'

const MainLayout = ({ children, items }: 
    { children: JSX.Element, items: NavBarItem[] }) => {
    return (
        <>
            <FlexColumnCenter>
                <BackgroundContainer src='/images/cosmos.jpg' alt='ваня юницкий космос' />
                <SubHeader>ФАН-ВЕБСАЙТ</SubHeader>
                <LinkA href='/'>
                    <Header>
                        <SmileContainer src='/images/smile.png' width={44} height={44} alt='ваня улыбака смайл' />
                        <HeaderImage src='/images/vanya-rainbow.png' alt='ваня юницкий гей' />
                    </Header>
                </LinkA>
                <NavBar items={items}></NavBar>
                {children}
            </FlexColumnCenter>
        </>
    )
}

export default MainLayout

const FlexColumnCenter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const BackgroundContainer = styled.img`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    object-fit: cover;
`

const SubHeader = styled.div`
    margin-top: 12px;
    color: white;
    font-family: 'Courier New';
    font-style: italic;
    font-weight: 700;
    font-size: 35px;
`

const Header = styled.div`
    position: relative;
    margin-top: 24px;
    padding: 20px 32px;
    background-color: #414450;
    border: 6px ridge #535665;
`

const HeaderImage = styled.img`
    position: relative;
    width: 400px;
    height: 54px;
    object-fit: contain;
`

const SmileContainer = styled.img`
    position: absolute;
    top: -26px;
    left: calc(50% - 22px);
`